import users from '../../api/users'

const state = {
  current: {},
  users: []
}

const getters = {
  usersWithoutCurrent: state => state.users.filter(u => u.id !== state.current.id)
}

const actions = {
  getUsers ({ commit }) {
    users.getUsers(users => {
      commit('SET_USERS', { users })
    })
  },
  getCurrentUser ({ commit }) {
    users.getCurrentUser(user => {
      commit('SET_CURRENT_USER', { user })
    })
  }
}

const mutations = {
  ['SET_USERS'] (state, { users }) {
    state.users = users
  },
  ['SET_CURRENT_USER'] (state, { user }) {
    state.current = user
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}