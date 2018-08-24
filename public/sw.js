importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

console.info('cache mahdi');

workbox.routing.registerRoute(
    "http://roocket.org/products",
    workbox.strategies.cacheFirst()
);


workbox.precaching.precacheAndRoute([
  {
    "url": "about.html",
    "revision": "c0759bfc7f9a8497528b27685a0242c6"
  },
  {
    "url": "index.html",
    "revision": "87444aa340901e2bd55df357214b0ab5"
  },
  {
    "url": "manifest.json",
    "revision": "f9683b34920e8639c46862855bf07efb"
  },
  {
    "url": "offline.html",
    "revision": "ccdd66b81c31e9268ff3e815302374b1"
  },
  {
    "url": "product/create.html",
    "revision": "756d5467a2f05c5c9dc536c0ba70919d"
  },
  {
    "url": "service-worker.js",
    "revision": "a2ff449a7c0be3fe588a101514038833"
  },
  {
    "url": "static/css/basscss.min.css",
    "revision": "2647367ad7587cfc6dc326e96160e9ef"
  },
  {
    "url": "static/css/materialize.min.css",
    "revision": "fba7562ce0e05fd10137a755b7f8d12b"
  },
  {
    "url": "static/css/style.css",
    "revision": "4620b176abb2e9832c3defca00e0f5de"
  },
  {
    "url": "static/css/vazir.css",
    "revision": "a9be755faa59533986f224399b143230"
  },
  {
    "url": "static/fonts/eot/Vazir-Bold.eot",
    "revision": "49d66f2129ec5a2c871a1a9b1da4e0e0"
  },
  {
    "url": "static/fonts/eot/Vazir-Light.eot",
    "revision": "6c17fde99035459f19a04ce73a5d86a8"
  },
  {
    "url": "static/fonts/eot/Vazir-Medium.eot",
    "revision": "30edd8cac2f33c832de7235e1f7ffb38"
  },
  {
    "url": "static/fonts/eot/Vazir-Thin.eot",
    "revision": "9c2fbfddf17eb4bba62aac32d1373550"
  },
  {
    "url": "static/fonts/eot/Vazir.eot",
    "revision": "385001fd4e1807f9a3d55d2697d0c994"
  },
  {
    "url": "static/fonts/ttf/Vazir-Bold.ttf",
    "revision": "f7cd2d59ce4d3c5b23d6089d5b9059fd"
  },
  {
    "url": "static/fonts/ttf/Vazir-Light.ttf",
    "revision": "0d1fb937333936fd95105b2f6848c23f"
  },
  {
    "url": "static/fonts/ttf/Vazir-Medium.ttf",
    "revision": "bc4e0a9c5aa380bb544944e8907ae33f"
  },
  {
    "url": "static/fonts/ttf/Vazir-Thin.ttf",
    "revision": "20735671d84d2f5fc1910479915a1720"
  },
  {
    "url": "static/fonts/ttf/Vazir.ttf",
    "revision": "bed047dac8bc9d762b174a96f09f4837"
  },
  {
    "url": "static/fonts/woff/Vazir-Bold.woff",
    "revision": "1cb249673adb6547cfca54ccd2b20bdf"
  },
  {
    "url": "static/fonts/woff/Vazir-Light.woff",
    "revision": "f319ea46d2d69188e185b59503d759eb"
  },
  {
    "url": "static/fonts/woff/Vazir-Medium.woff",
    "revision": "5eebe686dabffbc119444796bb974459"
  },
  {
    "url": "static/fonts/woff/Vazir-Thin.woff",
    "revision": "a5d3d58bd8f581c119008cc57ed13d34"
  },
  {
    "url": "static/fonts/woff/Vazir.woff",
    "revision": "5c7abcf135f2445506d83594d50db435"
  },
  {
    "url": "static/fonts/woff2/Vazir-Bold.woff2",
    "revision": "64a844e2cf2a6d5952416f69660ac1ce"
  },
  {
    "url": "static/fonts/woff2/Vazir-Light.woff2",
    "revision": "0ba2d2448fb1f4fe1c62d135cd209506"
  },
  {
    "url": "static/fonts/woff2/Vazir-Medium.woff2",
    "revision": "7b13c9b5fdc696b480a739a96c835568"
  },
  {
    "url": "static/fonts/woff2/Vazir-Thin.woff2",
    "revision": "946cff8281d86904ed922a874c993b6e"
  },
  {
    "url": "static/fonts/woff2/Vazir.woff2",
    "revision": "db055c8873d217d4a8b02f13b3618de1"
  },
  {
    "url": "static/icons/homescreen144.png",
    "revision": "6a61bf68fa20662e68dba7edd0bc8161"
  },
  {
    "url": "static/icons/homescreen168.png",
    "revision": "68fd220823650c65d9bd52f4644b2453"
  },
  {
    "url": "static/icons/homescreen192.png",
    "revision": "57f9ccd0b6404603bf1a93547f0c4c77"
  },
  {
    "url": "static/icons/homescreen256.png",
    "revision": "06c70dcc083c2217b11a1c9a9071d0f9"
  },
  {
    "url": "static/icons/homescreen48.png",
    "revision": "85ed7f938de7265264059f5ca48fd81a"
  },
  {
    "url": "static/icons/homescreen512.png",
    "revision": "50b60ae1b47d3bdc08ea1fc2c9966172"
  },
  {
    "url": "static/icons/homescreen72.png",
    "revision": "fe18ff7fdb141fa82b508b2965dc5989"
  },
  {
    "url": "static/icons/homescreen96.png",
    "revision": "38b10a5506df9517f6dfda67784894a3"
  },
  {
    "url": "static/images/16766.jpg",
    "revision": "5457ac4be9e824bc3c9c1ffb56908624"
  },
  {
    "url": "static/js/app.js",
    "revision": "1b7583cfc0236933455542dda07022e6"
  },
  {
    "url": "static/js/db.js",
    "revision": "f8f1caa46bd6a079e434b58f67f98ce9"
  },
  {
    "url": "static/js/dexie.js",
    "revision": "e11471d166ab9985fcc3defcb6e1ba34"
  },
  {
    "url": "static/js/materialize.min.js",
    "revision": "d923fe16aca408daba23ca2c7795e08b"
  },
  {
    "url": "sw-basic.js",
    "revision": "e312003d08c77e1a705426074999a4c9"
  }
]);
