import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'
import './assets/style/reset.css'
import './assets/style/border.css'

Vue.config.productionTip = false

/*Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/ztyts'
Axios.defaults.headers.post['Content-Type'] = 'application/json';*/

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
