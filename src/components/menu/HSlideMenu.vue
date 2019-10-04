<template>
  <div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [ clickaway ],
  props: {
    icon: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    text: {
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
      menuList: [],
      isVisible: false
    }
  },
  created () {
  },
  mounted () {
    this.$parent.addSlideMenuList({
      text: this.text,
      icon: this.icon,
      avatar: this.avatar,
      menuList: this.menuList
    })
  },
  watch: {
    text: function (valueNew, valueOld) {
      this.updateSlideMenuList(valueOld)
    },
    icon: function (value) {
      this.updateSlideMenuList(this.text)
    }
  },
  methods: {
    setVisible (value) {
      this.isVisible = value
    },
    addSlideMenuItem (menuItem) {
      this.menuList.push(menuItem)
    },
    updateSlideMenuItem (textNew, textOld, newWindow) {
      let index = this.menuList.findIndex(item => item.text === textOld)
      console.log('index:' + index)
      if (index !== -1) {
        console.log('this.menuList: ' + JSON.stringify(this.menuList))
        this.menuList[index].text = textNew
        this.menuList[index].newWindow = newWindow
        console.log('this.menuList: ' + JSON.stringify(this.menuList))
        this.updateSlideMenuList(this.text)
      }
    },
    updateSlideMenuList (valueOld) {
      this.$parent.updateSlideMenuList({
        textOld: valueOld,
        text: this.text,
        icon: this.icon,
        avatar: this.avatar,
        menuList: this.menuList
      })
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
