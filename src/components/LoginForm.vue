<template>
  <div class="login-form">
    <h5>Chat Login</h5>
    <hr>
    <b-form>
      <b-form-group id="userInputGroup"
                    label="User Name"
                    label-for="userInput">
        <b-form-input id="userInput"
                      type="text"
                      placeholder="Enter user name"
                      :value="userId"
                      required>
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'login-form',
  data() {
    return {
      userId: ''
    }
  }
}
</script>

<style>

</style>
