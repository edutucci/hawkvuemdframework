<template  lang="pug">
  .flex.menu-item.h-pa-md(
    :class="[bgcolor]"
    @click="onClick"
  )
    .icon-left
      h-fa-icon(:icon="icon")

    .flex-1(
      :class="[textcolor]"
    )
      | {{text}}

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  components: {
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
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

</style>
