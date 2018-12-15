<template>
  <div class="message-form ld-over">
    <small class="text-muted">@{{ user.username }}</small>
    <b-form @submit.prevent="onSubmit" class="ld-over" v-bind:class="{ running: sending }">
      <div class="ld ld-ring ld-spin"></div>
      <b-alert variant="danger" v-if="error != null">{{ error }} </b-alert>
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
        <b-button type="submit" variant="primary" class="float-right">
          Send
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { currentUser, sendMessage } from '../chatkit.js'

export default {
  name: 'message-form',
  data() {
    return {
      message: ''
    }
  },
  computed: {
    ...mapState([
      'user',
      'sending',
      'error',
      'activeRoom'
    ])
  },
  methods: {
    ...mapActions([
      'chat',
    ]),
    async onSubmit() {
      const result = await sendMessage(this.message);
      if(result) {
        this.message = '';
      }
    },
    async isTyping() {
      await currentUser.isTypingIn({ roomId: this.activeRoom.id });
    }
  }
}
</script>
