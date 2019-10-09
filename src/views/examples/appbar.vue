<template>
  <h-page-content padding>
    <div  class="text-h4">Appbar Top </div>

    <h3>Styles</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-app-toolbar bg-color="bg-primary">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white"/>
          <h-app-toolbar-title class="text-white">
            Page title
          </h-app-toolbar-title>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-heart" text-color="text-white"/>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-search" text-color="text-white"/>
            <h-btn
                fab
                size="sm"
                dropdown
                drop-down-icon="fas fa-ellipsis-v"
                bg-color="bg-transparent"
                text-color="text-white"
                v-model="drpmenu"
                @click="drpmenu = true"
              >
                <div class="flex flex-column">
                  <h-list style="width: 150px">
                    <h-list-item>
                      <h-list-item-content>
                        <h-list-item-text title="Item 1"/>
                      </h-list-item-content>
                    </h-list-item>
                    <h-list-item>
                      <h-list-item-content>
                        <h-list-item-text title="Item 2"/>
                      </h-list-item-content>
                    </h-list-item>
                    <h-list-item>
                      <h-list-item-content>
                        <h-list-item-text title="Item 3"/>
                      </h-list-item-content>
                    </h-list-item>
                  </h-list>
                </div>
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>

      <h-app-toolbar bg-color="bg-deepOrange600">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white"/>
          <h-avatar src="img/music-collection.jpg" size="42px"/>
          <h-app-toolbar-title class="text-white">
            My big music collection to sing
          </h-app-toolbar-title>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-heart" text-color="text-white"/>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-search" text-color="text-white"/>
            <h-btn
              fab
              size="sm"
              dropdown
              drop-down-icon="fas fa-ellipsis-v"
              bg-color="bg-transparent"
              text-color="text-white"
            >
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>

      <h-app-toolbar bg-color="bg-brown500">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white"/>
          <h-app-toolbar-title inset class="text-white">
            Page title
          </h-app-toolbar-title>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-heart" text-color="text-white"/>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-search" text-color="text-white"/>
            <h-btn
              fab
              size="sm"
              dropdown
              drop-down-icon="fas fa-ellipsis-v"
              bg-color="bg-transparent"
              text-color="text-white"
            >
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>

      <h-app-toolbar bg-color="bg-secondary">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white"/>
          <h-app-toolbar-title inset class="text-white">
            <div class="col-auto">
              <h-avatar src="img/music-collection.jpg" size="42px"/>
            </div>
            <div class="col h-mt-sm h-ml-sm">
              My big music collection to sing
            </div>
          </h-app-toolbar-title>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-heart" text-color="text-white"/>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-search" text-color="text-white"/>
            <h-btn
              fab
              size="sm"
              dropdown
              drop-down-icon="fas fa-ellipsis-v"
              bg-color="bg-transparent"
              text-color="text-white"
            >
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>

    </div>

    <div  class="text-h4 h-mt-md">Appbar Bottom </div>

    <h3>Centered Fab</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-app-toolbar bg-color="bg-primary" class="h-mt-md">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white"/>
          <h-app-toolbar-fab/>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-heart" text-color="text-white"/>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-search" text-color="text-white"/>
            <h-btn
              fab
              size="sm"
              dropdown
              drop-down-icon="fas fa-ellipsis-v"
              bg-color="bg-transparent"
              text-color="text-white"
            >
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>
    </div>

    <h3>Centered Fab Inset</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-app-toolbar bg-color="bg-primary" class="h-mt-md">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white"/>
          <h-app-toolbar-fab inset/>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-heart" text-color="text-white"/>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-search" text-color="text-white"/>
            <h-btn
              fab
              size="sm"
              dropdown
              drop-down-icon="fas fa-ellipsis-v"
              bg-color="bg-transparent"
              text-color="text-white"
            >
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>
    </div>

    <h3>End Fab</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-app-toolbar bg-color="bg-primary" class="h-mt-md">
        <h-app-toolbar-container>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-caret-square-down" text-color="text-white"/>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-envelope" text-color="text-white"/>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-trash" text-color="text-white"/>
          </h-app-toolbar-action>
          <h-app-toolbar-fab align="end" fab-icon="fas fa-undo"/>
        </h-app-toolbar-container>
      </h-app-toolbar>
    </div>

    <h3>No Fab</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-app-toolbar bg-color="bg-primary">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white"/>
          <div class="col-space"></div>
          <h-app-toolbar-action>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-caret-square-down" text-color="text-white"/>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-envelope" text-color="text-white"/>
            <h-btn fab size="sm" bg-color="bg-transparent" left-icon="fas fa-trash" text-color="text-white"/>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>
    </div>

  </h-page-content>

</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      drpmenu: false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
div > .h-app-toolbar:not(:first-child) {
  margin-top: 10px;
}
</style>
