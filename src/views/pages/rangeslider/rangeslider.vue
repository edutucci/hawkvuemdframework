<template>
  <h-page-content padding>
    <div class="text-h4">Range SLider</div>

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

  </h-page-content>
</template>

<script>

import helpTopics from './help'

export default {
  data () {
    return {
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
  mounted () {
    this.helpTopics.properties = helpTopics.properties
    this.helpTopics.events = helpTopics.events
  }
}
</script>
