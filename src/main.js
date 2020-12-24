import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/display.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import '@/assets/css/rd-icons.css'
import '@/assets/css/rd-variables.scss'
import '@/assets/css/rd-layouts.scss'
import '@/assets/css/rd-components.scss'
import '@/assets/css/rd-main.scss'
import './mixins'
import './directives'
import './components/Base/components'
import router from './router'
import store from './store'
import './axios'

const ifInProduction = process.env.NODE_ENV === 'production'
Vue.config.productionTip = ifInProduction

Vue.config.devtools = !ifInProduction

Vue.use(ElementUI, { locale })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
