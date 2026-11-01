/* Offline support. Bump VERSION whenever you change any file, so phones pick up the update. */
var VERSION = "btsood-v1";
var FILES = [
  "./", "index.html", "manifest.webmanifest",
  "css/app.css", "js/app.js", "js/store.js", "js/wall.js",
  "data/deck.js", "data/symbols.js",
  "assets/card-back.jpg", "assets/icons/icon-32.png", "assets/icons/icon-180.png",
  "assets/icons/icon-192.png", "assets/icons/icon-512.png", "assets/icons/maskable-512.png"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(FILES); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

/* Network first for app files (so edits show up), cache as fallback when offline. */
self.addEventListener("fetch", function (e) {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function (res) {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        var copy = res.clone(); caches.open(VERSION).then(function (c) { c.put(e.request, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(e.request, { ignoreSearch: true }).then(function (m) { return m || (e.request.mode === "navigate" ? caches.match("index.html") : Response.error()); });
    })
  );
});
