<template>
  <div
    class="no-user-select flex flex-column"
    :class="bgcolor"
    v-on-clickaway="closeMenu"
  >
    <slot></slot>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import componentBase from '../componentBase.vue'

export default {
  mixins: [ clickaway ],
  extends: componentBase,
  name: 'SlideMenuList',
  props: {
  },
  data () {
    return {
      menuList: []
    }
  },
  methods: {
    addSlideMenu (menu) {
      console.log('passou add menu')
      this.menuList.push({
        icon: menu.icon,
        avatar: menu.avatar
      })
    },
    selectMenu (item) {
      console.log('item: ' + JSON.stringify(item))
      // item.menu.setVisible(true)
      // this.activeWidth = '200px'
      // this.currentMenu.menuTitle = item.label
      // this.currentMenu.menuIcon = item.icon || ''
      // this.currentMenu.menuAvatar = item.avatar || ''
      // this.currentMenu.menuItems = item.menuList || []
    },
    closeMenu () {
      // this.activeWidth = '0px'
      // this.currentMenu = {
      //   menuIcon: [],
      //   menuTitle: '',
      //   menuItems: []
      // }
    },
    onMouseOverItem (color) {
      this.itembackgroundColor = color
    }
  }
}
</script>

<style scoped>
.slide-menu {
  position:relative;
  display: inline-block;
  font-size: 16px;
}

.slide-menu-item {
  padding-top: 6px;
}

.slide-menu-image {
  padding-bottom: 6px;
}

.close {
  margin: 4px;
  cursor:pointer;
}
</style>
