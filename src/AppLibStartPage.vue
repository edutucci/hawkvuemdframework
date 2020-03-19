<template>
  <h-main-body>
    <h-page-header>
      <h-app-toolbar bg-color="bg-primary">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white"/>
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

    <h-page-content>
      BBB
    </h-page-content>

    <h-page-footer>
      <div class="flex justify-center align-items-center bg-primary text-white" style="height: 60px">
        <div class="text-h6">HawkFramework Footer</div>
      </div>
    </h-page-footer>

</h-main-body>
</template>

<script>
export default {
  name: 'AppLibStartPage'
}
</script>
