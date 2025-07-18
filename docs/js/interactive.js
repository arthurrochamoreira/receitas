function bootstrapInteractive() {
  const interBubble = document.querySelector(".interactive");
  if (!interBubble || interBubble.dataset.interactiveLoaded) return;
  interBubble.dataset.interactiveLoaded = "true";

  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(
      curY
    )}px)`;
    requestAnimationFrame(move);
  }

  window.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
}

window.addEventListener("DOMContentLoaded", bootstrapInteractive);
const interactiveObserver = new MutationObserver(bootstrapInteractive);
interactiveObserver.observe(document.body, { childList: true, subtree: true });
