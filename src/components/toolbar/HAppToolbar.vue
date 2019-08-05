<template lang="pug">
  .toolbar.flex(
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
