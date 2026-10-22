const careerMenuToggle = document.querySelector(".career-menu-toggle");
const careerMenu = document.querySelector("#career-menu");

function setCareerMenuOpen(isOpen) {
  if (!careerMenuToggle || !careerMenu) return;
  careerMenuToggle.setAttribute("aria-expanded", String(isOpen));
  careerMenuToggle.setAttribute("aria-label", isOpen ? "Close career menu" : "Open career menu");
  careerMenu.hidden = !isOpen;
}

careerMenuToggle?.addEventListener("click", () => {
  setCareerMenuOpen(careerMenuToggle.getAttribute("aria-expanded") !== "true");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && careerMenuToggle?.getAttribute("aria-expanded") === "true") {
    setCareerMenuOpen(false);
    careerMenuToggle.focus();
  }
});

document.addEventListener("click", (event) => {
  if (careerMenuToggle?.getAttribute("aria-expanded") !== "true") return;
  if (!careerMenu?.contains(event.target) && !careerMenuToggle.contains(event.target)) {
    setCareerMenuOpen(false);
  }
});

const careerLink = Array.from(document.querySelectorAll(".nav-links a"))
  .find((link) => link.textContent.trim().toLowerCase() === "career");

if (careerLink) careerLink.href = "career.html";

document.querySelector(".btn-23")?.addEventListener("click", () => {
  window.location.href = "career.html";
});

function navigateTo(hash, updateHistory = true) {
  const target = hash === "#" ? document.querySelector(".Home-Page") : document.querySelector(hash);
  if (!target) return;

  setCareerMenuOpen(false);
  if (updateHistory) {
    if (hash && hash !== "#") history.pushState(null, "", hash);
    else history.pushState(null, "", location.pathname + location.search);
  }

  try {
    if (window.locomotiveScroll?.scrollTo) {
      window.locomotiveScroll.scrollTo(target, { offset: -24, duration: 850 });
      return;
    }
  } catch {
    // The existing smooth-scroll library may not be available when offline.
  }

  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
  target.scrollIntoView({ behavior, block: "start" });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;

  const hash = link.getAttribute("href");
  const isSiteNavigation = link === careerLink || link.classList.contains("career-brand") ||
    link.closest(".career-menu, .career-nav, .field-nav, .field-index, .page-end") ||
    link.classList.contains("discover-link");

  if (!isSiteNavigation || (hash !== "#" && !document.querySelector(hash))) return;
  event.preventDefault();
  navigateTo(hash);
});

window.addEventListener("popstate", () => {
  navigateTo(location.hash || "#", false);
});
