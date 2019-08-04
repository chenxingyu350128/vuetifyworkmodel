import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App.vue'//在app之前引入上面那条，否则app.js中的vuetify组件样式可能异常
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
