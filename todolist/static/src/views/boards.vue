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
          <button class="button is-primary" @click="mutBoard()">Submit</button>
        </p>
      </div>
    </bulma-modal>

    <button class="button" @click="$refs.form.toggle()">+</button>
    <div class="columns is-multiline">
      <div class="column is-one-third-tablet is-one-quarter-desktop" v-for="b in $store.state.boards.current" :key="b.id">
        <div class="card">
          <header class="card-header">
            <div class="card-header-title">
              {{b.title}}
            </div>
            <a href="javascript:void()" @click="delBoard(b)" type="submit" class="card-header-icon">
              <span class="icon">
                <i class="fa fa-times"></i>
              </span>
            </a>
          </header>
          <footer class="card-footer">
            <a @click="editBoard(b)" class="card-footer-item button is-primary">Edit</a>
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
    methods: {
      editBoard(board) {
        const b = Object.assign({}, board, { users: this.usersWithoutCurrent.filter(us => this.board.users.includes(us.url)) })
        console.log(b)
        this.board = b
        this.$refs.form.toggle()
      },
      mutBoard() {
        this.board.users.push(this.$store.state.users.current)
        this.board.users = this.board.users.map(u => u.url)
        this.$store.dispatch('mutBoard', this.board)
      }
    },
    mounted() {
      this.$store.dispatch('getCurrentBoards')
    },
  }
</script>