<template lang="pug">
  .menu_item
    font-awesome-icon(:icon="icon") 
    strong  {{label}}

</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

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
    FontAwesomeIcon
  }
}
</script>

<style scoped>

</style>
