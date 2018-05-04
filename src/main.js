import Vue from 'vue'
import {register} from 'register-service-worker'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueAwesomeSwiper from 'vue-awesome-swiper'
require('../public/src/js/promise.js')
require('../public/src/js/fetch.js')
require('../public/src/js/idb.js')
require('../public/src/js/material.min.js')
require('../public/src/js/utility.js')
import 'swiper/dist/css/swiper.css'
import VueMDCAdapter from 'vue-mdc-adapter';
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueMDCAdapter);
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.config.productionTip = false
window.Idd = ''
window.TagN = 0
window.GeoL = {
    lat: 0,
    log: 0
}
window.CodTree = 0
window.UsrN = ''
window.TimeStp = ''
window.PicI = ''
var $ = require('jquery')
var fireb = require('firebase')
window.firebase = fireb
var config = {
     apiKey: "AIzaSyByivj7SgCbgZMDCAmV8QwrI04PYeVwTBQ",
    authDomain: "valores-2585e.firebaseapp.com",
    databaseURL: "https://valores-2585e.firebaseio.com",
    projectId: "valores-2585e",
    storageBucket: "valores-2585e.appspot.com",
    messagingSenderId: "28824075006"
};
firebase.initializeApp(config);
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('This is executed once the timer is done!');
        reject({
            code: 500,
            message: 'An error occurred!'
        });
        //console.log('This is executed once the timer is done!');
    }, 100);
});
if (!window.Promise) {
    window.Promise = promise;
}
/*if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}*/
/*if ('serviceWorker' in navigator) {
 register('/service-worker.js', {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}*/
/*if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../public/service-worker.js').then(function () {
      console.log('Service worker registered!');
    });
  });
}*/


function updateUI(data) {
    for (var i = 0; i < data.length; i++) {
        writeData('trees', data[i]);
        //console.log(data);
    }
}
var myInit = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*/*',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    mode: 'cors'
};
var url = 'https://valores-2585e.firebaseio.com/trees.json';
var networkDataReceived = false;
fetch(url)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        networkDataReceived = true;
        window.furlf = data;
        // console.log(data.foto + '<???>' + jhg);
        console.log('From web FETCH 1 >', data);
        var dataArray = [];
        var uio = [];
        for (var key in data) {
            dataArray.push(data[key]);
            uio.push(data[key]);
            // writeData('trees', data[key]);
        }
        updateUI(dataArray);
        //window.ltt = uio[0];
        window.dados1 = uio;
        // console.log(uio.length + '<???>' + jhg);
        return window.dados1, window.furlf;
    }).catch(function (err) {
        console.log(err);
    });
//fetch('https://192.168.0.8/trash/trees',{  mode: 'cors'} )
//    .then(function (response) {
//        console.log(response);
//        //return response.json();
//    })
//    .then(function (data) {
//        // console.log(data.foto + '<???>' + jhg);
//        console.log('From web FETCH anubz >', data);
//      
//        }
//    ).catch(function (err) {
//        console.log(err);
//    });
//
function updateUI2(data) {
    for (var i = 0; i < data.length; i++) {
        delete data[i].image;
        writeData('posts', data[i]);
    }
}
////////////////////////////////////////
var url2 = 'https://valores-2585e.firebaseio.com/posts.json';
networkDataReceived = false;
fetch(url2)
    .then(function (res) {
        console.log(res);
        return res.json();
    })
    .then(function (data) {
        networkDataReceived = true;
        // console.log(data.foto + '<???>' + jhg);
        console.log('From web FETCH post fire >', data);
        var dataArray = [];
        $("#imgf").text('');
        for (var key in data) {
            dataArray.push(data[key]);
            $("#imgf").append("<p> " + data[key].data + '----' + data[key].id + '-->' + data[key].hora + "</p><br> ");
        }
        updateUI2(dataArray);
        // console.log(uio.length + '<???>' + jhg);
    }).catch(function (err) {
        console.log(err);
    });
/*if ('indexedDB' in window) {
  readAllData('posts')
    .then(function (data) {
      if (!networkDataReceived) {
        console.log('From cache', data);
        //updateUI2(data);
      }
    });
}*/
//export const list = postData;
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
promise.then(function (text) {
    return text;
}).then(function (newText) {
    console.log(newText);
}).catch(function (err) {
    console.log(err.code, err.message);
});


const applicationServerPublicKey = "BMAmtOWodlxrvpPjbWtq6Y9UVszdvK_QbTnXcXvGMrrIr8GYmBa0JAC-WfAl3aUEeHDPvnweinMKleqEj016Hk0";

const pushButton = document.querySelector('.js-push-btn');

let isSubscribed = false;
let swRegistration = null;

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function updateBtn() {
  if (Notification.permission === 'denied') {
    pushButton.textContent = 'Push Messaging Blocked.';
    pushButton.disabled = true;
    updateSubscriptionOnServer(null);
    return;
  }

  if (isSubscribed) {
    pushButton.textContent = 'Disable Push Messaging';
  } else {
    pushButton.textContent = 'Enable Push Messaging';
  }

  pushButton.disabled = false;
}

function updateSubscriptionOnServer(subscription) {
  // TODO: Send subscription to application server

  const subscriptionJson = document.querySelector('.js-subscription-json');
  const subscriptionDetails =
    document.querySelector('.js-subscription-details');

  if (subscription) {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove('is-invisible');
  } else {
    subscriptionDetails.classList.add('is-invisible');
  }
}
pushButton.addEventListener('click', function() {
  pushButton.disabled = true;
  if (isSubscribed) {
    unsubscribeUser();
  } else {
    subscribeUser();
  }
});
function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    console.log('User is subscribed');

    updateSubscriptionOnServer(subscription);

    isSubscribed = true;

    updateBtn();
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    updateBtn();
  });
}
function unsubscribeUser() {
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    if (subscription) {
      return subscription.unsubscribe();
    }
  })
  .catch(function(error) {
    console.log('Error unsubscribing', error);
  })
  .then(function() {
    updateSubscriptionOnServer(null);

    console.log('User is unsubscribed.');
    isSubscribed = false;

    updateBtn();
  });
}

function initializeUI() {
  pushButton.addEventListener('click', function() {
    pushButton.disabled = true;
    if (isSubscribed) {
      // TODO: Unsubscribe user
    } else {
      subscribeUser();
    }
  });

  // Set the initial subscription value
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    isSubscribed = !(subscription === null);

    updateSubscriptionOnServer(subscription);

    if (isSubscribed) {
      console.log('User IS subscribed.');
    } else {
      console.log('User is NOT subscribed.');
    }

    updateBtn();
  });
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
  .then(function(swReg) {
    console.log('Service Worker is registered', swReg);

    swRegistration = swReg;
    initializeUI();
  })
  .catch(function(error) {
    console.error('Service Worker Error', error);
  });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}

console.log('This is executed right after setTimeout()');
