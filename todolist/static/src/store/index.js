import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

import boards from './modules/boards'
import users from './modules/users'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    boards,
    users
  },
  strict: debug
})