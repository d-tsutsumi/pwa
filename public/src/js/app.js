var deferredPrompt;

if("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register('/sw.js', {scope: '/help/'})
    .then(function(){
      console.log("aaaaaaaaaaaaa")
    })
    .catch((err) => {
      console.log(err);
    })
}

window.addEventListener('beforeinstallprompt', function(event) {
  //モバイルのホーム画面にWebサイトのインストール前
  event.preventDefault();
  deferredPrompt = event;

  return false;
})

var promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve("test")
  }, 3000)
})

fetch('https://httpbin.org/ip')
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  })
fetch('https://httpbin.org/ip/post', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',

  },
  body: { message: 'Does this work?'}
})
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  })

  

promise.then((text) => {
  console.log(text)
})