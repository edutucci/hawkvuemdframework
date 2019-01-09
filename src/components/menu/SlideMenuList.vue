<template>
  <div
    class="no-user-select flex flex-column slide-menu-list"
    :class="bgcolor"
    v-on-clickaway="closeMenu"
  >
    <div>
      <slot></slot>
    </div>
    <div class="flex flex-column text-center image-list">
      <h-fa-icon
        :textcolor="textcolor"
        class="image-item"
        v-for="(item, index) in menuList"
        :key="index"
        size="20px"
        :icon="item.icon"
        @click="selectMenu(item)"
      />
    </div>
    <div  v-if="menuContent && menuContent.items.length" class="slide-menu-container border-corner-rounded">
      <div class="flex flex-column full-width">
        <div class="flex flex-row" :class="[bgcolor,textcolor]">
          <div class="flex flex-row flex-items-center flex-1">
            <div style="margin-left: 8px; margin-top: 4px">
              <h-fa-icon
                v-if="menuContent.icon"
                :icon="menuContent.icon"
                :class="textcolor"
                size="18px"
              />
              <h-avatar
                v-else-if="menuContent.menuAvatar"
                :src="menuContent.menuAvatar"
                size="32px"
              />
            </div>
            <div class="h-pl-md menu-title flex flex-1 flex-justify-center flex-items-center overflow-hidden" style="padding-top: 4px">
              <h3>{{menuContent.title}} </h3>
            </div>
          </div>
          <div @click="closeMenu"
            class="close flex flex-justify-end flex-items-center"
            style="margin-left:8px; margin-right:8px;"
          >
            <h-fa-icon icon="fas fa-times-circle" size="18px" :class="textcolor"/>
          </div>
        </div>
        <div class="flex flex-column"
          v-if="menuContent && menuContent.items.length"
        >
          <div
            class="flex flex-justify-center bg-white"
            style="cursor:pointer;"
            v-for="(item, index) in menuContent.items" :key="index"
          >
            <h-btn contained
              class="full-width"
            >
              <html-link :text="item.text" :url="item.url" :new-window="item.newWindow"/>
            </h-btn>
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
  name: 'SlideMenuList',
  props: {
  },
  data () {
    return {
      menuList: [],
      menuContent: {
        title: '',
        icon: '',
        items: []
      }
    }
  },
  methods: {
    addSlideMenuList (menu) {
      if (menu) {
        this.menuList.push(menu)
      }
    },
    updateSlideMenuList (menu) {
      let index = this.menuList.findIndex(item => item.text === menu.textOld)
      if (index !== -1) {
        this.$set(this.menuList, index, menu)
        this.selectMenu(menu)
      }
    },
    selectMenu (item) {
      this.menuContent = {
        title: item.text,
        icon: item.icon,
        items: []
      }
      if (item.menuList) {
        for (let index = 0; index < item.menuList.length; index++) {
          this.menuContent.items.push(item.menuList[index])
        }
      }
    },
    closeMenu () {
      this.menuContent.items = []
    }
  }
}
</script>

<style scoped>
.slide-menu-list {
  position: relative;
  display: inline-block;
}

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
