<template>
  <h-main-body
    :show-drawer-left="showDrawer"
    @closeDrawerLeft="showDrawer = $event"
  >
    <template v-slot:header>
      <h-app-toolbar bg-color="bg-primary">
        <h-app-toolbar-container>
          <h-app-toolbar-navigation text-color="text-white" @click="showDrawer = !showDrawer"/>
          <h-app-toolbar-title class="text-white">
            HawkVueMD Framework
          </h-app-toolbar-title>
          <h-app-toolbar-action>
            <h-input
              class="gt-xs"
              v-model="search"
              type="search"
              label="Search"
              trailing-icon="fas fa-search"
              @onFilter="onSearchSite"
              dense
              bg-color="bg-primary"
              clearable
              :options="webSearchOptions"
              style="width: 350px"
            >
              <template slot="itemoption" slot-scope="itemoption">
                <div v-if="itemoption.value.topics && itemoption.value.topics.length"
                  class="column full-width"
                >
                  <div class="text-body1 bg-primary text-white h-pa-sm text-bold">
                    {{itemoption.value.parent}} - {{itemoption.value.url}}
                  </div>
                  <div class="row align-items-center"
                    v-for="(topic, index) in itemoption.value.topics"
                    :key="index"
                  >
                    <div @click="goURL(topic.url)" class="col-auto text-body2 h-pr-sm text-right border-right border-gray bg-gray200 border-bottom -border-gray" style="width: 130px;line-height: 40px;">
                      <span></span>{{topic.text}}</div>
                    <div @click="goURL(topic.url)" class="col text-body2 h-ml-sm ">{{topic.topic}}</div>
                  </div>
                </div>
              </template>
            </h-input>

            <h-btn fab size="sm" bg-color="bg-transparent">
              <h-link url="/" icon="fas fa-home" text-color="text-white"/>
            </h-btn>
            <h-btn fab size="sm" bg-color="bg-transparent">
              <h-link url="https://github.com/edutucci/hawkvuemdframework" icon="fab fa-github" text-color="text-white" new-window/>
            </h-btn>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>
    </template>

    <template v-slot:left>
      <div class="column full-height">
        <div class="col-auto text-center h-pa-md">
          <div class="column align-items-center">
            <h-image avatar src="/img/hawk.jpg" size="64px"/>
            <div class="">Hawk </div>
            <div class=""> Framework</div>
          </div>
        </div>
        <div class="col">
          <h-collapsible>

            <h-collapsible-menu icon="fas fa-question-circle" text="Guide">
              <h-collapsible-item text="Installation" @click="$router.push('/docs/installation'), showDrawer = false"/>
              <h-collapsible-item text="Layout" @click="$router.push('/docs/layout'), showDrawer = false"/>
              <h-collapsible-item text="Page" @click="$router.push('/docs/page'), showDrawer = false"/>
              <h-collapsible-item text="Pallete Color" @click="$router.push('/docs/palleteColor'), showDrawer = false"/>
            </h-collapsible-menu>

            <h-collapsible-menu icon="fab fa-css3" text="CSS">
              <h-collapsible-item text="Borders" @click="$router.push('/docs/borders'), showDrawer = false"/>
              <h-collapsible-item text="Flexbox" @click="$router.push('/docs/flexbox'), showDrawer = false"/>
              <h-collapsible-item text="Positioning" @click="$router.push('/docs/positioning'), showDrawer = false"/>
              <h-collapsible-item text="Spacing" @click="$router.push('/docs/spacing'), showDrawer = false"/>
              <h-collapsible-item text="Text Alignment" @click="$router.push('/docs/textalignment'), showDrawer = false"/>
              <h-collapsible-item text="Visibility" @click="$router.push('/docs/visibility'), showDrawer = false"/>
              <h-collapsible-item text="Others" @click="$router.push('/docs/cssothers'), showDrawer = false"/>
            </h-collapsible-menu>

            <h-collapsible-menu text="Components" icon="fas fa-hdd">
              <h-collapsible-item text="Appbar" @click="$router.push('/docs/appbar'), showDrawer = false"/>
              <h-collapsible-item text="Banner" @click="$router.push('/docs/banner'), showDrawer = false"/>
              <h-collapsible-item text="Buttons" @click="$router.push('/docs/buttons'), showDrawer = false"/>
              <h-collapsible-item text="Button Group" @click="$router.push('/docs/buttongroup'), showDrawer = false"/>
              <h-collapsible-item text="Cards" @click="$router.push('/docs/card'), showDrawer = false"/>
              <h-collapsible-item text="Carousel" @click="$router.push('/docs/carousel'), showDrawer = false"/>
              <h-collapsible-item text="Checkbox" @click="$router.push('/docs/checkbox'), showDrawer = false"/>
              <h-collapsible-item text="Chips" @click="$router.push('/docs/chip'), showDrawer = false"/>
              <h-collapsible-item text="Collapsible" @click="$router.push('/docs/collapsible'), showDrawer = false"/>
              <h-collapsible-item text="Date and Time" @click="$router.push('/docs/datetime'), showDrawer = false"/>
              <h-collapsible-item text="Dialog" @click="$router.push('/docs/dialog'), showDrawer = false"/>
              <h-collapsible-item text="Drawer" @click="$router.push('/docs/drawer'), showDrawer = false"/>
              <h-collapsible-item text="File Upload" @click="$router.push('/docs/fileupload'), showDrawer = false"/>
              <h-collapsible-item text="HtmlTable" @click="$router.push('/docs/htmltable'), showDrawer = false"/>
              <h-collapsible-item text="Icons" @click="$router.push('/docs/icon'), showDrawer = false"/>
              <h-collapsible-item text="Image" @click="$router.push('/docs/compimage'), showDrawer = false"/>
              <h-collapsible-item text="Input Textfield" @click="$router.push('/docs/input'), showDrawer = false"/>
              <h-collapsible-item text="List" @click="$router.push('/docs/list'), showDrawer = false"/>
              <h-collapsible-item text="Radio" @click="$router.push('/docs/radio'), showDrawer = false"/>
              <h-collapsible-item text="Range Slider" @click="$router.push('/docs/rangeslider'), showDrawer = false"/>
              <h-collapsible-item text="Rating" @click="$router.push('/docs/rating'), showDrawer = false"/>
              <h-collapsible-item text="SideBar Menu" @click="$router.push('/docs/sideBarMenu'), showDrawer = false"/>
              <h-collapsible-item text="Tab" @click="$router.push('/docs/tab'), showDrawer = false"/>
              <h-collapsible-item text="Table" @click="$router.push('/docs/table'), showDrawer = false"/>
              <h-collapsible-item text="Toggle" @click="$router.push('/docs/toggle'), showDrawer = false"/>
              <h-collapsible-item text="Video" @click="$router.push('/docs/video'), showDrawer = false"/>
            </h-collapsible-menu>

            <h-collapsible-menu icon="fas fa-plug" text="Plugins">
              <h-collapsible-item text="Loading" @click="$router.push('/docs/loading'), showDrawer = false"/>
              <h-collapsible-item text="SnackBar" @click="$router.push('/docs/snack'), showDrawer = false"/>
            </h-collapsible-menu>

          </h-collapsible>
        </div>
        <div class="col-auto">
          <div class="text-center h-pa-md">
            <h2 class="no-margin">Free Framework</h2>
            <h2 class="no-margin">Pure CSS</h2>
          </div>
        </div>        
      </div>
    </template>

    <template v-slot:footer>
      <div class="flex justify-center align-items-center bg-primary text-white" style="height: 60px">
        <div class="text-h6">HawkVueMD Page Footer</div>
      </div>
    </template>

    <router-view/>
  </h-main-body>
</template>

<script>

import _ from 'lodash'

export default {
  data () {
    return {
      showDrawer: false,
      search: '',
      webSearchOptions: [],
      searchModel: []
    }
  },
  mounted () {
    this.searchModel = this.$webSearch.searchTopics
    // console.log('this.searchModel: ', JSON.stringify(this.searchModel))
  },
  methods: {
    onSearchSite (query) {
      this.webSearchOptions = []
      // let localSearchOptions = []
      if (query.length === 0) {
        this.webSearchOptions = [] // _.cloneDeep(this.searchModel)
      } else {
        this.searchModel.forEach(model => {
          let name = model.text
          let topic = model.topic

          if (_.includes(name.toLowerCase(), query.toLowerCase()) ||
            _.includes(topic.toLowerCase(), query.toLowerCase())
          ) {
            let index = this.webSearchOptions.findIndex(wso => wso.parent === model.parent)
            if (index === -1) {
               this.webSearchOptions.push({
                 parent: model.parent,
                 topics: []
               })
            }
            this.webSearchOptions[this.webSearchOptions.length - 1].topics.push(
              { text: model.text, topic: model.topic, url: model.url },
            )
          }
        })
      }
    },
    goURL (url) {
      console.log('url: ', url)
      this.$router.push(url)
    }
  }
}
</script>

<style scoped>
</style>
