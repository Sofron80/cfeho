export default {
  state: {
    loading: false,
    error: null
  },
  mutations: {
    SET_LOADING(state, payload){
      state.loading = payload
    },
    SET_ERROR(state, payload){
      state.error = payload
    },
    CLEAR_ERROR(state){
      state.error = null
    }
  },
  getters: {
    getLoading:(state) => state.loading,
    getError:(state) => state.error
  }
}
