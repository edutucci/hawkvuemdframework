<template lang="pug">
  div
    h1 Device sizes

    h1 Window width
    .flex.boxshadow
      .flex.flex-column.h-pr-md
        div
          strong  Properties
        div
          strong xs (extra small)
        div
          strong sm (small)
        div
          strong md (medium)
        div
          strong lg (large)
        div
          strong xl (extra large)
      .flex.flex-column
        div
          strong Pixels
        div
          strong 600px
        div
          strong 1200px
        div
          strong 1600px
        div
          strong 1920px
        div
          strong higher than 1920px

    <pre v-highlightjs="sizes">
      <code class="html">
      </code>
    </pre>
</template>

<script>
export default {
  name: 'Visibility',
  data () {
    return {
      sizes: `<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" style="background: blue">example</div>`
    }
  }
}
</script>
