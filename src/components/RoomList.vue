<template>
  <div class="room-list">
    <h4>Channels</h4>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="room in rooms" :key="room.name" :active="activeRoom.id === room.id" href="#" @click="changeRoom(room)">
        # {{ room.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'RoomList',
  computed: {
    ...mapState([
      'activeRoom'
    ]),
    ...mapGetters([
      'rooms'
    ])
  },
  methods: {
    changeRoom(room) {
      this.rooms.forEach(room => room.active = false);
      room.active = true;
    }
  }
}
</script>
