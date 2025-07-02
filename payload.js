// payload.js – served from IMPORT_SCRIPTS_URL
console.log("[payload.js] executing in worker");
self.addEventListener("message", e => {
  if (e.data === "hello?") self.postMessage("hi from payload.js");
});
