<template>
  <div @click="itemClick"></div>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'
import componentBase from '../componentBase.vue'

export default {
  mixins: [ clickaway ],
  extends: componentBase,
  props: {
    text: {
      type: String,
      default: ''
    },
    routerLink: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$parent.addSlideMenuItem({
      text: this.text,
      url: this.url,
      routerLink: this.routerLink
    })
  },
  watch: {
    text: function (valueNew, valueOld) {
      this.$parent.updateSlideMenuItem(valueNew, valueOld)
    }
  },
  methods: {
    itemClick () {
      this.$emit('itemClick', this.text)
    }
  }
}
</script>

<style scoped>
/* .slide-menu-item {
  position:absolute;
  top:0px;
  z-index: 1600;
  left:44px;
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 30px;
} */
</style>
