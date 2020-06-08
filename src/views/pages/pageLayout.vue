<template>
  <h-page-content padding 
    @onResize="pageResize"
    @mainLayoutDrawerIsOpened="showDrawer = false"
  >
    <template v-slot:left>
      <slot name="left"/>
    </template>

    <div class="row">
      <div class="col">
          <div class="row position-sticky bg-white" style="top: 0; z-index: 100;">
            <div class="col text-h4">{{title}}</div>
            <div class="col-auto">
              <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = !showDrawer" />
            </div>
          </div>

          <div class="row">
            <div class="col">
              <slot name="components"/>
            </div>
          </div>
      </div>
    </div>

    <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <slot name="help"/>
      </h-nav-drawer>
    </template>
  </h-page-content>
</template>

<script>

import viewport from "../../components/others/viewport"

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {},
  data() {
    return {
      showDrawer: true
      // text: false,
      // icon: false,
      // avatar: false,
      // image: false,
      // tabHelpModel: "prop",
      // helpTopics: {
      //   properties: [],
      //   events: []
      // },
    };
  },
  // mounted () {
  //   this.helpTopics.properties = helpTopics.properties;
  //   this.helpTopics.events = helpTopics.events;
  // },
  watch: {
    
  },
  methods: {
    goToElement(element) {
      viewport.goToElement(element);
    },
    pageResize(value) {
      this.showDrawer = true
      if (value < 961) {
        this.showDrawer = false
      }
      this.$refs.navHelp.onResize(value);
    }
  }
};
</script>
