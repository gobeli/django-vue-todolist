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
    }
  }
}

const mutations = {
  ['SET_CURRENT_BOARDS'] (state, { boards }) {
    state.current = boards
  },
  ['ADD_BOARD'] (state, { board }) {
    state.current = [...state.current, board]
  },
}

export default {
  state,
  actions,
  mutations
}