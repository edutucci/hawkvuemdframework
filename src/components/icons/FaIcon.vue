<template lang="pug">
  font-awesome-icon.faicon(v-if="icon && icon.length"
    @click="onClick"
    :icon="icon"
    :size="size"
    :spin="spin"
    :pulse="pulse"
    style="cursor:pointer;"
    :class="[textcolor]"
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
      type: Array,
      default: () => ([])
    },
    size: {
      type: String,
      default: 'sm'
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
