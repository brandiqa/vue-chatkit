<template>
  <div class="message-list">
    <h4>Messages</h4>
    <hr>
    <div class="message-group">
      <div class="message" v-for="(message, index) in messages" :key="index">
        <h4 class="message-title">{{ message.user.displayName }} </h4>
        <small class="text-muted">@{{ message.user.username }} </small>
        <p class="message-text">
          {{ message.text }}
        </p>
        <div class="clearfix">
          <small class="text-muted float-right">{{ message.date }}</small>
        </div>
      </div>
    </div>
    <small class="text-muted">user is typing...</small>
  </div>
</template>

<script>
export default {
  name: 'message-list',
  data() {
    return {
      messages: [
        {
          user: {
            displayName: 'John Doe',
            username: 'john'
          },
          text: 'Hello Everyone',
          date: '2018-10-10'
        },
        {
          user: {
            displayName: 'Jane Doe',
            username: 'jane'
          },
          text: 'Nice to meet you',
          date: '2018-10-10'
        },
        {
          user: {
            displayName: 'Peter Doe',
            username: 'peter'
          },
          text: 'Thanks Jane!',
          date: '2018-10-10'
        }
      ]
    }
  }
}
</script>

<style>
.message-list {
  margin-bottom: 25px;
  padding-right: 15px;
  height: 80vh !important;
  overflow-y: scroll;
}
.message {
  border: 1px solid lightblue;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 15px;
}
.message-title {
  font-size: 1rem;
}
.message-text {
  color: gray;
}
</style>
