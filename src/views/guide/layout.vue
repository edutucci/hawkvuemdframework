<template>
  <h-page-content padding>
    <div class="row">
      <div class="col">
        <div class="text-h4">Layout</div>

         <div ref="usage"/>
        <comp-code title="Usage" class="h-mt-md" :code="layout1" page="template">
        </comp-code>

         <div ref="basicLayout"/>
        <comp-code title="Basic Layout" class="h-mt-md" :code="layout2">
          <div class="row justify-center">
            <div class="col-auto h-pa-sm">
              <h-image src="imgsamples/basicLayout.png" style="width:600px; height: 400px;"/>
            </div>
          </div>
        </comp-code>

         <div ref="layoutDrawerLeft"/>
        <comp-code title="Layout Drawer Left" class="h-mt-md" :code="layout3"
          :script="layout3Script" javascript
        >
          <div class="row justify-center">
            <div class="col-auto h-pa-sm">
              <h-image src="imgsamples/layoutDrawer.png" style="width:600px; height: 400px;"/>
            </div>
          </div>
        </comp-code>
      </div>
      <div class="col-auto">
        <list-help>
          <h-list>
            <h-list-header text="Layout"/>
            <h-list-item @click="goToElement('usage')">
              <h-list-item-content>
                <h-list-item-text title="Usage"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('basicLayout')">
              <h-list-item-content>
                <h-list-item-text title="Basic Layout"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('layoutDrawerLeft')">
              <h-list-item-content>
                <h-list-item-text title="Drawer Left"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </div>
    </div>
  </h-page-content>
</template>

<script>

import viewport from '../../components/others/viewport'

export default {
  name: 'Layout',
  data () {
    return {
      layout1: `
<h-main-body>
  <template v-slot:header>
  <template>

  // drawer left
  <template v-slot:left>
  <template>

  <router-view/>

  // drawer right
  <template v-slot:right>
  <template>

  <template v-slot:footer>
  <template>
</h-main-body>
`,
      layout2: `
<h-main-body>
  <template v-slot:header>
    <h-app-toolbar bg-color="bg-primary">
      <h-app-toolbar-container>
        <h-app-toolbar-navigation text-color="text-white"/>
        <h-app-toolbar-title class="text-white">
          HawkVueMD Framework 1.0.12-rc.0
        </h-app-toolbar-title>
        <h-app-toolbar-action>
          <h-btn fab size="sm" bg-color="bg-transparent">
            <h-link url="/" icon="fas fa-home" text-color="text-white"/>
          </h-btn>
          <h-btn fab size="sm" bg-color="bg-transparent">
            <h-link url="https://github.com/edutucci/hawkvuemdframework"
              icon="fab fa-github" text-color="text-white" new-window/>
          </h-btn>
        </h-app-toolbar-action>
      </h-app-toolbar-container>
    </h-app-toolbar>
  </template>

  <h-page-content>
    <div class="row full-height justify-center align-items-center">
      <div class="col-auto text-center h-pa-md">
        <div class="column align-items-center">
          <h-image avatar src="img/hawk.jpg" size="256px"/>
          <div class="text-h3">HawkVueMD </div>
          <div class="text-h3"> Framework</div>
        </div>
      </div>
    </div>
  </h-page-content>

</h-main-body>
`,
      layout3: `
<h-main-body
  :show-drawer-left="showDrawer"
  @closeDrawerLeft="showDrawer = $event"
>
  <template v-slot:header>
    <h-app-toolbar bg-color="bg-primary">
      <h-app-toolbar-container>
        <h-app-toolbar-navigation text-color="text-white" @click="showDrawer = !showDrawer"/>
        <h-app-toolbar-title class="text-white">
          HawkVueMD Framework 1.0.12-rc.0
        </h-app-toolbar-title>
        <h-app-toolbar-action>
          <h-btn fab size="sm" bg-color="bg-transparent">
            <h-link url="/" icon="fas fa-home" text-color="text-white"/>
          </h-btn>
          <h-btn fab size="sm" bg-color="bg-transparent">
            <h-link url="https://github.com/edutucci/hawkvuemdframework"
              icon="fab fa-github" text-color="text-white" new-window/>
          </h-btn>
        </h-app-toolbar-action>
      </h-app-toolbar-container>
    </h-app-toolbar>
  </template>

<template v-slot:left>
  <div class="column full-height">
    <div class="col-auto text-center h-pa-md">
      <div class="column align-items-center">
        <h-image avatar src="img/hawk.jpg" size="64px"/>
        <div class="">Hawk </div>
        <div class=""> Framework</div>
      </div>
    </div>
    <div class="col">
      <h-list>
        <h-list-item @click="$router.push('/home')">
          <h-list-item-content>
            <h-list-item-text title="Home Page" caption="Main page"/>
          </h-list-item-content>
        </h-list-item>
        <h-list-item @click="openURL('https://github.com/edutucci/hawkvuemdframework')">
          <h-list-item-content>
            <h-list-item-text title="Github" caption="Framework repository"/>
          </h-list-item-content>
        </h-list-item>
      </h-list>
    </div>
    <div class="col-auto">
      <div class="text-center h-pa-md">
        <h2 class="no-margin">Free Framework</h2>
        <h2 class="no-margin">Pure CSS</h2>
      </div>
    </div>
  </div>
</template>

<router-view/>

</h-main-body>      
`,
      layout3Script: `
export default {
  data () {
    return {
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
