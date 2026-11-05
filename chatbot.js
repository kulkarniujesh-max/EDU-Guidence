(() => {
  const transcript = document.querySelector("#guide-transcript");
  const controls = document.querySelector("#guide-controls");
  const resetButton = document.querySelector("#guide-reset");
  const progressBar = document.querySelector("#guide-progress-bar");
  const progressLabel = document.querySelector("#guide-progress-label");
  if (!transcript || !controls || !resetButton || !progressBar || !progressLabel) return;

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  const interests = [
    { id: "tech", label: "Technology & problem-solving", path: "engineering", reason: "You enjoy understanding how things work and solving practical problems." },
    { id: "health", label: "Health & helping people", path: "medical", reason: "You’re drawn to science, health, and supporting people directly." },
    { id: "creative", label: "Art, design & communication", path: "arts", reason: "You’re interested in visual ideas, creativity, and communication." },
    { id: "business", label: "Business, money & markets", path: "commerce", reason: "You’re curious about business, finance, and how decisions shape markets." },
    { id: "justice", label: "Law, debate & fairness", path: "law", reason: "You value reasoning, communication, and questions of fairness." },
    { id: "service", label: "Leadership & public service", path: "defence", reason: "You’re motivated by service, discipline, and leading with others." }
  ];

  const educationStages = [
    { id: "school", label: "Class 9 or 10" },
    { id: "senior", label: "Class 11 or 12" },
    { id: "after12", label: "Completed Class 12" },
    { id: "graduate", label: "College graduate / working" },
    { id: "unsure", label: "Not sure yet" }
  ];

  const subjectGroups = [
    { id: "pcm", label: "Physics, Chemistry & Maths" },
    { id: "pcb", label: "Physics, Chemistry & Biology" },
    { id: "commerce", label: "Commerce / Accounts / Economics" },
    { id: "humanities", label: "Humanities / Arts" },
    { id: "other", label: "Other subjects" },
    { id: "unknown", label: "Still deciding" }
  ];

  const careers = {
    engineering: { title: "Engineering & technology", url: "engineering.html", keywords: ["tech", "creative"], subjects: ["pcm"], tag: "Problem-solving · Building" },
    medical: { title: "Medical & health sciences", url: "medical.html", keywords: ["health", "service"], subjects: ["pcb"], tag: "Science · Patient care" },
    arts: { title: "Arts & design", url: "arts.html", keywords: ["creative"], subjects: ["humanities"], tag: "Design · Communication" },
    commerce: { title: "Commerce & business", url: "commerce.html", keywords: ["business", "tech"], subjects: ["commerce", "maths"], tag: "Business · Decisions" },
    law: { title: "Law & justice", url: "law.html", keywords: ["justice", "business"], subjects: ["humanities"], tag: "Reasoning · Advocacy" },
    defence: { title: "Defence & public service", url: "defence.html", keywords: ["service", "health"], subjects: ["pcm", "humanities"], tag: "Service · Leadership" }
  };

  const examRoutes = {
    cuet: { title: "CUET (UG)", detail: "exam.html?exam=cuet-ug", official: "https://cuet.nta.nic.in/", officialLabel: "Official CUET portal", paths: ["arts", "commerce", "law"], stages: ["senior", "after12", "unsure"], subjects: [], reason: "A national undergraduate admission route at participating universities; subject and programme requirements vary." },
    jee: { title: "JEE (Main)", detail: "exam.html?exam=jee", official: "https://jeemain.nta.nic.in/", officialLabel: "Official JEE (Main) portal", paths: ["engineering"], stages: ["senior", "after12", "unsure"], subjects: ["pcm"], reason: "A national route to explore for engineering programmes; check the current bulletin for subject and eligibility rules." },
    neet: { title: "NEET (UG)", detail: "exam.html?exam=neet-ug", official: "https://neet.nta.nic.in/", officialLabel: "Official NEET portal", paths: ["medical"], stages: ["senior", "after12", "unsure"], subjects: ["pcb"], reason: "The national entrance route for many undergraduate medical programmes; confirm eligibility in the current bulletin." },
    nid: { title: "NID DAT", detail: "exam.html?exam=nid-dat", official: "https://admissions.nid.edu/", officialLabel: "Official NID admissions", paths: ["arts"], stages: ["senior", "after12", "unsure"], subjects: [], reason: "A design admission route to explore if visual problem-solving and making appeal to you." },
    nift: { title: "NIFTEE", detail: "exam.html?exam=nift", official: "https://exams.nta.nic.in/niftee/", officialLabel: "Official NIFTEE portal", paths: ["arts", "commerce"], stages: ["senior", "after12", "unsure"], subjects: [], reason: "Explore fashion, design, and related programmes; requirements depend on the programme." },
    bitsat: { title: "BITSAT", detail: "exam.html?exam=bitsat", official: "https://admissions.bits-pilani.ac.in/", officialLabel: "Official BITS admissions", paths: ["engineering"], stages: ["senior", "after12", "unsure"], subjects: ["pcm"], reason: "Another engineering and science admission route; check BITS’ current programme-specific criteria." },
    viteee: { title: "VITEEE", detail: "exam.html?exam=viteee", official: "https://viteee.vit.ac.in/", officialLabel: "Official VITEEE portal", paths: ["engineering"], stages: ["senior", "after12", "unsure"], subjects: ["pcm"], reason: "An additional B.Tech route to consider; confirm current subject requirements with VIT." },
    slat: { title: "SLAT", detail: "exam.html?exam=slat", official: "https://www.slat-test.org/", officialLabel: "Official SLAT portal", paths: ["law"], stages: ["senior", "after12", "unsure"], subjects: [], reason: "An undergraduate law admission route for participating Symbiosis Law Schools." },
    clat: { title: "CLAT", detail: "", official: "https://consortiumofnlus.ac.in/", officialLabel: "Official Consortium of NLUs", paths: ["law"], stages: ["senior", "after12"], subjects: [], reason: "Explore this national law admission route; check the current consortium notification for participating programmes." },
    nda: { title: "NDA & Naval Academy Examination", detail: "", official: "https://www.upsc.gov.in/examinations/active-exams", officialLabel: "UPSC active examinations", paths: ["defence"], stages: ["senior", "after12"], subjects: [], reason: "A route to explore for defence careers. Age, education, subject, and service requirements are set by the current UPSC notice." }
  };

  // Regional routes are included only where an official exam or admissions source is available.
  const regionalRoutes = {
    "Maharashtra": { title: "MHT-CET", detail: "exam.html?exam=mhtcet", official: "https://cetcell.mahacet.org/cet-3/", officialLabel: "Maharashtra State CET Cell", paths: ["engineering"], subjects: ["pcm"], reason: "A Maharashtra state route for technical courses. Course, domicile, and subject rules vary by current brochure." },
    "Karnataka": { title: "UGCET (KCET)", detail: "", official: "https://cetonline.karnataka.gov.in/kea/", officialLabel: "Karnataka Examinations Authority", paths: ["engineering"], subjects: ["pcm"], reason: "KEA lists undergraduate common entrance and admission routes. Which programmes apply depends on the current notification." },
    "Andhra Pradesh": { title: "AP EAPCET", detail: "", official: "https://cets.apsche.ap.gov.in/EAPCET/", officialLabel: "AP EAPCET / APSCHE", paths: ["engineering"], subjects: ["pcm"], reason: "Andhra Pradesh’s engineering, agriculture, and pharmacy entrance route. It is not the MBBS/BDS route; stream and local-status rules vary." },
    "Telangana": { title: "TGEAPCET admissions", detail: "", official: "https://www.tgeapcet.nic.in/", officialLabel: "Telangana EAPCET admissions portal", paths: ["engineering"], subjects: ["pcm"], reason: "Telangana’s state admission portal for EAPCET routes. Check the current notice for applicable programmes and rules." },
    "West Bengal": { title: "WBJEE", detail: "", official: "https://wbjeeb.nic.in/wbjee/", officialLabel: "West Bengal Joint Entrance Examinations Board", paths: ["engineering"], subjects: ["pcm"], reason: "A West Bengal undergraduate route covering engineering and related programmes; confirm current eligibility and counselling rules." },
    "Kerala": { title: "KEAM", detail: "", official: "https://cee.kerala.gov.in/", officialLabel: "Commissioner for Entrance Examinations, Kerala", paths: ["engineering"], subjects: ["pcm"], reason: "Kerala’s professional-course admissions route. Current prospectus rules determine the relevant course and subjects." }
  };

  const cityStates = {
    "mumbai": ["Maharashtra"], "pune": ["Maharashtra"], "nagpur": ["Maharashtra"], "nashik": ["Maharashtra"], "thane": ["Maharashtra"], "navi mumbai": ["Maharashtra"], "aurangabad": ["Maharashtra", "Bihar"], "chhatrapati sambhajinagar": ["Maharashtra"],
    "bengaluru": ["Karnataka"], "bangalore": ["Karnataka"], "mysuru": ["Karnataka"], "mysore": ["Karnataka"], "mangaluru": ["Karnataka"], "hubballi": ["Karnataka"],
    "hyderabad": ["Telangana"], "warangal": ["Telangana"], "karimnagar": ["Telangana"], "visakhapatnam": ["Andhra Pradesh"], "vizag": ["Andhra Pradesh"], "vijayawada": ["Andhra Pradesh"], "amaravati": ["Andhra Pradesh"], "tirupati": ["Andhra Pradesh"],
    "kolkata": ["West Bengal"], "howrah": ["West Bengal"], "durgapur": ["West Bengal"], "siliguri": ["West Bengal"], "kochi": ["Kerala"], "cochin": ["Kerala"], "thiruvananthapuram": ["Kerala"], "trivandrum": ["Kerala"], "kozhikode": ["Kerala"], "calicut": ["Kerala"],
    "ahmedabad": ["Gujarat"], "surat": ["Gujarat"], "vadodara": ["Gujarat"], "rajkot": ["Gujarat"], "gandhinagar": ["Gujarat"], "jaipur": ["Rajasthan"], "jodhpur": ["Rajasthan"], "udaipur": ["Rajasthan"],
    "delhi": ["Delhi"], "new delhi": ["Delhi"], "noida": ["Uttar Pradesh"], "ghaziabad": ["Uttar Pradesh"], "lucknow": ["Uttar Pradesh"], "kanpur": ["Uttar Pradesh"], "varanasi": ["Uttar Pradesh"], "agra": ["Uttar Pradesh"],
    "chandigarh": ["Chandigarh"], "gurugram": ["Haryana"], "gurgaon": ["Haryana"], "faridabad": ["Haryana"], "shimla": ["Himachal Pradesh"], "dehradun": ["Uttarakhand"], "ranchi": ["Jharkhand"], "patna": ["Bihar"], "bhopal": ["Madhya Pradesh"], "indore": ["Madhya Pradesh"],
    "bhubaneswar": ["Odisha"], "cuttack": ["Odisha"], "chennai": ["Tamil Nadu"], "coimbatore": ["Tamil Nadu"], "madurai": ["Tamil Nadu"], "puducherry": ["Puducherry"], "pondicherry": ["Puducherry"], "guwahati": ["Assam"], "imphal": ["Manipur"], "shillong": ["Meghalaya"], "gangtok": ["Sikkim"], "raipur": ["Chhattisgarh"], "panaji": ["Goa"], "goa": ["Goa"]
  };

  const stageNames = Object.fromEntries(educationStages.map((item) => [item.id, item.label]));
  const interestNames = Object.fromEntries(interests.map((item) => [item.id, item.label]));
  const subjectNames = Object.fromEntries(subjectGroups.map((item) => [item.id, item.label]));
  let answers;
  let selectedInterests = new Set();
  let selectedSubjects = new Set();
  let currentStep = "interests";
  let cityName = "";

  function setProgress(step, label) {
    const progress = { interests: 1, stage: 2, subjects: 3, city: 4, state: 4, results: 4 }[step] || 0;
    progressBar.style.width = `${progress * 25}%`;
    progressLabel.textContent = step === "results" ? "Your starting points" : `Question ${progress} of 4 · ${label}`;
  }

  function addMessage(role, content) {
    const message = document.createElement("div");
    message.className = "guide-message";
    message.dataset.role = role;
    const label = document.createElement("small");
    label.textContent = role === "student" ? "You" : "Guide";
    const text = document.createElement("p");
    text.textContent = content;
    message.append(label, text);
    transcript.append(message);
    transcript.scrollTop = transcript.scrollHeight;
  }

  function addRichMessage(role, content) {
    const message = document.createElement("div");
    message.className = "guide-message";
    message.dataset.role = role;
    const label = document.createElement("small");
    label.textContent = role === "student" ? "You" : "Guide";
    message.append(label, content);
    transcript.append(message);
    transcript.scrollTop = transcript.scrollHeight;
  }

  function makeButton(label, onClick, className = "guide-option") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  function renderOptions(promptText, options, onChoose, multi = false) {
    controls.replaceChildren();
    const prompt = document.createElement("p");
    prompt.className = "guide-prompt";
    prompt.textContent = promptText;
    const group = document.createElement("div");
    group.className = "guide-options";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", promptText);
    options.forEach((option) => {
      const button = makeButton(option.label, () => {
        if (!multi) {
          addMessage("student", option.label);
          onChoose(option.id);
          return;
        }
        const selection = option.selection;
        if (selection.has(option.id)) selection.delete(option.id);
        else {
          if (option.id === "unknown") selection.clear();
          else selection.delete("unknown");
          selection.add(option.id);
        }
        button.setAttribute("aria-pressed", String(selection.has(option.id)));
      });
      button.setAttribute("aria-pressed", String(multi && option.selection.has(option.id)));
      group.append(button);
    });
    controls.append(prompt, group);
    if (multi) {
      controls.append(makeButton("Continue", () => {
        if (options[0].selection.size === 0) {
          showError("Choose at least one option to continue.");
          return;
        }
        const selection = options[0].selection;
        const labels = options.filter((option) => selection.has(option.id)).map((option) => option.label);
        addMessage("student", labels.join(", "));
        onChoose([...selection]);
      }, "guide-continue"));
    }
    requestAnimationFrame(() => group.querySelector("button")?.focus({ preventScroll: true }));
  }

  function showError(message) {
    controls.querySelector(".guide-error")?.remove();
    const error = document.createElement("p");
    error.className = "guide-error";
    error.setAttribute("role", "alert");
    error.textContent = message;
    controls.append(error);
  }

  function askInterests() {
    currentStep = "interests";
    setProgress(currentStep, "Interests");
    addMessage("guide", "Let’s start with what you enjoy. You can choose more than one, and there’s no wrong answer.");
    const options = interests.map((item) => ({ ...item, selection: selectedInterests }));
    renderOptions("Which areas sound most interesting to you? Choose all that fit.", options, (value) => {
      selectedInterests = new Set(value);
      answers.interests = value;
      askStage();
    }, true);
  }

  function askStage() {
    currentStep = "stage";
    setProgress(currentStep, "Study stage");
    addMessage("guide", "Thanks. What stage of study are you at right now?");
    renderOptions("Choose the closest option.", educationStages, (value) => {
      answers.stage = value;
      askSubjects();
    });
  }

  function askSubjects() {
    currentStep = "subjects";
    setProgress(currentStep, "Subjects");
    addMessage("guide", "Your subjects can change which entrance routes are relevant, so I’ll use them as a guide—not as an eligibility check.");
    const options = subjectGroups.map((item) => ({ ...item, selection: selectedSubjects }));
    renderOptions("Which subject groups are you taking or considering? Choose all that fit.", options, (value) => {
      selectedSubjects = new Set(value);
      answers.subjects = value;
      askCity();
    }, true);
  }

  function askCity() {
    currentStep = "city";
    setProgress(currentStep, "Location");
    addMessage("guide", "Which city are you based in? I only use it to identify your state and relevant state-level routes; it isn’t submitted to an AI or chatbot service.");
    controls.replaceChildren();
    const prompt = document.createElement("p");
    prompt.className = "guide-prompt";
    prompt.textContent = "Enter your city (no full address).";
    const form = document.createElement("form");
    form.className = "guide-city-form";
    const input = document.createElement("input");
    input.type = "text";
    input.name = "city";
    input.autocomplete = "address-level2";
    input.maxLength = 80;
    input.required = true;
    input.placeholder = "e.g. Pune";
    input.setAttribute("aria-label", "City");
    input.value = cityName;
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Find options";
    form.append(input, submit);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const city = input.value.trim();
      if (city.length < 2) {
        showError("Enter a city name with at least two letters.");
        input.focus();
        return;
      }
      cityName = city;
      answers.city = city;
      addMessage("student", city);
      const normalized = city.toLocaleLowerCase("en-IN").replace(/\s+/g, " ").replace(/[,].*$/, "").trim();
      const found = cityStates[normalized];
      if (found?.length === 1) {
        answers.state = found[0];
        finishRecommendations();
      } else {
        askState(found || []);
      }
    });
    controls.append(prompt, form);
    requestAnimationFrame(() => input.focus({ preventScroll: true }));
  }

  function askState(candidates) {
    currentStep = "state";
    setProgress(currentStep, "State");
    addMessage("guide", candidates.length ? `I found more than one place called ${cityName}. Which state or territory do you mean?` : `I couldn’t identify ${cityName} from my city list. Choose your state or territory so I can check the regional routes I know about.`);
    controls.replaceChildren();
    const prompt = document.createElement("label");
    prompt.className = "guide-prompt";
    prompt.htmlFor = "guide-state-select";
    prompt.textContent = "Select your state or union territory.";
    const form = document.createElement("form");
    form.className = "guide-city-form";
    const select = document.createElement("select");
    select.id = "guide-state-select";
    select.required = true;
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Choose a state or territory";
    placeholder.disabled = true;
    placeholder.selected = true;
    select.append(placeholder);
    states.forEach((state) => {
      const option = document.createElement("option");
      option.value = state;
      option.textContent = state;
      if (candidates.includes(state)) option.textContent += " (match)";
      select.append(option);
    });
    const submit = document.createElement("button");
    submit.type = "submit";
    submit.textContent = "Show recommendations";
    form.append(select, submit);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!select.value) {
        showError("Choose a state or union territory to continue.");
        select.focus();
        return;
      }
      answers.state = select.value;
      addMessage("student", select.value);
      finishRecommendations();
    });
    controls.append(prompt, form);
    requestAnimationFrame(() => select.focus({ preventScroll: true }));
  }

  function rankCareers() {
    return Object.entries(careers).map(([id, career]) => {
      const matchedInterests = answers.interests.filter((interest) => career.keywords.includes(interest));
      let score = matchedInterests.length * 3;
      let subjectReason = "";
      const matchedSubject = career.subjects.find((subject) => answers.subjects.includes(subject));
      if (matchedSubject) {
        score += 1;
        subjectReason = ` Your ${subjectNames[matchedSubject] || "subject"} choice may also connect with this route.`;
      }
      if (!score) return null;
      const reason = matchedInterests.length
        ? interests.find((interest) => interest.id === matchedInterests[0]).reason + subjectReason
        : `Some of your subject interests may connect with this field.${subjectReason}`;
      return { id, ...career, score, reason };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 3);
  }

  function buildExamRecommendations(pathIds) {
    if (!["senior", "after12"].includes(answers.stage)) return [];
    const subjectSet = new Set(answers.subjects);
    const candidates = Object.entries(examRoutes).map(([id, exam]) => ({ id, ...exam, regional: false }))
      .filter((exam) => exam.paths.some((path) => pathIds.includes(path)) && exam.stages.includes(answers.stage))
      .filter((exam) => !exam.subjects.length || exam.subjects.some((subject) => subjectSet.has(subject)));

    const regional = regionalRoutes[answers.state];
    if (regional && regional.paths.some((path) => pathIds.includes(path)) && regional.subjects.some((subject) => subjectSet.has(subject))) {
      candidates.unshift({ id: "regional", ...regional, regional: true });
    }
    return candidates.slice(0, 4);
  }

  function createLink(label, href, external = false) {
    const link = document.createElement("a");
    link.href = href;
    link.textContent = label;
    if (external) {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }
    return link;
  }

  function makeCard(title, description, links) {
    const card = document.createElement("article");
    card.className = "guide-result-card";
    const heading = document.createElement("h3");
    heading.textContent = title;
    const text = document.createElement("p");
    text.textContent = description;
    const linkRow = document.createElement("div");
    linkRow.className = "guide-result-links";
    links.forEach((link) => linkRow.append(createLink(link.label, link.href, link.external)));
    card.append(heading, text, linkRow);
    return card;
  }

  function finishRecommendations() {
    currentStep = "results";
    setProgress(currentStep);
    const rankedCareers = rankCareers();
    const exams = buildExamRecommendations(rankedCareers.map((career) => career.id));
    addMessage("guide", `Here are a few starting points based on your interests${answers.state ? ` and your location in ${answers.state}` : ""}. These are ideas to explore, not a judgement about what you can or cannot do.`);

    const result = document.createElement("div");
    result.className = "guide-results";
    const intro = document.createElement("p");
    intro.className = "guide-result-intro";
    intro.textContent = `You selected ${answers.interests.map((id) => interestNames[id]).join(", ")}. Your study stage is ${stageNames[answers.stage].toLocaleLowerCase()}. Use the links to learn more, then confirm current requirements with the official authority.`;
    result.append(intro);

    const careerGroup = document.createElement("section");
    careerGroup.className = "guide-result-group";
    const careerHeading = document.createElement("h2");
    careerHeading.textContent = "Career paths to explore";
    const careerList = document.createElement("div");
    careerList.className = "guide-result-list";
    rankedCareers.forEach((career) => careerList.append(makeCard(career.title, `${career.tag}. ${career.reason}`, [{ label: "Explore this career path ↗", href: career.url }])));
    careerGroup.append(careerHeading, careerList);
    result.append(careerGroup);

    const examGroup = document.createElement("section");
    examGroup.className = "guide-result-group";
    const examHeading = document.createElement("h2");
    examHeading.textContent = "Exams & admission routes to investigate";
    const examList = document.createElement("div");
    examList.className = "guide-result-list";
    if (exams.length) {
      exams.forEach((exam) => {
        const links = [];
        if (exam.detail) links.push({ label: "Read our exam guide ↗", href: exam.detail });
        links.push({ label: `${exam.officialLabel} ↗`, href: exam.official, external: true });
        examList.append(makeCard(exam.title, exam.reason, links));
      });
    } else {
      const empty = document.createElement("p");
      empty.className = "guide-result-empty";
      empty.textContent = answers.stage === "school"
        ? "Your current stage is before most undergraduate entrance tests. Explore the career paths above and revisit exam routes when you know your Class 11–12 subjects."
        : answers.stage === "graduate"
          ? "The exam guides here focus on undergraduate entry. For postgraduate or professional study, check the relevant university or official exam authority for your field."
          : answers.stage === "unsure"
            ? "I need your current study stage to narrow down entrance routes. Explore the career paths above, then restart when you know whether you’re in Class 11–12 or have completed Class 12."
          : "I don’t have a verified route that matches your chosen subjects yet. Explore the paths above and check the relevant official admission authority before applying.";
      examList.append(empty);
    }
    examGroup.append(examHeading, examList);
    result.append(examGroup);

    if (answers.state && !regionalRoutes[answers.state]) {
      const fallback = document.createElement("p");
      fallback.className = "guide-result-empty";
      fallback.textContent = `I don’t currently have a verified state-level route catalogued for ${answers.state}. The national options above are a starting point; check your state’s official admission authority for local routes.`;
      result.append(fallback);
    } else if (answers.state && regionalRoutes[answers.state] && !exams.some((exam) => exam.regional)) {
      const fallback = document.createElement("p");
      fallback.className = "guide-result-empty";
      fallback.textContent = `I don’t have a verified ${answers.state} state route for this combination of interests and subjects. The national options above are a starting point; confirm other local routes with the official state authority.`;
      result.append(fallback);
    }

    addRichMessage("guide", result);
    controls.replaceChildren(makeButton("Adjust answers and try again", restart, "guide-again"));
    requestAnimationFrame(() => controls.querySelector("button")?.focus({ preventScroll: true }));
  }

  function restart() {
    answers = { interests: [], stage: "", subjects: [], city: "", state: "" };
    selectedInterests = new Set();
    selectedSubjects = new Set();
    currentStep = "interests";
    cityName = "";
    transcript.replaceChildren();
    controls.replaceChildren();
    askInterests();
  }

  resetButton.addEventListener("click", restart);
  restart();
})();

