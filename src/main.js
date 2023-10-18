import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://example.com/api';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
