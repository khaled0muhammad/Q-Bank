const EXAM_MODEL_REFS = new Set([
  "malnutrition-mcq-exam.pdf", "diarrhea_vomiting_exam.pdf", "anemia_midterm_exam.pdf",
  "hemolytic-anemia-pediatrics-exam.pdf", "hemorrhagic_disorders_midterm_exam.pdf",
  "platelet-disorders-midterm-exam.pdf", "oncology-midterm-exam.pdf",
  "GIT_Bleeding_Midterm_Exam.pdf", "rickets.pdf", "constipation_midterm_exam.pdf",
  "growth_and_development_midterm_exam.pdf", "Infant_feeding.pdf"
]);
function isExamModelRef(ref) {
  return EXAM_MODEL_REFS.has(ref) || /exam|midterm/i.test(String(ref || ""));
}

const allTopics = [
  ...topicsData,
  ...(typeof extraTopics !== "undefined" ? extraTopics : [])
];

const ALL_QUESTIONS = [];
allTopics.forEach(topic => {
  topic.questions.forEach((x, i) => {
    let src;
    const r = String(x.ref || "");
    if (/git\s*shehab/i.test(r)) {
      src = "GIT shehab";
    } else {
      src = isExamModelRef(r) ? "Exam Model" : "Lecture";
    }

    ALL_QUESTIONS.push({
      id: `${topic.id}_${String(i + 1).padStart(3, "0")}`,
      num: `Q${i + 1}`,
      lecture: topic.title,
      source: src,
      q: x.q,
      choices: x.opts,
      ans: "ABCDEF"[x.correct],
      reason: x.reason,
      ref: x.ref,
      diff: x.diff
    });
  });
});
