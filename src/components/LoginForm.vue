<template>
  <div class="login-form">
    <h5>Chat Login</h5>
    <hr>
    <b-form @submit.prevent="onSubmit">
       <b-alert variant="danger" :show="hasError">{{ error }} </b-alert>

      <b-form-group id="userInputGroup"
                    label="User Name"
                    label-for="userInput">
        <b-form-input id="userInput"
                      type="text"
                      placeholder="Enter user name"
                      v-model="userId"
                      autocomplete="off"
                      :disabled="loading"
                      required>
        </b-form-input>
      </b-form-group>

      <b-button type="submit"
                variant="primary"
                class="ld-ext-right"
                v-bind:class="{ running: loading } "
                :disabled="isValid">
                Login <div class="ld ld-ring ld-spin"></div>
      </b-button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'login-form',
  data() {
    return {
      userId: '',
    }
  },
  computed: {
    ...mapState([
      'loading',
      'hasError',
      'error'
    ]),
    isValid: function() {
      const result = this.userId.length < 3;
      return result ? result : this.loading
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    async onSubmit() {
      await this.login(this.userId)
    }
  }

}
</script>

<style>

</style>
