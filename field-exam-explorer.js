(() => {
  const search = document.querySelector("#field-exam-search");
  const list = document.querySelector(".exam-options");
  const count = document.querySelector("#field-exam-count");
  const empty = document.querySelector("#field-exam-empty");
  if (!search || !list || !count || !empty) return;

  const cards = [...list.querySelectorAll(".exam-option-card")];

  function update() {
    const term = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const matches = `${card.dataset.search || ""} ${card.innerText}`.toLocaleLowerCase().includes(term);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = `${visible} ${visible === 1 ? "exam guide" : "exam guides"}`;
    empty.hidden = visible > 0;
  }

  search.addEventListener("input", update);
  search.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      search.value = "";
      update();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey) return;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName) || document.activeElement?.isContentEditable) return;
    event.preventDefault();
    search.focus();
  });

  update();
})();
