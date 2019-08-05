<template>
  <h-page-content>
    <div class="text-h4">Layout</div>

    <div class="text-h4 h-mt-md">Defining your layout</div>

    <comp-code title="Basic Layout" class="h-mt-md" :code="layout1">
      <h-app-toolbar>
        <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
          <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white" @click="showDrawer = true"/>
          <h-app-toolbar-title title="Basic Layout"/>
          <h-app-toolbar-action>
            <h-btn contained transparent>
              <html-link url="/" icon="fas fa-globe" textcolor="text-white"/>
            </h-btn>
            <h-btn contained transparent>
              <html-link url="https://github.com/edutucci/hawkframework" icon="fab fa-github" textcolor="text-white" new-window/>
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>

      <h-main-page>
        <div class="scroll" style="height: 200px;">
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
          <p>11111111111111111</p>
        </div>

      </h-main-page>

      <div class="positon-relative">
        <div class="flex justify-center align-items-center bg-primary text-white" style="height: 60px">
          <div class="text-h6">My Page Footer</div>
        </div>
      </div>

    </comp-code>

  </h-page-content>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      layout1: `
<h-main-body>
  <h-page-header>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
        <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white" @click="showDrawer = true"/>
        <h-app-toolbar-title title="HawkFramework 1.0.12"/>
        <h-app-toolbar-action>
          <h-btn contained transparent>
            <html-link url="/" icon="fas fa-globe" textcolor="text-white"/>
          </h-btn>
          <h-btn contained transparent>
            <html-link url="https://github.com/edutucci/hawkframework" icon="fab fa-github" textcolor="text-white" new-window/>
          </h-btn>
        </h-app-toolbar-action>
      </h-app-toolbar-container>
    </h-app-toolbar>
  </h-page-header>

  <h-main-page>
    <router-view/>
  </h-main-page>

  <h-page-footer>
    <div class="flex justify-center align-items-center bg-primary text-white" style="height: 60px">
      <div class="text-h4">HawkFramework Page Footer</div>
    </div>
  </h-page-footer>

</h-main-body>
`
    }
  }
}
</script>
