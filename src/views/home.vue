<template>
  <h-main-body>
    <h-page-header>
      <h-app-toolbar bg-color="bg-primary" text-color="text-white">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation>
            <h-fa-icon icon="fas fa-bars" text-color="text-white" @click="showDrawer = true"/>
          </h-app-toolbar-navigation>
          <h-app-toolbar-title class="text-body1">
            HawkFramework 1.0.12
          </h-app-toolbar-title>
          <h-app-toolbar-action>
            <h-btn text-button bg-color="bg-transparent">
              <h-link url="/" icon="fas fa-globe" text-color="text-white"/>
            </h-btn>
            <h-btn text-button bg-color="bg-transparent">
              <h-link url="https://github.com/edutucci/hawkframework" icon="fab fa-github" text-color="text-white" new-window/>
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>
    </h-page-header>

    <h-nav-drawer ref="nav" v-model="showDrawer" side="left">
      <div class="flex flex-column bg-white full-size" style="display: inline-flex;">

        <div slot="header" class="text-center h-pa-md">
          <div class="top-left-absolute flex flex-justify-end h-pa-sm bg-primary" style="left:0; right:0;">
            <h-fa-icon icon="fas fa-times" text-color="text-white" @click="$refs.nav.close()"/>
          </div>
          <div class="column" style="margin-top: 30px;">
            <h-avatar src="img/hawk.jpg" size="64px"/>
            <h3 class="no-padding no-margin">Hawk </h3>
            <h3 class="no-padding no-margin"> Framework</h3>
          </div>
        </div>

        <div class="flex-1">
            <h-collapsible>

              <h-collapsible-menu icon="fas fa-question-circle" text="Guide">
                <h-collapsible-item text="Installation" @click="$router.push('/installation'), $refs.nav.close()"/>
                <h-collapsible-item text="Layout" @click="$router.push('/layout'), $refs.nav.close()"/>
                <h-collapsible-item text="Pallete Color" @click="$router.push('/palleteColor'), $refs.nav.close()"/>
              </h-collapsible-menu>

              <h-collapsible-menu icon="fab fa-css3" text="CSS">
                <h-collapsible-item text="Spacing" @click="$router.push('/spacing'), $refs.nav.close()"/>
                <h-collapsible-item text="Flexbox" @click="$router.push('/flexbox'), $refs.nav.close()"/>
                <h-collapsible-item text="Text Alignment" @click="$router.push('/textalignment'), $refs.nav.close()"/>
                <h-collapsible-item text="Borders" @click="$router.push('/borders'), $refs.nav.close()"/>
                <h-collapsible-item text="Positioning" @click="$router.push('/positioning'), $refs.nav.close()"/>
                <h-collapsible-item text="Visibility" @click="$router.push('/visibility'), $refs.nav.close()"/>
                <h-collapsible-item text="Others" @click="$router.push('/cssothers'), $refs.nav.close()"/>
              </h-collapsible-menu>

              <h-collapsible-menu text="Components" icon="fas fa-hdd">
                <h-collapsible-item text="Buttons" @click="$router.push('/buttons'), $refs.nav.close()"/>
                <h-collapsible-item text="Button Group" @click="$router.push('/buttongroup'), $refs.nav.close()"/>
                <h-collapsible-item text="Button Dropdown" @click="$router.push('/buttondropdown'), $refs.nav.close()"/>
                <h-collapsible-item text="Cards" @click="$router.push('/card'), $refs.nav.close()"/>
                <h-collapsible-item text="Checkbox" @click="$router.push('/checkbox'), $refs.nav.close()"/>
                <h-collapsible-item text="Chips/InputChips" @click="$router.push('/chip'), $refs.nav.close()"/>
                <h-collapsible-item text="Carousel" @click="$router.push('/carousel'), $refs.nav.close()"/>
                <h-collapsible-item text="Collapsible" @click="$router.push('/collapsible'), $refs.nav.close()"/>
                <h-collapsible-item text="Date and Time" @click="$router.push('/datetime'), $refs.nav.close()"/>
                <h-collapsible-item text="Drawer" @click="$router.push('/drawer'), $refs.nav.close()"/>
                <h-collapsible-item text="File Upload" @click="$router.push('/fileupload'), $refs.nav.close()"/>
                <h-collapsible-item text="Icons" @click="$router.push('/icon'), $refs.nav.close()"/>
                <h-collapsible-item text="List (atualizar help)" @click="$router.push('/list'), $refs.nav.close()"/>
                //- <h-collapsible-item text="Menu (atualizar help)" @click="$router.push('/menu'), $refs.nav.close()"/>
                <h-collapsible-item text="MenuSlider (atualizar help)" @click="$router.push('/menuSlider'), $refs.nav.close()"/>
                <h-collapsible-item text="Mask" @click="$router.push('/mask'), $refs.nav.close()"/>
                <h-collapsible-item text="Dialog" @click="$router.push('/dialog'), $refs.nav.close()"/>
                <h-collapsible-item text="Radio" @click="$router.push('/radio'), $refs.nav.close()"/>
                <h-collapsible-item text="Search" @click="$router.push('/search'), $refs.nav.close()"/>
                <h-collapsible-item text="Select" @click="$router.push('/select'), $refs.nav.close()"/>
                <h-collapsible-item text="Tab (atualizar help)" @click="$router.push('/tab'), $refs.nav.close()"/>
                <h-collapsible-item text="Table (atualizar help)" @click="$router.push('/table'), $refs.nav.close()"/>
                <h-collapsible-item text="Input (atualizar help)" @click="$router.push('/input'), $refs.nav.close()"/>
                <h-collapsible-item text="Toolbar (atualizar help)" @click="$router.push('/toolbar'), $refs.nav.close()"/>
                <h-collapsible-item text="Toggle" @click="$router.push('/toggle'), $refs.nav.close()"/>
                <h-collapsible-item text="Video" @click="$router.push('/video'), $refs.nav.close()"/>
                <h-collapsible-item text="Rating" @click="$router.push('/rating'), $refs.nav.close()"/>
              </h-collapsible-menu>

              <h-collapsible-menu icon="fas fa-plug" text="Plugins">
                <h-collapsible-item text="Loading" @click="$router.push('/loading'), $refs.nav.close()"/>
                <h-collapsible-item text="SnackBar" @click="$router.push('/snack'), $refs.nav.close()"/>
              </h-collapsible-menu>

            </h-collapsible>

        </div>

        <div slot="footer" class="text-center  h-pa-md">
          <h2 class="no-margin">Free Framework</h2>
          <h2 class="no-margin">Pure CSS</h2>
        </div>

      </div>
    </h-nav-drawer>

    <h-main-page>
      <router-view/>
    </h-main-page>

    <h-page-footer>
      <div class="flex justify-center align-items-center bg-primary text-white" style="height: 60px">
        <div class="text-h6">HawkFramework Page Footer</div>
      </div>
    </h-page-footer>

  </h-main-body>

</template>

<script>

export default {
  data () {
    return {
      showtb: false,
      showDrawer: false
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
