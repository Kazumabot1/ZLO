document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.querySelector(".yes-btn");
  const noBtn = document.querySelector(".no-btn");

  // Confetti effect
  const celebrate = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });
  };

  yesBtn.addEventListener("click", () => {
    celebrate();
    alert("YAY! 💖 I knew you'd say yes!");
  });

  noBtn.addEventListener("mouseover", () => {
    const randomX = Math.floor(Math.random() * 400) - 200;
    const randomY = Math.floor(Math.random() * 400) - 200;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
});
