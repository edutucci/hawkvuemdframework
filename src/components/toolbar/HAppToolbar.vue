<template lang="pug">
  .toolbar.flex(
    :class="[bgColor, textColor]"
  )
    slot
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase
}
</script>
