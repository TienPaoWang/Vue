import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Home from './views/Home.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/firestore'
import vuetron from 'vuetron'; //for debug
Vue.use(vuetron.VuetronVue);
Vue.component('font-awesome-icon', FontAwesomeIcon)
import { library } from '@fortawesome/fontawesome-svg-core' // this is for fontawesome
import { fas } from '@fortawesome/free-solid-svg-icons' // this is for fontawesome solid
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' // add the vue fontawesome
library.add(fas); // add the fas into library
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch();


var firebaseConfig = {
  apiKey: "AIzaSyBkBLLFEQqHhl_QAHP0jLEFU6B0_rPBQ2I",
  authDomain: "vue-project-danny.firebaseapp.com",
  databaseURL: "https://vue-project-danny.firebaseio.com",
  projectId: "vue-project-danny",
  storageBucket: "vue-project-danny.appspot.com",
  messagingSenderId: "364572287548",
  appId: "1:364572287548:web:cfa6f72807b850657a9939",
  measurementId: "G-9Z81B3JJ8L"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const dbdatabase = firebaseApp;

Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: function (h) { return h(App) }
// }).$mount('#app')


let app;

firebase.auth().onAuthStateChanged(user => {
  console.log("user", user);
  console.log("app", app);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')