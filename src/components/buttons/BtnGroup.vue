<template lang="pug">
  div(style="display:inline-flex;")
    div(
      class="no-user-select btngroup flex flex-justify-center flex-items-center full-width"
      :class="[compBgColor, compBorderColor, {'rounded': rounded, 'outlined border border-radius': outlined } ]"
    )
      slot

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  name: 'HBtnGroup',
  extends: componentBase,
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  components: {
  },
  data () {
    return {
    }
  },
  mounted () {
    this.changeComponentBackground()
    this.changeBorderColor()
  },
  watch: {
    bgColor: function (value) {
      this.compBgColorHover = ''
      this.changeComponentBackground()
      this.changeBorderColor()
    },
    outlined: function (value) {
      this.changeBorderColor()
      this.changeComponentBackground()
    }
  },
  methods: {
    changeComponentBackground () {
      this.compBgColor = this.bgColor
      if (this.outlined) {
        this.compBgColor = 'bg-transparent'
      }
    },
    changeBorderColor () {
      this.compBorderColor = ''
      if (this.outlined) {
        this.compBorderColor = (this.bgColor === 'bg-white') ? 'border-gray' : this.bgColor
        this.compBorderColor = this.compBorderColor.replace(/bg/, 'border')
      }
    }
  }
}
</script>

<style scoped>

</style>
