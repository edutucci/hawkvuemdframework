<template lang="pug">
  div.full-width.flex.flex-row(style="z-index:12;")
    slot
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase
}
</script>