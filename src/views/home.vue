<template lang="pug">
  div.window-height
    h-app-toolbar.top-left-fixed
      h-app-toolbar-container(bgcolor="bg-primary" textcolor="text-white")
        h-app-toolbar-navigation(:icon="['fas', 'bars']" @click="$refs.nav.open()")
        h-app-toolbar-title(title="Hawk Framework")
        h-app-toolbar-action
          router-link(to="/site1Beta")
            h-fa-icon(:icon="['fas', 'globe']")
          a(href='https://github.com/edutucci/hawkframework' target="_blank")
            h-fa-icon(:icon="['fab', 'github']")

    <h-nav-drawer ref="nav">
      <div class="flex flex-column bg-white full-size" style="display: inline-flex;">

        <div slot="header" class="text-center h-pa-md">
          <h-avatar src="/img/hawk.jpg" size="64px"/>
          <h3 class="no-padding no-margin">Hawk </h3>
          <h3 class="no-padding no-margin"> Framework</h3>
        </div>

        <div class="flex-1">

            //- <h-collapsible-menu :icon="['fas', 'check-circle']" text="Guide">
            //-   <h-collapsible-item text="Introduction"/>
            //-   <h-collapsible-item text="Installation"/>
            //- </h-collapsible-menu>

            <h-collapsible-menu :icon="['fab', 'css3']" text="CSS">
              <h-collapsible-item text="Spacing" @click="$router.push('/spacing'), $refs.nav.close()"/>
              <h-collapsible-item text="Flexbox" @click="$router.push('/flexbox'), $refs.nav.close()"/>
              <h-collapsible-item text="Text Alignment" @click="$router.push('/textalignment'), $refs.nav.close()"/>
              <h-collapsible-item text="Positioning" @click="$router.push('/positioning'), $refs.nav.close()"/>
              <h-collapsible-item text="Others" @click="$router.push('/cssothers'), $refs.nav.close()"/>
            </h-collapsible-menu>

            <h-collapsible-menu :icon="['fas', 'hdd']" text="Components">
              <h-collapsible-item text="Buttons" @click="$router.push('/buttons'), $refs.nav.close()"/>
              <h-collapsible-item text="Icons" @click="$router.push('/icon'), $refs.nav.close()"/>
              <h-collapsible-item text="Textfield" @click="$router.push('/textfield'), $refs.nav.close()"/>
              <h-collapsible-item text="Search" @click="$router.push('/search'), $refs.nav.close()"/>
              <h-collapsible-item text="Cards" @click="$router.push('/card'), $refs.nav.close()"/>
              <h-collapsible-item text="Menu" @click="$router.push('/menu'), $refs.nav.close()"/>
              <h-collapsible-item text="List" @click="$router.push('/list'), $refs.nav.close()"/>
              <h-collapsible-item text="Checkbox" @click="$router.push('/checkbox'), $refs.nav.close()"/>
              <h-collapsible-item text="Radio" @click="$router.push('/radio'), $refs.nav.close()"/>
              <h-collapsible-item text="Select" @click="$router.push('/select'), $refs.nav.close()"/>
              <h-collapsible-item text="Tab" @click="$router.push('/tab'), $refs.nav.close()"/>
              <h-collapsible-item text="Table" @click="$router.push('/table'), $refs.nav.close()"/>
              <h-collapsible-item text="Toolbar" @click="$router.push('/toolbar'), $refs.nav.close()"/>
              <h-collapsible-item text="Modal" @click="$router.push('/modal'), $refs.nav.close()"/>
              <h-collapsible-item text="DateTime" @click="$router.push('/datetime'), $refs.nav.close()"/>
              <h-collapsible-item text="Toggle" @click="$router.push('/toggle'), $refs.nav.close()"/>
            </h-collapsible-menu>

        </div>

        <div slot="footer" class="text-center  h-pa-md">
          <h2 class="no-margin">Free Framework</h2>
          <h2 class="no-margin">Pure CSS</h2>
        </div>

      </div>
    </h-nav-drawer>

    <div class="flex full-width window-height" style="top: 60px; position:relative;">
      router-view
    </div>
    //- <div class="flex flex-row full-size">
    //-   <div class="flex-1">
    //-     <router-view/>
    //-   </div>
    //- </div>

</template>

<script>

import HCollapsible from '../components/collapsible/HCollapsible.vue'
import HCollapsibleMenu from '../components/collapsible/HCollapsibleMenu.vue'
import HCollapsibleItem from '../components/collapsible/HCollapsibleItem.vue'
import HAvatar from '../components/image/HAvatar'
import HBtn from '../components/buttons/HBtn'
import HNavDrawer from '../components/window/HNavDrawer'
import HAppToolbar from '../components/toolbar/HAppToolbar.vue'
import HAppToolbarContainer from '../components/toolbar/HAppToolbarContainer.vue'
import HAppToolbarNavigation from '../components/toolbar/HAppToolbarNavigation.vue'
import HAppToolbarTitle from '../components/toolbar/HAppToolbarTitle.vue'
import HAppToolbarAction from '../components/toolbar/HAppToolbarAction.vue'
import HBtnFloat from '../components/buttons/HBtnFloat.vue'
import HFaIcon from '../components/icons/HFaIcon'
import HPage from '../components/page/HPage'

export default {
  data () {
    return {
    }
  },
  components: {
    HCollapsible,
    HCollapsibleMenu,
    HCollapsibleItem,
    HAvatar,
    HBtn,
    HNavDrawer,
    HAppToolbar,
    HAppToolbarContainer,
    HAppToolbarNavigation,
    HAppToolbarTitle,
    HAppToolbarAction,
    HBtnFloat,
    HFaIcon,
    HPage
  },
  created () {
  }
}
</script>

<style scoped>
.page-container {
  margin: 0;
  padding: 0;
  overflow-x: auto;
  overflow-y: auto;
}
/* .page-container {
  width: calc(100vw - 270px);
  height: calc(100vh - 80px);
} */
</style>
