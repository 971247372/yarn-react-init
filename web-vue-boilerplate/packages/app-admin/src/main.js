import Vue from 'vue'
import Meta from 'vue-meta'
import App from './App.vue'
import router from './router'

import './global.css'
import './plugins/iview.js'
import './icons'
import './hook'

Vue.use(Meta)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
