<template>
  <div class="full-height">
    <h1>Installation</h1>
    <pre v-highlightjs="install">
      <code class="javascript">
      </code>
    </pre>

    <h1>Defining the theme</h1>
    <h2>Add a theme folder in src folder.</h2>

    <strong> 1. Create a file named variables.styl with the following code:</strong>
    <pre v-highlightjs="theme">
      <code class="javascript">
      </code>
    </pre>

    <strong> 2. Create a file named index.styl with the following code:</strong>
    <pre v-highlightjs="theme2">
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
      theme: `
// defining theme

$white = #FFFFFF
$black = #000000
$primary = #1E88E5
$secondary = #00897B
$positive = #43A047
$negative = #E53935
$info = #40C4FF
$warning = #FDD835

$whitehover = #E8E8E8
$primaryhover = #42A5F5
$secondaryhover = #26A69A
$positivehover = #66BB6A
$negativehover = #EF5350
$infohover = #80D8FF
$warninghover = #FFEE58
      `,
      theme2: `
@import './variables.styl'
@import '~hawkframework/dist/components.styl'
      `,
      mainjs: `
import './theme/index.styl'
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
