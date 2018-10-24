<template lang="pug">
  .flex.flex-column.dropdown(
    v-on-clickaway="checkDropdownState"
  )
    div
      h-fa-icon(
        @click="showdropdown = !showdropdown"
        :icon="icon"
        :textcolor="textcolor"
      )

    div.dropdown-menu.boxshadow.div-rounded(
      v-show="showdropdown"
      @click="showdropdown = !showdropdown"
      style="color:black; background-color: white"
      :style="{left: left, right: right, bottom: bottom}"
    )
      slot

</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  mixins: [ clickaway ],
  props: {
    icon: {
      type: String,
      default: ''
    },
    rtl: {
      type: Boolean,
      default: false
    },
    dtu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showdropdown: false,
      left: '0px',
      right: '',
      bottom: ''
    }
  },
  created () {
    if (this.rtl) {
      this.left = ''
      this.right = '0px'
    }

    if (this.dtu) {
      this.bottom = '0px'
    }
  },
  methods: {
    checkDropdownState () {
      if (this.showdropdown) {
        this.showdropdown = false
      }
    }
  }
}
</script>

<style scoped>
</style>
