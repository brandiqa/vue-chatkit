<template>
  <div class="message-form ld-over">
    <small class="text-muted">@{{ username }}</small>
    <b-form @submit.prevent="onSubmit" class="ld-over" v-bind:class="{ running: sendInProgress }">
      <div class="ld ld-ring ld-spin"></div>
      <b-alert variant="danger" :show="hasError">{{ error }} </b-alert>
      <b-form-group>
        <b-form-input id="message-input"
                      type="text"
                      v-model="message"
                      @input="isTyping"
                      placeholder="Enter Message"
                      autocomplete="off"
                      required>
        </b-form-input>
      </b-form-group>
      <div class="clearfix">
        <b-button type="submit" variant="primary" class="float-right" :disabled="sendInProgress || hasError">
          Send
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'

export default {
  name: 'message-form',
  data() {
    return {
      message: ''
    }
  },
  computed: {
    ...mapGetters([
      'username'
    ]),
    ...mapState([
      'sendInProgress',
      'hasError',
      'error',
      'currentUser',
      'activeRoom'
    ])
  },
  methods: {
    ...mapActions([
      'sendMessage',
    ]),
    async onSubmit() {
      const result = await this.sendMessage(this.message);
      if(result) {
        this.message = '';
      }
    },
    async isTyping() {
      await this.currentUser.isTypingIn({ roomId: this.activeRoom.id });
    }
  }
}
</script>
