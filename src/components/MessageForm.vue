<template>
  <div class="message-form">
    <b-form>
      <b-form-group>
        <b-form-input id="message-input"
                      type="text"
                      :value="message"
                      placeholder="Enter Message"
                      required>
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" class="float-right">Send</b-button>
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

<style>

</style>
