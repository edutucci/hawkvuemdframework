<template>
  <div @click="itemClick"></div>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [ clickaway ],
  props: {
    text: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    newWindow: {
      type: Boolean,
      default: false
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
      newWindow: this.newWindow
    })
  },
  watch: {
    text: function (valueNew, valueOld) {
      console.log('valueNew: ' + valueNew)
      console.log('valueOld: ' + valueOld)
      this.$parent.updateSlideMenuItem(valueNew, valueOld, this.newWindow)
    },
    newWindow: function (valueNew) {
      console.log('newWindow valueNew: ' + valueNew)
      this.$parent.updateSlideMenuItem(this.text, this.text, this.newWindow)
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
