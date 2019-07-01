<template lang="pug">
  //- .counter(
  //-   :class="[bgcolor, textcolor]"
  //- )
  .top-right-absolute.counter(
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
  font-size: 10px;
  border-radius: 50%;
  padding: 4px;
  z-index:8;
}

</style>
