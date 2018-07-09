self.addEventListener('install', (event) => {
    console.log('installing service worker');
    event.waitUntil(
        caches.open('v1')
            .then(cache => {
                cache.add('/static/css/materialize.min.css');
                cache.add('/static/css/vazir.css');
            })
    );
});

self.addEventListener('activate', () => {
    console.log('activateing service worker');
    console.log('v4');
})

self.addEventListener('fetch', (event) => {
    // console.log(event);

    event.respondWith(
        caches.open('v1').then(cache =>{
            return cache.match(event.request).then(response =>{
                return response || fetch(event.request);
            });
        })
    );
});