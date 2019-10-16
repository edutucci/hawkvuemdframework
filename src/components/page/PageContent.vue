<template lang="pug">
  .page-content-container.scroll(
    :class="{'page-content-container-padding': padding }"
    id="page-content"
    v-resize.initial="onResize"
    :style="[pageContentContainer]"
  )
    .page-content-web(
      :class="{'page-content-web-padding': padding }"
    )
      slot
</template>

<script>

import resize from 'vue-resize-directive'
import viewport from '../others/viewport'

export default {
  name: 'PageContent',
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
      pageContentContainer: {
        height: 'calc(100vh)',
        marginTop: '0px',
        padding: '0px'
      }
    }
  },
  mounted () {
    this.onResize()
  },
  methods: {
    onResize () {
      let pageHeaderHeight = viewport.getPageHeaderHeight()
      let pageFooterHeight = viewport.getPageFooterHeight()
      let sumHF = pageHeaderHeight + pageFooterHeight
      if (this.padding) {
        this.pageContentContainer.padding = '10px'
        sumHF += 20
      }
      this.pageContentContainer.height = 'calc(100vh - ' + sumHF + 'px)'
      this.pageContentContainer.marginTop = '' + pageHeaderHeight + 'px'
    }
  }
}
</script>

<style scoped>
/* .page-content-container {
  height: calc(100vh - 130px); // pageHeaderHeight + pageFooterHeight + pagePadding
  margin-top: 50px;
} */

/* .page-content-container-padding {
  padding: 10px;
} */

.page-content-web-padding {
  padding-bottom: 10px;
}
</style>
