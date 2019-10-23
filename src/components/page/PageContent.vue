<template lang="pug">
  .page-content-container.overflow-hidden(
    id="page-content"
    v-resize.initial="onResize"
    :style="[pageContentContainer]"
  )
    .page-content-web.full-height.scroll(
      id="page-content-web"
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
  watch: {
    padding: function (value) {
      console.log('mudou padding', value)
      this.onResize()
    }
  },
  data () {
    return {
      pageContentContainer: {
        position: 'fixed',
        left: '0px',
        right: '0px',
        top: '0px',
        height: 'calc(100vh)',
        marginLeft: '0px',
        marginTop: '0px',
        padding: '0px'
      },
      pageContentContainerWeb: {
        height: ''
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
      this.pageContentContainer.padding = '0px'
      this.pageContentContainer.marginLeft = '0px'

      if (this.padding) {
        this.pageContentContainer.padding = '10px'
        sumHF += 20
      }

      this.pageContentContainer.height = 'calc(100vh - ' + sumHF + 'px)'
      this.pageContentContainer.marginTop = '' + pageHeaderHeight + 'px'

      let sidebarMenuWidth = viewport.getSidebarMenuWidth()
      if (this.padding) {
        sidebarMenuWidth += 10
      }
      this.pageContentContainer.marginLeft = '' + sidebarMenuWidth + 'px'
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

.page-height {
  height:calc(100vh - 110px)
}
</style>
