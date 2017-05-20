<template>
  <div class="todos">
    <app-todo-list :todos="todoArr" @edit="todo = $event"></app-todo-list>
    <form method="post">
      <app-csrf></app-csrf>
      <input v-model="todo.id" class="is-hidden" type="number" name="id"/>
      <input v-model="todo.user" class="is-hidden" type="number" name="user"/>
      <div class="field">
        <label class="label" for="title">Title</label>
        <p class="control">
          <input v-model="todo.title" class="input" type="text" name="title"/>
        </p>
      </div>
      <div class="field">
        <label class="label" for="text">Text</label>
        <p class="control">
          <textarea v-model="todo.text" class="textarea" name="text" type="text">
          </textarea>
        </p>
      </div>
      <input class="button is-primary" type="submit" value="Submit" />
      <a class="button is-secondary" @click.prevent="clear">Clear</a>
    </form>
  </div>
</template>
<script>
  export default {
    props: ['todos'],
    data: () => ({
      todo: {
        id: 0,
        title: '',
        text: '',
        user: 0
      }
    }),
    computed: {
      todoArr() {
        return JSON.parse(this.todos)
      }
    },
    methods: {
      clear() {
        this.todo = { id: 0, title: '', text: '', user: 0 }
      }
    }
  }
</script>