<<<<<<< HEAD
ï»¿// Ãƒâ€¡izgi Kanal: uygulama kabuÃ„Å¸unu ÃƒÂ¶nbelleÃ„Å¸e alÃ„Â±r; internet yoksa da aÃƒÂ§Ã„Â±lÃ„Â±r
const C='cizgi-kanal-v8';
=======
// Ã‡izgi Kanal: uygulama kabuÄŸunu Ã¶nbelleÄŸe alÄ±r; internet yoksa da aÃ§Ä±lÄ±r
const C='cizgi-kanal-v8';
>>>>>>> 680f99b7193dc51bf3148cd1f5c14279680329e8
const SHELL=['./','index.html','manifest.webmanifest','icon.png','icon-192.png','apple-touch-icon.png','oyun.html','img/cift.png','img/metehan.png','img/ilayda.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin) return; // YouTube ve arÃ…Å¸iv akÃ„Â±Ã…Å¸larÃ„Â±na dokunma
  e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{ const cp=r.clone(); caches.open(C).then(c=>c.put(e.request,cp)); return r; }).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
