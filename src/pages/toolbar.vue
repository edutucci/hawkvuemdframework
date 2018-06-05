<template lang="pug">
  h-page

    h-app-toolbar.toolbar-top(style="top:80px;")
      h-app-toolbar-container(bgcolor="bg-primary" textcolor="text-white")
        h-app-toolbar-navigation(:icon="['fas', 'bars']")
        h-app-toolbar-title(title="My big music collection to sing")
        h-app-toolbar-action
          h-fa-icon(:icon="['fas', 'heart']")
          h-fa-icon(:icon="['fas', 'search']")
        h-app-toolbar-menu
          h-menu-dropdown(rtl :icon="['fas', 'ellipsis-v']")
            h-menu-dropdown-item(:icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')")
            h-menu-dropdown-item(:icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')")

    h-app-toolbar.toolbar-top(style="top:160px;")
      h-app-toolbar-container(bgcolor="bg-secondary" textcolor="text-white")
        h-app-toolbar-navigation(:icon="['fas', 'bars']")
        h-app-toolbar-title(title="Dashboard" style="padding-top: 60px;")
        h-app-toolbar-action
          h-fa-icon(:icon="['fas', 'heart']")
          h-fa-icon(:icon="['fas', 'search']")
        h-app-toolbar-menu
          h-menu-dropdown(rtl :icon="['fas', 'ellipsis-v']")
            h-menu-dropdown-item(:icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')")
            h-menu-dropdown-item(:icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')")
    
    h-app-toolbar.toolbar-bottom
      h-app-toolbar-container(bgcolor="bg-info" textcolor="text-white")
        h-app-toolbar-navigation(:icon="['fas', 'bars']")
        h-app-toolbar-fab
          h-btn-float(bgcolor="bg-black" textcolor="text-white" :icon="['fas', 'plus']")
        h-app-toolbar-action
          h-fa-icon(:icon="['fas', 'heart']")
        h-app-toolbar-menu
          h-menu-dropdown(rtl dtu :icon="['fas', 'ellipsis-v']")
            h-menu-dropdown-item(:icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')")
            h-menu-dropdown-item(:icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')")

</template>

<script>

import HPage from '../components/page/HPage.vue'
import HFaIcon from '../components/icons/HFaIcon.vue'
import HMenuDropdown from '../components/menu/HMenuDropdown.vue'
import HMenuDropdownItem from '../components/menu/HMenuDropdownItem.vue'
import HAppToolbar from '../components/toolbar/HAppToolbar.vue'
import HAppToolbarContainer from '../components/toolbar/HAppToolbarContainer.vue'
import HAppToolbarNavigation from '../components/toolbar/HAppToolbarNavigation.vue'
import HAppToolbarTitle from '../components/toolbar/HAppToolbarTitle.vue'
import HAppToolbarAction from '../components/toolbar/HAppToolbarAction.vue'
import HAppToolbarMenu from '../components/toolbar/HAppToolbarMenu.vue'
import HAppToolbarFab from '../components/toolbar/HAppToolbarFab.vue'
import HBtnFloat from '../components/buttons/HBtnFloat.vue'

export default {
  components: {
    HPage,
    HAppToolbar,
    HAppToolbarContainer,
    HAppToolbarNavigation,
    HAppToolbarTitle,
    HAppToolbarAction,
    HAppToolbarMenu,
    HAppToolbarFab,
    HFaIcon,
    HMenuDropdown,
    HMenuDropdownItem,
    HBtnFloat
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
