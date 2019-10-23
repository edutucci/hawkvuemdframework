<template>
  <div
    id="sidebar-menu"
    class="no-user-select flex flex-column slide-menu-list scroll"
    :class="bgColor"
    style="position: relative; left: 0px; display: inline-block; min-width: 60px;"
    :style="[sideMenuObject]"
    v-resize.initial="onResize"
  >
    <header>
      <slot name="header"></slot>
    </header>
    <h-list :id="menuListId" item-separator>
      <h-list-item
        v-for="(menu, index) in menuList"
        :key="index"
        @click="selectMenu(menu)"
        :bg-color="bgColor"
        :active="menu.isVisible"
      >
        <h-list-item-content>
          <div class="column full-width"
          >
            <div class="col">
              <div class="row align-items-center">
                <div class="col text-bold" :class="[textColor]">
                  <h-icon
                    :text-color="textColor"
                    size="20px"
                    :icon="menu.icon"
                  />
                  {{menu.text}}
                </div>
              </div>
            </div>
            <div class="col text-caption" :class="[textColor]">
              {{menu.caption}}
            </div>
          </div>
        </h-list-item-content>
      </h-list-item>
    </h-list>
    <div :style="subMenuObject">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import componentBase from '../componentBase.vue'
import uuidv1 from 'uuid/v1'
import viewport from '../others/viewport'
import resize from 'vue-resize-directive'

export default {
  extends: componentBase,
  name: 'HSideBarMenu',
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
      menuListId: uuidv1(),
      menuList: [],
      currentMenu: undefined,
      sideMenuObject: {
        position: 'relative',
        marginTop: '0px',
        height: ''
      },
      subMenuObject: {
        position: 'fixed',
        left: '0px',
        top: '0px',
        zIndex: '1500'
      }
    }
  },
  methods: {
    addSlideMenu (menu) {
      this.menuList.push(menu)
    },
    selectMenu (menu) {
      this.closeMenu()
      this.currentMenu = menu
      this.currentMenu.setVisible(true)

      this.$nextTick(() => {
        if (this.currentMenu.useMenu) {
          let menuListElement = document.getElementById(this.menuListId)
          let menuElement = document.getElementById('sidebar-menu')
          let scrollTop = 0
          if (menuElement) {
            scrollTop = menuElement.scrollTop
          }

          if (menuListElement) {
            let menuRect = menuListElement.getClientRects()
            this.subMenuObject.left = '' + (menuRect[0].left + menuRect[0].width + 5) + 'px'
            this.subMenuObject.top = '' + (menuRect[0].top + scrollTop) + 'px'
          }
        } else {
          this.currentMenu.onClick()
        }
      })
    },
    closeMenu () {
      if (this.currentMenu) {
        this.currentMenu.setVisible(false)
        this.currentMenu = undefined
      }
    },
    onResize () {
      console.log('sidemenu on resize')
      let pageHeaderHeight = viewport.getPageHeaderHeight()
      let pageFooterHeight = viewport.getPageFooterHeight()
      let sumHF = pageHeaderHeight + pageFooterHeight + 7

      this.sideMenuObject.position = 'relative'
      if (this.fixed) {
        this.sideMenuObject.position = 'fixed'
        this.sideMenuObject.height = 'calc(100vh - ' + sumHF + 'px)'
        this.sideMenuObject.marginTop = '' + (pageHeaderHeight + 2) + 'px'

        let sidebarMenu = document.getElementById('sidebar-menu')
        let sidebarMenuWidth = 0
        if (sidebarMenu) {
          sidebarMenuWidth = sidebarMenu.clientWidth
        }

        let pageContent = document.getElementById('page-content')
        if (pageContent) {
          let pageContentPadding = Number(pageContent.style['padding'].replace(/px/, ''))
          if (pageContentPadding > 0) {
            sidebarMenuWidth += 10
          }
          pageContent.style['margin-left'] = '' + sidebarMenuWidth + 'px'
        }
      }
    }
  }
}
</script>
