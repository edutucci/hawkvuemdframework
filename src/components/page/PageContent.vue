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
      this.$emit('onResize', viewport.mainBodyWidth())
    }
  }
}
</script>

<style scoped>

</style>
