<template lang="pug">
  .full-size
    H1  Icons

    .boxshadow
      H1  Colors
      <h-fa-icon class="bg-primary h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-white" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-primary" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-secondary" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-positive" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-negative" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-info" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-warning" size="lg"/>

      <pre v-highlightjs="iconColors">
        <code class="html">
        </code>
      </pre>

    .boxshadow
      H1  Sizes
      <h-fa-icon :icon="['fas', 'camera-retro']" size="xs"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="sm"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="lg"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="2x"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="4x"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="6x"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="8x"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="10x"/>

      <pre v-highlightjs="iconSizes">
        <code class="html">
        </code>
      </pre>

    .boxshadow
      H1  List

      .flex
        .flex.flex-column
          div.flex.flex-justify-center
            <h-fa-icon :icon="['fas', 'home']" size="lg"/>
          div.flex.flex-justify-center
            <h-fa-icon :icon="['fas', 'info']" size="lg"/>
          div.flex.flex-justify-center
            <h-fa-icon :icon="['fas', 'spinner']" size="lg" pulse/>
          div.flex.flex-justify-center
            <h-fa-icon :icon="['fas', 'sync']" size="lg" spin/>

        .flex.flex-column
          div.flex.flex-justify-center
            | Home
          div.flex.flex-justify-center
            | Info
          div.flex.flex-justify-center
            | spinner
          div.flex.flex-justify-center
            | sync

      <pre v-highlightjs="iconList">
        <code class="html">
        </code>
      </pre>

</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      iconColors: `
<h-fa-icon class="bg-primary h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-white" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-primary" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-secondary" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-positive" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-negative" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-info" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-warning" size="lg"/>
      `,
      iconSizes: `
<h-fa-icon :icon=['fas', 'camera-retro'] size="xs"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="sm"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="lg"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="2x"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="4x"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="6x"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="8x"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="10x"/>  
      `,
      iconList: `
 <h-fa-icon :icon=['fas', 'home'] size="lg"/>
 <h-fa-icon :icon=['fas', 'info'] size="lg"/>
 <h-fa-icon :icon=['fas', 'spinner'] size="lg" pulse/>
 <h-fa-icon :icon=['fas', 'sync'] size="lg" spin/>
      `
    }
  }
}
</script>
