<template lang="pug">
  .full-size
    H1  Icons

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
import HFaIcon from '../components/icons/HFaIcon.vue'
import HBtn from '../components/buttons/HBtn.vue'

export default {
  components: {
    HFaIcon,
    HBtn
  },
  data () {
    return {
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
