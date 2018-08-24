importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

console.info('cache mahdi');




workbox.routing.registerRoute(
    "http://roocket.org/products",
    workbox.strategies.cacheFirst()
);


workbox.precaching.precacheAndRoute([]);





self.addEventListener("sync", function (event) {
    console.log("background-sync", event);
    if (event.tag == "sync-new-products") {
        event.waitUntil(doSomthing());
    }
});

// Functions

async function doSomthing() {
    db.syncProducts.toArray()
        .then(products => {
            products.forEach(product => {
                let fd = new FormData();
                fd.append('title', product.title);
                fd.append('body', product.body);
                fd.append('image', product.image, Date.now() + '.png');
                fd.append('price', product.price);

                fetch('http://roocket.org/api/products/store?api_token=kDVf6JxVeqVK0OkiZlsnFbEo0eDHFJoOrnqj5LBlijUDS0BmDewpGJJDdvAY', {
                    method: 'POST',
                    body: fd
                })
                    .then(res => res.json())
                    .then(res => {
                        console.log('response on the sync', res);
                        if (res.status == 'success') {
                            db.syncProducts.where({ title: product.title })
                                .delete()
                                .then(() => console.log('Delete item from syncProduct', product.title));
                        }
                    }).catch(err => {
                        console.log('err from service worker sync proccess');
                    });
            })
        })
}