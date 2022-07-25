import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from '../router/index'
import store from '../vuex/index'
import '../src/assets/styles/main.scss'
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
