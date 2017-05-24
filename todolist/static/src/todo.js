import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import draggable from 'vuedraggable'
import TodoList from './todo-list.vue'
import Todos from './todos.vue'
import store from './store'

Vue.component('app-csrf', {
  template: '#csrf'
})
Vue.component('draggable', draggable);
Vue.component('app-todos', Todos)
Vue.component('app-todo-list', TodoList)

new Vue({
  el: '#app',
  store,
  data: () => ({
    navOpen: false
  })
})

