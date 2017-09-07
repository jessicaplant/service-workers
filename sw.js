/**
 * Created by jessi on 07/09/2017.
 */
self.addEventListener('install', function(event) {
    var CACHE_NAME = 'my-site-cache-v1';
    var urlsToCache = [
        '/',
        '/img/pic.png'
    ];

    self.addEventListener('install', function(event) {
        // Perform install steps
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function(cache) {
                    console.log('Opened cache');
                    return cache.addAll(urlsToCache);
                })
        );
    });
});