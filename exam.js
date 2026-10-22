/*
 * Exam detail content. Current-cycle items are linked to the authority's own
 * bulletin or admissions portal; where the route isn't identifiable or the
 * next cycle hasn't been announced, the page says so instead of estimating.
 */
const official = {
  mahacet: { label: "Maharashtra State CET Cell", url: "https://cetcell.mahacet.org/cet-3/" },
  lawCET: { label: "MAH-LL.B. 5-Year CET 2026 brochure", url: "https://cetcell.mahacet.org/wp-content/uploads/2023/12/Final_CET-IB-LLB-5-Yrs_2026.pdf" },
  slat: { label: "SLAT 2027 test structure", url: "https://www.slat-test.org/structure.php" },
  symbiosis: { label: "SLAT admissions portal", url: "https://www.slat-test.org/" },
  lsac: { label: "LSAC law-school admissions information", url: "https://www.lsac.org/" },
  cuet: { label: "CUET (UG) official portal", url: "https://cuet.nta.nic.in/" },
  nta: { label: "National Testing Agency", url: "https://nta.ac.in/" },
  nid: { label: "NID Admissions 2027–28", url: "https://admissions.nid.edu/NIDA2027/" },
  aieed: { label: "AIEED 2027 exam information", url: "https://www.aieed.com/about-us.html" },
  aieedApply: { label: "AIEED 2027 application & dates", url: "https://www.aieed.com/aieed2027/registration/" },
  nift: { label: "NIFTEE 2027 official portal", url: "https://exams.nta.nic.in/niftee/" },
  niftBulletin: { label: "NIFTEE 2027 information bulletin", url: "https://cdnbbsr.s3waas.gov.in/s388a839f2f6f1427879fc33ee4acf4f66/uploads/2026/10/202610161124929715.pdf" },
  jee: { label: "NTA engineering exam information", url: "https://nta.ac.in/Engineeringexam" },
  jeeMain: { label: "JEE (Main) official portal", url: "https://jeemain.nta.nic.in/" },
  mhtcet: { label: "MHT-CET 2026 information & notices", url: "https://cetcell.mahacet.org/cet-3/" },
  srm: { label: "SRMIST admissions", url: "https://www.srmist.edu.in/admission-india/" },
  srmFaq: { label: "SRMJEEE 2026 official FAQs", url: "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-2026-faqs.pdf" },
  bits: { label: "BITSAT 2026 brochure", url: "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf" },
  vit: { label: "VITEEE admissions portal", url: "https://viteee.vit.ac.in/" },
  neet: { label: "NEET (UG) official portal", url: "https://neet.nta.nic.in/" },
  neetSyllabus: { label: "NEET (UG) 2026 syllabus notice", url: "https://nta.ac.in/Download/Notice/Notice_20260108180635.pdf" }
};

const item = (label, url) => ({ label, url });
const lawCetDetails = {
  title: "MAH-LL.B. 5-Year CET", mark: "LL.B.", authority: "Maharashtra State CET Cell", mode: "Online CBT",
  purpose: "Admission to participating Maharashtra five-year integrated LL.B. programmes",
  duration: "120 minutes", size: "120 questions", score: "120 marks", schedule: "2026 exam cycle complete", fee: "See current brochure",
  summary: "The Maharashtra State CET Cell’s entrance route for five-year integrated law degrees. The 2026 brochure covers programmes such as B.A.-LL.B., B.B.A.-LL.B. and B.L.S.-LL.B.; participating options and admission rules are set by the current CAP notices.",
  subjectsIntro: "The 2026 paper has five sections. The official brochure provides the definitive topic list and marking rules.",
  subjects: ["Legal aptitude & legal reasoning", "General knowledge & current affairs", "Logical & analytical reasoning", "English", "Mathematical aptitude"],
  eligibility: ["For the five-year integrated LL.B. route after Class 12 or equivalent.", "Minimum qualifying marks, category relaxations and other conditions are set in the current State CET Cell brochure.", "CET qualification and programme eligibility are separate; check the CAP rules for your target course."],
  pattern: ["120 multiple-choice questions across five sections; one mark per question.", "120 minutes; English and Marathi.", "No negative marking, as stated in the 2026 brochure."],
  process: ["Register on the State CET Cell portal and sit the computer-based test.", "Use the result and follow the separate Centralised Admission Process (CAP) for participating colleges.", "Check the latest CAP schedule, document rules and seat options before locking preferences."],
  cycle: "The 2026 brochure listed the test for 8 May 2026; this cycle has passed. The next schedule and application fee must be checked in the next official notice.",
  links: [item(official.lawCET.label, official.lawCET.url), item("State CET Cell notices and admission portals", official.mahacet.url)],
  verified: "Details shown are from the 2026–27 State CET Cell brochure. The 2026 schedule is historical; confirm the next cycle before applying."
};

const slatDetails = {
  title: "SLAT", mark: "SLAT", authority: "Symbiosis International (Deemed University)", mode: "Computer-based test",
  purpose: "Selection for undergraduate law programmes at participating Symbiosis Law Schools",
  duration: "60 minutes", size: "60 questions", score: "60 marks", schedule: "19 & 26 December 2026", fee: "Check the official application portal",
  summary: "The Symbiosis Law Admission Test is the undergraduate law entrance test for participating Symbiosis Law Schools. It is relevant to law admissions, even when this link appears under another career area.",
  subjectsIntro: "The official 2027 structure gives five equally weighted sections.",
  subjects: ["Logical reasoning", "Legal reasoning", "Analytical reasoning", "Reading comprehension", "General knowledge"],
  eligibility: ["For undergraduate law programmes; each programme and institute publishes its own eligibility conditions.", "Review the current SLAT prospectus and the individual Symbiosis Law School requirements before registering.", "A test score alone does not complete the institute application or admission process."],
  pattern: ["60 objective questions: 12 in each of five sections; 60 marks total.", "60 minutes in computer-based test mode.", "The official structure page does not list a negative-marking rule; confirm the current prospectus."],
  process: ["Register for SLAT and complete the required programme applications through the official portal.", "Take the test on the scheduled session(s); check the admit card for reporting and timing instructions.", "Shortlisted candidates follow each law school’s published next stage and merit process."],
  cycle: "The official SLAT 2027 page lists test dates of 19 and 26 December 2026. Check the application portal for current registration deadlines and fees.",
  links: [item(official.slat.label, official.slat.url), item(official.symbiosis.label, official.symbiosis.url)],
  verified: "Pattern and 2027 test dates checked against the official SLAT site on 22 October 2026."
};

const lsatDetails = {
  title: "LSAT", mark: "LSAT", authority: "Depends on the test and law school", mode: "Confirm with the law school",
  purpose: "Law-school admissions; the route meant by this link needs confirmation",
  duration: "Not confirmed", size: "Not confirmed", score: "Not confirmed", schedule: "No current LSAT—India cycle verified", fee: "Not confirmed",
  summary: "“LSAT” can refer to different tests. The former LSAT—India route does not have a current application cycle identified here. Law schools set their own current accepted tests, so confirm the exact route with the institution before preparing or paying a fee.",
  subjectsIntro: "Do not rely on an old LSAT—India syllabus or pattern for a current application.",
  subjects: ["Test identity and current syllabus: confirm with the target law school", "Accepted admission tests can differ by programme and year"],
  eligibility: ["There is no single eligibility rule until the target test and programme are identified.", "Check the current admissions page of each law school you plan to apply to.", "If you meant LSAT—India, ask the school which test replaced or is currently accepted for that programme."],
  pattern: ["Current LSAT—India format, scoring and marking details are not presented as active requirements.", "For a different LSAT, use the test owner’s current guide and the target school’s admissions rules."],
  process: ["Choose the law school and degree first.", "Confirm the exact exam it currently accepts, directly from its admissions office or official website.", "Use that test authority’s live registration page, dates and preparation guide."],
  cycle: "No current LSAT—India dates or fee are listed because no live official cycle was verified. Ask the law school about current alternatives.",
  links: [item(official.lsac.label, official.lsac.url)],
  verified: "This page deliberately avoids reusing historical LSAT—India exam details as current facts."
};

const exams = {
  "law-cet": { ...lawCetDetails, field: "Law", path: "law.html" },
  slat: { ...slatDetails, field: "Law", path: "law.html" },
  lsat: { ...lsatDetails, field: "Law", path: "law.html" },
  "cuet-ug": {
    title: "CUET UG", mark: "CUET", field: "Arts", path: "arts.html", authority: "National Testing Agency (NTA)", mode: "Computer-based test",
    purpose: "Undergraduate admissions at participating universities", duration: "Varies by paper", size: "Varies by subject", score: "Varies by paper",
    schedule: "Next cycle dates not confirmed here", fee: "Varies by number of test papers and category",
    summary: "The Common University Entrance Test (UG) gives participating universities a shared entrance route. Each university and course sets its own subject combination, eligibility and admission rules.",
    subjectsIntro: "Choose test papers only after checking the course requirements at your target universities.", subjects: ["Language papers", "Domain-specific subjects", "General Test where required"],
    eligibility: ["Applicants must meet the Class 12 or equivalent and programme-specific rules of each university.", "A university may require particular CUET subjects or minimum subject marks.", "The NTA test application and university admission application may be separate steps."],
    pattern: ["Computer-based testing; sections and duration depend on the selected paper.", "Question count, scoring and negative marking are defined in the current NTA bulletin.", "Use the current bulletin and university prospectus rather than an older subject list."],
    process: ["Select papers based on official programme-to-subject mappings.", "Take the NTA test and track score/result notices.", "Apply to participating universities and complete their counselling or admission steps."],
    cycle: "Dates and fees for the next cycle are not confirmed on this page. Check NTA’s current bulletin and application portal.",
    links: [item(official.cuet.label, official.cuet.url), item("NTA examinations", official.nta.url)], verified: "Course requirements and the next cycle can change; confirm both with NTA and each university."
  },
  "nid-dat": {
    title: "NID DAT", mark: "NID", field: "Arts & Design", path: "arts.html", authority: "National Institute of Design", mode: "Stage-based; see the current handbook",
    purpose: "Admission to NID design programmes", duration: "Varies by stage", size: "See current handbook", score: "See current handbook",
    schedule: "2027–28 handbook is available", fee: "See current handbook",
    summary: "The Design Aptitude Test is NID’s admission route for design programmes. The applicable process, campus and rules vary by programme; the admissions handbook is the source of truth.",
    subjectsIntro: "Preparation is design-focused. Use the current handbook and sample papers for the exact stage requirements.", subjects: ["Observation and visual sensitivity", "Creative and divergent thinking", "Problem framing and design aptitude", "Programme-specific studio or practical components"],
    eligibility: ["Eligibility depends on the programme and admission year.", "Read the 2027–28 handbook for qualifying examination, age limits, category rules and document requirements.", "Candidates must satisfy the programme rules as well as the entrance-test requirements."],
    pattern: ["NID publishes programme-specific test stages and assessment details in the current handbook.", "The sequence may include DAT Prelims and a further assessment stage; use the current handbook for the applicable programme.", "No marks, duration or weighting are assumed here without the programme handbook."],
    process: ["Choose the NID programme and confirm eligibility in its handbook.", "Register through the official admissions portal and complete the prescribed test stages.", "Follow the official result, seat-allocation and document-verification instructions."],
    cycle: "The 2027–28 admissions page is live. Use its current handbook for dates, test fees, stage rules and amendments.",
    links: [item(official.nid.label, official.nid.url)], verified: "Official NID admissions page and current handbook listing checked on 22 October 2026."
  },
  aieed: {
    title: "AIEED", mark: "AIEED", field: "Arts & Design", path: "arts.html", authority: "ARCH College of Design & Business", mode: "Online application with portfolio and interaction stages",
    purpose: "Screening for design studies at ARCH", duration: "Stage-dependent", size: "No single paper count listed", score: "Selection process; see official site",
    schedule: "2027 Series I closes 10 December 2026", fee: "Check official application page",
    summary: "The All India Entrance Examination for Design (AIEED) is ARCH’s screening and admissions process for its design programmes. Its published process includes portfolio and statement-of-purpose submissions, followed by further evaluation.",
    subjectsIntro: "The official process describes a broader design-readiness assessment rather than only a fixed subject paper.", subjects: ["Creative thinking and design aptitude", "Visual, verbal and conceptual communication", "Portfolio of Abilities (PoA)", "Statement of Purpose (SoP)"],
    eligibility: ["ARCH identifies eligible school-year groups on its current admissions page; confirm your qualification and programme before applying.", "Programme-specific conditions and documents are set by ARCH.", "Check whether your portfolio and SoP meet the current instructions."],
    pattern: ["The official page describes multiple screening stages, including application, portfolio/SoP review and counselling interaction.", "A single fixed question count, duration or marking scheme is not specified in the source cited here.", "Follow current instructions for any additional assessment or interview."],
    process: ["Submit the online AIEED application.", "Upload the required Portfolio of Abilities and Statement of Purpose.", "Complete the assessment and counselling interaction stages described by ARCH."],
    cycle: "The official registration page lists applications opening 1 October 2026 and Series I closing 10 December 2026. Confirm fees and later series directly with ARCH.",
    links: [item(official.aieed.label, official.aieed.url), item(official.aieedApply.label, official.aieedApply.url)], verified: "Current 2027 dates and process checked against ARCH’s official site on 22 October 2026."
  },
  nift: {
    title: "NIFT Entrance Test", mark: "NIFT", field: "Arts & Design", path: "arts.html", authority: "NTA for NIFTEE; NIFT for admissions", mode: "GAT: CBT · CAT: paper-based",
    purpose: "Admission to National Institute of Fashion Technology programmes", duration: "B.Des: 120 min GAT + 180 min CAT", size: "B.Des: 100 GAT questions + 3 CAT tasks", score: "Programme-weighted merit",
    schedule: "10 January 2027 (Stage 1)", fee: "₹2,000 open / ₹500 SC, ST, PwD/PwBD (one programme)",
    summary: "NIFT admissions use the National Institute of Fashion Technology Entrance Examination (NIFTEE). The 2027 bulletin lists Stage 1 on 10 January 2027, with programme-specific tests and later selection stages.",
    subjectsIntro: "Test requirements differ for design, technology and other programme routes.", subjects: ["General Ability Test (where prescribed)", "Creative Ability Test (where prescribed)", "Programme-specific assessment or situation test"],
    eligibility: ["For 2027 B.Des. and B.F.Tech., a recognized Class 12/equivalent qualification is required; B.F.Tech. requires Mathematics.", "The 2027 bulletin gives a maximum age below 24 years on 1 August 2027 for B.Des./B.F.Tech., with specified relaxations.", "Age, subjects and qualification differ by programme; check the bulletin and NIFT admissions guidelines."],
    pattern: ["For 2027 B.Des.: GAT Section A (CBT, 120 minutes, 100 questions) plus CAT (paper-based, 180 minutes, 3 tasks).", "For 2027 B.F.Tech.: GAT Sections A and B (CBT, 120 + 60 minutes, 100 + 50 questions).", "B.Des merit weights GAT 30%, CAT 50% and Situation Test 20%; marking can vary by component, so use the bulletin."],
    process: ["Choose a NIFT programme and check its specific eligibility and paper combination.", "Register through the official NTA/NIFTEE portal and take the required tests.", "Follow the official result, subsequent assessment and counselling notices."],
    cycle: "NIFTEE 2027 registration opened 16 October 2026. The regular-fee deadline is 16 November; late applications close 21 November with an additional ₹5,000 late fee. Stage 1 is scheduled for 10 January 2027. For one programme, the listed fee is ₹2,000 for Open/Open-EWS/OBC-NCL and ₹500 for SC/ST/PwD/PwBD applicants; other combinations differ.",
    links: [item(official.nift.label, official.nift.url), item(official.niftBulletin.label, official.niftBulletin.url), item("NIFT admissions and programme guidelines", "https://nift.ac.in/admissions")], verified: "NIFTEE 2027 pattern, schedule and fees checked against the official NTA information bulletin dated October 2026."
  },
  jee: {
    title: "JEE Main", mark: "JEE", field: "Engineering", path: "engineering.html", authority: "National Testing Agency (NTA)", mode: "Computer-based test",
    purpose: "Engineering admissions including NITs, IIITs and other participating institutes", duration: "See current paper bulletin", size: "See current bulletin", score: "NTA score/rank",
    schedule: "Next cycle schedule not confirmed here", fee: "Varies by paper, category and centre",
    summary: "JEE Main is the national entrance examination used by NITs, IIITs and other participating institutes. Some state and private institutions also use its scores. JEE Advanced is a separate exam with separate eligibility.",
    subjectsIntro: "For B.E./B.Tech, the core subjects are Physics, Chemistry and Mathematics. Other papers have different requirements.", subjects: ["Physics", "Chemistry", "Mathematics", "Additional paper content for B.Arch. or B.Planning where selected"],
    eligibility: ["NTA eligibility to sit the exam and an institute’s admission criteria are not the same.", "For NIT/IIIT/CFTI admission, subject combinations and board-mark conditions apply; reserved-category rules may differ.", "Check the current JEE Main bulletin and JoSAA/CSAB rules for your target programme."],
    pattern: ["Paper and section structure can change by year and programme.", "Use the current information bulletin for question types, duration, scoring and negative marking.", "JEE Advanced has a separate exam pattern and eligibility process."],
    process: ["Register for the appropriate JEE Main paper/session.", "Use the NTA result and rank for the institutions that accept it.", "Complete JoSAA/CSAB or institute-specific counselling and satisfy admission conditions."],
    cycle: "Check the JEE Main portal for the next cycle’s dates, application fee and bulletin; no dates are estimated here.",
    links: [item(official.jeeMain.label, official.jeeMain.url), item(official.jee.label, official.jee.url)], verified: "NTA and JEE Main official pages checked; verify each year’s bulletin for exact pattern and eligibility."
  },
  mhtcet: {
    title: "MHT-CET", mark: "MHT", field: "Engineering", path: "engineering.html", authority: "State Common Entrance Test Cell, Maharashtra", mode: "Computer-based test",
    purpose: "Admission to participating Maharashtra professional courses, including B.E./B.Tech", duration: "180 minutes", size: "150 questions (PCM)", score: "200 marks (PCM)",
    schedule: "2026 cycle complete", fee: "Category-dependent; see brochure",
    summary: "MHT-CET is Maharashtra’s state entrance test for a range of professional courses. Engineering applicants take the PCM group; other course routes may use different groups and admission rules.",
    subjectsIntro: "The PCM group uses Physics, Chemistry and Mathematics. This section is for the engineering route; see the current brochure for other course groups.",
    subjects: ["Physics — 50 questions", "Chemistry — 50 questions", "Mathematics — 50 questions", "Class 11 and 12 topics as defined in the current syllabus"],
    eligibility: ["Candidates generally need to have passed or be appearing in Class 12/equivalent with prescribed subjects.", "B.E./B.Tech applicants need Physics and Mathematics plus a prescribed third subject.", "Minimum marks and Maharashtra candidature rules depend on category and admission route; check the current brochure."],
    pattern: ["PCM: 150 questions, 200 marks and 180 minutes in the 2026 structure.", "Physics and Chemistry carry one mark per question; Mathematics carries two.", "No negative marking was specified in the 2026 brochure. Confirm future changes in the next brochure."],
    process: ["Choose the correct group and register with the Maharashtra State CET Cell.", "Take the computer-based test and check the result/score notices.", "Complete the separate Centralised Admission Process (CAP) for the relevant course."],
    cycle: "The supplied exam-data notes and the 2026 brochure cover the 2026 cycle, which has passed. Check the State CET Cell for the next schedule and fee.",
    links: [item("MHT-CET 2026 brochure and exam notices", official.mhtcet.url), item("State CET Cell admissions", official.mahacet.url)],
    verified: "Used the supplied MHT-CET notes and the official 2026–27 State CET Cell brochure listing. Verify the next cycle before relying on pattern or eligibility."
  },
  "srm-jee": {
    title: "SRMJEEE", mark: "SRM", field: "Engineering", path: "engineering.html", authority: "SRM Institute of Science and Technology (SRMIST)", mode: "Online; delivery method is cycle-specific",
    purpose: "Admission to SRMIST engineering programmes", duration: "Check current phase notice", size: "Check current phase notice", score: "Rank and counselling",
    schedule: "2026 phases complete", fee: "₹1,400 per phase in the 2026 FAQ; confirm next cycle",
    summary: "SRMJEEE is SRMIST’s entrance route for engineering admissions. Campus and programme allocation follow the institute’s current rank, preferences, eligibility and counselling rules.",
    subjectsIntro: "The supplied exam-data notes list the following areas; use the current SRMIST brochure for the definitive course-specific syllabus.", subjects: ["Physics", "Chemistry", "Mathematics or Biology, as applicable", "English and aptitude"],
    eligibility: ["Class 12/equivalent qualification and subject conditions apply.", "Mathematics is required for the relevant B.Tech route; other programme routes may differ.", "Minimum aggregate and board rules are defined by SRMIST for each cycle."],
    pattern: ["The supplied notes describe a 130-question, 130-mark format; verify the current official phase notice before using it.", "The supplied 2026 FAQ lists a 2 hour 30 minute test and remote-proctored delivery; confirm future arrangements with SRMIST.", "Do not assume the 2026 format or fee will carry into the next cycle."],
    process: ["Apply through SRMIST and select the applicable examination phase.", "Take the exam using the instructions and mode confirmed for your cycle.", "Use your rank to complete SRMIST counselling and campus/course preference steps."],
    cycle: "The supplied notes list 2026 phase fees and dates, now historical. The official 2026 FAQ confirms the prior-cycle context; consult SRMIST for the next schedule and fee.",
    links: [item(official.srm.label, official.srm.url), item(official.srmFaq.label, official.srmFaq.url)], verified: "The provided SRMJEEE notes were cross-checked against SRMIST’s 2026 FAQ; cycle-specific items are marked historical or subject to confirmation."
  },
  bitsat: {
    title: "BITSAT", mark: "BITS", field: "Engineering", path: "engineering.html", authority: "BITS Pilani", mode: "Computer-based online test",
    purpose: "Admission to BITS Pilani integrated first-degree programmes", duration: "3 hours", size: "130 questions (2026)", score: "390 maximum base marks (2026)",
    schedule: "2026 cycle complete", fee: "Varies by session and applicant category",
    summary: "BITSAT is the BITS Pilani admission test for integrated first-degree programmes at the Pilani, Goa and Hyderabad campuses. The 2026 brochure allows two sessions; admission rules are programme-specific.",
    subjectsIntro: "The 2026 test uses four parts. The final part is Mathematics or Biology depending on the programme route.", subjects: ["Physics", "Chemistry", "English proficiency", "Logical reasoning", "Mathematics or Biology"],
    eligibility: ["For most B.E. and M.Sc. routes in 2026: at least 75% aggregate in PCM and at least 60% in each of Physics, Chemistry and Mathematics.", "B.Pharm. and specified programme routes use PCB/PCM criteria as described in the brochure.", "The qualifying year and subject rules are cycle-specific; consult the current brochure."],
    pattern: ["The 2026 brochure specifies 130 multiple-choice questions in 3 hours.", "Correct answers carry +3 and incorrect answers −1; unattempted questions score zero.", "The 2026 brochure allows an optional extra-question set if all base questions are attempted; check the current brochure for details."],
    process: ["Apply through BITS admissions and select available test session(s).", "Take the computer-based test; the higher score is used if both 2026 sessions are taken.", "Complete the separate preference form and admission process under the current modality."],
    cycle: "BITSAT 2026 admissions are complete. Check the official admissions page for the next brochure, application fee and dates.",
    links: [item(official.bits.label, official.bits.url), item("BITS admissions and eligibility", "https://admissions.bits-pilani.ac.in/FD/FD_brochure.html")], verified: "Pattern and programme eligibility summarized from the official BITSAT 2026 brochure; 2026 dates are historical."
  },
  viteee: {
    title: "VITEEE", mark: "VIT", field: "Engineering", path: "engineering.html", authority: "Vellore Institute of Technology (VIT)", mode: "Computer-based test at designated centres",
    purpose: "Admission to VIT B.Tech programmes", duration: "See current VITEEE bulletin", size: "See current bulletin", score: "Rank-based counselling",
    schedule: "Next cycle schedule not confirmed here", fee: "See current VITEEE portal",
    summary: "VITEEE is VIT’s entrance examination for B.Tech programmes. Campus and programme choices are handled through VIT’s rank-based counselling and current admission rules.",
    subjectsIntro: "The supplied exam notes describe a PCM/PCB choice with language and aptitude sections. Confirm the exact current paper structure in VIT’s bulletin.", subjects: ["Physics", "Chemistry", "Mathematics or Biology, as applicable", "Aptitude", "English"],
    eligibility: ["Class 12/equivalent and subject-combination requirements apply.", "Mathematics or Biology requirements depend on the programme route.", "Minimum marks, age and qualifying year must be checked in the current VITEEE bulletin."],
    pattern: ["The supplied notes list 125 questions and a 2 hour 30 minute duration for the 2026 cycle.", "Scoring and negative-marking rules must be checked in the current VITEEE bulletin; this page does not carry forward an unverified value.", "Paper structure may vary by subject route and year."],
    process: ["Apply through VIT’s official VITEEE portal.", "Take the test at the centre and in the format specified for your cycle.", "Use your rank to participate in VIT counselling and choose eligible campus/programme options."],
    cycle: "The supplied data describes the 2026 cycle, now passed. Check VIT for the next cycle’s application dates and fee.",
    links: [item(official.vit.label, official.vit.url), item("VIT official website", "https://vit.ac.in/")], verified: "The supplied VITEEE notes were used as background; current pattern, eligibility and fees should be confirmed in VIT’s next official bulletin."
  },
  "defence-cet": { title: "CET", mark: "CET", field: "Defence", path: "defence.html", ...unknownCet("Defence") },
  "commerce-cet": { title: "CET", mark: "CET", field: "Commerce", path: "commerce.html", ...unknownCet("Commerce") },
  "defence-slat": { ...slatDetails, field: "Defence", path: "defence.html", contextNote: "This is a law-admission exam linked from the Defence page. It is not a defence-services entrance test; use the Law page to explore this route." },
  "commerce-slat": { ...slatDetails, field: "Commerce", path: "commerce.html", contextNote: "This is a law-admission exam linked from the Commerce page. It is not a commerce entrance test; use the Law page to explore this route." },
  "defence-lsat": { ...lsatDetails, field: "Defence", path: "defence.html", contextNote: "This is a law-admission link shown under Defence. LSAT—India has no current cycle verified here; confirm the exam accepted by the law school." },
  "commerce-lsat": { ...lsatDetails, field: "Commerce", path: "commerce.html", contextNote: "This is a law-admission link shown under Commerce. LSAT—India has no current cycle verified here; confirm the exam accepted by the law school." },
  "neet-ug": {
    title: "NEET UG", mark: "NEET", field: "Medical", path: "medical.html", authority: "National Testing Agency (NTA)", mode: "Pen-and-paper OMR (check current bulletin)",
    purpose: "Admission to undergraduate medical programmes covered by NEET", duration: "Check current bulletin", size: "Check current bulletin", score: "Check current bulletin",
    schedule: "2026 examination and re-examination complete", fee: "Varies by category and exam centre",
    summary: "NEET (UG) is the national entrance route for undergraduate medical admissions covered by the exam. The NTA portal publishes the current bulletin, syllabus, notices and result information.",
    subjectsIntro: "The 2026 syllabus was finalized by the National Medical Commission. Always use the current notified syllabus.", subjects: ["Physics", "Chemistry", "Biology: Botany and Zoology", "Syllabus follows the current NMC notification"],
    eligibility: ["Candidates must meet the current NTA/NMC qualifying-examination, subject, age and category rules.", "Admission conditions can differ by course, institution, state quota and counselling authority.", "Read the current bulletin and counselling notices before applying."],
    pattern: ["Question count, duration, marking and test-day mode must be taken from the current information bulletin.", "NTA’s 2026 cycle included a re-examination; use current official notices for the applicable result and process.", "Do not use older pattern summaries in place of the next bulletin."],
    process: ["Register through the NTA NEET portal and follow identity and examination instructions.", "Check official answer-key, result and score notices.", "Complete the relevant national or state counselling process for your target course."],
    cycle: "NEET UG 2026 and its re-examination are complete. Next-cycle dates and fees are not estimated here; check NTA and the relevant counselling authority.",
    links: [item(official.neet.label, official.neet.url), item(official.neetSyllabus.label, official.neetSyllabus.url)], verified: "The 2026 syllabus notice and NTA portal were checked on 22 October 2026. Confirm the next bulletin for exam pattern and eligibility."
  }
};

function unknownCet(field) {
  return {
    authority: "Not identified by the existing CET link", mode: "Cannot be confirmed until the exam is identified",
    purpose: `The existing ${field} page links to “CET” without naming an authority or course.`,
    duration: "Unconfirmed", size: "Unconfirmed", score: "Unconfirmed", schedule: "Unconfirmed", fee: "Unconfirmed",
    summary: `The ${field} career page contains a generic CET link. Many institutions and states use “CET” for different tests, and the destination does not identify which one this means. We have kept the existing link and avoided assigning an exam authority or invented pattern.`,
    subjectsIntro: "The syllabus cannot be matched reliably until the specific CET and target course are known.",
    subjects: ["Confirm the full exam name", "Confirm the conducting authority", "Match the test to your chosen course and institution"],
    eligibility: ["Not available until the exam authority and course are identified.", "Ask the institution or career adviser that supplied this link for the full CET name.", "Check the authority’s current notification before applying."],
    pattern: ["Question count, duration, scoring and test mode are not confirmed.", "No syllabus or marking details are attributed to a specific CET here."],
    process: ["Identify the full CET name and the course it is intended for.", "Find the official exam authority and current information bulletin.", "Then confirm eligibility, dates, fees and admissions process from that authority."],
    cycle: "Dates and fees cannot be shown without knowing which CET this link refers to.",
    links: [item("Maharashtra State CET Cell exam list (reference only)", official.mahacet.url)],
    verified: "This page preserves the existing CET link, but does not claim that the Maharashtra CET Cell runs the Defence or Commerce CET."
  };
}

const query = new URLSearchParams(window.location.search);
const examKey = query.get("exam");
const exam = exams[examKey];

function addTextList(selector, values, tag = "li") {
  const container = document.querySelector(selector);
  values.forEach((value) => {
    const element = document.createElement(tag);
    element.textContent = value;
    container.append(element);
  });
}

if (!exam) {
  window.location.replace("career.html");
} else {
  const put = (selector, value) => { document.querySelector(selector).textContent = value; };
  put("#exam-title", exam.title);
  put("#exam-stamp", exam.mark);
  put("#exam-field", `${exam.field} pathway`);
  put("#exam-summary", exam.summary);
  put("#subjects-intro", exam.subjectsIntro);
  put("#exam-verified-note", exam.verified);
  const careerUrl = `${exam.path}#exams`;
  document.querySelector("#careerLink").href = careerUrl;
  document.querySelector("#fieldLink").href = careerUrl;
  document.querySelector("#fieldLink").firstChild.textContent = `Explore ${exam.field} careers `;
  document.title = `${exam.title} | ${exam.field} | EduGuidance`;

  if (exam.contextNote) {
    const note = document.querySelector("#exam-context-note");
    note.textContent = exam.contextNote;
    note.hidden = false;
  }

  const facts = [
    ["Exam authority", exam.authority], ["Admission route", exam.purpose], ["Test mode", exam.mode],
    ["Duration", exam.duration], ["Questions", exam.size], ["Score", exam.score], ["Current dates", exam.schedule], ["Application fee", exam.fee]
  ];
  const factsList = document.querySelector("#exam-facts");
  facts.forEach(([label, value]) => {
    const wrapper = document.createElement("div");
    const term = document.createElement("dt");
    const detail = document.createElement("dd");
    term.textContent = label;
    detail.textContent = value;
    wrapper.append(term, detail);
    factsList.append(wrapper);
  });

  addTextList("#exam-subjects", exam.subjects);
  addTextList("#exam-eligibility", exam.eligibility);
  addTextList("#exam-pattern", exam.pattern);
  addTextList("#exam-process", exam.process);
  const cycle = document.createElement("p");
  cycle.textContent = exam.cycle;
  document.querySelector("#exam-cycle").append(cycle);

  const linkList = document.querySelector("#exam-links");
  exam.links.forEach(({ label, url }) => {
    const entry = document.createElement("li");
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;
    link.insertAdjacentHTML("beforeend", ' <span aria-hidden="true">↗</span>');
    entry.append(link);
    linkList.append(entry);
  });

  const paths = [
    ["Law", "law.html"], ["Arts", "arts.html"], ["Engineering", "engineering.html"],
    ["Defence", "defence.html"], ["Commerce", "commerce.html"], ["Medical", "medical.html"]
  ];
  const pathNav = document.querySelector("#career-path-nav");
  const label = document.createElement("span");
  label.textContent = "Explore every path";
  pathNav.append(label);
  paths.forEach(([name, href]) => {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = name;
    if (href === exam.path) link.setAttribute("aria-current", "page");
    pathNav.append(link);
  });
}
