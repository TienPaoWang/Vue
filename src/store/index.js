import Vue from 'vue'
import Vuex from 'vuex'
import Shopcart from './modules/shopcart'
import Auth from './modules/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Shopcart,
    Auth
  }
})
