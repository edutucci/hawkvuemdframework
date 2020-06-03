<template>
  <h-main-body
    :show-drawer-left="showDrawer"
    @closeDrawerLeft="showDrawer = $event"
  >
    <template v-slot:header>
      <!-- <h-app-toolbar bg-color="bg-primary">
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
              <h-link url="https://github.com/edutucci/hawkvuemdframework" icon="fab fa-github" text-color="text-white" new-window/>
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar> -->
    </template>

    <template v-slot:left>
      <div class="column full-height">
        <div class="col-auto text-center h-pa-md">
        </div>
        <div class="col">
        </div>
        <div class="col-auto">
        </div>        
      </div>
    </template>

    <template v-slot:footer>
      <!-- <div class="flex justify-center align-items-center bg-primary text-white" style="height: 60px">
        <div class="text-h6">HawkVueMD Page Footer</div>
      </div> -->
    </template>

    <router-view/>
  </h-main-body>
</template>

<script>

export default {
  data () {
    return {
      showDrawer: false
    }
  }
}
</script>

<style scoped>
</style>
