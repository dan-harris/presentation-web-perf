/**
 * monkey patch window with some helper functions used for measuring FPS
 */
// @ts-nocheck

/**
 * script globals
 */
const times = [];
let fps = 0;
let lastUpdate = performance.now();

/**
 * flag for switching toggling  fps checking
 */
window.RUN_FPS_CHECK = true;

/**
 * debounce our fps display update
 */
window.updateFPS = function updateFPS() {
  const timeSinceLastUpdate = performance.now() - lastUpdate;
  if (timeSinceLastUpdate >= 500) {
    lastUpdate = performance.now();
    console.log('💥', { fps });
  }
};

/**
 * refresh current fps count
 */
window.refreshFPS = function refreshFPS() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
    window.updateFPS();
    if (window.RUN_FPS_CHECK) window.refreshFPS();
  });
};
