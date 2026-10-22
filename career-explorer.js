(() => {
  const search = document.querySelector("#pathway-search");
  const grid = document.querySelector("#pathway-grid");
  const count = document.querySelector("#pathway-count");
  const empty = document.querySelector("#pathway-empty");
  const filters = [...document.querySelectorAll(".pathway-filter")];

  if (!search || !grid || !count || !empty || filters.length === 0) return;

  let activeFilter = "all";
  const cards = [...grid.querySelectorAll(".pathway-card")];

  function updateResults() {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;

    cards.forEach((card) => {
      const matchesText = `${card.dataset.search} ${card.innerText}`.toLocaleLowerCase().includes(query);
      const tags = (card.dataset.tags || "").split(/\s+/);
      const matchesFilter = activeFilter === "all" || tags.includes(activeFilter);
      const isVisible = matchesText && matchesFilter;
      card.hidden = !isVisible;
      if (isVisible) visible += 1;
    });

    count.textContent = `${visible} ${visible === 1 ? "pathway" : "pathways"}`;
    empty.hidden = visible !== 0;
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter || "all";
      filters.forEach((filter) => {
        const isActive = filter === button;
        filter.classList.toggle("is-active", isActive);
        filter.setAttribute("aria-pressed", String(isActive));
      });
      updateResults();
    });
  });

  search.addEventListener("input", updateResults);
  search.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      search.value = "";
      updateResults();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "/" || event.ctrlKey || event.metaKey || event.altKey) return;
    if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName) || document.activeElement?.isContentEditable) return;
    event.preventDefault();
    search.focus();
  });

  updateResults();
})();
