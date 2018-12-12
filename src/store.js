import Vue from 'vue'
import Vuex from 'vuex'
import { loginUser } from './chatkit'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    rooms: [
      {
        name: "General",
        active: true
      },
      {
        name: "Art",
        active: false
      },
      {
        name: "Dev",
        active: false
      }
    ],
    users: [
      {
        username: 'John',
        displayName: 'John Doe',
        status: 'online'
      },
      {
        username: 'Jane',
        displayName: 'Jane Doe',
        status: 'offline'
      },
      {
        username: 'Peter',
        displayName: 'Peter Doe',
        status: 'offline'
      }
    ],
    messages: []
  },
  mutations: {
    setCurrentUser(currentUser) {
      state.currentUser = currentUser;
    },
    setRooms(rooms) {
      state.rooms = rooms
    },
    setUsers(users) {
      state.users = users
    },
    setMessages(messages) {
      state.messages = messages
    },
    appendMessage(message) {
      state.messages.append(message)
    }
  },
  actions: {
    login: async({ commit }, userId) => {
      const currentUser = await loginUser(userId);
      commit('setCurrentUser', currentUser);
    },
    changeRoom: ({ commit }, roomId) => {
      // TODO
    }
  },
  getters: {

  }
})