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
if ('serviceWorker' in navigator) {
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
}
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
console.log('This is executed right after setTimeout()');
