import Vue from 'vue'
import Vuex from 'vuex'
import User from './user'
import General from './genereal'
import article from './article'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    User,
    General,
    article
  }
})
