<template>
  <div>
    <bulma-modal ref="form">
      <div class="field">
        <label class="label">Title</label>
        <p class="control">
          <input class="input" type="text" placeholder="Title" v-model="board.title">
        </p>
      </div>
      <div class="field">
        <label class="label">Other Users</label>
        <p class="control">
          <app-multiselect :multiple="true" :close-on-select="false" :clear-on-select="false" track-by="username" label="username" v-model="board.users" :options="usersWithoutCurrent"></app-multiselect>
        </p>
      </div>
      <div class="field is-grouped">
        <p class="control">
          <button class="button is-primary" @click="mutBoard(board)">Submit</button>
        </p>
      </div>
    </bulma-modal>

    <button class="button" @click="$refs.form.toggle()">+</button>
    <div class="columns is-multiline">
      <div class="column is-one-third-tablet is-one-quarter-desktop" v-for="board in $store.state.boards.current" :key="board.id">
        <div class="card">
          <header class="card-header">
            <div class="card-header-title">
              {{board.title}}
            </div>
            <a href="javascript:void()" @click="delBoard(board)" type="submit" class="card-header-icon">
              <span class="icon">
                <i class="fa fa-times"></i>
              </span>
            </a>
          </header>
          <footer class="card-footer">
            <a @click="editBoard(board)" class="card-footer-item button is-primary">Edit</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'boards',
    data: () => ({
      board: {
        id: 0,
        title: '',
        users: []
      }
    }),
    computed: mapGetters({
      usersWithoutCurrent: 'usersWithoutCurrent'
    }),
    methods: mapActions([
      'mutBoard'
    ]),
    mounted() {
      this.$store.dispatch('getCurrentBoards')
    },
  }
</script>