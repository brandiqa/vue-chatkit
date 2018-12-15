<template>
  <b-navbar id="chat-navbar" toggleable="md" type="dark" variant="info">
    <b-navbar-brand href="#">
      Vue Chat
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-text>{{ user.name }} | </b-nav-text>
      <b-nav-item href="#" @click="onLogout" active>Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
  name: 'ChatNavBar',
  computed: {
    ...mapState([
      'user',
      'reconnect'
    ])
  },
  mounted() {
    window.addEventListener('beforeunload', this.unload);
    if(this.reconnect) {
      this.login(this.user.username);
    }
  },
  methods: {
    ...mapMutations([
      'setReconnect'
    ]),
    ...mapActions([
      'logout',
      'login'
    ]),
    onLogout() {
      this.$router.push({ path: '/' });
      this.logout();
    },
    unload(e) {
      if(this.user.username) { // User hasn't logged out
        this.setReconnect(true);
      }
    }
  }
}
</script>

<style>
  #chat-navbar {
    margin-bottom: 15px;
  }
</style>
