<template>
  <h-page-content padding>
    <div class="text-h4">Installation</div>
    <prism :code="install"/>

    <div class="text-h4">Default theme</div>
    <div class="text-body1">This will install default theme for your web application. In your project add the code below in your <b>main.js</b>.</div>
    <prism :code="defTheme" language="stylus"/>

    <div class="text-h4">Defining the theme</div>
    <div class="text-body1">1.Create a file named customStyle.styl at same folder that main.js:</div>
    <div class="text-body1">2.Add a folder named theme inside src folder and create a file named user.styl with the following code:</div>

    <prism :code="theme" language="stylus"/>

    <div class="text-body1"> 2. For the file customStyle.styl add the following code:</div>
    <prism :code="theme2" language="stylus"/>

    <div class="text-body1">3. In your project add the code below in your <b>main.js</b>.</div>
    <prism :code="mainjs" language="javascript"/>

    <div class="text-h4">Project starter-kit</div>
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
      defTheme: `
import 'hawkvuemd'
import 'hawkvuemd/dist/hawk_default_stylus.styl'
import 'hawkvuemd/dist/hawkvuemd.css'
`,
      theme: `
// defining theme

$white = #FFFFFF
$black = #000000
$primary = #1E88E5
$secondary = #00897B
$positive = #43A047
$negative = #E53935
$info = #00d6e9 
$warning = #FDD835

$whitehover = #E0E0E0
$primaryhover = #42A5F5
$secondaryhover = #26A69A
$positivehover = #66BB6A
$negativehover = #EF5350
$infohover = #69e2ed
$warninghover = #FFEE58

$whiteflathover = #E0E0E0
$primaryflathover = #E3F2FD
$secondaryflathover = #E0F2F1
$positiveflathover = #E8F5E9
$negativeflathover = #FFEBEE
$infoflathover = #a7f3f9
$warningflathover = #FFF9C4
      `,
      theme2: `
@import '~hawkvuemd/dist/hawk_main_stylus_variables.styl'

// User styles
@import './theme/user.styl'

@import '~hawkvuemd/dist/hawk_main_stylus.styl'
      `,
      mainjs: `
import 'hawkvuemd'
import './customStyle.styl'
import 'hawkvuemd/dist/hawkvuemd.css'
      `,
      starterkit: `
https://github.com/edutucci/hawkvuemd-framework-starter-kit
`
    }
  }
}
</script>
