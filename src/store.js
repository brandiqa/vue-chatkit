import Vue from 'vue'
import Vuex from 'vuex'
import { loginUser } from './chatkit'
import moment from 'moment';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    error: '',
    hasError: false,
    currentUser: null,
    activeRoom: '',
    users: [],
    messages: []
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
    setActiveRoom(state, room) {
      state.activeRoom = room.id;
    },
    // setRooms(state, rooms) {
    //   state.rooms = rooms
    // },
    setUsers(state, users) {
      state.users = users
    },
    clearMessages(state) {
      state.messages = [];
    },
    setMessages(state, messages) {
      state.messages = messages
    },
    addMessage(state, message) {
      state.messages.push(message)
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
        const room = currentUser.rooms[0];
        commit('setActiveRoom', room);
        commit('clearMessages');
        currentUser.subscribeToRoom({
          roomId: room.id,
          hooks: {
            onMessage: message => {
              commit('addMessage', {
                name: message.sender.name,
                username: message.senderId,
                text: message.text,
                date: moment(message.createdAt).format('h:mm:ss a D-MM-YYYY')
              });
            }
          }
        })
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