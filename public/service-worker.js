importScripts("/static/js/dexie.js");
importScripts("/static/js/db.js");

const CACHE_VERSION = 2.4;

// const CURRENT_CACHE = `v${CACHE_VERSION}`;
const CURRENT_CACHE = {
  static: `s-v${CACHE_VERSION}`,
  dynamic: `d-v${CACHE_VERSION}`
};

self.addEventListener("install", event => {
  // console.log('installing service worker');
  event.waitUntil(
    caches.open(CURRENT_CACHE["static"]).then(cache => {
      cache.addAll([
        "/",
        "/static/css/materialize.min.css",
        "/static/js/app.js",
        "/static/js/dexie.js",
        "/static/js/materialize.min.js",
        "/static/css/vazir.css",
        "/static/css/style.css",
        "/offline.html"
      ]);
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (CURRENT_CACHE["static"] !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", event => {
  // console.log(event);
  let url = "http://roocket.org/api/products";
  if (url.indexOf(event.request.url) != -1) {
    return event.respondWith(
      fetch(event.request).then(response => {
        let cloneResponse = response.clone();
        cloneResponse.json().then(res => {
          let products = res.data.data;
          products.forEach(product => {
            db.products.put(product);
          });
        });
        return response;
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request)
          .then(networkResponse => {
            // console.log(networkResponse);
            caches.open(CURRENT_CACHE["dynamic"]).then(cache => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            });
          })
          .catch(err => {
            return caches.open(CURRENT_CACHE["static"]).then(cache => {
              return cache.match("/offline.html");
            });
          });
      })
    );
  }
});

self.addEventListener("sync", function(event) {
  console.log("background-sync",event);
  if (event.tag == "task-1") {
    event.waitUntil(doSomthing());
  }
});

// Functions

async function doSomthing() {
  console.log("run somthing");
}
