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

    h1 Visibility by width
    .flex.boxshadow
      .flex.flex-column.h-pr-md
        div
          strong  Properties
        div
          strong xs-only
        div
          strong hidden-xs
        div
          strong sm-only
        div
          strong hidden-sm
        div
          strong md-only
        div
          strong hidden-md
        div
          strong lg-only
        div
          strong hidden-lg
      .flex.flex-column
        div
          strong Pixels
        div
          strong An element is visible when then screen width is less or equal 600px
        div
          strong An element is visible when then screen width is higher than 600px
        div
          strong An element is visible when then screen width is less or equal 1200px
        div
          strong An element is visible when then screen width is higher than 1200px
        div
          strong An element is visible when then screen width is less or equal 1600px
        div
          strong An element is visible when then screen width is higher than 1600px
        div
          strong An element is visible when then screen width is less or equal 1920px
        div
          strong An element is visible when then screen width is higher than 1920px

    <pre v-highlightjs="vissizes">
      <code class="html">
      </code>
    </pre>

</template>

<script>
export default {
  name: 'Visibility',
  data () {
    return {
      sizes: `<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4" style="background: blue">example</div>`,
      vissizes: `<div class="xs-only"></div> <div class="hidden-sm"></div>`
    }
  }
}
</script>
