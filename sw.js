// Shell files come from the cache; the brief always tries the network first.
const C = 'morning-v1';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(C).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;
  const isBrief = u.pathname.endsWith('brief.enc.json');
  const isPage = e.request.mode === 'navigate';
  if (isBrief || isPage) {
    e.respondWith(fetch(e.request, {cache: 'no-store'}).then(r => {
      const copy = r.clone(); caches.open(C).then(c => c.put(isBrief ? 'brief.enc.json' : 'index.html', copy)); return r;
    }).catch(() => caches.match(isBrief ? 'brief.enc.json' : 'index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
