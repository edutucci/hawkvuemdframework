<template>
  <h-main-body>
    <h-page-header>
      <h-app-toolbar bg-color="bg-primary">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white" @click="showDrawer = !showDrawer"/>
          <h-app-toolbar-title class="text-white">
            HawkFramework 1.0.12
          </h-app-toolbar-title>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent">
              <h-link url="/" icon="fas fa-home" text-color="text-white"/>
            </h-btn>
            <h-btn fab size="sm" bg-color="bg-transparent">
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
            <h-icon icon="fas fa-times" text-color="text-white" @click="showDrawer = false"/>
          </div>
          <div class="column align-items-center" style="margin-top: 30px;">
            <h-image avatar src="img/hawk.jpg" size="64px"/>
            <div class="">Hawk </div>
            <div class=""> Framework</div>
          </div>
        </div>

        <div class="flex-1">
            <h-collapsible>

              <h-collapsible-menu icon="fas fa-question-circle" text="Guide">
                <h-collapsible-item text="Installation" @click="$router.push('/installation'), showDrawer = false"/>
                <h-collapsible-item text="Layout" @click="$router.push('/layout'), showDrawer = false"/>
                <h-collapsible-item text="Pallete Color" @click="$router.push('/palleteColor'), showDrawer = false"/>
              </h-collapsible-menu>

              <h-collapsible-menu icon="fab fa-css3" text="CSS">
                <h-collapsible-item text="Borders" @click="$router.push('/borders'), showDrawer = false"/>
                <h-collapsible-item text="Flexbox" @click="$router.push('/flexbox'), showDrawer = false"/>
                <h-collapsible-item text="Positioning" @click="$router.push('/positioning'), showDrawer = false"/>
                <h-collapsible-item text="Spacing" @click="$router.push('/spacing'), showDrawer = false"/>
                <h-collapsible-item text="Text Alignment" @click="$router.push('/textalignment'), showDrawer = false"/>
                <h-collapsible-item text="Visibility" @click="$router.push('/visibility'), showDrawer = false"/>
                <h-collapsible-item text="Others" @click="$router.push('/cssothers'), showDrawer = false"/>
              </h-collapsible-menu>

              <h-collapsible-menu text="Components" icon="fas fa-hdd">
                <h-collapsible-item text="Appbar" @click="$router.push('/appbar'), showDrawer = false"/>
                <h-collapsible-item text="Banner" @click="$router.push('/banner'), showDrawer = false"/>
                <h-collapsible-item text="Buttons" @click="$router.push('/buttons'), showDrawer = false"/>
                <h-collapsible-item text="Button Group" @click="$router.push('/buttongroup'), showDrawer = false"/>
                <!-- <h-collapsible-item text="Button Dropdown" @click="$router.push('/buttondropdown'), showDrawer = false"/> -->
                <h-collapsible-item text="Cards" @click="$router.push('/card'), showDrawer = false"/>
                <h-collapsible-item text="Carousel" @click="$router.push('/carousel'), showDrawer = false"/>
                <h-collapsible-item text="Checkbox" @click="$router.push('/checkbox'), showDrawer = false"/>
                <h-collapsible-item text="Chips" @click="$router.push('/chip'), showDrawer = false"/>
                <h-collapsible-item text="Collapsible" @click="$router.push('/collapsible'), showDrawer = false"/>
                <h-collapsible-item text="Date and Time" @click="$router.push('/datetime'), showDrawer = false"/>
                <h-collapsible-item text="Dialog" @click="$router.push('/dialog'), showDrawer = false"/>
                <h-collapsible-item text="Drawer" @click="$router.push('/drawer'), showDrawer = false"/>
                <h-collapsible-item text="File Upload" @click="$router.push('/fileupload'), showDrawer = false"/>
                <h-collapsible-item text="HtmlTable" @click="$router.push('/htmltable'), showDrawer = false"/>
                <h-collapsible-item text="Icons" @click="$router.push('/icon'), showDrawer = false"/>
                <h-collapsible-item text="Image" @click="$router.push('/compimage'), showDrawer = false"/>
                <h-collapsible-item text="Input Textfield" @click="$router.push('/input'), showDrawer = false"/>
                <h-collapsible-item text="List" @click="$router.push('/list'), showDrawer = false"/>
                <!-- <h-collapsible-item text="Menu (atualizar help)" @click="$router.push('/menu'), showDrawer = false"/> -->
                <h-collapsible-item text="Radio" @click="$router.push('/radio'), showDrawer = false"/>
                <h-collapsible-item text="Range Slider" @click="$router.push('/rangeslider'), showDrawer = false"/>
                <h-collapsible-item text="Rating" @click="$router.push('/rating'), showDrawer = false"/>
                <h-collapsible-item text="SideBar Menu" @click="$router.push('/sideBarMenu'), showDrawer = false"/>
                <h-collapsible-item text="Tab" @click="$router.push('/tab'), showDrawer = false"/>
                <h-collapsible-item text="Table" @click="$router.push('/table'), showDrawer = false"/>
                <h-collapsible-item text="Toggle" @click="$router.push('/toggle'), showDrawer = false"/>
                <h-collapsible-item text="Video" @click="$router.push('/video'), showDrawer = false"/>
              </h-collapsible-menu>

              <h-collapsible-menu icon="fas fa-plug" text="Plugins">
                <h-collapsible-item text="Loading" @click="$router.push('/loading'), showDrawer = false"/>
                <h-collapsible-item text="SnackBar" @click="$router.push('/snack'), showDrawer = false"/>
              </h-collapsible-menu>

            </h-collapsible>

        </div>

        <div slot="footer" class="text-center  h-pa-md">
          <h2 class="no-margin">Free Framework</h2>
          <h2 class="no-margin">Pure CSS</h2>
        </div>

      </div>
    </h-nav-drawer>

    <router-view/>

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
