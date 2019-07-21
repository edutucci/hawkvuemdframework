<template>
  <div>

    <h3>Drawer Left</h3>
    <div class="h-pa-sm border border-gray border-radius">
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
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      side: 'left',
      showDrawer: false
    }
  }
}
</script>
