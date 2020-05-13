<template>
  <div
    id="sidebar-menu"
    class="no-user-select flex flex-column scroll"
    :class="bgColor"
    style="position: relative; display: inline-block;"
  >
    <header>
      <slot name="header"></slot>
    </header>
    <h-list :id="menuListId" item-separator>
      <h-list-item
        v-for="(menu, index) in menuList"
        :key="index"
        @mouseover="selectMenu(menu)"
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
        <h-list-item-side v-if="menu.useMenu">
          <h-icon icon="fas fa-caret-right" :text-color="textColor"/>
        </h-list-item-side>
      </h-list-item>
    </h-list>
    <div :style="subMenuObject" 
      v-on-clickaway="closeMenu"
      @click="closeMenu"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
import componentBase from '../componentBase.vue'
import uuidv1 from 'uuid/v1'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  extends: componentBase,
  name: 'HSideBarMenu',
  mixins: [ clickaway ],
  data () {
    return {
      menuListId: uuidv1(),
      menuList: [],
      currentMenu: undefined,
      subMenuObject: {
        position: 'fixed',
        left: '0px',
        top: '0px',
        zIndex: '1200'
      }
    }
  },
  methods: {
    addSlideMenu (menu) {
      this.menuList.push(menu)
    },
    selectMenu (menu) {
      this.closeMenu()
      if (menu.useMenu) {
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
      }
    },
    closeMenu () {
      if (this.currentMenu) {
        this.currentMenu.setVisible(false)
        this.currentMenu = undefined
      }
    }
  }
}
</script>
