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
      <div id="page-content-slot" class="full-height scroll">
        <slot></slot>
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
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
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
