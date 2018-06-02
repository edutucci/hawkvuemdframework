<template lang="pug">
  div.toolbar-app.full-width.flex.flex-row
    slot
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase
}
</script>