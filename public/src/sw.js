self.addEventListener('install', function(event) {
  console.log("aaaaaaaaaaaaaaaaaaa")
})

self.addEventListener('active', function(event) {
  console.log("bbbbb")
  return self.client.claims();
})

self.addEventListener('fetch', function(event){
  //上書き
  event.respondWith(fetch(event.request));
})