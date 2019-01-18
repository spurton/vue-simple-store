<template>
  <div>
    Hi Counter from a different component: <h2>{{ count }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Hi Counter',
    computed: {
      count() {
        return this.$store.state.count
      }
    }
  }
</script>
