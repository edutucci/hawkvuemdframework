<template lang="pug">
  .full-viewport.boxshadow.page-container(
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
  position: relative;
}
</style>

