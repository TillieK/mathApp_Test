'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "53a9fcd79507f1621e07742729c4983d",
".git/config": "708a419cd137fab537841a3af0c862e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ba62cd373c3579293eebda300771b50c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5ec942fbdf4034aac2b15d8e73fa6387",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e7c3ef9dfda956661dab6792dc6bb311",
".git/logs/refs/heads/gh-pages": "35aa01638001987560b487e65e19e891",
".git/logs/refs/heads/main": "9288bd04309c77f43504cb3515101332",
".git/logs/refs/remotes/origin/main": "a630b250be924bf72d1f85b7f68524e8",
".git/objects/01/69ccda700bb723050ba935277661fc7a554e31": "9331482d99dccd39b8d2e518cf3b590c",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/8f630cbf31e60018a4171cbf1df0672e94f6ba": "4e444a6939d311a1806b5a3cb8635e18",
".git/objects/03/986cbefbea08f9361cf96f2e1afc4ab6da61e3": "c573ab45f302e0f1eb76162f494e6bd3",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/325d292e7b0dfefa3d4b5241a5de51182dcb8e": "b3bf2c1d462e80f0b0546ca8eda4d4ee",
".git/objects/0c/f78829d513867483e7f14b072c04a6ddab08c5": "a32b19b206d3a1bb8558121daabc7713",
".git/objects/13/af1d1273724c60a892f4f5b11ccc10c6adb68f": "017d1e409ccc436ee30917229313594b",
".git/objects/15/e5227bf5e3132c37cda1267e42915a4f94bd39": "86b11ef987152e4f832eb804953010aa",
".git/objects/17/aca9b67fad05b7dc30ef91ea5d82eb6e3dcf23": "539207fa73596c2af0172bb779ac02d6",
".git/objects/1b/47f0c7fcdc57c99233f6f0392257e2874fee98": "9b55e00df93a24785bea9949f5d0844b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/a7ea010206ee4da210a0f6df13b0e9a46060ff": "91172b67107c41cc43f2cb476c8f7b8f",
".git/objects/24/3b0cf41a3e422433953d501cbf975fc56402c6": "5e5df4076d2086182c205176c195397f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/7c6e078e128e8bdec6cb3d83156225d7b62f61": "4bf414cd141ad9eca98250e514db11f5",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2c/3e084961862a5849823512f3bc6f16a67431f0": "1d6a29973d43e195728ed236e32bdba7",
".git/objects/30/2644835cf16d53bf0c468a9aa590e25ff23eaf": "7ca634a7d426812d5a0c08029129b9cb",
".git/objects/3a/87938957cd478149c40d7abee05340392868d0": "5f64047f51dae04cacd49e80989a02b8",
".git/objects/3a/bc4d37dd1fd1720bf284de9e4bc81a99e972ce": "f219c3f28001aef9db73d49eef51645f",
".git/objects/3a/cfddb4961058296e860625e39f58089755031c": "3ef9156c937b5853e9cda24f83da1dc3",
".git/objects/3b/14f66bc6402f432a8d1ec2d1b2b42670617847": "8b614840a89814901c26f9ba731f9642",
".git/objects/44/485ae74c23055a3b79b562d944e2a183047c82": "72d571207332dda77c36697700632eb6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2ff01deb11f66c75f82233b252aebda9a8fa3a": "b87c6bf1625c79c253c5530406ee76e8",
".git/objects/4d/6beb9bb78a7a4fc1783c68f93880f5b63b1fb1": "f473bb876b5795102fd89c6e34f5263b",
".git/objects/53/2313aba0e1b20946c08e49d2c8d855fd5cbd93": "8d2adfe8ef635a83425ac4088ec1666a",
".git/objects/54/420727dc4c71216e7216d3fa2a6580034ac62c": "4ea483c7dcca1a99dee5a95838495d7a",
".git/objects/55/40070587a11976d0e57ed0e7e0a28f6be9b3f5": "6926abfa43c3d3710d8f643cd6c8ec51",
".git/objects/5d/2a090b46a92421e2909b16661b63c88673b940": "00634a236719d7225e44427d3c0ddeeb",
".git/objects/5d/c362f293024593bf617075f56685692d16d4c1": "894e66224a0b90a77e8ee785fc646853",
".git/objects/5d/cf1a6981cb26f8fa53aad299fc684c55d3b41d": "efea87703d10f06ce112c12a6d80530f",
".git/objects/61/669e83f56b56bc3f96f42a6dcf2934f1c85234": "289268e03c65db0a407b36267aa29721",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/71/743a3de4e98470086d465de2ce526663b029e2": "371eb6e4fab279870f21070f04c2fc84",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7b/5416f81073e8e4d7d4a640784a904b32484f34": "d605dc14c9f228b6745d2ecd41790552",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/83/d1766b79457f3f4025313946482f06f58f1ad0": "c4a96f1236e0133f85cfc34179fae7fc",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/8d4169d15d5d07d3417c109585e40410517d20": "b3641bccc609dad58253086c710ff3a8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0ddd61f428bb9400888d6161c4444ffe17d7a5": "87f97c20193317fdf05215ead2b10113",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b545663fd2529816f37559871ce6237da754f2": "50d15fd36f618c07fdac513899480616",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/ee573aedffe986299708ae9652d3ddf4f33115": "bb177eb72f1785d3492723d55704c5b5",
".git/objects/93/f6990d084c862d566053cfa7aa941d3217fa0c": "38b207065faa43d1346f4537ce158648",
".git/objects/97/793d316ea63dce90e1dfe0c77a48ff44801dea": "a9b79931e3abe2096f6db1d2a6aad6aa",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/f82f5cec94889701c0be3345936b049e7c736c": "d08000dee1896b250cc823f13270df87",
".git/objects/9d/0dc4aeb5c81c01ff6c3dfdbd4a47ed96834edb": "86e181e22305ca053ef4118f4885fed2",
".git/objects/9d/c57bfdba54e52444c75e3de81ace82f9936382": "020a3af55c9f4cb5868b49c6db37d448",
".git/objects/a0/0b49ad2f8f2f761f508d1c1ff95c54c775488c": "4a537663e1c0c7ee452b94f63325876f",
".git/objects/a5/ff2ed3c5cb0cb172d38378c568651c8a822074": "3bbba1f1b251fa94f3b71a1f8bb95a97",
".git/objects/aa/41ab7762fc04d16d5ee34cf5f0f3908edc7539": "e31a48d5c6e9169151ca6e5cb47c505f",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b5/dfd1d4de16285bca59ed5124c56a4d90fe4b13": "b83c2633b11755e0ba9fe15311baac4f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3a3da7229a3568a01badbcc292bc3999fb63bb": "4c6d52063cfdb3fb682dee03f7579969",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/b73393fa1232b2c3ea4fcc95ed6cc7512106d2": "9908483bb0a831aedfc9684269eb3287",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/e3337a3cde52d635538cbb1a85e757cd0b9b2b": "011b348f26ab9d02be4ca3898d6a99d2",
".git/objects/cd/ef6090a5aab540f9d2fd61b57d61d512f017d1": "26c69195a3cd9b3f159595e5b6feb91c",
".git/objects/d0/7cf53f60e26bd81b9f7cc5cae57b19691bce75": "04adfd7bfd29a1ea848b77451337206f",
".git/objects/d3/462c0100858bc25a63edd2401fe1a23d59a21d": "c7d7b21819a34eaf6f03c4293903a841",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/916793c6c897285b912cd6ac7d47c702ac2c60": "f3f7208b4342fa82bb3ce346a0f17641",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/59b6942c628d9ca53c54a448a5bf0480b6e42a": "05912d08742b3900d578e916b5487fda",
".git/objects/da/c4026fd15deb7fa442ac8241d0c33f91759228": "f955a3e999bb957925fc16c5bfffa6fa",
".git/objects/de/fef8a05e471a0bbf484ec79292e58a9ead8762": "023e006a9b43db4e1b80a27ce733ee6c",
".git/objects/e3/870905e9940d0caf88789405a5ae4b3c14244c": "53f46890f107b9114420c09e14e91c5c",
".git/objects/e5/ee590228f928a64b9778ab3ac1bf356b245626": "149d60a0a5cef350c14bbbcfe8701bb9",
".git/objects/e6/aec28c4cf33e6d2074df82bf0674d5923acdc4": "9242603049132b7a9a2f1b0d7a26cd08",
".git/objects/e7/90a174462de9187d5034cc90a4c8a643719e85": "bf1040a16db672d2d89c54c3179859a7",
".git/objects/eb/4190dbee3943576c4cb2d2eac1c05a0f558d38": "8aa395e3e8f62b09c94a38e1a49c7431",
".git/objects/eb/81607c431a48210a30d80742bf0d756824f38f": "377c1be77cb016202aea667fd3878c8c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ed/02a4835b0b72f63109325ee36383046f0061dd": "ad4b05596a7e4577edafc5d85d141693",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fd/7add404704fe58a02a72cf96a1a4d45f4049bd": "4bd63f389abd6d6d37984cc3ab2b3bc1",
".git/ORIG_HEAD": "429f3ba1e32518d76ab4d3876379a37b",
".git/refs/heads/gh-pages": "d9ec27176093c24e8b5f4eee775c20e8",
".git/refs/heads/main": "3dcf5a8c027ea515a40746b8e5967f88",
".git/refs/remotes/origin/main": "3dcf5a8c027ea515a40746b8e5967f88",
"assets/AssetManifest.bin": "8181d907f372c238e4de899fad228e6d",
"assets/AssetManifest.bin.json": "2c3eee7082e00a947c2451c8d17c4887",
"assets/AssetManifest.json": "fb60e24f745391605ecec3c1c38fcbcd",
"assets/assets/speech.js": "8534cd3eeff4942d83ca12728fccbfd9",
"assets/assets/voice_to_text.html": "a8d624444a8d81e180a49434dc708861",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "64b6403202fad28adba1b8b35072a1ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "79d411ce828c7970d4daf0fc5362be0d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fc8058d0c7ed521ee0f8cf43fe70cb06",
"/": "fc8058d0c7ed521ee0f8cf43fe70cb06",
"main.dart.js": "ba29ee4b1b239f431f3560e3a5d0eab6",
"manifest.json": "7a96409981b22ccac7e1f95e6d74fa37",
"version.json": "b5bf1eb4eadc08066b86a4c2327124e2"};
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
