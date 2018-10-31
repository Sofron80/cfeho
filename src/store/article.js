import fb from 'firebase/app'
import 'firebase/database'

export default {
  state: {
   articles: null
  },
  mutations: {
    SET_ARTICLES(state, payload){
      state.articles = payload
    }
  },
  actions: {
    async loadArticles({commit}){
      let ar = []
      commit('SET_LOADING', true)
      try{
        let d = await fb.database().ref('articles').once('value')
        d = d.val()
        for(var i in d){
          ar.push(d[i])
        }
        commit('SET_ARTICLES', ar)
        commit('SET_LOADING', false)
      } catch (e){
        commit('SET_ERROR', e.message)
      }
    }

  },
  getters: {
    getArticles:(state) => state.articles,
  }
}
