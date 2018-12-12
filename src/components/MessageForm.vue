<template>
  <div class="message-form">
    <b-form inline>
      <b-form-group style="width:85%">
        <b-form-input id="message-input"
                      class="w-100"
                      type="text"
                      :value="message"
                      placeholder="Enter Message"
                      size="200"
                      required>
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="ml-2">Send</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'message-form',
  data() {
    return {
      message: ''
    }
  }
}
</script>
