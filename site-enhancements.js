(() => {
  const progress = document.createElement("div");
  progress.className = "site-reading-progress";
  progress.setAttribute("aria-hidden", "true");
  progress.innerHTML = '<span></span>';

  const backToTop = document.createElement("button");
  backToTop.className = "site-back-to-top";
  backToTop.type = "button";
  backToTop.setAttribute("aria-label", "Back to top");
  backToTop.title = "Back to top";
  backToTop.innerHTML = '<span aria-hidden="true">↑</span>';
  backToTop.hidden = true;

  document.body.append(progress, backToTop);
  const bar = progress.firstElementChild;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function update(y = window.scrollY, limit = document.documentElement.scrollHeight - window.innerHeight) {
    const percentage = limit > 0 ? Math.min(100, Math.max(0, (y / limit) * 100)) : 0;
    bar.style.width = `${percentage}%`;
    backToTop.hidden = y < 320;
  }

  window.addEventListener("scroll", () => update(), { passive: true });
  window.addEventListener("resize", () => update(), { passive: true });
  if (window.locomotiveScroll?.on) {
    window.locomotiveScroll.on("scroll", (event) => update(event.scroll.y, event.limit.y));
  }

  backToTop.addEventListener("click", () => {
    if (window.locomotiveScroll?.scrollTo) {
      window.locomotiveScroll.scrollTo(0, { duration: reduceMotion ? 0 : 700 });
    } else {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }
  });

  update();
})();
