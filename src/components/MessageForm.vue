<template>
  <div class="message-form">
    <small class="text-muted">@{{ username }}</small>
    <b-form inline @submit.prevent="onSubmit">
      <b-alert variant="danger" :show="hasError">{{ error }} </b-alert>
      <b-form-group style="width:85%">
        <b-form-input id="message-input"
                      class="w-100"
                      type="text"
                      v-model="message"
                      placeholder="Enter Message"
                      size="200"
                      autocomplete="off"
                      required>
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="ml-2" :disabled="loading || hasError">Send</b-button>
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
