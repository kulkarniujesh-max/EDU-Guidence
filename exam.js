const examNames = {
  "law-cet": "CET",
  slat: "SLAT",
  lsat: "LSAT",
  "cuet-ug": "CUET UG",
  "nid-dat": "NID DAT",
  aieed: "AIEED",
  nift: "NIFT",
  jee: "JEE",
  mhtcet: "MHTCET",
  "srm-jee": "SRM-JEE",
  bitsat: "BITSAT",
  viteee: "VITEEE",
  "defence-cet": "CET",
  "defence-slat": "SLAT",
  "defence-lsat": "LSAT",
  "commerce-cet": "CET",
  "commerce-slat": "SLAT",
  "commerce-lsat": "LSAT"
};

const examKey = new URLSearchParams(window.location.search).get("exam");
const examName = examNames[examKey];

if (!examName) {
  window.location.replace("career.html");
} else {
  document.querySelector("#exam-title").textContent = examName;
  document.title = examName;
}

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
  });
});