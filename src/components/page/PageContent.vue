<template>
  <div class="row full-height position-relative"
    v-resize.initial="onResize"
  >
    <div class="col-auto full-height scroll">
      <slot name="left"></slot>
    </div>
    <div class="col page-content full-height scroll"
      :class="[{'page-padding': padding}]"
    >
      <div id="page-content-slot" class="full-height scroll" :style="[pageObject]">
        <slot></slot>
      </div>
      <div class="col-auto">
        <slot name="extra-body"></slot>
      </div>
    </div>
    <div class="col-auto full-height scroll">
      <slot name="right"></slot>
    </div>
  </div>

</template>

<script>

import resize from 'vue-resize-directive'
import viewport from '../others/viewport'

export default {
  name: 'HPageContent',
  directives: {
    resize
  },
  props: {
    padding: {
      type: Boolean,
      default: false
    },
    backgroundImage: {
      type: String,
      default: ''
    },
    backgroundImageOpacity: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      pageObject: {
        backgroundImage: 'url("")',
        maxHeight: '100%',
        backgroundPosition: 'center', // efeito parallax
        backgroundAttachment: 'fixed', // efeito parallax
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        opacity: '0.8'
      }
    }
  },
  watch: {
    backgroundImage: function (value) {
      this.changeBackground(value)
    },
    backgroundImageOpacity: function (value) {
      this.changeBackgroundOpacity(value)
    }
  },
  mounted () {
    this.changeBackground(this.backgroundImage)
    this.changeBackgroundOpacity(this.backgroundImageOpacity)
  },
  methods: {
    changeBackground (backgroundImage) {
      this.pageObject.backgroundImage = 'url("' + backgroundImage + '")'
    },
    changeBackgroundOpacity (backgroundImageOpacity) {
      this.pageObject.opacity = '' + backgroundImageOpacity + ''
    },
    onResize () {
      let size = viewport.mainBodyWidth()
      this.$emit('onResize', size)
      if (size < 961) {
        let mld = document.getElementById('mainbody-left-drawer')
        let mrd = document.getElementById('mainbody-right-drawer')
        if (mld || mrd) {
          this.$emit('mainLayoutDrawerIsOpened')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
