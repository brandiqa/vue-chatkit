<template>
  <b-container fluid class="chat-dashboard">
    <b-row>
      <b-col cols="2">
        <RoomList />
      </b-col>

      <b-col cols="8">
        <b-row>
          <b-col id="chat-content">
            <MessageList />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <MessageForm />
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="2">
        <UserList />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RoomList from '@/components/RoomList.vue'
import MessageList from '@/components/MessageList.vue'
import MessageForm from '@/components/MessageForm.vue'
import UserList from '@/components/UserList.vue'

export default {
  name: 'Chat',
  components: {
    RoomList,
    UserList,
    MessageList,
    MessageForm
  }
}
</script>

<style scoped>

</style>
