<template lang="pug">
  .menu_item
    font-awesome-icon(:icon="icon")
    strong  {{label}}

</template>

<script>

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
  }
}
</script>

<style scoped>

</style>
