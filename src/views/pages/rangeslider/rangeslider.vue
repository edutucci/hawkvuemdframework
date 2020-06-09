<template>
  <h-page-content padding
    @onResize="pageResize"
    @mainLayoutDrawerIsOpened="showDrawer = false"
  >
    <div class="row ">
      <div class="col">
        <div class="row position-sticky bg-white">
          <div class="col text-h4">
              Range SLider
          </div>
          <div class="col-auto">
            <!-- <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = !showDrawer"/> -->
          </div>
        </div>
        <div class="row">
          <div class="col">
            <comp-code class="h-mt-md" title="Styles" :code="ex1" :script="scriptEx1"
    javascript
  >

    <div class="row align-items-center">
      <div class="col">
        <h-range-slider v-model="modelRange"/>
      </div>
      <div class="col-auto h-pa-xs bg-gray text-caption">
        {{modelRange}}%
      </div>
    </div>

    <div class="row align-items-center h-mt-md">
      <div class="col">
        <h-range-slider v-model="modelRange" bg-color="bg-primary"/>
      </div>
      <div class="col-auto h-pa-xs bg-primary text-white text-caption">
        {{modelRange}}%
      </div>
    </div>

    <div class="row align-items-center h-mt-md">
      <div class="col">
        <h-range-slider v-model="modelRange" bg-color="bg-negative"/>
      </div>
      <div class="col-auto h-pa-xs bg-negative text-white text-caption">
        {{modelRange}}%
      </div>
    </div>

  </comp-code>

  <tabs-help
    class="h-mt-md"
    :properties="helpTopics.properties"
    :events="helpTopics.events"
  />
          </div>
         </div>
      </div>
    </div>

    <!-- <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <list-help>
          ... codigo de menu de ajuda
        </list-help>
      </h-nav-drawer>
    </template> -->
  </h-page-content>

</template>

<script>

import helpTopics from './help'

export default {
  data () {
    return {
       showDrawer: true,
      helpTopics: {
        properties: [],
        events: []
      },
      modelRange: 55,
      ex1: `
<div class="row align-items-center">
  <div class="col">
    <h-range-slider v-model="modelRange"/>
  </div>
  <div class="col-auto h-pa-xs bg-gray text-caption">
    {{modelRange}}%
  </div>
</div>

<div class="row align-items-center h-mt-md">
  <div class="col">
    <h-range-slider v-model="modelRange" bg-color="bg-primary"/>
  </div>
  <div class="col-auto h-pa-xs bg-primary text-white text-caption">
    {{modelRange}}%
  </div>
</div>

<div class="row align-items-center h-mt-md">
  <div class="col">
    <h-range-slider v-model="modelRange" bg-color="bg-negative"/>
  </div>
  <div class="col-auto h-pa-xs bg-negative text-white text-caption">
    {{modelRange}}%
  </div>
</div>
`,
      scriptEx1: `
export default {
  data () {
    return {
      modelRange: 55
    }
  }
}
`
    }
  },

  methods: {
    pageResize (value) {
        this.$refs.navHelp.onResize(value);
    }
  },
  mounted () {
    this.helpTopics.properties = helpTopics.properties
    this.helpTopics.events = helpTopics.events
  }
}
</script>
