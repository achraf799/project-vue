import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueAnimateOnScroll from 'vue-animate-onscroll'
import AOS from 'aos'
import 'aos/dist/aos.css'



new Vue({
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')

Vue.use(VueAnimateOnScroll)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
