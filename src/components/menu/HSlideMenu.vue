<template>
  <div style="position:relative;">
    <div class="flex flex-row">

      <div class="menulist menu-icon-left menu-item">
        <div class="flex flex-column " style="color:white;cursor:pointer;height:40px;"
          v-for="(icon, index) in icons" :key="index"
          @click="selectMenu(index, icon)"
        >
          <h-fa-icon :icon="icon.icon" />
        </div>
      </div>     
      <div
      :style="{ width: activeWidth }"
      style="position:absolute; z-index: 3; left:68px;"
      v-if="currentMenu.menuItems.length > 0"
      >
        <div class="flex flex-column full-width boxshadow">
          <div class="flex flex-row" style="background-color: #a6acaf;">
            <div class="flex flex-row flex-justify-center flex-items-center flex-1">
              <div style="margin-right: 4px;">
                <font-awesome-icon :icon="currentMenu.menuIcon"/>
              </div>
              <div class="menu-title flex flex-items-center">
                <h3>{{currentMenu.menuTitle}} </h3>
              </div> 
            </div> 
            <div @click="closeMenu" class="close flex flex-justify-end flex-items-center"> 
              <font-awesome-icon :icon="['fas', 'times-circle']"/> 
            </div>             
         </div>
          <div class="flex flex-column" >
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

  </div>
</template>

<script>
import HFaIcon from '../icons/HFaIcon.vue'
import HBtnFloat from '../buttons/HBtnFloat.vue'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import HSlideMenuItem from './HSlideMenuItem.vue'

export default {
  props: {
    icons: {
      type: Array,
      default: () => ([])
    },
    menu: {
      type: Array,
      default: ''
    }
  },
  components: {
    HFaIcon,
    HBtnFloat,
    FontAwesomeIcon,
    HSlideMenuItem
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
    selectMenu (index, icon) {
      this.activeWidth = '200px'
      this.currentMenu.menuTitle = icon.label
      this.currentMenu.menuIcon = icon.icon
      this.currentMenu.menuItems = this.menu[index]
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
.menulist {
  background-color: DodgerBlue;
}

.slidemenu {
  background-color: gray;
  display: inline-block;
  padding: 16px;
  font-size: 16px;
  line-height: 30px;
  overflow-x: hidden;
  overflow-y: auto;
  opacity: 0.3;
  z-index: 2;
}

.close {
  margin: 4px;
  cursor:pointer;
}

</style>
