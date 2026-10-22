(() => {
  const container = document.querySelector("[data-scroll-container]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!container || typeof window.LocomotiveScroll !== "function" || reducedMotion) return;

  window.locomotiveScroll = new window.LocomotiveScroll({
    el: container,
    smooth: true,
    tablet: { smooth: false },
    smartphone: { smooth: false }
  });

  window.addEventListener("load", () => window.locomotiveScroll?.update());
})();
