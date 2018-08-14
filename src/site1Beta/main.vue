<template lang="pug">
  div.window-height
    h-app-toolbar.top-left-fixed
      h-app-toolbar-container(bgcolor="bg-primary" textcolor="text-white")
        h-app-toolbar-navigation(:icon="['fas', 'bars']" @click="$refs.nav.open()")
        h-app-toolbar-title(title="Hawk Framework")
        h-app-toolbar-action
          router-link(to="/sitebeta1")
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
          <h-collapsible>

            <h-collapsible-menu :icon="['fas', 'home']" text="Principal">
              <h-collapsible-item text="Categorias" @click="$router.push('/site1Beta/main/categorias'), $refs.nav.close()"/>
              <h-collapsible-item text="Produtos" @click="$router.push('/site1Beta/main/produtos'), $refs.nav.close()"/>
            </h-collapsible-menu>

          </h-collapsible>
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
    HPage
  },
  created () {
  }
}
</script>

<style scoped>
</style>
