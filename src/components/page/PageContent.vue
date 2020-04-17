<template lang="pug">
  // .page-content-container.window-height.overflow-hidden(
  //   id="page-content"
  // )
  //   .row.full-height
  //     .col-auto.position-relative
  //       slot(name="left")
  //     .col
  //       .page-content-web.full-height.scroll(
  //         id="page-content-web"
  //         style="padding:10px"
  //       )
  //         slot
  //     .col-auto.position-relative
  //       slot(name="right")
  .full-height
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
      this.onResize(value)
    }
  },
  data () {
    return {
      pageContainer: {
        position: 'relative',
        left: '0px',
        right: '0px',
        top: '0px',
        height: 'calc(100vh)',
        marginLeft: '0px',
        marginRight: '0px',
        marginTop: '0px',
      },
      pageContent: {
        margin:'10px'
      }
    }
  },
  mounted () {
    this.onResize(this.padding)
  },
  methods: {
    onResize (padding) {
      let pageHeaderHeight = viewport.getPageHeaderHeight()
      let pageFooterHeight = viewport.getPageFooterHeight()
      let sumHF = pageHeaderHeight + pageFooterHeight
      this.pageContent.padding = '0px'
      this.pageContainer.marginLeft = '0px'

      if (padding) {
        // this.pageContent.padding = '10px'
        sumHF += 20
      }

      this.pageContainer.height = 'calc(100vh - ' + sumHF + 'px)'
      this.pageContainer.marginTop = '' + pageHeaderHeight + 'px'

      // let sidebarMenuWidth = viewport.getSidebarMenuWidth()
      // if (this.padding) {
      //   sidebarMenuWidth += 10
      // }
      // this.pageContentContainer.marginLeft = '' + sidebarMenuWidth + 'px'
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
