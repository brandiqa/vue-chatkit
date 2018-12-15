import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import moment from 'moment'
import store from './store'

const INSTANCE_LOCATOR = process.env.VUE_APP_INSTANCE_LOCATOR;
const TOKEN_URL = process.env.VUE_APP_TOKEN_URL;

export let currentUser = null;

function handleError(error) {
  const message = error.message || error.info.error_description;
  store.commit('setError', message);
}

export async function loginUser(userId, reconnect) {
  try {
    store.commit('setError', '');
    store.commit('setUser', {});
    store.commit('setLoading', true);
    const chatManager = new ChatManager({
      instanceLocator: INSTANCE_LOCATOR,
      tokenProvider: new TokenProvider({ url: TOKEN_URL }),
      userId
    });
    currentUser = await chatManager.connect();
    store.commit('setUser', {
      username: currentUser.id,
      name: currentUser.name
    });
    store.commit('setRooms', currentUser.rooms);
    const activeRoom = store.state.activeRoom || currentUser.rooms[0];
    store.commit('setActiveRoom', activeRoom)
    return true;
  } catch (error) {
    handleError(error);
    return false;
  } finally {
    store.commit('setLoading', false);
    store.commit('setReconnect', false);
  }
}

export async function subscribeToRoom(roomId) {
  try {
    store.commit('clearChat');
    const activeRoom = await currentUser.subscribeToRoom({
      roomId: roomId,
      messageLimit: 10,
      hooks: {
        onMessage: message => {
          store.commit('addMessage', {
            name: message.sender.name,
            username: message.senderId,
            text: message.text,
            date: moment(message.createdAt).format('h:mm:ss a D-MM-YYYY')
          });
        },
        onPresenceChanged: () => {
          if (store.state.activeRoom) {
            store.commit('setUsers', store.state.activeRoom.users);
          }
        },
        onUserStartedTyping: user => {
          store.commit('setUserTyping', user.id)
        },
        onUserStoppedTyping: user => {
          store.commit('setUserTyping', null)
        }
      }
    });
    store.commit('setActiveRoom', activeRoom);
    store.commit('setUsers', activeRoom.users);
  } catch (error) {
    handleError(error);
  }
}

export async function sendMessage(message) {
  try {
    store.commit('setError', '');
    store.commit('setSending', true);
    await currentUser.sendMessage({
      text: message,
      roomId: store.state.activeRoom.id
    });
    return true;
  } catch (error) {
    handleError(error);
  } finally {
    store.commit('setSending', false);
  }
}

export async function logoutUser() {
  store.commit('clearChat');
  store.commit('setActiveRoom', null);
  await currentUser.disconnect();
}
