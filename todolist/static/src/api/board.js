import axios from 'axios'

export default {
  getCurrentBoards(cb) {
    axios.get('/kanban/api/boards/current/', { withCredentials: true })
      .then(res => cb(res.data))
  },
  addBoard(board, cb) {
    axios.post('/kanban/api/boards/', board , { withCredentials: true })
      .then(res => cb(res.data))
  }
}