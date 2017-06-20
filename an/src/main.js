// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    an:null
  },
  mutations: {
    setWeight(state,an){
      state.an = an;
    }
  }
})

// 全局样式
import '@/assets/iconfont/iconfont.css'
import '@/assets/css/animate.css'
import '@/assets/css/delay.css'
import '@/assets/css/an.css'
import 'bootstrap/dist/css/bootstrap.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
