<template lang="pug">

    div.btncontainer(style="display:inline-flex;"
      @click="onClick"  
      class="btnfab flat circle flex boxshadow flex-justify-center flex-items-center"
      :class="[bgcolor, textcolor]"
      :style="[btnSize]"
    )
      div(v-if="icon")
        h-fa-icon(:textcolor="textcolor" :icon="icon")

</template>

<script>

import componentBase from '../componentBase.vue'
import HFaIcon from '../icons/HFaIcon.vue'

export default {
  extends: componentBase,
  props: {
    minifloat: {
      type: Boolean
    },
    icon: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    HFaIcon
  },
  data () {
    return {
      btnSize: {
        width: '42px',
        height: '42px'
      }
    }
  },
  created () {
    this.setButtonSize()
  },
  methods: {
    onClick () {
      this.$emit('click')
    },
    setButtonSize () {
      if (this.minifloat) {
        this.btnSize.width = '26px'
        this.btnSize.height = '26px'
      }
    }
  }
}
</script>

<style scoped>

</style>
