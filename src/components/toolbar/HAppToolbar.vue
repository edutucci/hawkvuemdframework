<template lang="pug">
  .row.toolbar(
    class="overflow-x-hidden"
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
