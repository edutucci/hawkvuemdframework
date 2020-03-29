<template>
  <h-page-content>
    <div class="text-h4">Layout</div>

    <div class="text-h4 h-mt-md">Defining your layout</div>

    <comp-code title="Basic Layout" class="h-mt-md" :code="layout1">
      <h-app-toolbar bg-color="bg-primary">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white"/>
          <h-app-toolbar-title class="text-white">Basic Layout</h-app-toolbar-title>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent">
              <h-link url="#" icon="fas fa-globe" text-color="text-white"/>
            </h-btn>
            <h-btn fab size="sm" bg-color="bg-transparent">
              <h-link url="https://github.com/edutucci/hawkframework" icon="fab fa-github" text-color="text-white" new-window/>
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
      <h-app-toolbar bg-color="bg-primary">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white"/>
          <h-app-toolbar-title class="text-white">Basic Layout</h-app-toolbar-title>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent">
              <h-link url="#" icon="fas fa-globe" text-color="text-white"/>
            </h-btn>
            <h-btn fab size="sm" bg-color="bg-transparent">
              <h-link url="https://github.com/edutucci/hawkframework" icon="fab fa-github" text-color="text-white" new-window/>
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
