<template lang="pug">
  .bottom_shadow.full-size.overflow-hidden(
    :class="[bgcolor, textcolor]"
  )
    slot
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase
}
</script>

<style scoped>
.page-container {
  overflow: hidden;
}
</style>

