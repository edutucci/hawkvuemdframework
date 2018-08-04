<template lang="pug">
  h-page

    <h-app-toolbar class="top-left-absolute">
      <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
        <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
        <h-app-toolbar-title title="My big music collection to sing"/>
        <h-app-toolbar-action>
          <h-fa-icon :icon="['fas', 'heart']"/>
          <h-fa-icon :icon="['fas', 'search']"/>
        </h-app-toolbar-action>
        <h-app-toolbar-menu>
          <h-menu-dropdown rtl :icon="['fas', 'ellipsis-v']">
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." />
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
          </h-menu-dropdown>
        </h-app-toolbar-menu>
      </h-app-toolbar-container>
    </h-app-toolbar>

    <h-app-toolbar class="top-left-absolute" style="top:60px;">
      <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
        <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
        <h-app-toolbar-title title="My big music collection to sing"  style="padding-top: 60px;"/>
        <h-app-toolbar-action>
          <h-fa-icon :icon="['fas', 'heart']"/>
          <h-fa-icon :icon="['fas', 'search']"/>
        </h-app-toolbar-action>
        <h-app-toolbar-menu>
          <h-menu-dropdown rtl :icon="['fas', 'ellipsis-v']">
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." />
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
          </h-menu-dropdown>
        </h-app-toolbar-menu>
      </h-app-toolbar-container>
    </h-app-toolbar/>

    <div class="top-left-absolute full-width h-pt-xl h-pb-xl" style="top:160px; overflow-y:auto;">
        <pre v-highlightjs="tb1" >
          <code class="html">
          </code>
        </pre>
    </div>

    <h-app-toolbar class="bottom-right-fixed">
      <h-app-toolbar-container bgcolor="bg-info" textcolor="text-white">
        <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
        <h-app-toolbar-fab>
          <h-btn-float bgcolor="bg-black" textcolor="text-white" :icon="['fas', 'plus']"/>
        </h-app-toolbar-fab>
        <h-app-toolbar-action>
          <h-fa-icon :icon="['fas', 'heart']"/>
        </h-app-toolbar-action>
        <h-app-toolbar-menu>
          <h-menu-dropdown rtl dtu :icon="['fas', 'ellipsis-v']">
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct."/>
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
          </h-menu-dropdown>
        </h-app-toolbar-menu>
      </h-app-toolbar-container>
    </h-app-toolbar/>

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
      tb1: `
<h-app-toolbar class="top-left-absolute" style="top:30px;">
  <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
    <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
    <h-app-toolbar-title title="My big music collection to sing"/>
    <h-app-toolbar-action>
      <h-fa-icon :icon="['fas', 'heart']"/>
      <h-fa-icon :icon="['fas', 'search']"/>
    </h-app-toolbar-action>
    <h-app-toolbar-menu>
      <h-menu-dropdown rtl :icon="['fas', 'ellipsis-v']">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." />
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
      </h-menu-dropdown>
    </h-app-toolbar-menu>     
  </h-app-toolbar-container>
</h-app-toolbar>   

<h-app-toolbar class="top-left-absolute" style="top:90px;">
  <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
    <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
    <h-app-toolbar-title title="My big music collection to sing"  style="padding-top: 60px;"/>
    <h-app-toolbar-action>
      <h-fa-icon :icon="['fas', 'heart']"/>
      <h-fa-icon :icon="['fas', 'search']"/>     
    </h-app-toolbar-action>
    <h-app-toolbar-menu>
      <h-menu-dropdown rtl :icon="['fas', 'ellipsis-v']">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." />
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
      </h-menu-dropdown>     
    </h-app-toolbar-menu>     
  </h-app-toolbar-container>
</h-app-toolbar/>

<h-app-toolbar class="bottom-right-fixed">
  <h-app-toolbar-container bgcolor="bg-info" textcolor="text-white">
    <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
    <h-app-toolbar-fab>
      <h-btn-float bgcolor="bg-black" textcolor="text-white" :icon="['fas', 'plus']"/>
    </h-app-toolbar-fab>         
    <h-app-toolbar-action>
      <h-fa-icon :icon="['fas', 'heart']"/>
    </h-app-toolbar-action>
    <h-app-toolbar-menu>
      <h-menu-dropdown rtl dtu :icon="['fas', 'ellipsis-v']">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct."/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
      </h-menu-dropdown>
    </h-app-toolbar-menu>     
  </h-app-toolbar-container>
</h-app-toolbar/>      
      `
    }
  }
}
</script>

<style scoped>

</style>
