'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "dfe41458c1f99653fa2c7aa04778e047",
"assets/AssetManifest.bin.json": "beaf15e013cb5a3724be474940b925ba",
"assets/AssetManifest.json": "1a69eb72c0c8a334607b96cfe6ea2575",
"assets/assets/fonts/Changa/Changa-Bold.ttf": "824663a52d6a4f91fa2f4fc1487ac812",
"assets/assets/fonts/Changa/Changa-Light.ttf": "50d36c726372eebdd4f3547a2a962256",
"assets/assets/fonts/Changa/Changa-Regular.ttf": "a3bd1c455839c659335ff3d69774a2e1",
"assets/assets/fonts/googlefonts/notoKufiArabic.ttf": "8ae7c85c9dadd02e28302f6580fe18b6",
"assets/assets/fonts/googlefonts/poppins.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/googlefonts/poppins_bold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/googlefonts/tajawal.ttf": "79bb19e04937c19974260fcb4128270e",
"assets/assets/fonts/googlefonts/tajawal_bold.ttf": "6b10b55e4df612910047b7e5d596a9d5",
"assets/assets/fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Light.ttf": "fc8d66d7803c5703326895c99f36aa39",
"assets/assets/fonts/IBM_Plex_Sans_Arabic/Markazi-Regular.ttf": "ea1c171861f2511814c6665eed2cd1fb",
"assets/assets/fonts/Lato/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato/Lato-Light.ttf": "2bcc211c05fc425a57b2767a4cdcf174",
"assets/assets/fonts/Lato/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/icons/cities.jpg": "1665278ebbc3d8c01e4608d711346924",
"assets/assets/icons/city.png": "580df2d32d510a9fe13301cdfa489a71",
"assets/assets/icons/home.png": "9cd17f838c1b540c8abd98bc4dc2ed4c",
"assets/assets/icons/import.png": "95673710c7ab3512fac69b6dc839f84f",
"assets/assets/icons/materials.png": "374d1e9429045b28977627a7f57ecbd7",
"assets/assets/icons/notification.png": "79d5a9ace9987a05d4a45e770e6d3b3d",
"assets/assets/icons/open_app.png": "9978c7b46621e5be605eb5b53d639e5f",
"assets/assets/icons/order.jpg": "0a7d056800468d0c2f58d3d1938a2048",
"assets/assets/icons/password.png": "ff031dc8c0ea3068f2b3cec1a7d0476a",
"assets/assets/icons/process.png": "de23cba450e316d8be43a1f4eb09c9cd",
"assets/assets/icons/request.png": "a7225ba878526d44828f0edee5beadcf",
"assets/assets/icons/resetPassword.svg": "345c09f98f07922633e8098ccfa37a39",
"assets/assets/icons/setting.png": "a195c84347c6d8c3b839a73e908818e9",
"assets/assets/icons/user.png": "4e7daa217ec431abbf27594041f0fd3e",
"assets/assets/icons/users.png": "9639a2c0b3dd3c16bf86b1396394cba9",
"assets/assets/icons/user_group.png": "d27a07cc4d53f8720b95a2882ea5fde7",
"assets/assets/icons/workflow.jpg": "d49f0b7880118292528fd55e34cefd7b",
"assets/assets/images/applogo/app_icon.gif": "c53c756d160c35036854758c3450ca57",
"assets/assets/images/applogo/app_icon.png": "c42d062d7cb37252a58da6c8f9ce90b1",
"assets/assets/images/applogo/app_logo.gif": "2e0c182506ea3e73cbcb5b4c6941c072",
"assets/assets/images/applogo/app_logo.png": "ba7223000147584a631d1a7ba9a3715c",
"assets/assets/images/applogo/app_onboarding.png": "819478b68f5d15e4d205760cfc00b965",
"assets/assets/images/applogo/report_logo.png": "c271cd118c51599453e0c2bfc95e6033",
"assets/assets/images/common/default_image.png": "4b1287b9af362426b38e37aee4a16015",
"assets/assets/images/common/loading.gif": "0ac274e561067ee9d830b19fb13dac5c",
"assets/assets/images/common/loading_circle.gif": "017b174fe3e966c9ee36743b035ae4d2",
"assets/assets/images/common/main_bottom_left.png": "f1f07cc7babca32fa09a2ddb0cdf0a64",
"assets/assets/images/common/main_bottom_right.png": "f247bbfe67da1a881c7f6bc87cfff3b7",
"assets/assets/images/common/main_top_left.png": "820d8fe08bd4f16e6e3e4de599590fae",
"assets/assets/images/common/main_top_right.png": "93aba9d119845357933c0c59e32e9e44",
"assets/assets/images/common/page_view1.jpg": "406e15815cf62eab7b09886ca1f68303",
"assets/assets/images/common/page_view2.png": "8bcd060e9a320bb093f7789d6cded4dd",
"assets/assets/images/common/page_view3.jpg": "b2caffc6e2e80e0bb737361195a527f9",
"assets/assets/images/common/person.png": "e8c00b50b81afb0f0cdb26c05b72adc8",
"assets/assets/images/common/saeed.jpg": "12ff00e25be69b2306e9f47e47b5feb3",
"assets/assets/images/common/shop_img_defult.png": "f6941d7cd31c1046281a1d732260148b",
"assets/FontManifest.json": "ce0a7fe30716ae16a5d2f49ee1c7d9f4",
"assets/fonts/MaterialIcons-Regular.otf": "8470ed8f6fbaa4e290bef2971b03feeb",
"assets/NOTICES": "603f06aa2900aadd2af0df42df173f22",
"assets/packages/awesome_dialog/assets/flare/error.flr": "e3b124665e57682dab45f4ee8a16b3c9",
"assets/packages/awesome_dialog/assets/flare/info.flr": "bc654ba9a96055d7309f0922746fe7a7",
"assets/packages/awesome_dialog/assets/flare/info2.flr": "21af33cb65751b76639d98e106835cfb",
"assets/packages/awesome_dialog/assets/flare/info_without_loop.flr": "cf106e19d7dee9846bbc1ac29296a43f",
"assets/packages/awesome_dialog/assets/flare/question.flr": "1c31ec57688a19de5899338f898290f0",
"assets/packages/awesome_dialog/assets/flare/succes.flr": "ebae20460b624d738bb48269fb492edf",
"assets/packages/awesome_dialog/assets/flare/succes_without_loop.flr": "3d8b3b3552370677bf3fb55d0d56a152",
"assets/packages/awesome_dialog/assets/flare/warning.flr": "68898234dacef62093ae95ff4772509b",
"assets/packages/awesome_dialog/assets/flare/warning_without_loop.flr": "c84f528c7e7afe91a929898988012291",
"assets/packages/awesome_dialog/assets/rive/error.riv": "e74e21f8b53de4b541dd037c667027c1",
"assets/packages/awesome_dialog/assets/rive/info.riv": "2a425920b11404228f613bc51b30b2fb",
"assets/packages/awesome_dialog/assets/rive/info_reverse.riv": "c6e814d66c0e469f1574a2f171a13a76",
"assets/packages/awesome_dialog/assets/rive/question.riv": "00f02da4d08c2960079d4cd8211c930c",
"assets/packages/awesome_dialog/assets/rive/success.riv": "73618ab4166b406e130c2042dc595f42",
"assets/packages/awesome_dialog/assets/rive/warning.riv": "0becf971559a68f9a74c8f0c6e0f8335",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6fd8d1b9099f6c8ef5e6980f6d534690",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "66419e3fbbbf538e15b800f411375ea1",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "91b5eba55d418a940bf2a4c4e0b4df23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "668baab6ba7f8160b705dc40bb8bcfe9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "1a5a853f8ea3e6bba6bf27ff18f94ead",
"firebase-messaging-sw.js": "24c1413ece8aac6c6e71534f33cbd133",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d09a9937bd13871402b35a6f8e8d2388",
"icons/Icon-192.png": "db908bf942cd49c6b9f6fac32560b10b",
"icons/Icon-512.png": "decc54c53bd23581c94ef640098d9fb1",
"icons/Icon-maskable-192.png": "db908bf942cd49c6b9f6fac32560b10b",
"icons/Icon-maskable-512.png": "decc54c53bd23581c94ef640098d9fb1",
"index.html": "db999766fe2279ee367d2dd89b681a81",
"/": "db999766fe2279ee367d2dd89b681a81",
"main.dart.js": "03087e08dbce0941a27df00610dc6550",
"manifest.json": "cba31c3886346332cf685aac3e082d36",
"version.json": "4199ba1637d07d4916d53599b6fb34dd"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
