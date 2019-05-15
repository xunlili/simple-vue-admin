import Vue from 'vue'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import lang from './lang/index.js'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'cn',
  messages: lang }
);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
