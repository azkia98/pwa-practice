const CACHE_VERSION = 2;

// const CURRENT_CACHE = `v${CACHE_VERSION}`;
const CURRENT_CACHE = {
    static: `s-v${CACHE_VERSION}`,
    dynamic: `d-v${CACHE_VERSION}`
};

self.addEventListener('install', (event) => {
    console.log('installing service worker');
    event.waitUntil(
        caches.open(CURRENT_CACHE['static'])
        .then(cache => {
            cache.addAll([
                    '/',
                    '/static/css/materialize.min.css',
                    '/static/js/app.js',
                    '/static/js/materialize.min.js',
                    '/static/css/vazir.css',
                    '/static/css/style.css'
                ]);
            })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (CURRENT_CACHE['static'] !== cacheName) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
})

self.addEventListener('fetch', (event) => {
    // console.log(event);

    event.respondWith(
        caches.open(CURRENT_CACHE['static']).then(cache => {
            return cache.match(event.request).then(response => {
                if (response) {
                    return response;
                }

                return fetch(event.request).then((networkResponse)=>{
                    // console.log(networkResponse);
                    cache.put(event.request, networkResponse.clone());

                    return networkResponse;
                }).catch(err => console.log(err));
            });
        })
    );
});
