const template = 
`<div class="columns is-multiline">
  <div class="column is-one-third-tablet is-one-quarter-desktop" v-for="todo in todosArr">
    <div class="card">
      <header class="card-header">
        <div class="card-header-title">
          {{todo.fields.title}}
        </div>
        <form method="POST" :action="'/todos/delete/' + todo.pk + '/'" :id="'del-' + todo.pk">
          <input type="hidden" name="csrfmiddlewaretoken" v-model="csrf">
          <a href="javascript:void()" @click="document.querySelector('#del-' + todo.pk).submit()" type="submit" class="card-header-icon">
            <span class="icon">
              <i class="fa fa-times"></i>
            </span>
          </a>
        </form>
      </header>
      <div class="card-content">
        {{todo.fields.text}}
      </div>
      <footer class="card-footer">
        <a @click="edit(todo)" class="card-footer-item button is-primary">Edit</a>
      </footer>
    </div>
  </div>
</div>`

export default {
  template,
  props: ['todos', 'csrf'],
  computed: {
    todosArr() {
      return JSON.parse(this.todos);
    }
  },
  methods: {
    edit(todo) {
      this.$emit('edit', { id: todo.pk, title: todo.fields.title, text: todo.fields.text, user: todo.fields.user })
    }
  }
}