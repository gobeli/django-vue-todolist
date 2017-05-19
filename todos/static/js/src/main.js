import TodoList from './todo-list'
import Todos from './todos'

Vue.component('app-todos', Todos);
Vue.component('app-todo-list', TodoList);

new Vue({
  el: '#app'
})

