<template lang="pug">
.scroll-navigator
  .flex.flex-items-center.scroll-container
    h-btn(v-if="showButtons" text-button fab bg-color="bg-transparent" size="sm" :disabled="!showLeffButton"
      @click="scrollLeft(true)"
    )
      h-icon(icon="fas fa-arrow-left" :text-color="iconColor")

    .flex-1.cursor-pointer.overflow-hidden.no-user-select(
      id="scroll" v-resize.initial="onResize" v-dragscroll="true"
      @scroll="onscroll"
    )
      div
        slot
    h-btn(v-if="showButtons" text-button fab bg-color="bg-transparent" size="sm" :disabled="!showRightButton"
      @click="scrollLeft(false)"
    )
      h-icon(icon="fas fa-arrow-right" :text-color="iconColor")

</template>

<script>

import { dragscroll } from 'vue-dragscroll';
import resize from 'vue-resize-directive';

export default {
  name: 'ScrollNavigator',
  directives: {
    dragscroll,
    resize,
  },
  props: {
    iconColor: {
      type: String,
      default: 'text-black',
    },
  },
  data() {
    return {
      showRightButton: true,
      showLeffButton: false,
      showButtons: true,
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    checkForScroll() {
      const element = document.getElementById('scroll');
      if (element) {
        const { clientWidth } = element;
        const maxScrollLeft = element.scrollWidth - clientWidth;
        const x = element.scrollLeft;
        this.showLeffButton = false;
        if (x > 0) {
          this.showLeffButton = true;
        }

        this.showRightButton = true;
        if (x === maxScrollLeft) {
          this.showRightButton = false;
        }
      }
    },
    onResize() {
      const element = document.getElementById('scroll');
      if (element) {
        const { clientWidth } = element;
        const maxScrollLeft = element.scrollWidth - clientWidth;
        this.showButtons = false;
        if (maxScrollLeft > 0) {
          this.showButtons = true;
        }
        this.checkForScroll();
      }
    },
    onscroll() {
      this.checkForScroll();
    },
    scrollLeft(scrollRight) {
      const element = document.getElementById('scroll');
      if (element) {
        let x = element.scrollLeft;

        x = (scrollRight) ? x -= 150 : x += 150;
        element.scrollLeft = x;

        this.checkForScroll();
      }
    },
  },
};
</script>
