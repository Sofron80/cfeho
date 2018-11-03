import fb from 'firebase/app'
import 'firebase/firestore'

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
        const fs = fb.firestore()
        fs.settings({timestampsInSnapshots: true})
        let d = await fs.collection('articles').get()
        d.docs.forEach((item)=>{
          ar.push(item.data())
        })
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
