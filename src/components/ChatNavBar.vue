<template>
  <b-navbar id="chat-navbar" toggleable="md" type="dark" variant="info">
    <b-navbar-brand href="#">
      Vue Chat
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-text>{{ name }} | </b-nav-text>
      <b-nav-item href="#" @click="onLogout" active>Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ChatNavBar',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    onLogout() {
      this.$router.push({ path: '/' });
      this.logout();
    }
  }
}
</script>

<style>
  #chat-navbar {
    margin-bottom: 15px;
  }
</style>
