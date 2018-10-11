<template>
  <div
    class="no-user-select slide-menu"
    v-on-clickaway="closeMenu"
  >
    <div
      class="full-height flex flex-column flex-items-center slide-menu-item"
      :class="bgcolor"
      style="width: 52px;"
    >
      <div class="slide-menu-image flex" style="color:white;cursor:pointer;"
        v-for="(item, index) in menu" :key="index"
        @click="selectMenu(item)"
      >
        <h-fa-icon
          v-if="item.icon"
          :icon="item.icon"
          size="24px"
          :class="textcolor"
        />
        <h-avatar
        v-else-if="item.avatar"
        :src="item.avatar"
        size="32px"
        />
      </div>
    </div>

    <div
    class="slide-submenu"
    :style="{ minWidth: activeWidth }"
    v-if="currentMenu && currentMenu.menuItems && currentMenu.menuItems.length"
    >
      <div class="flex flex-column full-width boxshadow">
        <div class="flex flex-row" :class="[bgcolor,textcolor]">
          <div class="flex flex-row flex-items-center flex-1">
            <div style="margin-left: 8px; margin-top: 4px">
              <h-fa-icon
                v-if="currentMenu.menuIcon"
                :icon="currentMenu.menuIcon"
                size="25px"
                :class="textcolor"
              />
              <h-avatar
                v-else-if="currentMenu.menuAvatar"
                :src="currentMenu.menuAvatar"
                size="32px"
              />
            </div>
            <div class="h-pl-md menu-title flex flex-1 flex-justify-center flex-items-center">
              <h2>{{currentMenu.menuTitle}} </h2>
            </div>
          </div>
          <div @click="closeMenu"
            class="close flex flex-justify-end flex-items-center"
            style="margin-left:8px; margin-right:8px;"
          >
            <h-fa-icon icon="fas fa-times-circle" size="24px" :class="textcolor"/>
          </div>
        </div>
        <div class="flex flex-column"
          v-if="currentMenu.menuItems.length"
        >
          <div
            class="flex flex-justify-center"
            style="cursor:pointer;"
            v-for="(item, index) in currentMenu.menuItems" :key="index"
          >
            <h-slide-menu-item :label="item.label" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'
import componentBase from '../componentBase.vue'

export default {
  mixins: [ clickaway ],
  extends: componentBase,
  props: {
    menu: {
      type: Array,
      default: () => { return '' }
    }
  },
  data () {
    return {
      activeWidth: '200px',
      menuItems: undefined,
      currentHash: '',
      currentMenu: {
        menuIcon: [],
        menuTitle: '',
        menuItems: []
      },
      itembackgroundColor: 'list-item-color'
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    selectMenu (item) {
      console.log('item: ' + JSON.stringify(item))
      this.activeWidth = '200px'
      this.currentMenu.menuTitle = item.label
      this.currentMenu.menuIcon = item.icon || ''
      this.currentMenu.menuAvatar = item.avatar || ''
      this.currentMenu.menuItems = item.menuList || []
    },
    closeMenu () {
      this.activeWidth = '0px'
      this.currentMenu = {
        menuIcon: [],
        menuTitle: '',
        menuItems: []
      }
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

.slide-submenu {
  position:absolute;
  top:-8px;
  z-index: 1600;
  left:44px;
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 30px;
}

.close {
  margin: 4px;
  cursor:pointer;
}

</style>
