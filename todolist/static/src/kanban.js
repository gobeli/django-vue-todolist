import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import draggable from 'vuedraggable'
import Boards from './views/boards.vue'
import Board from './views/board.vue'
import Modal from './components/modal.vue'
import store from './store'
import Multiselect from 'vue-multiselect'
import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
axios.defaults.headers = { 'X-CSRFTOKEN': window.Django.csrf }

Vue.use(VueRouter)

Vue.component('app-multiselect', Multiselect)

Vue.component('app-csrf', {
  template: '#csrf'
})
Vue.component('draggable', draggable)
Vue.component('bulma-modal', Modal)

  const router = new VueRouter({
    routes: [
      { path: '/', name: 'boards' , component: Boards },
      { path: '/board/:id', name: 'board' , component: Board },
    ]
  })

new Vue({
  el: '#app',
  store,
  router,
  data: () => ({
    navOpen: false
  }),
  mounted () {
    this.$store.dispatch('getCurrentUser')
    this.$store.dispatch('getUsers')      
    this.$store.dispatch('getCurrentBoards')
  }
})

