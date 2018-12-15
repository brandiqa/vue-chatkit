import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import { loginUser, subscribeToRoom, sendMessage, logoutUser } from './chatkit'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: null,
    user: null,
    reconnect: false,
    activeRoom: null,
    users: [],
    messages: [],
    userTyping: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setUser(state, user) {
      state.user = user;
    },
    setReconnect(state, reconnect) {
      state.reconnect = reconnect;
    },
    setActiveRoom(state, roomId) {
      state.activeRoom = roomId;
    },
    setRooms(state, rooms) {
      state.rooms = rooms
    },
    setUsers(state, users) {
      state.users = users
    },
    clearChat(state) {
      state.users = [];
      state.messages = [];
    },
    setMessages(state, messages) {
      state.messages = messages
    },
    addMessage(state, message) {
      state.messages.push(message)
    },
    setSending(state, status) {
      state.sending = status
    },
    setUserTyping(state, userId) {
      state.userTyping = userId
    }
  },
  actions: {
    login: async({ state }, userId) => {
      const success = await loginUser(userId, state.reconnect);
      if(success){
        await subscribeToRoom(state.activeRoom.id);
        return true;
      }
    },
    chat: async(message) => {
      sendMessage(message)
    },
    changeActiveRoom: async ({ commit }, room) => {
      subscribeToRoom(room.id);
    },
    logout: async () => {
      logoutUser();
    }
  },
  plugins: [vuexLocal.plugin],
  strict: false
})
