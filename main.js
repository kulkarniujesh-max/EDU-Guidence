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
    if (typeof locomotiveScroll !== "undefined" && locomotiveScroll?.scrollTo) {
      locomotiveScroll.scrollTo(target, { offset: -24, duration: 850 });
      return;
    }
  } catch {
    // The existing smooth-scroll library may not be available when offline.
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
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

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("objectContainer");
  if (!container) return;

  const { Engine, Bodies, Composite, Mouse, MouseConstraint, Runner } = Matter;

  // 1. Initialize Engine
  const engine = Engine.create({
    gravity: { x: 0, y: 1.15 } // Crisp, snappy drop
  });

  let bounds = container.getBoundingClientRect();
  const wallThickness = 160;

  // 2. Static Boundaries (Floor, Left Wall, Right Wall)
  const ground = Bodies.rectangle(
    bounds.width / 2,
    bounds.height + wallThickness / 2,
    bounds.width * 2,
    wallThickness,
    { isStatic: true }
  );

  const leftWall = Bodies.rectangle(
    -wallThickness / 2,
    bounds.height / 2,
    wallThickness,
    bounds.height * 2,
    { isStatic: true }
  );

  const rightWall = Bodies.rectangle(
    bounds.width + wallThickness / 2,
    bounds.height / 2,
    wallThickness,
    bounds.height * 2,
    { isStatic: true }
  );

  Composite.add(engine.world, [ground, leftWall, rightWall]);

  // Add invisible ceiling after 3 seconds so dropped objects never escape when flung
  setTimeout(() => {
    const ceiling = Bodies.rectangle(
      bounds.width / 2,
      -wallThickness / 2,
      bounds.width * 2,
      wallThickness,
      { isStatic: true }
    );
    Composite.add(engine.world, ceiling);
  }, 3000);

  // 3. Map All DOM Elements to Matter Rigid Bodies
  const items = container.querySelectorAll(".physics-item");
  const physicsBodies = [];

  items.forEach((element, index) => {
    const rect = element.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const shapeType = element.dataset.shape;

    // Stagger spawn positions so they cascade from top naturally without jamming
    const startX = Math.random() * (bounds.width - width - 80) + width / 2 + 40;
    const startY = -60 - index * 42 - Math.random() * 50;
    const initialRotation = (Math.random() - 0.5) * 1.2;

    const physicsOptions = {
      restitution: 0.62, // Bouncy feel
      friction: 0.22,    // Allows sliding
      frictionAir: 0.018,// Light air resistance
      density: 0.0025,
      angle: initialRotation
    };

    let body;

    if (shapeType === "circle") {
      const radius = width / 2;
      body = Bodies.circle(startX, startY, radius, physicsOptions);
    } else if (shapeType === "triangle") {
      const radius = width / 1.7;
      body = Bodies.polygon(startX, startY, 3, radius, physicsOptions);
    } else if (shapeType === "pill") {
      body = Bodies.rectangle(startX, startY, width, height, {
        ...physicsOptions,
        chamfer: { radius: height / 2 }
      });
    } else {
      // Square or rectangle
      body = Bodies.rectangle(startX, startY, width, height, {
        ...physicsOptions,
        chamfer: { radius: Math.min(14, width / 4) }
      });
    }

    physicsBodies.push({ element, body, width, height });
    Composite.add(engine.world, body);
  });

  // 4. Mouse / Touch Dragging
  const mouse = Mouse.create(container);

  // Preserve normal page scrolling on touch & wheel
  mouse.element.removeEventListener("wheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false }
    }
  });

  Composite.add(engine.world, mouseConstraint);

  // 5. Start Runner
  const runner = Runner.create();
  Runner.run(runner, engine);

  // 6. Sync DOM Transforms with Matter.js Bodies Loop
  function syncPositions() {
    physicsBodies.forEach(({ element, body, width, height }) => {
      const x = body.position.x - width / 2;
      const y = body.position.y - height / 2;
      element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotate(${body.angle}rad)`;
    });
    requestAnimationFrame(syncPositions);
  }
  requestAnimationFrame(syncPositions);

  // 7. Responsive Window Resizing
  window.addEventListener("resize", () => {
    bounds = container.getBoundingClientRect();
    Matter.Body.setPosition(ground, {
      x: bounds.width / 2,
      y: bounds.height + wallThickness / 2
    });
    Matter.Body.setPosition(rightWall, {
      x: bounds.width + wallThickness / 2,
      y: bounds.height / 2
    });
    Matter.Body.setPosition(leftWall, {
      x: -wallThickness / 2,
      y: bounds.height / 2
    });
  });
});
