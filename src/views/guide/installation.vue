<template>
  <div class="full-height">
    <h1>Installation</h1>
    <pre v-highlightjs="install">
      <code class="javascript">
      </code>
    </pre>

    <h1>Add in main.js</h1>
    <pre v-highlightjs="mainjs">
      <code class="javascript">
      </code>
    </pre>

    <h1>Project start-kit</h1>
    <pre v-highlightjs="starterkit">
      <code class="javascript">
      </code>
    </pre>

  </div>
</template>

<script>
export default {
  data () {
    return {
      install: `
yarn add hawkframework
      `,
      mainjs: `
import 'hawkframework'
import 'hawkframework/dist/hawkframework.css'
      `,
      starterkit: `
https://github.com/edutucci/hawkframework-starter-kit
      `
    }
  }
}
</script>
