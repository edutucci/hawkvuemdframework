<template  lang="pug">
  .flex.menu-item(
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

import HFaIcon from '../icons/HFaIcon.vue'
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  components: {
    HFaIcon
  },
  props: {
    icon: {
      type: Array,
      default: () => ([])
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
