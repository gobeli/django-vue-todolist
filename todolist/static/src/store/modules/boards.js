import boardApi from '../../api/board'

const state = {
  current: []
}

const actions = {
  getCurrentBoards ({ commit }) {
    boardApi.getCurrentBoards(boards => {
      commit('SET_CURRENT_BOARDS', { boards })
    })
  },
  mutBoard ({ commit, state }, board) {
    if (!board.id) {
      boardApi.addBoard(board, board => {
        commit('ADD_BOARD', { board })
      })
    } else {
      boardApi.mutBoard(board, board => {
        commit('MUT_BOARD', { board })
      })
    }
  },
  delBoard ({ commit, state }, board) {
    boardApi.delBoard(board, () => {
      commit('DEL_BOARD', { board })
    })
  }
}

const mutations = {
  ['SET_CURRENT_BOARDS'] (state, { boards }) {
    state.current = boards
  },
  ['ADD_BOARD'] (state, { board }) {
    state.current = [...state.current, board]
  },
  ['MUT_BOARD'] (state, { board }) {
    const index = state.current.indexOf(state.current.find(u => u.id === board.id))
    state.current.splice(index, 1)
    state.current.splice(index, 0, board)
  },
  ['DEL_BOARD'] (state, { board }) {
    const index = state.current.indexOf(state.current.find(u => u.id === board.id))
    state.current.splice(index, 1)
  },
}

export default {
  state,
  actions,
  mutations
}