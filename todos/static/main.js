Vue.component('app-todos', {
  template: `
    <div class="columns is-multiline">
      <div class="column is-one-third-tablet is-one-quarter-desktop" v-for="todo in todosArr">
        <div class="card">
          <header class="card-header">
            <div class="card-header-title">
              {{todo.fields.title}}
            </div>
            <a class="card-header-icon" @click="del(todo)">
              <span class="icon">
                <i class="fa fa-times"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            {{todo.fields.text}}
          </div>
          <footer class="card-footer">
            <a @click="edit(todo)" class="card-footer-item button is-primary">Edit</a>
          </footer>
        </div>
      </div>
    </div>
  `,
  props: ['todos'],
  computed: {
    todosArr() {
      return JSON.parse(this.todos);
    }
  },
  methods: {
    edit(todo) {
      console.log(todo);
      this.$emit('edit', { id: todo.pk, title: todo.fields.title, text: todo.fields.text, user: todo.fields.user })
    },
    del(todo) {
      fetch('/todos/delete/' + todo.pk, {
        method: 'DELETE'
      }).catch(console.log).then(res => location.reload());
    }
  }
});