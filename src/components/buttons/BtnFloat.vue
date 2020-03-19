<template lang="pug">
    div.btncontainer(style="display:inline-flex;"
      @click="onClick"
      class="btnfab ripple flat circle flex boxshadow flex-justify-center flex-items-center"
      :class="[bgcolor, textcolor]"
      :style="[btnSize]"
    )
      div(v-if="icon")
        h-fa-icon(:textcolor="textcolor" :icon="icon" :size="iconsize")

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  name: 'HBtnFloat',
  extends: componentBase,
  props: {
    minifloat: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  components: {
  },
  data () {
    return {
      btnSize: {
        width: '40px',
        height: '40px'
      },
      iconsize: ''
    }
  },
  created () {
    this.setButtonSize()
    this.setIconSize()
    // this.setButtonColor()
  },
  watch: {
    minifloat: function (value) {
      this.setButtonSize(value)
      this.setIconSize(value)
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    },
    setButtonSize (minifloat) {
      this.btnSize.width = (minifloat) ? '22px' : '40px'
      this.btnSize.height = (minifloat) ? '22px' : '40px'
    },
    setIconSize (minifloat) {
      this.iconsize = (minifloat) ? '16px' : '20px'
    }
  }
}
</script>

<style scoped>

</style>
