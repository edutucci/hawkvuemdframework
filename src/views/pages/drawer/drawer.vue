<template>
  <h-page-content padding>
    <div class="row">
      <div class="col">
        <div class="text-h4">Drawer</div>

        <div ref="drawer-left"/>
        <comp-code class="h-mt-lg" title="Drawer Left" :code="drawer" :script="drawerScript"
          javascript
        >
          <div>
            <h-btn contained bg-color="bg-primary" text-color="text-white" text="Open Drawer Left" @click="showDrawer = true; side='left'"/>
          </div>
        </comp-code>

        <div ref="drawer-right"/>
        <comp-code class="h-mt-lg" title="Drawer Right" :code="drawer" :script="drawerScript"
          javascript
        >
          <div>
            <h-btn class="h-ml-sm" contained bg-color="bg-primary" text-color="text-white" text="Open Drawer Right" @click="showDrawer = true; side='right'"/>
          </div>
        </comp-code>

          <h-nav-drawer v-model="showDrawer" :side="side">
            <div class="flex flex-column bg-white full-size" style="display: inline-flex;">
              <div slot="header" class="text-center h-pa-md">
                <h-image avatar src="img/hawk.jpg" size="64px"/>
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
      <div class="col-auto">
        <list-help>
          <h-list>
            <h-list-header text="Usage"/>
            <h-list-item @click="goToElement('drawer-left')">
              <h-list-item-content>
                <h-list-item-text title="Drawer Left"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('drawer-right')">
              <h-list-item-content>
                <h-list-item-text title="Drawer Right"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </div>
    </div>

  </h-page-content>
</template>

<script>

import viewport from '../../../components/others/viewport'

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
      <h-image avatar src="img/hawk.jpg" size="64px"/>
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
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    }
  }

}
</script>
