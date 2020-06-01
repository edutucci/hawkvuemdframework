<template>
  <h-page-content padding
    @onResize="pageResize"
    @mainLayoutDrawerIsOpened="showDrawer = false"
  >
    <div class="row">
      <div class="col">
        <div class="row position-sticky bg-white">
          <div class="col text-h4">Buttons</div>
          <div class="col-auto">
            <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = !showDrawer" />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <comp-code class="h-mt-md" title="Contained Buttons" :code="containedButtons">
              <div>
                <div>
                  <h-btn
                    bg-color="bg-white"
                    text-color="text-black"
                    text="disabled"
                    left-icon="fas fa-envelope"
                    disabled
                  />
                  <h-btn
                    bg-color="bg-white"
                    text-color="text-black"
                    text="white"
                    left-icon="fas fa-envelope"
                  />
                  <h-btn
                    rounded
                    bg-color="bg-primary"
                    text-color="text-white"
                    text="primary"
                    right-icon="fas fa-envelope"
                  />
                  <h-btn rounded bg-color="bg-secondary" text-color="text-white" text="secondary" />
                  <h-btn bg-color="bg-positive" text-color="text-white" text="positive" />
                  <h-btn bg-color="bg-negative" text-color="text-white" text="negative" />
                  <h-btn bg-color="bg-info" text-color="text-white" text="info" />
                  <h-btn bg-color="bg-warning" text-color="text-white" text="warning" />
                </div>
                <div>
                  <div>
                    <h-btn
                      class="full-width"
                      bg-color="bg-primary"
                      text-color="text-white"
                      text="full width"
                      right-icon="fas fa-envelope"
                    />
                    <h-btn
                      class="full-width"
                      bg-color="bg-positive"
                      text-color="text-white"
                      text="full width"
                      left-icon="fas fa-envelope"
                    />
                  </div>
                </div>
              </div>
            </comp-code>

            <div ref="btn-text" />
            <comp-code class="h-mt-md" title="Text Buttons" :code="textbuttons">
              <div>
                <h-btn
                  text-button
                  bg-color="bg-white"
                  text-color="text-black"
                  text="disabled"
                  disabled
                />
                <h-btn text-button bg-color="bg-primary" text-color="text-primary" text="primary" />
                <h-btn
                  text-button
                  bg-color="bg-secondary"
                  text-color="text-secondary"
                  text="secondary"
                />
                <h-btn text-button bg-color="bg-positive" text-color="text-positive" text="positive" />
                <h-btn text-button bg-color="bg-negative" text-color="text-negative" text="negative" />
                <h-btn text-button bg-color="bg-info" text-color="text-info" text="info" />
                <h-btn text-button bg-color="bg-warning" text-color="text-warning" text="warning" />
              </div>
              <div>
                <h-btn
                  class="full-width"
                  text-button
                  bg-color="bg-primary"
                  text-color="text-primary"
                  text="full width"
                />
                <h-btn
                  class="full-width"
                  text-button
                  bg-color="bg-positive"
                  text-color="text-positive"
                  text="full-width"
                />
              </div>
            </comp-code>

            <div ref="btn-outlined" />
            <comp-code class="h-mt-md" title="Outlined Buttons" :code="outlinedButtons">
              <div>
                <h-btn outlined text="disabled" disabled />
                <h-btn bg-color="bg-primary" outlined text-color="text-primary" text="primary" />
                <h-btn bg-color="bg-secondary" outlined text-color="text-secondary" text="secondary" />
                <h-btn bg-color="bg-positive" outlined text-color="text-positive" text="positive" />
                <h-btn bg-color="bg-negative" outlined text-color="text-negative" text="negative" />
                <h-btn bg-color="bg-info" outlined text-color="text-info" text="info" />
                <h-btn bg-color="bg-warning" outlined text-color="text-warning" text="warning" />
              </div>

              <div>
                <h-btn
                  class="full-width"
                  outlined
                  bg-color="bg-primary"
                  text-color="text-primary"
                  text="full width"
                />
                <h-btn
                  class="full-width"
                  outlined
                  bg-color="bg-positive"
                  text-color="text-positive"
                  text="full width"
                />
              </div>
            </comp-code>

            <div ref="btn-rounded" />
            <comp-code class="h-mt-md" title="Rounded Buttons" :code="roundedButtons">
              <div>
                <h-btn rounded text="disabled" disabled />
                <h-btn outlined rounded text="disabled" disabled />
                <h-btn rounded bg-color="bg-primary" text-color="text-white" text="primary" />
                <h-btn rounded bg-color="bg-secondary" text-color="text-white" text="secondary" />
                <h-btn rounded bg-color="bg-positive" text-color="text-white" text="positive" />
                <h-btn outlined rounded text-color="text-negative" text="negative" />
                <h-btn outlined rounded text-color="text-info" text="info" />
                <h-btn outlined rounded text-color="text-warning" text="warning" />
              </div>

              <div>
                <h-btn
                  class="full-width"
                  outlined
                  rounded
                  bg-color="bg-primary"
                  text-color="text-primary"
                  text="full width"
                />
                <h-btn
                  class="full-width"
                  outlined
                  rounded
                  bg-color="bg-positive"
                  text-color="text-positive"
                  text="full width"
                />
              </div>
            </comp-code>

            <div ref="btn-fab" />
            <comp-code class="h-mt-md" title="FAB Buttons" :code="fabButtons">
              <div>
                <h-btn fab bg-color="bg-primary" size="xl">
                  <h-icon icon="fas fa-envelope" text-color="text-white" size="32px" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="xl">
                  <h-icon icon="fab fa-github" text-color="text-white" size="32px" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="xl">
                  <h-icon icon="fas fa-map-marker-alt" text-color="text-white" size="32px" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="xl">
                  <h-icon icon="fas fa-shopping-cart" text-color="text-white" size="32px" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="xl">
                  <h-icon icon="fas fa-plane" text-color="text-white" size="32px" />
                </h-btn>
              </div>
              <div>
                <h-btn fab bg-color="bg-primary" size="sm">
                  <h-icon icon="fas fa-envelope" text-color="text-white" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="sm">
                  <h-icon icon="fab fa-github" text-color="text-white" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="sm">
                  <h-icon icon="fas fa-map-marker-alt" text-color="text-white" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="sm">
                  <h-icon icon="fas fa-shopping-cart" text-color="text-white" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="sm">
                  <h-icon icon="fas fa-plane" text-color="text-white" />
                </h-btn>
              </div>
            </comp-code>

            <div ref="btn-sizes" />
            <comp-code class="h-mt-md" title="Sizes" :code="btnSizes">
              <div>
                <h-btn bg-color="bg-primary" text-color="text-white" text="xs" size="xs" />
                <h-btn bg-color="bg-primary" text-color="text-white" text="sm" size="sm" />
                <h-btn bg-color="bg-primary" text-color="text-white" text="md" size="md" />
                <h-btn bg-color="bg-primary" text-color="text-white" text="lg" size="lg" />
                <h-btn bg-color="bg-primary" text-color="text-white" text="xl" size="xl" />
              </div>

              <div>
                <h-btn rounded bg-color="bg-primary" text-color="text-white" text="xs" size="xs" />
                <h-btn rounded bg-color="bg-primary" text-color="text-white" text="sm" size="sm" />
                <h-btn rounded bg-color="bg-primary" text-color="text-white" text="md" size="md" />
                <h-btn rounded bg-color="bg-primary" text-color="text-white" text="lg" size="lg" />
                <h-btn rounded bg-color="bg-primary" text-color="text-white" text="xl" size="xl" />
              </div>

              <div>
                <h-btn fab bg-color="bg-primary" size="xs">
                  <h-icon icon="fas fa-envelope" text-color="text-white" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="sm">
                  <h-icon icon="fab fa-github" text-color="text-white" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="md">
                  <h-icon icon="fas fa-map-marker-alt" text-color="text-white" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="lg">
                  <h-icon icon="fas fa-shopping-cart" text-color="text-white" />
                </h-btn>
                <h-btn fab bg-color="bg-primary" size="xl">
                  <h-icon icon="fas fa-plane" text-color="text-white" size="32px" />
                </h-btn>
              </div>
            </comp-code>

            <div ref="btn-dropdown" />
            <comp-code
              class="h-mt-md"
              title="DropDown Buttons"
              :code="dropdownButtons"
              :script="scriptDropdownButtons"
              javascript
            >
              <div class="row wrap">
                <div class="col-auto">
                  <h-btn
                    dropdown
                    text="Options"
                    bg-color="bg-primary"
                    text-color="text-white"
                    v-model="text"
                    @click="text = true"
                  >
                    <div class="flex flex-column">
                      <h-list style="width: 150px">
                        <h-list-item>
                          <h-list-item-content>
                            <h-list-item-text title="Item 1" />
                          </h-list-item-content>
                        </h-list-item>
                        <h-list-item>
                          <h-list-item-content>
                            <h-list-item-text title="Item 2" />
                          </h-list-item-content>
                        </h-list-item>
                        <h-list-item>
                          <h-list-item-content>
                            <h-list-item-text title="Item 3" />
                          </h-list-item-content>
                        </h-list-item>
                      </h-list>
                    </div>
                  </h-btn>
                </div>

                <div class="col-auto">
                  <h-btn
                    dropdown
                    class="h-ml-sm"
                    left-icon="fas fa-home"
                    text="Icons"
                    bg-color="bg-primary"
                    text-color="text-white"
                    v-model="icon"
                    @click="icon = true"
                  >
                    <div class="row">
                      <h-btn text-button left-icon="fas fa-align-left" />
                      <h-btn text-button left-icon="fas fa-align-center" class="h-ml-xs" />
                      <h-btn text-button left-icon="fas fa-align-right" class="h-ml-xs" />
                      <h-btn text-button left-icon="fas fa-align-justify" class="h-ml-xs" />
                    </div>
                  </h-btn>
                </div>

                <div class="col-auto">
                  <h-btn
                    dropdown
                    text-button
                    size="sm"
                    class="h-ml-sm"
                    avatar="avatar/AnaArmas.jpg"
                    text="Avatar"
                    text-color="text-primary"
                    v-model="avatar"
                    @click="avatar = true"
                  >
                    <div class="row align-items-center h-pa-sm" style="min-width:150px">
                      <div class="col-auto">
                        <h-image avatar src="avatar/AnaArmas.jpg" size="72px" />
                      </div>
                      <div class="col h-ml-sm">
                        <h-btn text="Profile" bg-color="bg-primary" text-color="text-white" />
                      </div>
                    </div>
                  </h-btn>
                </div>

                <div class="col-auto">
                  <h-btn
                    dropdown
                    outlined
                    size="sm"
                    class="h-ml-sm"
                    img="img/Nallah_Sindh.jpg"
                    text="Image"
                    text-color="text-primary"
                    bg-color="bg-primary"
                    v-model="image"
                    @click="image = true"
                  >
                    <div class="row align-items-center justify-center h-pa-sm" style="min-width:150px">
                      <div class="col-auto">
                        <div class="column">
                          <div class="col">
                            <h-image src="img/Nallah_Sindh.jpg" style="width:180px; height:128px" />
                          </div>
                          <div class="col text-body1 text-center text-black">River</div>
                        </div>
                      </div>
                    </div>
                  </h-btn>
                </div>
              </div>
            </comp-code>
          </div>
        </div>

      </div>
    </div>

    <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <list-help>
          <h-list>
            <h-list-header text="Types" />
            <h-list-item @click="goToElement('appbar-centerfab')">
              <h-list-item-content>
                <h-list-item-text title="Contained"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('appbar-fabinset')">
              <h-list-item-content>
                <h-list-item-text title="Text"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>

            <h-list-item @click="goToElement('appbar-centerfab')">
              <h-list-item-content>
                <h-list-item-text title="Outlined"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('appbar-fabinset')">
              <h-list-item-content>
                <h-list-item-text title="Rounded"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-header text=" Additional Types" />
            <h-list-item @click="goToElement('appbar-endfab')">
              <h-list-item-content>
                <h-list-item-text title="Fab"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('appbar-nofab')">
              <h-list-item-content>
                <h-list-item-text title="No Fab"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>

            <h-list-item @click="goToElement('appbar-nofab')">
              <h-list-item-content>
                <h-list-item-text title="Sizes"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>

            <h-list-item @click="goToElement('appbar-nofab')">
              <h-list-item-content>
                <h-list-item-text title="Dropdown"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>

            <h-list-item @click="goToElement('appbar-nofab')">
              <h-list-item-content>
                <h-list-item-text title="Links"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>

            <h-list-item @click="goToElement('appbar-nofab')">
              <h-list-item-content>
                <h-list-item-text title="Router"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>

            <h-list-item @click="goToElement('appbar-nofab')">
              <h-list-item-content>
                <h-list-item-text title="Counter"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </h-nav-drawer>
    </template>
  </h-page-content>
</template>


<script>
import viewport from "../../../components/others/viewport";

export default {
  components: {},
  data() {
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
    };
  },
  mounted () {
    this.checkMainBodyWidth()
  },
  methods: {
    checkMainBodyWidth () {
      let value = viewport.mainBodyWidth()
      if (value < 961) {
        this.showDrawer = false
      }
    },
    goToElement(refName) {
      viewport.goToElement(this.$refs[refName]);
    },
    pageResize(value) {
      this.$refs.navHelp.onResize(value);
    }
  }
};
</script>

<style scoped>
div > .h-app-toolbar:not(:first-child) {
  margin-top: 10px;
}
</style>
