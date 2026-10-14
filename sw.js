/* Service worker for the Pediatrics Question Bank: lets the app open and work without internet.
 *
 *  - The site's own files (index.html, questions_data.js, ...) are fetched from the network first so updates arrive
 *    as soon as you are online, and fall back to the saved copy when you are not.
 *  - The Firebase library, Google Fonts and the PDF library are saved the first time they are used (immutable files).
 *  - Everything else (Firestore data, sign-in, the AI Worker, Google Drive) is never touched: it always goes to the network.
 *
 * Keep this file in the same folder as index.html. It does not need editing when you deploy new questions or a new index.html.
 */
const VERSION = 'v1';
const SHELL = 'qbank-shell-' + VERSION;
const EXT = 'qbank-ext-' + VERSION;
const NETWORK_TIMEOUT_MS = 4000;
const READY_KEY = '__offline_ready__';

const BASE = new URL('./', self.location).href;
const SHELL_URLS = ['./', './index.html', './questions_data.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png'].map(u => new URL(u, BASE).href);
// third-party files that are safe to keep (versioned / immutable)
const EXT_ALLOWED = [
  /^https:\/\/www\.gstatic\.com\/firebasejs\//,
  /^https:\/\/fonts\.googleapis\.com\//,
  /^https:\/\/fonts\.gstatic\.com\//,
  /^https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/pdfmake\//
];
const isExt = url => EXT_ALLOWED.some(re => re.test(url));
const isShellScope = url => url.startsWith(BASE) && !url.endsWith('/sw.js');
const clean = url => String(url).split('#')[0];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL);
    // one missing file (e.g. an icon) must not break the install
    await Promise.allSettled(SHELL_URLS.map(async u => { const r = await fetch(new Request(u, { cache: 'no-cache' })); if (r && r.ok) await cache.put(u, r); }));
    if (self.skipWaiting) self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    for (const name of await caches.keys()) {
      if (!name.startsWith('qbank-') || name === SHELL || name === EXT) continue;
      if (name.startsWith('qbank-ext-')) {                       // third-party files are versioned: carry them over instead of losing offline readiness
        const old = await caches.open(name), fresh = await caches.open(EXT);
        for (const k of await old.keys()) { const u = clean(k.url || k); if (!(await fresh.match(u))) { const r = await old.match(k); if (r) await fresh.put(u, r); } }
      }
      await caches.delete(name);
    }
    await checkReady();
    if (self.clients && self.clients.claim) await self.clients.claim();
  })());
});

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => { const t = setTimeout(() => reject(new Error('timeout')), ms); promise.then(v => { clearTimeout(t); resolve(v); }, e => { clearTimeout(t); reject(e); }); });
}

async function networkFirst(request) {
  const cache = await caches.open(SHELL), key = clean(request.url);
  try {
    const res = await withTimeout(fetch(new Request(key, { cache: 'no-cache', credentials: 'same-origin' })), NETWORK_TIMEOUT_MS);
    if (res && res.ok) { await cache.put(key, res.clone()); return res; }
    return (await cache.match(key)) || res;               // server error (e.g. 503): prefer the saved copy if there is one
  } catch (e) {
    const hit = await cache.match(key) || (request.mode === 'navigate' ? (await cache.match(new URL('./index.html', BASE).href)) || (await cache.match(BASE)) : undefined);
    if (hit) return hit;
    throw e;
  }
}

async function cacheFirst(request) {
  const cache = await caches.open(EXT), key = clean(request.url);
  const hit = await cache.match(key); if (hit) return hit;
  let res;
  try { res = await fetch(key, { mode: 'cors' }); } catch (e) { res = null; }          // prefer a readable (non-opaque) copy
  if (!res || !(res.ok || res.type === 'opaque')) res = await fetch(request);
  if (res && (res.ok || res.type === 'opaque')) await cache.put(key, res.clone());
  return res;
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = clean(req.url);
  if (isShellScope(url)) { event.respondWith(networkFirst(req)); return; }
  if (isExt(url)) { event.respondWith(cacheFirst(req)); return; }
  // anything else (Firestore, Firebase Auth, the AI Worker, Google Drive...) is left alone
});

// The page tells us which files it has loaded so that everything needed to start offline is saved.
async function warm(urls) {
  const shell = await caches.open(SHELL), ext = await caches.open(EXT);
  let ok = 0, failed = 0;
  for (const raw of Array.from(new Set((urls || []).map(clean)))) {
    try {
      if (isShellScope(raw)) { const r = await fetch(new Request(raw, { cache: 'no-cache', credentials: 'same-origin' })); if (r && r.ok) { await shell.put(raw, r); ok++; } else failed++; }
      else if (isExt(raw)) { if (await ext.match(raw)) { ok++; continue; } const r = await fetch(raw, { mode: 'cors' }); if (r && r.ok) { await ext.put(raw, r); ok++; } else failed++; }
    } catch (e) { failed++; }
  }
  return { ok, failed, ready: await checkReady() };
}
async function checkReady() {
  const shell = await caches.open(SHELL), ext = await caches.open(EXT);
  const shellOk = (await shell.match(new URL('./index.html', BASE).href) || await shell.match(BASE)) && await shell.match(new URL('./questions_data.js', BASE).href);
  const keys = (await ext.keys()).map(r => clean(r.url || r));
  const has = re => keys.some(k => re.test(k));
  const firebaseOk = has(/\/firebasejs\/[^/]+\/firebase-app\.js/) && has(/\/firebasejs\/[^/]+\/firebase-auth\.js/) && has(/\/firebasejs\/[^/]+\/firebase-firestore\.js/);
  const ready = !!(shellOk && firebaseOk);
  if (ready) await shell.put(READY_KEY, new Response(JSON.stringify({ at: Date.now() })));
  else await shell.delete(READY_KEY);
  return ready;
}
async function status() {
  const shell = await caches.open(SHELL), hit = await shell.match(READY_KEY);
  let at = 0; try { at = hit ? (await hit.json()).at : 0; } catch (e) {}
  const ext = await caches.open(EXT);
  const pdf = (await ext.keys()).some(r => /pdfmake\.min\.js/.test(r.url || r));
  return { ready: !!hit, at, pdf };
}

self.addEventListener('message', event => {
  const msg = event.data || {}, reply = data => { if (event.source && event.source.postMessage) event.source.postMessage(data); };
  if (msg.type === 'warm') event.waitUntil(warm(msg.urls).then(r => reply({ type: 'warm-done', ...r, ...{} })).then(() => status()).then(s => reply({ type: 'status', ...s })).catch(() => reply({ type: 'warm-done', ok: 0, failed: 1, ready: false })));
  else if (msg.type === 'status') event.waitUntil(status().then(s => reply({ type: 'status', ...s })));
});
