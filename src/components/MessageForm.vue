<template>
  <div class="message-form">
    <small class="text-muted">@{{ username }}</small>
    <b-form @submit.prevent="onSubmit">
      <b-alert variant="danger" :show="hasError">{{ error }} </b-alert>
      <b-form-group>
        <b-form-textarea id="message-input"
                      type="text"
                      v-model="message"
                      placeholder="Enter Message"
                      :rows="3"
                      autocomplete="off"
                      required>
        </b-form-textarea>
      </b-form-group>
      <div class="clearfix">
        <b-button type="submit" variant="primary" class="float-right" :disabled="loading || hasError">
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
      'loading',
      'hasError',
      'error'
    ])
  },
  methods: {
    ...mapActions([
      'sendMessage'
    ]),
    async onSubmit() {
      console.log(this.message);
      const result = await this.sendMessage(this.message);
      if(result) {
        this.message = '';
      }
    }
  }
}
</script>
