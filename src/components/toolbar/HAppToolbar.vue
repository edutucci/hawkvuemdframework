<template lang="pug">
  div.full-width.flex.flex-row
    slot
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase
}
</script>
