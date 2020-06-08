<template>
  <page-layout ref="pl" title="Drawer">
    <template v-slot:components>
      <div ref="drawer-example"/>
      <comp-code class="h-mt-lg" title="Example" :code="drawerExample" page="template">
      </comp-code>

      <div ref="drawer-left"/>
      <comp-code class="h-mt-lg" title="Drawer Left" :code="drBtnLeft" :script="drawerScript"
        javascript
      >
        <div>
          <h-btn contained bg-color="bg-primary" text-color="text-white" text="Open Drawer Left" @click="showDrawerMobile = true; side='left'"/>
        </div>
      </comp-code>

      <div ref="drawer-right"/>
      <comp-code class="h-mt-lg" title="Drawer Right" :code="drBtnRight" :script="drawerScript"
        javascript
      >
        <div>
          <h-btn class="h-ml-sm" contained bg-color="bg-primary" text-color="text-white" text="Open Drawer Right" @click="showDrawerMobile = true; side='right'"/>
        </div>
      </comp-code>

      <h-nav-drawer v-model="showDrawerMobile" :side="side" display-mode="window">
          <div class="col-auto">
            <div class="text-center h-pa-md">
              <div class="column align-items-center" style="margin-top: 30px;">
                <h-image avatar src="img/hawk.jpg" size="64px"/>
                <div class="">Hawk </div>
                <div class=""> Framework</div>
              </div>
            </div>
          </div>

          <div class="col">
              <h-collapsible>
                <h-collapsible-menu icon="fas fa-question-circle" text="Help">
                  <h-collapsible-item text="About" @click="showDrawerMobile = false"/>
                </h-collapsible-menu>

                <h-collapsible-menu icon="fas fa-box" text="Contents">
                  <h-collapsible-item text="Products" @click="showDrawerMobile = false"/>
                  <h-collapsible-item text="Contact" @click="showDrawerMobile = false"/>
                </h-collapsible-menu>
              </h-collapsible>
          </div>

          <div class="col-auto text-center  h-pa-md">
            <h2 class="no-margin">Free Framework</h2>
            <h2 class="no-margin">Pure CSS</h2>
          </div>
      </h-nav-drawer>

      <tabs-help
        class="h-mt-md"
        :properties="helpTopics.properties"
        :events="helpTopics.events"
      />
    </template>

    <template v-slot:help>
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
    </template>
  </page-layout>

</template>

<script>

import PageLayout from '../pageLayout'
import helpTopics from './help'

export default {
  components: {
    PageLayout
  },
  data () {
    return {
      helpTopics: {
        properties: [],
        events: []
      },
      side: 'left',
      showDrawerMobile: false,
      showDrawerPage: false,
      drBtnLeft: `
<div>
  <h-btn contained bgcolor="bg-primary" textcolor="text-white"
    text="Open Drawer Left" @click="showDrawerMobile = true; side='left'"/>
</div>
`,
      drBtnRight: `
<div>
  <h-btn contained bgcolor="bg-primary" textcolor="text-white"
    text="Open Drawer Right" @click="showDrawerMobile = true; side='right'"/>
</div>      
`,
      drawerExample: `
<div>
  <h-btn contained bgcolor="bg-primary" textcolor="text-white"
    text="Open Drawer Left" @click="showDrawerMobile = true; side='left'"
  />
  <h-btn contained bgcolor="bg-primary" textcolor="text-white"
    text="Open Drawer Right" @click="showDrawerMobile = true; side='right'"
  />
</div>
<h-nav-drawer v-model="showDrawerMobile" :side="side">
  <div class="flex flex-column bg-white full-size" style="display: inline-flex;">
    <div slot="header" class="text-center h-pa-md">
      <h-image avatar src="img/hawk.jpg" size="64px"/>
      <h3 class="no-padding no-margin">Hawk </h3>
      <h3 class="no-padding no-margin"> Framework</h3>
    </div>

    <div class="flex-1">
        <h-collapsible>
          <h-collapsible-menu icon="fas fa-question-circle" text="Help">
            <h-collapsible-item text="About" @click="showDrawerMobile = false"/>
          </h-collapsible-menu>

          <h-collapsible-menu icon="fas fa-box" text="Contents">
            <h-collapsible-item text="Products" @click="showDrawerMobile = false"/>
            <h-collapsible-item text="Contact" @click="showDrawerMobile = false"/>
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
      showDrawerMobile: false
    }
  }
}      
`
    }
  },
  mounted () {
    this.helpTopics.properties = helpTopics.properties
    this.helpTopics.events = helpTopics.events
  },
  methods: {
    goToElement (refName) {
      this.$refs.pl.goToElement(this.$refs[refName])
    }
  }

}
</script>
