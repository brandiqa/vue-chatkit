import Vue from 'vue'
import Vuex from 'vuex'
import { loginUser } from './chatkit'
import VueRouter from 'vue-router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    error: '',
    hasError: false,
    currentUser: null,
    users: [],
    messages: []
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    setRooms(state, rooms) {
      state.rooms = rooms
    },
    setUsers(state, users) {
      state.users = users
    },
    setMessages(state, messages) {
      state.messages = messages
    },
    appendMessage(state, message) {
      state.messages.append(message)
    }
  },
  actions: {
    login: async({ commit, state }, userId) => {
      try {
        console.log(userId)
        state.hasError = false;
        state.error = '';
        state.loading = true;
        const currentUser = await loginUser(userId);
        console.log(currentUser);
        commit('setCurrentUser', currentUser);
        return true
      } catch (error) {
        console.log('An Error Occurred!')
        console.log(error)
        state.hasError = true;
        state.error = error.message;
      } finally {
        state.loading = false;
      }
    },
    changeRoom: ({ commit }, roomId) => {
      // TODO
    }
  },
  getters: {
    username: state => state.currentUser ? state.currentUser.id : '',
    name: state => state.currentUser ? state.currentUser.name : '',
    rooms: state => state.currentUser ? state.currentUser.rooms : [],
  }
})