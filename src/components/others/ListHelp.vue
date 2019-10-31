<template lang="pug">
  .position-sticky.list-help.scroll
    slot
</template>

<script>
export default {
  name: 'ListHelp',
  data () {
    return {}
  }
}
</script>

<style scoped>
.list-help {
  padding: 0px 12px;
  height: calc(100vh - 180px)
}

</style>
