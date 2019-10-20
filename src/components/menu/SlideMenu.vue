<template>
    <!-- <div class=" border-radius" style="position:absolute; min-width: 150px; left: 53px; top: 0px; width: auto; padding: 1px;"> -->

  <div v-if="isVisible" v-on-clickaway="closeMenu"
    class="border border-gray border-radius"
    style="padding:1 2px;"
  >
    <div class="column full-width">
      <div class="col bg-primary border-top-radius">
        <div class="row" style="padding: 4px;">
          <div class="col text-white text-body1">
            {{text}}
          </div>
          <div class="col-auto" style="padding: 0px 4px; cursor: pointer;">
            <h-fa-icon icon="fas fa-times-circle" size="18px" text-color="text-white" @click="closeMenu"/>
          </div>
        </div>
      </div>
      <div class="col">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'HSlideMenu',
  mixins: [ clickaway ],
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  created () {
  },
  mounted () {
    this.$parent.addSlideMenu(this)
  },

  methods: {
    setVisible (value) {
      this.isVisible = value
    },
    closeMenu () {
      this.$parent.closeMenu()
    }
  }
}
</script>

<style scoped>
/* .slide-menu-container {
  display: inline-block;
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
} */
</style>
