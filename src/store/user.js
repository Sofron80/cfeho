import fb from 'firebase/app'
import 'firebase/auth'

export default {
  state: {
    userId: null
  },
  mutations: {
    SET_USER(state, payload) {
      state.userId = payload
    },
    LOG_OUT(state) {
      state.userId = null
    }
  },
  actions: {
    registerUser({ commit }, payload) {
      let { email, password } = payload
      fb.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit('SET_USER', user.user.uid)
          commit('CLEAR_ERROR')
        })
        .catch(e => {
          commit('SET_ERROR', e.message)
          console.log(e.message)
        })
    },
    loginUser({ commit }, payload) {
      let { email, password } = payload
      fb.auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit('SET_USER', user.user.uid)
          commit('CLEAR_ERROR')
        })
        .catch(e => {
          console.log(e.message)
          commit('SET_ERROR', e.message)
        })
    },
    logOut({ commit }) {
      fb.auth().signOut()
      commit('LOG_OUT')
    }
  },
  getters: {
    isLogin(state) {
      return state.userId !== null && state.userId !== undefined
    }
  }
}
