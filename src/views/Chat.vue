<template>
  <div class="chat-dashboard">
   <b-row>
     <!-- Rooms -->
    <b-col cols="2">
      <RoomList />
    </b-col>

    <!-- Chat Messages -->
    <b-col cols="8">
      <b-row>
        <b-col>
          <MessageList />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <MessageForm />
        </b-col>
      </b-row>
    </b-col>

    <!-- Members -->
    <b-col cols="2">
      <UserList />
    </b-col>
   </b-row>
  </div>
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
