import Vue from 'vue'
import Vuex from 'vuex'
import { loginUser } from './chatkit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser
  },
  mutations: {
    setCurrentUser(currentUser) {
      state.currentUser = currentUser;
    }
  },
  actions: {
    login: async({ commit }, userId) => {
      const currentUser = await loginUser(userId);
      commit('setCurrentUser', currentUser);
    }
  },
  getters: {

  }
})