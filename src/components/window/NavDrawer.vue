<template>
  <div v-if="value" class="bg-primary no-user-select">
    <div
      v-if="value && displayMode === 'window'"
      class="flex drawer-animation bg-modal "
      :class="{ 'drawer_mobile drawer_size': value, 'flex-justify-start': side === 'left', 'flex-justify-end': side === 'right' }"
      :style="{ width: activeWidth }"
    >
      <div class="column drawer_container position-relative" v-on-clickaway="away">
        <div class="position-relative">
          <slot name="header"></slot>
        </div>
        <main class="flex-1">
          <slot></slot>
        </main>
        <div>
          <slot name="footer"></slot>
        </div>
      </div>

    </div>
    <div
      v-if="value && displayMode === 'page'"
      id="page-drawer"
      class="drawer_page drawer-animation column scroll"
      :class="{ 'drawer_size ': value, 'drawer_page_left': side === 'left',
        'drawer_page_right': side === 'right'
      }"
      style="display: inline-block; width: 200px;"
      v-resize.initial="onResize"
    >
      <div class="column drawer_container full-height position-relative">
        <div class="position-relative">
          <slot name="header"></slot>
        </div>
        <main class="flex-1">
          <slot></slot>
        </main>
        <div>
          <slot name="footer"></slot>
        </div>
      </div>

    </div>    
  </div>

</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'

import componentBase from '../componentBase.vue'
import uuidv1 from 'uuid/v1'
import viewport from '../others/viewport'
import resize from 'vue-resize-directive'

export default {
  extends: componentBase,
  name: 'Drawer',
  directives: {
    resize
  },
  mixins: [ clickaway ],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    displayMode: {
      type: String,
      default: 'window' // page or window
    },
    side: {
      type: String,
      default: 'right'
    }
  },
  components: {
  },
  data () {
    return {
      // drawer mobile
      activeWidth: '0px',

      // drawer page
      menuListId: uuidv1(),
      menuList: [],
      currentMenu: undefined,
      sideMenuObject: {
        position: 'fixed',
        marginTop: '0px',
        height: '',
        zIndex: '1200'
      },
      subMenuObject: {
        position: 'fixed',
        left: '0px',
        top: '0px',
        zIndex: '1200'
      },
      pageDrawerWidth: 0
    }
  },
  watch: {
    value: function (show) {
      console.log('value in drawer vale: ', show)
      if (show) {
        switch (this.displayMode) {
          case 'window':
            this.openMobile()
          break
          default:
            console.log('invalid displayMode in drawer.')
        }        
      } else {
        if (this.displayMode === 'page') {
          this.closePage()
        }
      }
    },
    side: function () {
      console.log('side changed ')
      this.onResize()
    }
  },
  methods: {
    openMobile () {
      this.activeWidth = '100%'
    },
    closeMobile () {
      this.activeWidth = '0px'
      this.$emit('input', false)
    },
    away () {
      if (this.value) {
        this.closeMobile()
      }
    },
    closePage() {
      let pageContent = document.getElementById('page-content')
      if (pageContent) {
        console.log('closing drawer')
        pageContent.style['margin-right'] = '0px'
        pageContent.style['margin-left'] = '0px'
      }
    },
    onResize () {
      if (!this.value) {
        this.closePage()
        return
      }

      let pageHeaderHeight = viewport.getPageHeaderHeight()
      let pageFooterHeight = viewport.getPageFooterHeight()
      let sumHF = pageHeaderHeight + pageFooterHeight + 7
      console.log('sumHF: ', sumHF)

      let pageDrawer = document.getElementById('page-drawer')

      if (pageDrawer) {
        this.pageDrawerWidth = 0
        this.pageDrawerWidth = pageDrawer.clientWidth

        let pageContent = document.getElementById('page-content')
        if (pageContent) {
          if (this.side === 'left') {
            pageContent.style['margin-left'] = '' + this.pageDrawerWidth + 'px'
            pageContent.style['margin-right'] = '0px'
          } else if (this.side === 'right') {
            pageContent.style['margin-left'] = '0px'
            pageContent.style['margin-right'] = '' + this.pageDrawerWidth + 'px'
          }
        }        
      }
    }    
  }
}
</script>

<style scoped>
.side {
  top: 0;
  right: 0;
}
</style>
