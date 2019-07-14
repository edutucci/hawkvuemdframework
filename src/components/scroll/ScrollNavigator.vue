<template lang="pug">
  .scroll-navigator
    .flex.flex-items-center.scroll-container
      h-btn(v-if="showButtons" contained transparent :disabled="!showLeffButton" :textcolor="iconColor"
        left-icon="fas fa-chevron-left" @click="scrollLeft(true)"
      )
      .flex-1.cursor-pointer.overflow-hidden.no-user-select(
        id="scroll" v-resize.initial="onResize" v-dragscroll="true"
        @scroll="onscroll"
      )
        div
          slot
      h-btn(v-if="showButtons" contained transparent :disabled="!showRightButton" :textcolor="iconColor"
        left-icon="fas fa-chevron-right" @click="scrollLeft(false)"
      )

 </template>

<script>

import { dragscroll } from 'vue-dragscroll'
import resize from 'vue-resize-directive'

export default {
  name: 'ScrollNavigator',
  directives: {
    dragscroll,
    resize
  },
  props: {
    iconColor: {
      type: String,
      default: 'text-black'
    }
  },
  data () {
    return {
      showRightButton: true,
      showLeffButton: false,
      showButtons: true
    }
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    checkForScroll () {
      let element = document.getElementById('scroll')
      if (element) {
        let clientWidth = element.clientWidth
        let maxScrollLeft = element.scrollWidth - clientWidth
        let x = element.scrollLeft
        this.showLeffButton = false
        if (x > 0) {
          this.showLeffButton = true
        }

        this.showRightButton = true
        if (x === maxScrollLeft) {
          this.showRightButton = false
        }
      }
    },
    onResize () {
      let element = document.getElementById('scroll')
      if (element) {
        let clientWidth = element.clientWidth
        let maxScrollLeft = element.scrollWidth - clientWidth
        this.showButtons = false
        if (maxScrollLeft > 0) {
          this.showButtons = true
        }
        this.checkForScroll()
      }
    },
    onscroll () {
      this.checkForScroll()
    },
    scrollLeft (scrollRight) {
      let element = document.getElementById('scroll')
      if (element) {
        let x = element.scrollLeft

        x = (scrollRight) ? x -= 150 : x += 150
        element.scrollLeft = x

        this.checkForScroll()
      }
    }
  }
}
</script>
