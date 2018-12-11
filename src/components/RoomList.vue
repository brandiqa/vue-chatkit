<template>
  <div class="room-list">
    <h4>Channels</h4>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="room in rooms" :key="room.name" :active="room.active" href="#" @click="changeRoom(room)">
        # {{ room.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'RoomList',
  data() {
    return {
      rooms: [
        {
          name: "General",
          active: true
        },
        {
          name: "Art",
          active: false
        },
        {
          name: "Dev",
          active: false
        }
      ]
    }
  },
  methods: {
    changeRoom(room) {
      this.rooms.forEach(room => room.active = false);
      room.active = true;
    }
  }
}
</script>

<style>

</style>
