<template>
  <div class="modal" :class="{ 'is-active': modalOpen }">
    <div class="modal-background" @click="toggle"></div>
    <div class="modal-content">
      <div class="box">
       <slot></slot>
      </div>
    </div>
    <button class="modal-close" @click="toggle"></button>
  </div>
</template>
<script>
  export default {
    data: () => ({
      modalOpen: false
    }),
    methods: {
      toggle() {
        this.modalOpen = !this.modalOpen
      }
    }
  }
</script>
<style lang="css">
  .modal-content{
    overflow: visible;
  }
</style>