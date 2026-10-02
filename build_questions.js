// build_questions.js
// Must load AFTER questions_data.js and AFTER topics_data_extra_2.js.

const EXAM_MODEL_REFS = new Set([ /* ... same set ... */ ]);
function isExamModelRef(ref) {
  return EXAM_MODEL_REFS.has(ref) || /exam|midterm/i.test(String(ref || ""));
}

function sourceFromRef(ref) {
  const r = String(ref || "").trim();
  if (/^MID\s+/i.test(r)) return r;              // "MID Growth", "MID PEM", ...
  if (/^Formative\s*40$/i.test(r)) return "Formative 40";
  if (/^39\s*Exams$/i.test(r)) return "39 Exams";
  if (/git\s*shehab/i.test(r)) return "GIT shehab";
  return isExamModelRef(r) ? "Exam Model" : "Lecture";
}

const ALL_QUESTIONS = [];
topicsData.forEach(topic => {
  topic.questions.forEach((x, i) => {
    ALL_QUESTIONS.push({
      id: `${topic.id}_${String(i + 1).padStart(3, "0")}`,
      num: `Q${i + 1}`,
      lecture: topic.title,
      source: sourceFromRef(x.ref),
      q: x.q,
      choices: x.opts,
      ans: "ABCDEF"[x.correct],
      reason: x.reason,
      ref: x.ref,
      diff: x.diff
    });
  });
});
