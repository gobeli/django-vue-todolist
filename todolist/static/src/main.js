import Vue from 'vue/dist/vue.js'
import draggable from 'vuedraggable'
import TodoList from './todo-list.vue'
import Todos from './todos.vue'

Vue.component('draggable', draggable);
Vue.component('app-todos', Todos)
Vue.component('app-todo-list', TodoList)
Vue.component('app-csrf', {
  template: '#csrf'
})


new Vue({
  el: '#app',
  data: () => ({
    navOpen: false
  })
})

