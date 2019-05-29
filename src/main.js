import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios';
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false;

const $http = Axios.create();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

