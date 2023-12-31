'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c6e2583c8cfdd384260bb8b45fa59a8d",
".git/config": "8f9183bff5bb6d29ade155e40ab2b41a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6a43319f425e10a22d2fd21c5952c3b4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3129f3339e256a1b6fce3d084e953bbb",
".git/logs/refs/heads/main": "b645e0f7965922539cd83015ea36bbee",
".git/logs/refs/remotes/origin/main": "da0e17adee8dfabfd792a88d70c760cc",
".git/objects/00/6298ade727339073f67ac939292c9a2fa2b625": "60934fb7e48eca09a1a9ec9cfd41afee",
".git/objects/01/6e9399f6add1515e440e8eda957d9a1fcd2ce4": "9922322984039611702ef1208db4ede3",
".git/objects/02/92c6b81b18d5960fea5a88ef7d4c2abcac9c23": "ae8e9bf5d2ddbe86dd6eedb4c44879e8",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/07/c5aaef1ec28fb24659d26285d54913a3b93f29": "02b702994a3fbe0281c2c49ff371bed9",
".git/objects/0b/7cb13ba3768e9d840d75cc6d3c0442b2e346b2": "3d01bdc943b2cbd6b907533435991f65",
".git/objects/0c/0eb9a69024e0ce8fbc4568f236bf712c5ffbb3": "f11eda95763bc6bd97398f86165ff74d",
".git/objects/10/5ceee95c7a922f3ed79ac3929dded97e9e9ea5": "09d705c3643e81200ab27a51c8fc6128",
".git/objects/10/a2bceb5abc19a45509ee67a502105aaf18c702": "5ab99a5ae946edd322f13b37bd43973f",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1c/51e0275cc27a08a1988a77fc9f4751970df297": "9c557b8aae05475108a84c173dba12b0",
".git/objects/1c/8908c6cd9a9420a49d7ac7df69b5db7de3f268": "e702d6029d9c110b67bb7bb568188ef1",
".git/objects/22/95cea2ded254f8a10b89ab380794e6636478c7": "35e3cea0520f96bf85d8d152d18ea595",
".git/objects/23/4c58d3e7c6b66623b0f840067ff05b6ab55e95": "7e8f8d63092a2a7f13add4d4f68d1f5c",
".git/objects/24/7004718cdb2d002b997e489f40987e02bf6185": "50eaed77890ec300057ab2ea4524a59e",
".git/objects/24/a3c40add7449cc5e39054df471c30b928d1493": "060c1281632b54fe89eeb13a52875228",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/fe545d0d86303fe7310311339bc79fdd76fda9": "3498cfc2e37c7c33e26c043b5abe90ef",
".git/objects/37/5a0669b97324cc57c31703832783c6a55c3438": "9c569695cc755831053d440c0cf47ab6",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/d18c89c6706137bf58b799c64cd5bae966db45": "6964e3587dabe343a4049eba929e6308",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3d/5803455d5320f9f50338ffd2678babec68f7b6": "d728aa90ee904fa8e98532fc34e88c46",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/8e8d574852fe617f1d751f30e51bb7d24e9530": "ae91b3d6cf956b715b58ae88b62d4e1d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/46f5e0f67ab1d8f576c8cf98d4f557c86d8042": "383b331cd7525f9d3a0401bf92ccbe8e",
".git/objects/4b/042787f0762ac9b188b492ea69d0fc5ad7fff3": "1dbac419b4e3de0ef7a10065735534fa",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/50/7c91d69bc195effda8d2c3a45652d3053b8f3e": "57660cab88fe47a555779e51e3f208da",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/ca341f11d617133affda2614ea18850550f1bf": "64634a68442a17d93cd1b434afe36814",
".git/objects/5f/977888f20cbba186e3524b4b8c50c5892efedb": "527410811b408cb58ac83c2413193bdc",
".git/objects/63/59bbfeb49f5b21f5cf165e445c8b95b862eba5": "90724aa286655c924f087223a6d7d5e0",
".git/objects/65/b6b0693287b8a59535fdcd4808e3dd30708c77": "bf1ae80c8ac8857a98cf445714e31f16",
".git/objects/67/2ebfa6395fb82a9218508193b5ead2c55dd486": "353907a63d9a4f341ff843caac053cea",
".git/objects/67/76b66aabe40468fb9c21209c79be97bd0417be": "a6080f8266f8b4da41c2d58f576aae9b",
".git/objects/68/ad7826ba37a81be49f8b0315e929f8c387da73": "2f931664443bf553c6a7261198a375a6",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6d/6dc7317f9da7aa835039fceba16bc13ab1dc2f": "5a6811e326c2ba3eb56c8e7f6b59d3f3",
".git/objects/6e/3c0e76b4004e0768709169ea116fd0419634a6": "a45db0ccefd12e70d290b400374e3727",
".git/objects/70/f6c354497a8044417bb0cd8785365f32130224": "ca784211b2f4d0658d82b3233cdb8195",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/2b0796d25866aef30476b3a2d77921fa039671": "1de18f5a670fe0718562d0d09b27e080",
".git/objects/77/a8e8dbd821f23ec15b7af6cff027fc62256d01": "1f5bab407e13ff3b7b25075d5b42632d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/ecd555570fe1303a35f3d8e1de039a32c59dbd": "0127aeb7a1b46bac4f2f27e18d663c89",
".git/objects/83/782d2f919927d685b6cf73564eda33ac3361ef": "85378f2db1c77f269dbd56ba270b0ec6",
".git/objects/86/4fdfb8e9ff570baa4fb92700bc548a33b5f325": "b8f21e8b9fcf2c12f27d56373e4a842f",
".git/objects/87/0eb0e6e92a9cf632e3480939ddda687d8387e9": "eecbbdde3a806e1bd4461964c32c5895",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/68a333cbae0d8105993b22ce549e3c2f46d81b": "f854254d073e04c22e52de1f13cec207",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/97/dfb0198723a2000456d23c3baf09f968e27232": "dca55b6464172d5796f2956922c83d83",
".git/objects/97/ee0403d2daafb4c1ae1fc6bc5145c3f5d3099e": "3c7a26c0a4c3a71c9bca3b3ed21a9199",
".git/objects/99/30a7aaf39e05da346757d1d53d45c24036e89f": "0a0f447ac576b62efa922a7e099f7d7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/b49e30e4542ea72355e1433897d13a9e6d3126": "4f2f3f177896501b70c98999d79b9afa",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b3/297eff35bdb05265d392cc38a8596c2a8c06fc": "42bca46e350c0e12e2de799ca2e2e841",
".git/objects/b3/bc5cfc2184d2b49d27974e9d0c0fca5d150c31": "024f4b8dc98ab29b0f618985d035b6b3",
".git/objects/b4/c82a1005877726f28e195caecbfba28baff46d": "6f38d40f9d96534944cb383773727ae2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/9507f4f7d6cac5b3e9ae935e810045069de0a0": "bdf5be4a050d218038b73e8ab1086ff9",
".git/objects/c1/17e505d95d59a0395526d8f89cf9cf82f7623f": "39873462a3bf94b6f5d8ce242fc2bf4f",
".git/objects/c1/fdc92b5cc9d08ead48381ec81bfbbbe61f9b5a": "f50175e392ecf9fc10c0b9972ad324fc",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/ea0c18e35986c99a7833c50ddb5d6622861b38": "821efa14d4c7157a6b3be8ce1e96599f",
".git/objects/ca/99cae9eca4788bc22fcaa37eba809279681c01": "b14aeaa960b815281c6fad7b5eccf9e9",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/79007543281a33e15c7c91e2bda6bdf4701a7a": "849ebac426c90343fb2c8476eb702072",
".git/objects/d0/944e6000d85a9608560928494510c863711f4d": "76c5bd0a2a389f5da3a004e9b0cefff0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/753c4a54911495f178456ecd7c4e1890379275": "5314d19480411a26d95ee408590186ce",
".git/objects/df/f1eae32da1e43f5d08ba2efc2659fa2268c89d": "5e4ceeb72d61f91f4a67ad543a9ddbe6",
".git/objects/e0/bd962c0ef1633d1cfb2ffcf94acb1f033b6065": "1dd5df64d3063d4b3c6f460a81183777",
".git/objects/e1/c505131841a1c6c0ba5f9e17ddaceafad822b9": "3a2c7c953ce74f03cdbbd5aa6831182b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/5547346abad15de7c6358da548a2bfa8780a0e": "e741a881ac47acde9ded4b23f289a802",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/21749b7104fe0bd807964f203e29db7a5a9de4": "492357029393619c726a1cdf3dd7d822",
".git/objects/ee/088350dc4ca8f292fae117b835e707af84a024": "9ebdcfd9967bb69f4c44423d36528c18",
".git/objects/ee/99547b4b1bfe379bfd9a9f47a6b0e64f96587d": "16358b3afef749dc1fd4485ff939ac41",
".git/objects/ef/d61f9afb578d4bce49e66f16d4c632cdc7c0ce": "7e0ad15cb2235ffa88cc4526bacc5214",
".git/objects/f2/5f9312c2a1f93be357b6dab6540bb00b10fbf8": "b9673ad5f92c6a3be32a2df994be2537",
".git/objects/f4/b5121810e52a717d065348e19dfee37a4a267f": "e32ddf9dc506aa88a5cded5c354258e0",
".git/objects/f5/6b791aaa0c12e9f530cbac57db693768e343ca": "bacdc803b386490bc4d64ae11d52c9fd",
".git/objects/fb/4eb94d83f7212db0855d1ff462cf83b6fc7910": "527ee913309f33c09800b4e8a0b2ab31",
".git/objects/fb/cf7a6d7a9700bd4abcdabe66bcb7ca3e574a01": "c114680dfee706e8be9d5539124c5a3f",
".git/objects/ff/b5f29658d545ac6236800bf34f977aecef085b": "40677f7d26e7171576b7f7653ffd1de3",
".git/refs/heads/main": "5337873f750859cc57c4a8ff34ae9daf",
".git/refs/remotes/origin/main": "5337873f750859cc57c4a8ff34ae9daf",
"assets/AssetManifest.json": "9d9c5a9b50e66de57de507f0646b7f1f",
"assets/assets/chanting_audio.mp3": "9e6cfadbd3188714d34f85f0ae66f982",
"assets/assets/download.png": "c649666b945bd7e0b1fbb680ab34a7c1",
"assets/assets/gonogo.png": "12e23039c1ac6288ccb1dcb8f68ee697",
"assets/assets/Group%25203890.png": "fe2a169b3a492aae784359866ba94ca5",
"assets/assets/instructions.png": "5d9634e07f6f87c949b1df34347016eb",
"assets/assets/IntroVideo.mp4": "3189c82c94d5e554cc6276944a33b8b2",
"assets/assets/logout.png": "961e41c4658c3255c533fc3bff45934f",
"assets/assets/meditation.png": "f3ed4e3034d62ddd17227be11b8fd370",
"assets/assets/practice.png": "0410d92843f3c439154ca6fde09ec9bc",
"assets/assets/splashimg.jpg": "07d432ebba0e21cc19dab10ff0804c78",
"assets/assets/stroop.png": "e4785af3a29d3aef0f06588fa0d567db",
"assets/assets/trial.wav": "f8fc2935e6d8b6992a2a4bdf8fb65c42",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1e5c74c8fd27efbc2fd587fb5edf099f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "6cd0fa87056103ef6657fca735efb1e9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "92889757d390371c4e18fbc6583b6722",
"/": "92889757d390371c4e18fbc6583b6722",
"main.dart.js": "4097a7e0ea8076a71c211847801a4511",
"manifest.json": "ba40c4737dee6a77671104b056f3d88d",
"version.json": "1684266c91dbaddc895644e559376edd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
