const exams = {
  "law-cet": { name: "CET", field: "Law", path: "law.html", summary: "A Common Entrance Test route connected with law studies. CET names and rules vary by authority, so confirm the specific exam and current notice for your target institution." },
  slat: { name: "SLAT", field: "Law", path: "law.html", summary: "An entrance route for undergraduate law programmes. Review the current exam pattern, selection stages, and dates with the conducting institution." },
  lsat: { name: "LSAT", field: "Law", path: "law.html", summary: "An admission test used by participating law schools. Check which institutions currently accept the test and their individual admission requirements." },
  "cuet-ug": { name: "CUET UG", field: "Arts", path: "arts.html", summary: "A common entrance route used by participating universities for undergraduate admissions. Course requirements and subject combinations depend on each university." },
  "nid-dat": { name: "NID DAT", field: "Arts & Design", path: "arts.html", summary: "An entrance route for design education at NID. Check the current admissions handbook for stages, eligibility, and portfolio or studio-test requirements." },
  aieed: { name: "AIEED", field: "Arts & Design", path: "arts.html", summary: "An entrance route associated with design programmes. Confirm the current exam structure and participating programmes directly with the institution." },
  nift: { name: "NIFT", field: "Arts & Design", path: "arts.html", summary: "Entrance examinations for programmes at NIFT cover creative and fashion-related study. The applicable test depends on the programme and admission year." },
  jee: { name: "JEE", field: "Engineering", path: "engineering.html", summary: "A national engineering entrance route. The applicable JEE examination depends on the institution and programme you plan to apply for." },
  mhtcet: { name: "MHTCET", field: "Engineering", path: "engineering.html", summary: "An entrance examination used for admissions to participating Maharashtra programmes. Check the current subject group, eligibility, and counselling process." },
  "srm-jee": { name: "SRM-JEE", field: "Engineering", path: "engineering.html", summary: "An entrance route for SRM engineering programmes. Confirm the current format, eligibility, and admission cycle with SRM." },
  bitsat: { name: "BITSAT", field: "Engineering", path: "engineering.html", summary: "An entrance test for undergraduate programmes at BITS campuses. Check the current bulletin for eligibility and application requirements." },
  viteee: { name: "VITEEE", field: "Engineering", path: "engineering.html", summary: "An entrance examination for VIT undergraduate engineering programmes. Review current admission details and programme-specific criteria." },
  "defence-cet": { name: "CET", field: "Defence", path: "defence.html", summary: "This CET link is listed under the defence pathway. Confirm the exact examination and institution with the official notice before applying." },
  "defence-slat": { name: "SLAT", field: "Defence", path: "defence.html", summary: "This exam link is listed under the defence pathway. Review the exam authority’s current notice to confirm it matches your intended course." },
  "defence-lsat": { name: "LSAT", field: "Defence", path: "defence.html", summary: "This exam link is listed under the defence pathway. Verify the intended course and accepted entrance route with the official source." },
  "commerce-cet": { name: "CET", field: "Commerce", path: "commerce.html", summary: "A CET route can vary by university and programme. Confirm the exact exam, subject requirements, and admission process with your target institution." },
  "commerce-slat": { name: "SLAT", field: "Commerce", path: "commerce.html", summary: "This exam link is listed under the commerce pathway. Check the current exam authority information and confirm it is accepted for your target programme." },
  "commerce-lsat": { name: "LSAT", field: "Commerce", path: "commerce.html", summary: "This exam link is listed under the commerce pathway. Verify the exam and programme fit with the current admissions information." },
  "neet-ug": { name: "NEET UG", field: "Medical", path: "medical.html", summary: "The undergraduate medical entrance route in India. Check the current official bulletin for eligibility, syllabus, application dates, and counselling details." }
};

const examKey = new URLSearchParams(window.location.search).get("exam");
const exam = exams[examKey];

if (!exam) {
  window.location.replace("career.html");
} else {
  document.querySelector("#exam-title").textContent = exam.name;
  document.querySelector("#exam-field").textContent = `${exam.field} pathway`;
  document.querySelector("#exam-summary").textContent = exam.summary;
  document.querySelector("#careerLink").href = exam.path;
  document.querySelector("#fieldLink").href = exam.path;
  document.title = `${exam.name} | ${exam.field} | EduGuidance`;
}
