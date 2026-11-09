// Çizgi Kanal: uygulama kabuğunu önbelleğe alır; internet yoksa da açılır
const C='cizgi-kanal-v11';
const SHELL=['./','index.html','manifest.webmanifest','icon.png','icon-192.png','apple-touch-icon.png','oyun.html','img/cift.png','img/metehan.png','img/ilayda.png','kalp.html','hafiza.html','favicon.png','img/m_stand.png','img/m_walk1.png','img/m_walk2.png','img/m_jump.png','img/i_idle.png','img/i_wave.png','img/i_run.png','img/sarilma.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(C).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin) return; // YouTube ve arşiv akışlarına dokunma
  e.respondWith(fetch(e.request,{cache:'no-cache'}).then(r=>{ const cp=r.clone(); caches.open(C).then(c=>c.put(e.request,cp)); return r; }).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
