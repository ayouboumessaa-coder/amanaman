// AMAN service worker (v28): Universal PWA engine, offline resilience, and fast loading across all devices.
const CACHE = "aman-v28";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./logo.png",
  "./mark.png",
  "./apple-touch-icon.png",
  "./app.css",
  "./content.js",
  "./app-core.js",
  "./app-ai.js",
  "./app-speech.js",
  "./app-extra.js",
  "./app-voice.js",
  "./search.js",
  "./search.css",
  "./community.js",
  "./community.css",
  "./protect.js",
  "./protect.css",
  "./select.js",
  "./select.css"
];
const NETWORK_TIMEOUT = 3500;

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL).catch(err => console.warn("[SW] Some assets failed pre-cache:", err)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

const isImage = url => /\.(png|jpe?g|webp|svg|ico)$/i.test(url.pathname);

function put(key, res) {
  if (res && res.ok && res.type !== 'opaque') {
    const copy = res.clone();
    caches.open(CACHE).then(c => c.put(key, copy)).catch(() => {});
  }
  return res;
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Never cache API routes (live SOS, AI queries, dynamic backend endpoints)
  if (url.origin !== location.origin || url.pathname.startsWith("/api/")) return;

  const isAppPage = req.mode === "navigate" || url.pathname === "/" || url.pathname.endsWith("/index.html");
  const key = isAppPage ? "./" : req;

  // Images: Cache first, background network revalidate
  if (isImage(url)) {
    e.respondWith(
      caches.match(req).then(hit => {
        const net = fetch(req).then(res => put(req, res)).catch(() => null);
        if (hit) {
          e.waitUntil(net);
          return hit;
        }
        return net || caches.match("./icon-192.png");
      })
    );
    return;
  }

  // HTML Pages, JS, and CSS: Network first with fast timeout fallback to offline cache
  e.respondWith(
    new Promise(resolve => {
      let done = false;
      const fallback = () => caches.match(key).then(r => r || (isAppPage ? caches.match("./") : undefined));
      const timer = setTimeout(() => {
        fallback().then(r => {
          if (r && !done) {
            done = true;
            resolve(r);
          }
        });
      }, NETWORK_TIMEOUT);

      fetch(req).then(res => {
        put(key, res);
        clearTimeout(timer);
        if (!done) {
          done = true;
          resolve(res);
        }
      }).catch(() => {
        clearTimeout(timer);
        fallback().then(r => {
          if (!done) {
            done = true;
            resolve(r || new Response("AMAN Offline Shell Ready", { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8" } }));
          }
        });
      });
    })
  );
});
