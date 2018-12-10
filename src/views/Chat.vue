<template>
  <div class="chat-dashboard">
   <b-row>
     <b-col>
       <RoomList />
      </b-col>
     <b-col>
       <b-row>
         <MessageList />
       </b-row>
       <b-row>
         <MessageForm />
       </b-row>
      </b-col>
     <b-col>
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
