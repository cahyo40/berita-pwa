self.addEventListener('install', function (event) {
    console.log('SW Installed');
    event.waitUntil(
        caches.open('static')
            .then(function (cache) {
                // cache.add('/');
                // cache.add('/index.html');
                // cache.add('/js/app/js');
                cache.addAll([
                    '/',
                    '/index.html',
                    '/app.js',
                    '/img/background.jpg',
                    '/manifest.json',
                    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
                    'https://fonts.googleapis.com/icon?family=Material+Icons',
                    'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.js',
                    'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
                    'https://code.jquery.com/jquery-3.3.1.min.js',
                    'https://newsapi.org/v2/top-headlines?country=id&apiKey=7c60d317fc4949c9b4952314cb890d89',
                ]);
            })
    );
});

self.addEventListener('activate', function () {
    console.log('SW activated');
});

self.addEventListener('fetch', function (e) {
    console.log('[ServiceWorker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});
