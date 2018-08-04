<template lang="pug">
  font-awesome-icon.faicon(v-if="icon && icon.length" @click="onClick"
    :icon="icon" :size="size"
    :spin="spin" :pulse="pulse"
    style="cursor:pointer;"
  )
    slot
 </template>

<script>

// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  // components: {
  //   FontAwesomeIcon
  // },
  props: {
    icon: {
      type: Array,
      default: () => ([])
    },
    textwhite: {
      type: Boolean,
      default: false
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
  created () {
    this.color = this.textcolor
    this.bkgcolor = this.bgcolor
    if (this.textwhite) {
      this.color = 'text-white'
    }
  },
  methods: {
    onClick () {
      console.log('emting click')
      this.$emit('click')
    }
  }
}
</script>
