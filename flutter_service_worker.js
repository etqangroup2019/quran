'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "39932cc5e947b4b61fcc87ff0fc6f9c1",
"assets/AssetManifest.bin.json": "50be0b8ab23375c31b35cbd1748fee1e",
"assets/AssetManifest.json": "adbd2b137cd10c4c01ea5796d533970a",
"assets/assets/audio/athkar_click.wav": "7b9b746d9346f651b911a71f4e495e2b",
"assets/assets/audio/athkar_complete.wav": "b6322ea6b9a627d775b76bedae511913",
"assets/assets/data/quran_asbab_nuzul.json": "850543586db68c3805e0347225fac22f",
"assets/assets/data/quran_words_meanings.json": "37d34dce708066bf9b33d4259bd0355c",
"assets/assets/data/tajweed/README.md": "f2b0d0b80c8fd11657bd2d609ebc7f58",
"assets/assets/data/tajweed/tajweed.hafs.uthmani-pause-sajdah.json": "c6a61a5b436213ea7576c45035bc186b",
"assets/assets/fonts/Amiri-Bold.ttf": "9d358a17fee722a979ee2f314e342937",
"assets/assets/fonts/Amiri-Regular.ttf": "ec11e84334894cf790512622f57e3190",
"assets/assets/images/%25D9%2584%25D9%2582%25D8%25B7%25D8%25A9%2520%25D8%25B4%25D8%25A7%25D8%25B4%25D8%25A9%25202026-09-22%2520145127.png": "8d89c4ae2a263a2bf776a8dc6c07d7b4",
"assets/assets/images/%25D9%2584%25D9%2582%25D8%25B7%25D8%25A9%2520%25D8%25B4%25D8%25A7%25D8%25B4%25D8%25A9%25202026-09-22%2520145202.png": "ee379705309ff090740ad7338db980fc",
"assets/assets/images/%25D9%2584%25D9%2582%25D8%25B7%25D8%25A9%2520%25D8%25B4%25D8%25A7%25D8%25B4%25D8%25A9%25202026-09-22%2520145220.png": "08d0633a05a993ba9ab11e98be50ceea",
"assets/assets/images/%25D9%2584%25D9%2582%25D8%25B7%25D8%25A9%2520%25D8%25B4%25D8%25A7%25D8%25B4%25D8%25A9%25202026-09-22%2520145233.png": "390b7e4fcbb49d8b5e61292a0b0d847f",
"assets/assets/images/%25D9%2584%25D9%2582%25D8%25B7%25D8%25A9%2520%25D8%25B4%25D8%25A7%25D8%25B4%25D8%25A9%25202026-09-22%2520145246.png": "23d01e722aa7b2bb71da7c024209ea58",
"assets/assets/images/%25D9%2584%25D9%2582%25D8%25B7%25D8%25A9%2520%25D8%25B4%25D8%25A7%25D8%25B4%25D8%25A9%25202026-09-22%2520145308.png": "b35758ba028ec5b91a6ca1c6c2b311e2",
"assets/assets/images/%25D9%2584%25D9%2582%25D8%25B7%25D8%25A9%2520%25D8%25B4%25D8%25A7%25D8%25B4%25D8%25A9%25202026-09-22%2520145338.png": "e11b4b881b6ae995c02a773232f6acfb",
"assets/assets/images/%25D9%2584%25D9%2582%25D8%25B7%25D8%25A9%2520%25D8%25B4%25D8%25A7%25D8%25B4%25D8%25A9%25202026-09-22%2520145411.png": "e00a4b199e0f36066cd082b37814ce14",
"assets/assets/images/1080.png": "7ad0c98931321d83df159cc6365a2356",
"assets/assets/images/150.png": "b3585abc0aab4148f4e2f8166861b118",
"assets/assets/images/300.png": "90446aaeea38f50257fb39fd59086685",
"assets/assets/images/71.png": "0a1d102fd77ae9f0cb94253423a412be",
"assets/assets/images/app_icon.ico": "0bd6663c9217a336ffdcc923036d3dd3",
"assets/assets/images/app_icon.png": "66e1ba029c3fae2b79bfdfc939f2eb01",
"assets/assets/images/feature_graphic.png": "1a1542da2dff45fa4417e5dc4a0743f2",
"assets/FontManifest.json": "1ccb6dac4bbf283f2e1ef1cf3d48f891",
"assets/fonts/MaterialIcons-Regular.otf": "3137d4bcacf05c64b73a22cdb660c581",
"assets/NOTICES": "e214c05ca38404511807b548a1b1a53a",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/quran_data_kfgqpc_main/hafs/data/hafsData_v18.json": "f597b70476846ce13505191448486b06",
"assets/quran_data_kfgqpc_main/hafs/font/hafs.18.ttf": "18de60cc94623c2ebdcb30b17bdb34ad",
"assets/quran_data_kfgqpc_main/qaloon/data/QaloonData_v10.json": "6feb9a5365379a14cdb464ff6d7f2a2e",
"assets/quran_data_kfgqpc_main/qaloon/font/qaloon.10.ttf": "8dd1fe637902710c85f7fb4211d12c12",
"assets/quran_data_kfgqpc_main/warsh/data/warshData_v10.json": "44d9aa338325a76a91ff86573bf72a3e",
"assets/quran_data_kfgqpc_main/warsh/font/warsh.10.ttf": "adbf259782c6e0f4618413efdf874099",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "7ea473c162af64eea40127fccd37a085",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b2552e8565a1e7397e0e5f95d12a43b9",
"icons/Icon-192.png": "c4bfb7d27ebed41c6d164562b98bdb1e",
"icons/Icon-512.png": "e6c8324dae76f0a192295aa37c480de6",
"icons/Icon-maskable-192.png": "c4bfb7d27ebed41c6d164562b98bdb1e",
"icons/Icon-maskable-512.png": "e6c8324dae76f0a192295aa37c480de6",
"index.html": "0b17c6ffaad191326acc29f62687e717",
"/": "0b17c6ffaad191326acc29f62687e717",
"main.dart.js": "bbea85e00a4d8dc52c35a8ac86d55700",
"manifest.json": "751f6e98cba9b20502e6d61c54f1d95a",
"version.json": "e44ad9d1d96508dec7d76a18fd1d4717"};
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
