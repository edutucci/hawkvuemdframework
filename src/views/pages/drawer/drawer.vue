<template>
  <h-page-content padding>
    <div class="text-h4">Drawer</div>

    <!--
      Bugs
      - Allow draws right side screen
    -->

    <comp-code class="h-mt-lg" title="Drawer Left" :code="drawer" :script="drawerScript"
      javascript
    >
      <div>
        <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="Open Drawer Left" @click="showDrawer = true; side='left'"/>
        <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="Open Drawer Right" @click="showDrawer = true; side='right'"/>
      </div>
      <h-nav-drawer v-model="showDrawer" :side="side">
        <div class="flex flex-column bg-white full-size" style="display: inline-flex;">
          <div slot="header" class="text-center h-pa-md">
            <h-avatar src="img/hawk.jpg" size="64px"/>
            <h3 class="no-padding no-margin">Hawk </h3>
            <h3 class="no-padding no-margin"> Framework</h3>
          </div>

          <div class="flex-1">
              <h-collapsible>
                <h-collapsible-menu icon="fas fa-question-circle" text="Help">
                  <h-collapsible-item text="About" @click="showDrawer = false"/>
                </h-collapsible-menu>

                <h-collapsible-menu icon="fas fa-box" text="Contents">
                  <h-collapsible-item text="Products" @click="showDrawer = false"/>
                  <h-collapsible-item text="Contact" @click="showDrawer = false"/>
                </h-collapsible-menu>
              </h-collapsible>
          </div>

          <div slot="footer" class="text-center  h-pa-md">
            <h2 class="no-margin">Free Framework</h2>
            <h2 class="no-margin">Pure CSS</h2>
          </div>
        </div>
      </h-nav-drawer>
    </comp-code>

  </h-page-content>
</template>

<script>
export default {
  data () {
    return {
      side: 'left',
      showDrawer: false,
      drawer: `
<div>
  <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="Open Drawer Left" @click="showDrawer = true; side='left'"/>
  <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="Open Drawer Right" @click="showDrawer = true; side='right'"/>
</div>
<h-nav-drawer v-model="showDrawer" :side="side">
  <div class="flex flex-column bg-white full-size" style="display: inline-flex;">
    <div slot="header" class="text-center h-pa-md">
      <h-avatar src="img/hawk.jpg" size="64px"/>
      <h3 class="no-padding no-margin">Hawk </h3>
      <h3 class="no-padding no-margin"> Framework</h3>
    </div>

    <div class="flex-1">
        <h-collapsible>
          <h-collapsible-menu icon="fas fa-question-circle" text="Help">
            <h-collapsible-item text="About" @click="showDrawer = false"/>
          </h-collapsible-menu>

          <h-collapsible-menu icon="fas fa-box" text="Contents">
            <h-collapsible-item text="Products" @click="showDrawer = false"/>
            <h-collapsible-item text="Contact" @click="showDrawer = false"/>
          </h-collapsible-menu>
        </h-collapsible>
    </div>

    <div slot="footer" class="text-center  h-pa-md">
      <h2 class="no-margin">Free Framework</h2>
      <h2 class="no-margin">Pure CSS</h2>
    </div>
  </div>
</h-nav-drawer>
`,
      drawerScript: `
export default {
  data () {
    return {
      side: 'left',
      showDrawer: false
    }
  }
}      
`
    }
  }

}
</script>
