<template>
  <!-- <div class="flex flex-column full-width boxshadow">
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
  </div> -->
  <div v-if="visible" class="slide-menu-item2" style="background: gray;">
    <strong>{{text}}</strong>
  </div>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'
import componentBase from '../componentBase.vue'

export default {
  mixins: [ clickaway ],
  extends: componentBase,
  props: {
    text: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  created () {
    console.log('mounted menu item')
    this.$parent.addSlideMenu(this)
    // if (this.default) {
    //   this.setVisible(true)
    // }
  },
  methods: {
  }
}
</script>

<style scoped>
/* .slide-menu-item {
  position:absolute;
  top:0px;
  z-index: 1600;
  left:44px;
  padding: 8px;
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 30px;
} */
</style>
