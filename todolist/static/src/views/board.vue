<template>
  <h1>{{board.title}}</h1>
</template>
<script>
  export default {
    computed: {
      board() {
        const id = parseInt(this.$route.params.id, 10)
        return this.$store.state.boards.current.find(b => id === b.id) || {}
      }
    }
  }
</script>