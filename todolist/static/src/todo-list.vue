<template>
  <div >
    <draggable class="columns is-multiline"  v-model="todoArr" :options="{group:'people'}">
      <div class="column is-one-third-tablet is-one-quarter-desktop" v-for="todo in todoArr" :key="todo.order">
        <div class="card">
          <header class="card-header">
            <div class="card-header-title">
              {{todo.fields.title}}
            </div>
            <form method="POST" :action="'/todos/delete/' + todo.pk + '/'" :id="'del-' + todo.pk">
              <app-csrf></app-csrf>
              <a href="javascript:void()" @click="del(todo)" type="submit" class="card-header-icon">
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
    </draggable>
  </div>
</template>
<script>
  export default {
    props: ['todos'],
    data: () => ({
      todoArr: []
    }),
    mounted() {
      this.todoArr = this.todos.map((t, i) => Object.assign({}, t, { order: i+1 }))
    },
    methods: {
      edit(todo) {
        this.$emit('edit', { id: todo.pk, title: todo.fields.title, text: todo.fields.text, user: todo.fields.user })
      },
      del(todo) {
        document.querySelector('#del-' + todo.pk).submit()
      }
    }
  }
</script>