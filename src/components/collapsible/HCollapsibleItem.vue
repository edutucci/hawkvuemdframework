<template lang="pug">
  div.flex.flex-1.flex-items-center.flex-wrap.collapsible-item(
    @click="onClick"
    style="height:40px;"
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
  max-width: 162px;
  padding-left: 16px;
  cursor: pointer;
}

</style>
