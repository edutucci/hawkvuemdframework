<template>
  <header class="top-left-fixed" v-resize.initial="onResize"
    style="right:0px; z-index: 1000;" id="page-header"
  >
    <slot></slot>
  </header>
</template>

<script>

import resize from 'vue-resize-directive'

export default {
  name: 'PageHeader',
  directives: {
    resize
  },
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onResize () {
      let pageContent = document.getElementById('page-content')
      let pageHeader = document.getElementById('page-header')
      if (pageContent && pageHeader) {
        let rectPageHeader = pageHeader.getClientRects()
        let pageHeaderHeight = rectPageHeader['0'].height
        pageContent.style['margin-top'] = '' + pageHeaderHeight + 'px'
      }
    }
  }
}
</script>
