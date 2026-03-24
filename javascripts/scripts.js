// анимация глаз
const eyes1 = Array.from(document.querySelectorAll(".eye_1, .eye_2"));
const pupils1 = eyes1.map((eye) => eye.querySelector(".pupil"));

function trackEyes1(event) {
  eyes1.forEach((eye, index) => {
    const pupil = pupils1[index];
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const maxX = rect.width * 0.2;
    const maxY = rect.height * 0.2;
    pupil.style.transform = `translate(${Math.cos(angle) * maxX}px, ${Math.sin(angle) * maxY}px)`;
  });
}

function resetEyes1() {
  pupils1.forEach((pupil) => (pupil.style.transform = "translate(0, 0)"));
}

// анимация

// кнопка
const button = document.querySelector(".button");
const buttonInside = document.querySelector(".buttonInside");
const catImg = document.querySelector(".catImg");
const tailImg = document.querySelector(".tailImg");
const secondBlock = document.querySelector(".secondBlock");
const fourthBlock = document.querySelector(".fourthBlock");
const thirdBlock = document.querySelector(".thirdBlock");
const clouds = document.querySelector(".clouds2");
const sky = document.querySelector(".sky");
const windowFirst = document.querySelector(".windowFirst");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
function smoothScrollBy(px = 200) {
  const start = window.scrollY;
  const end = start + px;
  const t0 = performance.now();

  function step(t) {
    const p = Math.min((t - t0) / 1600, 1);
    const ease = p * (2 - p);
    window.scrollTo(0, start + (end - start) * ease);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

button.addEventListener(
  "click",
  () => {
    document.body.classList.toggle("dark");
    button.classList.add("dark");
    buttonInside.classList.add("dark");
    secondBlock.classList.add("is-visible");
    thirdBlock.classList.add("is-visible");
    fourthBlock.classList.add("is-visible");
    setTimeout(resizeCanvas, 0);
    smoothScrollBy(100);
    clouds.classList.add("is-visible");
    catImg.classList.add("dark");
    tailImg.classList.add("dark");
    sky.classList.add("dark");
    windowFirst.classList.add("dark");
    sun.classList.add("is-move");
    moon.classList.add("is-move");
  },
  { once: true },
);
// рисование
const canvas = document.querySelector(".drawCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let drawing = false;

canvas.addEventListener("mousedown", (e) => {
  drawing = true;
  ctx.beginPath();
  ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
});

canvas.addEventListener("mouseleave", () => {
  drawing = false;
});
// окошки
const firstWindow = document.querySelector(".window:nth-child(1)");

firstWindow.addEventListener("click", () => {
  firstWindow.classList.add("active");
  setTimeout(() => {
    firstWindow.classList.remove("active");
  }, 1200);
});
const thirdWindow = document.querySelector(".window:nth-child(3)");
const granny = thirdWindow.querySelector(".granny");

thirdWindow.addEventListener("click", () => {
  thirdWindow.classList.add("active");
  setTimeout(() => {
    thirdWindow.classList.remove("active");
  }, 1400);
  granny.classList.add("is-visible");

  setTimeout(() => {
    granny.classList.remove("is-visible");
  }, 1400);
});
const fourthWindow = document.querySelector(".window:nth-child(4)");

fourthWindow.addEventListener("click", () => {
  fourthWindow.classList.add("active");
  setTimeout(() => {
    fourthWindow.classList.remove("active");
  }, 1200);
});
const fiveWindow = document.querySelector(".window:nth-child(5)");

fiveWindow.addEventListener("click", () => {
  fiveWindow.classList.add("active");
  setTimeout(() => {
    fiveWindow.classList.remove("active");
  }, 1200);
});
const sixWindow = document.querySelector(".window:nth-child(6)");

sixWindow.addEventListener("click", () => {
  sixWindow.classList.add("active");
  setTimeout(() => {
    sixWindow.classList.remove("active");
  }, 1200);
});
const sevenWindow = document.querySelector(".window:nth-child(7)");
const child = sevenWindow.querySelector(".child");

sevenWindow.addEventListener("click", () => {
  sevenWindow.classList.add("active");
  setTimeout(() => {
    sevenWindow.classList.remove("active");
  }, 1400);

  child.classList.add("is-visible");
  setTimeout(() => {
    child.classList.remove("is-visible");
  }, 1400);
});
const eightWindow = document.querySelector(".window:nth-child(8)");

eightWindow.addEventListener("click", () => {
  eightWindow.classList.add("active");
  setTimeout(() => {
    eightWindow.classList.remove("active");
  }, 1200);
});
const nineWindow = document.querySelector(".window:nth-child(9)");
// const couple = sevenWindow.querySelector(".couple");

nineWindow.addEventListener("click", () => {
  nineWindow.classList.add("active");
  setTimeout(() => {
    nineWindow.classList.remove("active");
  }, 1200);

  // couple.classList.add("is-visible");
  // setTimeout(() => {
  //   couple.classList.remove("is-visible");
  // }, 1400);
});
// глаза

const eyes2 = Array.from(document.querySelectorAll(".eye_3, .eye_4"));
const pupils2 = eyes2.map((eye) => eye.querySelector(".pupil-2"));

function trackEyes2(event) {
  eyes2.forEach((eye, index) => {
    const pupil = pupils2[index];
    const rect = eye.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);
    const maxX = rect.width * 0.2;
    const maxY = rect.height * 0.2;
    pupil.style.transform = `translate(${Math.cos(angle) * maxX}px, ${Math.sin(angle) * maxY}px)`;
  });
}

function resetEyes2() {
  pupils2.forEach((pupil) => (pupil.style.transform = "translate(0, 0)"));
}

window.addEventListener("mousemove", (e) => {
  trackEyes1(e);
  trackEyes2(e);
});

window.addEventListener("mouseleave", () => {
  resetEyes1();
  resetEyes2();
});
