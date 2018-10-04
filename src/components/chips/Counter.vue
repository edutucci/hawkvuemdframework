<template lang="pug">
  .counter(
    :class="[bgcolor, textcolor]"
  )
    slot
</template>

<script>

import componentBase from '../componentBase'

export default {
  name: 'Counter',
  extends: componentBase
}
</script>

<style scoped>
.counter {
  display: inline-block;
  position: absolute;
  top: 0px;
  font-size: 10px;
  border-radius: 50%;
  padding: 3px;
  z-index:8;
}
</style>
