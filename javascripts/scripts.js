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
