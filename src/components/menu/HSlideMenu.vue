<template>
  <div class="slide-menu" style="background: violet">
    <div
      class="full-height"
      :class="bgcolor"
    >
      <div class="slide-menu-image flex" style="color:white;cursor:pointer;"
        @click="selectMenu(item)"
      >
        <h-fa-icon
          v-if="icon"
          :icon="icon"
          size="24px"
          :class="textcolor"
        />
        <h-avatar
        v-else-if="avatar"
        :src="avatar"
        size="32px"
        />
      </div>
    </div>
    <div class="slide-menu-item">
      <slot></slot>
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
    icon: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
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
      itembackgroundColor: 'list-item-color',
      menus: [],
      isVisible: false
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
    setVisible (value) {
      this.isVisible = value
    }
  }
}
</script>

<style scoped>
.slide-menu {
  position:relative;
  font-size: 16px;
}

.slide-menu-item {
  position:absolute;
  top:0px;
  z-index: 1600;
  left:44px;
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 30px;
}
</style>
