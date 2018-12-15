import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Chat from './views/Chat.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
      beforeEnter: (to, from, next) => {
        if (store.state.user) {
          next();
        } else {
          next('/');
        }
      }
    }
  ]
})
