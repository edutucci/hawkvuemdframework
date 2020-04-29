<template>
  <div class="row full-height position-relative">
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
// import viewport from '../others/viewport'

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
  // watch: {
  //   padding: function (value) {
  //     this.onResize(value)
  //   }
  // },
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
    // this.onResize(this.padding)
  },
  methods: {
    // onResize (padding) {
    //   let pageHeaderHeight = viewport.getPageHeaderHeight()
    //   let pageFooterHeight = viewport.getPageFooterHeight()
    //   let sumHF = pageHeaderHeight + pageFooterHeight
    //   this.pageContent.padding = '0px'
    //   this.pageContainer.marginLeft = '0px'

    //   if (padding) {
    //     // this.pageContent.padding = '10px'
    //     sumHF += 20
    //   }

    //   this.pageContainer.height = 'calc(100vh - ' + sumHF + 'px)'
    //   this.pageContainer.marginTop = '' + pageHeaderHeight + 'px'

    //   // let sidebarMenuWidth = viewport.getSidebarMenuWidth()
    //   // if (this.padding) {
    //   //   sidebarMenuWidth += 10
    //   // }
    //   // this.pageContentContainer.marginLeft = '' + sidebarMenuWidth + 'px'
    // }
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
