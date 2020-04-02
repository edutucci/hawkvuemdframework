<template>
  <h-page-content>
    <div class="row" id="paiDrawer">
      <div class="col-auto">
        <h-btn contained bg-color="bg-primary" text-color="text-white" text="Open Drawer Left" @click="showDrawerPage = true; side='left'"/>
      </div>
      <div class="col-space"/>
      <div class="col-auto">
        <h-btn class="h-ml-sm" contained bg-color="bg-primary" text-color="text-white" text="Open Drawer Right" @click="showDrawerPage = true; side='right'"/>
      </div>
    </div>

    <h-nav-drawer v-model="showDrawerPage" :side="side" display-mode="page">
      <div class="column bg-white full-size" style="display: inline-flex;">
        <div slot="header" class="text-center h-pa-md">
          <h-image avatar src="img/hawk.jpg" size="64px"/>
          <h3 class="no-padding no-margin">Hawk </h3>
          <h3 class="no-padding no-margin"> Framework</h3>
        </div>

        <div class="col">
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

  </h-page-content>
</template>

<script>

export default {
  data () {
    return {
      side: 'left',
      showDrawerMobile: false,
      showDrawerPage: false
    }
  },
  mounted () {
  },
  methods: {
  }

}
</script>
