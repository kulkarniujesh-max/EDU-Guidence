(() => {
  const storageKey = "eduGuidanceSavedExams";
  const grid = document.querySelector("#saved-exams-grid");
  const empty = document.querySelector("#saved-exams-empty");
  if (!grid || !empty) return;

  function readSaved() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
      return Array.isArray(saved) ? saved : [];
    } catch { return []; }
  }

  function render() {
    const items = readSaved();
    grid.replaceChildren();
    empty.hidden = items.length > 0;

    items.forEach((item, index) => {
      const card = document.createElement("article");
      card.className = "saved-exam-card";
      const number = document.createElement("span");
      number.className = "saved-exam-number";
      number.textContent = `SAVED / ${String(index + 1).padStart(2, "0")}`;
      const title = document.createElement("h2");
      title.textContent = item.title || "Exam details";
      const field = document.createElement("p");
      field.textContent = item.field || "Career pathway";
      const actions = document.createElement("div");
      actions.className = "saved-exam-actions";
      const open = document.createElement("a");
      open.href = item.url || `exam.html?exam=${encodeURIComponent(item.key || "")}`;
      open.className = "saved-exam-open";
      open.textContent = "View exam ↗";
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "saved-exam-remove";
      remove.textContent = "Remove";
      remove.setAttribute("aria-label", `Remove ${item.title || "exam"} from saved exams`);
      remove.addEventListener("click", () => {
        try { localStorage.setItem(storageKey, JSON.stringify(readSaved().filter((saved) => saved.key !== item.key))); } catch { /* The current list can still be refreshed. */ }
        render();
      });
      actions.append(open, remove);
      card.append(number, title, field, actions);
      grid.append(card);
    });
  }

  render();
})();
