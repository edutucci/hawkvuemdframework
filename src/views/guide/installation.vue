<template>
  <h-page-content padding>
    <div class="text-h4">Installation</div>
    <prism :code="install"/>

    <div class="text-h4">Defining the theme</div>
    <div class="text-body1">1.Add a theme folder in src folder.Create a file named variables.styl with the following code:</div>

    <prism :code="theme" language="stylus"/>

    <div class="text-body1"> 2. Create a file named index.styl with the following code:</div>
    <prism :code="theme2" language="stylus"/>

    <div class="text-h4">Configuration</div>
    <div class="text-body1">Add in main.js</div>
    <prism :code="mainjs" language="javascript"/>

    <div class="text-h4">Project start-kit</div>
    <prism :code="starterkit" language="javascript"/>

  </h-page-content>
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
