
importScripts('./src/js/idb.js');
importScripts('./src/js/utility.js');
importScripts('./src/js/fetch.js');

//workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
workbox.setConfig({ debug: true });
workbox.routing.registerRoute(/.*(?:googleapis|gstatic)\.com.*$/, workbox.strategies.staleWhileRevalidate({
  cacheName: 'google-fonts',
  cacheExpiration: {
    maxEntries: 300,
    maxAgeSeconds: 60 * 60 * 24 * 30
  }
}));
workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources',
  }),
);
workbox.routing.registerRoute('https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css', workbox.strategies.staleWhileRevalidate({
  cacheName: 'material-css'
}));

workbox.routing.registerRoute(/.*(?:firebasestorage\.googleapis)\.com.*$/, workbox.strategies.staleWhileRevalidate({
  cacheName: 'post-images'
}));

workbox.routing.registerRoute('https://valores-2585e.firebaseio.com/posts.json', function(args) {
  return fetch(args.event.request)
    .then(function (res) {
      var clonedRes = res.clone();
      clearAllData('posts')
        .then(function () {
          return clonedRes.json();
        })
        .then(function (data) {
          for (var key in data) {
            delete data[key].image;
            writeData('posts', data[key])
          }
        });
      return res;
    });
});

workbox.routing.registerRoute(function (routeData) {
  return (routeData.event.request.headers.get('accept').includes('text/html'));
}, function(args) {
  return caches.match(args.event.request)
    .then(function (response) {
      if (response) {
        return response;
      } else {
        return fetch(args.event.request)
          .then(function (res) {
            return caches.open('google-fonts')
              .then(function (cache) {
                cache.put(args.event.request.url, res.clone());
                return res;
              })
          })
          .catch(function (err) {
            return caches.match('/offline.html')
              .then(function (res) {
                return res;
              });
          });
      }
    })
});

workbox.core.setCacheNameDetails({prefix: "pwa"});


/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

self.addEventListener('sync', function(event) {
  console.log('[Service Worker] Background syncing', event);
  if (event.tag === 'sync-new-posts') {
    console.log('[Service Worker] Syncing new Posts');
    event.waitUntil(
      readAllData('sync-posts')
        .then(function(data) {
          var i = -1;
          for (var dt of data) {
              
               var synData = {
                     id: dt.id,
                     image: dt.image,
                   lele: dt.lele,
                     tag_num: dt.tag_num,
                     geolocation: dt.geolocation,
                     cod_Tree: dt.cod_Tree,
                     data: dt.data,
                     hora: dt.hora,
                     user: dt.user
               };
             
             
             console.log(synData);
           
            fetch('https://valores-2585e.firebaseio.com/posts.json' , {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
        mode: 'cors',
              body:JSON.stringify(dt)
            })
              .then(function(res) {
                console.log('Sent data', res);
                
                if (res.ok) {
                  res.json()
                    .then(function(resData) {
                     
                      i++;
                      console.log(dt, '  ---> ', data[i].id);
                      deleteItemFromData('sync-posts', data[i].id);
                    });
                }
              })
              .catch(function(err) {
                console.log('Error while sending data', err);
              });
          }

        })
    );
  }
});