<template lang="pug">
  //-.window-height.bottom_shadow.full-size.overflow-hidden()
  .window-height
    slot
</template>

<script>

export default {
  name: 'Page'
}
</script>

<style scoped>
.page {
  padding-top: 50px;
}
</style>
