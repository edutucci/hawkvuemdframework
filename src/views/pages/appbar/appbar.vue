<template>
  <h-page-content padding
    @onResize="pageResize"
  >
    <div class="row ">
      <div class="col">
        <div class="row position-sticky bg-white">
          <div class="col text-h4">
            Appbar Top 
          </div>
          <div class="col-auto">
            <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = true"/>
          </div>
        </div>

        <div>
          <div ref="appbar-styles"/>
          <comp-code class="h-mt-lg" title="Styles" :code="tb1" :script="scripttb1" javascript>
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
                <h-image avatar src="img/music-collection.jpg" size="42px"/>
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
                    <h-image avatar src="img/music-collection.jpg" size="42px"/>
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

          </comp-code>

          <div  class="text-h4 h-mt-md">Appbar Bottom </div>

          <div ref="appbar-centerfab"/>
          <comp-code class="h-mt-lg" title="Centered Fab" :code="tb2">
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
          </comp-code>

          <div ref="appbar-fabinset"/>
          <comp-code class="h-mt-lg" title="Centered Fab Inset" :code="tb3">
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
          </comp-code>

          <div ref="appbar-endfab"/>
          <comp-code class="h-mt-lg" title="End Fab" :code="tb4">
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
          </comp-code>

          <div ref="appbar-nofab"/>
          <comp-code class="h-mt-lg" title="No Fab" :code="tb5">
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
          </comp-code>

        </div>

      </div>
    </div>

    <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <list-help>
          <h-list>
            <h-list-header text="Appbar Top"/>
            <h-list-item @click="goToElement('appbar-styles')">
              <h-list-item-content>
                <h-list-item-text title="Styles"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-header text="Appbar Bottom"/>
            <h-list-item @click="goToElement('appbar-centerfab')">
              <h-list-item-content>
                <h-list-item-text title="Centered Fab"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('appbar-fabinset')">
              <h-list-item-content>
                <h-list-item-text title="Centered Fab Inset"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('appbar-endfab')">
              <h-list-item-content>
                <h-list-item-text title="End Fab"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('appbar-nofab')">
              <h-list-item-content>
                <h-list-item-text title="No Fab"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </h-nav-drawer>
    </template>
  </h-page-content>

</template>

<script>

import viewport from '../../../components/others/viewport'

export default {
  components: {
  },
  data () {
    return {
      showDrawer: true,
      drpmenu: false,
      tb1: `
<h-app-toolbar bg-color="bg-primary">
  <h-app-toolbar-container>
    <h-app-toolbar-navigation text-color="text-white"/>
    <h-app-toolbar-title class="text-white">
      Page title
    </h-app-toolbar-title>
    <h-app-toolbar-action>
      <h-btn fab size="sm" bg-color="bg-transparent" 
        left-icon="fas fa-heart" text-color="text-white"
      />
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-search" text-color="text-white"
      />
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
    <h-image avatar src="img/music-collection.jpg" size="42px"/>
    <h-app-toolbar-title class="text-white">
      My big music collection to sing
    </h-app-toolbar-title>
    <h-app-toolbar-action>
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-heart" text-color="text-white"
      />
      <h-btn fab size="sm" bg-color="bg-transparent"
       left-icon="fas fa-search" text-color="text-white"
      />
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
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-heart" text-color="text-white"
      />
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-search" text-color="text-white"/>
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
        <h-image avatar src="img/music-collection.jpg" size="42px"/>
      </div>
      <div class="col h-mt-sm h-ml-sm">
        My big music collection to sing
      </div>
    </h-app-toolbar-title>
    <h-app-toolbar-action>
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-heart" text-color="text-white"
      />
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-search" text-color="text-white"
      />
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
`,
      scripttb1: `
export default {
  data () {
    return {
      drpmenu: false
    }
  }
}      
`,
      tb2: `
<h-app-toolbar bg-color="bg-primary" class="h-mt-md">
  <h-app-toolbar-container>
    <h-app-toolbar-navigation text-color="text-white"/>
    <h-app-toolbar-fab/>
    <h-app-toolbar-action>
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-heart" text-color="text-white"
      />
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-search" text-color="text-white"
      />
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
`,
      tb3: `
<h-app-toolbar bg-color="bg-primary" class="h-mt-md">
  <h-app-toolbar-container>
    <h-app-toolbar-navigation text-color="text-white"/>
    <h-app-toolbar-fab/>
    <h-app-toolbar-action>
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-heart" text-color="text-white"
      />
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-search" text-color="text-white"
      />
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
`,
      tb4: `
<h-app-toolbar bg-color="bg-primary" class="h-mt-md">
  <h-app-toolbar-container>
    <h-app-toolbar-navigation text-color="text-white"/>
    <h-app-toolbar-fab/>
    <h-app-toolbar-action>
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-heart" text-color="text-white"
      />
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-search" text-color="text-white"
      />
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
`,
      tb5: `
<h-app-toolbar bg-color="bg-primary">
  <h-app-toolbar-container>
    <h-app-toolbar-navigation text-color="text-white"/>
    <div class="col-space"></div>
    <h-app-toolbar-action>
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-caret-square-down" text-color="text-white"
      />
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-envelope" text-color="text-white"
      />
      <h-btn fab size="sm" bg-color="bg-transparent"
        left-icon="fas fa-trash" text-color="text-white"
      />
    </h-app-toolbar-action>
  </h-app-toolbar-container>
</h-app-toolbar>
`
    }
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    },
    pageResize (value) {
      this.$refs.navHelp.onResize(value)
    }
  }
}
</script>

<style scoped>
div > .h-app-toolbar:not(:first-child) {
  margin-top: 10px;
}
</style>
