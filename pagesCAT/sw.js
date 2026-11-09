// guaitaCalc v0.7 · SPDX-License-Identifier: AGPL-3.0-only
const C='guaitacalc-v0.7.1';const F=['./','guaitaCalc_0.7.1.html','manifest.webmanifest','icon-192.png','icon-512.png','HLP%20guaitaCalc-ajuda.html'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
