<template  lang="pug">
  .flex.menu-item-padding(
    :class="[bgcolor]"
    @click="onClick"
  )
    .menu-item-content-padding
      h-fa-icon(:icon="icon")

    .flex-1.menu-item-content-padding(
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
