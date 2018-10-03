<template lang="pug">
  // font-awesome-icon.faicon(v-if="icon && icon.length"
  //   :icon="icon"
  //   :size="size"
  //   :spin="spin"
  //   :pulse="pulse"
  //   style="cursor:pointer;"
  //   :class="[textcolor]"
  // )
  i.faicon(
    :class="[icon, textcolor]"
    style="cursor:pointer;"
    @click="onClick"
  )
    slot
 </template>

<script>

// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    icon: {
      type: String
    },
    size: {
      type: String,
      default: 'lg'
    },
    pulse: {
      type: Boolean,
      default: false
    },
    spin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      color: '',
      bkgcolor: ''
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
