<template>
  <div
    class="no-user-select flex flex-column slide-menu-list"
    :class="bgColor"
    style="position: relative; display: inline-block;"
  >
    <div class="column text-center image-list cursor-pointer">
      <h-icon
        :text-color="textColor"
        class="image-item"
        v-for="(menu, index) in menuList"
        :key="index"
        size="20px"
        :icon="menu.icon"
        @click="selectMenu(menu)"
      />
    </div>
    <div style="position:absolute; left: 53px; top: 0px; width: auto;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'HSlideMenuList',
  props: {
  },
  data () {
    return {
      menuList: [],
      currentMenu: undefined
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

<style scoped>

.slide-menu-container {
  position: absolute;
  background-color: white;
  min-width: 250px;
  overflow-y: auto;
  z-index: 1650;
  cursor: pointer;
  left: 55px;
  top: 0px;
  /* display: inline-block;
  font-size: 16px; */
}

.image-list {
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
}

.image-item {
  padding-top: 8px;
}

a:visited {
  text-decoration: none;
  color: coral;
}

/*
.slide-menu-item {
  padding-top: 6px;
}

.slide-menu-image {
  padding-bottom: 6px;
}

.close {
  margin: 4px;
  cursor:pointer;
} */
</style>
