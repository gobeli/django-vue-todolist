import axios from 'axios'

export default {
  getUsers(cb) {
    axios.get('/kanban/api/users/', { withCredentials: true })
      .then(res => cb(res.data))
  },
  getCurrentUser(cb) {
    axios.get('/kanban/api/users/current', { withCredentials: true } )
      .then(res => cb(res.data))
  }
}