<template lang="pug">
  .collapsible-item.flex.flex-1.flex-items-center.flex-wrap(
    @click="onClick"
    style="height:40px;"
    :class="[bgColor, textColor]"
  )
    | {{text}}

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    text: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.collapsible-item {
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
}

</style>
