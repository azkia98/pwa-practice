self.addEventListener('install' , (event) => {
    console.log('installing service worker' , event);
    event.waitUntil(
        caches.open('front-cache')
            .then((cache) => {
                cache.add('/static/css/materialize.min.css')
            })
    )
})

self.addEventListener('activate' , (event) => {
    console.log('activating service worker' , event);
    console.log('v1')
});

self.addEventListener('fetch' , (event) => {
    event.respondWith(
        caches.open('front-cache').then((cache) => {
            return cache.match(event.request).then(response => {
                return response || fetch(event.request);
            })
        })
    )
});
