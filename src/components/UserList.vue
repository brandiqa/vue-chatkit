<template>
  <div class="user-list">
    <h4>Members</h4>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="user in users" :key="user.username">
        {{ user.displayName }}
        <b-badge :variant="statusColor(user.status)" pill>{{ user.status }}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'user-list',
  data() {
    return {
      users: [
        {
          username: 'John',
          displayName: 'John Doe',
          status: 'online'
        },
        {
          username: 'Jane',
          displayName: 'Jane Doe',
          status: 'offline'
        },
        {
          username: 'Peter',
          displayName: 'Peter Doe',
          status: 'offline'
        },
      ]
    }
  },
  methods: {
    statusColor(status) {
      return status === 'online' ? 'success' : 'warning'
    }
  }
}
</script>

<style>

</style>
