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
const fifthBlock = document.querySelector(".fifthBlock");
const seventhBlock = document.querySelector(".seventhBlock");
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
    fifthBlock.classList.add("is-visible");
    seventhBlock.classList.add("is-visible");
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
// маска

const mask = document.querySelector(".mask");
const block = document.querySelector(".fourthBlock");

let dragging = false;
let offsetX = 0;
let offsetY = 0;

mask.addEventListener("mousedown", (e) => {
  dragging = true;
  const rect = mask.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;
  mask.style.cursor = "grabbing";
});

window.addEventListener("mouseup", () => {
  dragging = false;
  mask.style.cursor = "grab";
});

window.addEventListener("mousemove", (e) => {
  if (!dragging) return;

  const blockRect = block.getBoundingClientRect();
  const maskRect = mask.getBoundingClientRect();

  let x = e.clientX - blockRect.left - offsetX;
  let y = e.clientY - blockRect.top - offsetY;

  x = Math.max(0, Math.min(x, blockRect.width - maskRect.width));
  y = Math.max(0, Math.min(y, blockRect.height - maskRect.height));

  mask.style.left = `${x}px`;
  mask.style.top = `${y}px`;
});
// буквы
const section = document.querySelector(".fourthBlock");
const target = document.querySelector(".sleep-z");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        target.classList.add("is-visible");
      }, 8000);
    }
  });
});

observer.observe(section);

// игра с овечками
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".fifthBlock");
  const selectScreen = root.querySelector(".select");
  const playScreen = root.querySelector(".play");

  const leftBtn = root.querySelector(".left");
  const rightBtn = root.querySelector(".right");
  const startBtn = root.querySelector(".start");
  const valueEl = root.querySelector(".value");
  const targetEl = root.querySelector(".target");

  const field = root.querySelector(".field");
  const fence = root.querySelector(".fence");
  const sheepEl = root.querySelector(".sheep");

  let targetScore = 6;
  let score = 0;
  let speed = 0.18;
  let sheep = null;
  let lastTime = 0;
  let rafId = null;

  function updateHud() {
    valueEl.textContent = targetScore;
    targetEl.textContent = `${score} часов`;
  }

  function spawnSheep() {
    const fieldRect = field.getBoundingClientRect();
    const jumpHeightVW = 20;
    const jumpHeightPx = window.innerWidth * (jumpHeightVW / 100);

    const jumpWidthPx = window.innerWidth * 0.5;
    const jumpDurationMs = jumpWidthPx / speed;

    sheep = {
      x: -120,
      y: 0,
      jumping: false,
      jumpStart: 0,
      jumpDuration: jumpDurationMs,
      jumpHeight: jumpHeightPx,
      cleared: false,
      fieldWidth: fieldRect.width,
    };

    sheepEl.style.left = `${sheep.x}px`;
    sheepEl.style.bottom = `${32 + sheep.y}px`;
    sheepEl.style.display = "block";
  }

  function resetGame() {
    cancelAnimationFrame(rafId);
    rafId = null;
    score = 0;
    speed = 0.18;
    sheep = null;
    sheepEl.style.display = "none";
    updateHud();

    selectScreen.classList.remove("is-active");
    playScreen.classList.remove("is-active");
  }

  function startGame() {
    score = 0;
    speed = 0.18;
    updateHud();
    spawnSheep();
    lastTime = performance.now();
    rafId = requestAnimationFrame(tick);
  }

  function jumpSheep() {
    if (!playScreen.classList.contains("is-active")) return;
    if (!sheep || sheep.jumping) return;

    sheep.jumping = true;
    sheep.jumpStart = performance.now();
    sheepEl.classList.add("jump");
  }

  function updateSheep(dt, now) {
    if (!sheep) return;

    sheep.x += speed * dt;

    if (sheep.jumping) {
      const t = (now - sheep.jumpStart) / sheep.jumpDuration;
      if (t >= 1) {
        sheep.jumping = false;
        sheep.y = 0;
        sheepEl.classList.remove("jump");
      } else {
        const h = sheep.jumpHeight;
        sheep.y = 4 * h * t * (1 - t);
      }
    }

    sheepEl.style.left = `${sheep.x}px`;
    sheepEl.style.bottom = `32px`;
    sheepEl.style.transform = `translateY(${-sheep.y}px)`;

    const fenceRect = fence.getBoundingClientRect();
    const sheepRect = sheepEl.getBoundingClientRect();

    const hitFence =
      sheepRect.right >= fenceRect.left &&
      sheepRect.left <= fenceRect.right &&
      sheepRect.bottom > fenceRect.top + 12;

    if (hitFence && (!sheep.jumping || sheep.y < 50)) {
      alert("Попробуй еще раз!");
      resetGame(false);
      return;
    }

    if (!sheep.cleared && sheepRect.left > fenceRect.right) {
      sheep.cleared = true;
      score += 1;
      updateHud();
    }

    if (sheep.x > sheep.fieldWidth + 120) {
      if (score >= targetScore) {
        alert("Победа! Ты обязательно выспишься!");
        resetGame();
        return;
      }
      speed += 0.03;
      spawnSheep();
    }
  }

  function tick(now) {
    const dt = now - lastTime;
    lastTime = now;
    updateSheep(dt, now);
    rafId = requestAnimationFrame(tick);
  }

  leftBtn.addEventListener("click", () => {
    targetScore = Math.max(3, targetScore - 1);
    updateHud();
  });

  rightBtn.addEventListener("click", () => {
    targetScore = Math.min(9, targetScore + 1);
    updateHud();
  });

  startBtn.addEventListener("click", () => {
    selectScreen.classList.add("is-active");
    playScreen.classList.add("is-active");
    startGame();
  });

  fence.addEventListener("click", jumpSheep);

  updateHud();
});
// игра-2

// таймер-часы
document.addEventListener("DOMContentLoaded", () => {
  const block = document.querySelector(".seventhBlock");
  if (!block) return;

  const digits = block.querySelectorAll(".d");
  if (digits.length < 4) return;

  let started = false;

  function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return m + s; 
  }

  function setDigits(sec) {
    const str = formatTime(sec);
    digits[0].textContent = str[0];
    digits[1].textContent = str[1];
    digits[2].textContent = str[2];
    digits[3].textContent = str[3];
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;
          let time = 15;
          setDigits(time);

          const timer = setInterval(() => {
            time--;
            setDigits(time);
            if (time <= 0) clearInterval(timer);
          }, 1000);
        }
      });
    },
    { threshold: 0.4 },
  );

  observer.observe(block);
});
