export default {
  template: '#todos',
  data: () => ({
    todo: {
      id: 0,
      title: '',
      text: '',
      user: 0
    }
  }),
  methods: {
    clear() {
      this.todo = { id: 0, title: '', text: '', user: 0 }
    }
  }
}