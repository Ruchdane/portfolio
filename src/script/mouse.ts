export default function initMouseSystem() {
  let lastPosition = { x: 0, y: 0, time: 0 };
  let frameRequested = false;

  document.addEventListener("mousemove", (e) => {
    if (frameRequested) return;

    requestAnimationFrame(() => {
      const currentTarget = document.elementFromPoint(e.clientX, e.clientY);

      const trackedEl = currentTarget
        ? (currentTarget.closest("[data-mouse]") as HTMLHtmlElement)
        : null;
      const now = performance.now();
      const deltaTime = now - lastPosition.time;
      const deltaX = e.clientX - lastPosition.x;
      const deltaY = e.clientY - lastPosition.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const speed = distance / (deltaTime / 1000);
      const normalizedSpeed = Math.min(speed / 500, 1).toFixed(3); // Increased precision

      if (trackedEl) {
        const rect = trackedEl.getBoundingClientRect();

        const localX = e.clientX - rect.left;
        const localY = e.clientY - rect.top;

        trackedEl.style.setProperty("--local-x", `${localX.toFixed(2)}px`);
        trackedEl.style.setProperty("--local-y", `${localY.toFixed(2)}px`);

        const normalizedX = (localX / rect.width).toFixed(3);
        const normalizedY = (localY / rect.height).toFixed(3);
        trackedEl.style.setProperty("--norm-x", normalizedX);
        trackedEl.style.setProperty("--norm-y", normalizedY);

        // 7. Apply Speed Variables
        trackedEl.style.setProperty("--mouse-speed", speed.toFixed(2));
        trackedEl.style.setProperty("--mouse-speed-norm", normalizedSpeed);
      }

      // Update last position for speed calculation
      lastPosition = { x: e.clientX, y: e.clientY, time: now };
      frameRequested = false;
    });

    frameRequested = true;
  });
}
