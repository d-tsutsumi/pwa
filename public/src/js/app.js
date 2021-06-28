var deferredPrompt;

if("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register('/sw.js', {scope: '/help/'})
    .then(function(){
      console.log("aaaaaaaaaaaaa")
    })
}

window.addEventListener('beforeinstallprompt', function(event) {
  //モバイルのホーム画面にWebサイトのインストール前
  event.preventDefault();
  deferredPrompt = event;

  return false;
})