// анимация глаз
const eyes = Array.from(document.querySelectorAll(".eye_1, .eye_2"));
const pupils = eyes.map((eye) => eye.querySelector(".pupil"));

function trackEyes(event) {
  eyes.forEach((eye, index) => {
    const pupil = pupils[index];
    const rect = eye.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX);

    const maxX = rect.width * 0.2;
    const maxY = rect.height * 0.2;

    const offsetX = Math.cos(angle) * maxX;
    const offsetY = Math.sin(angle) * maxY;

    pupil.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  });
}

function resetEyes() {
  pupils.forEach((pupil) => {
    pupil.style.transform = "translate(0, 0)";
  });
}

window.addEventListener("mousemove", trackEyes);
window.addEventListener("mouseleave", resetEyes);

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
