<template lang="pug">
  <div class="full-size">
    <h1> Contained Buttons </h1>
    <div>
      <h-btn contained bgcolor="bg-white" textcolor="text-black" label="white" :icon="['fas', 'envelope']"  :lefticon="['fas', 'envelope']"/>
      <h-btn contained bgcolor="bg-primary" textcolor="text-white" label="primary" :icon="['fas', 'envelope']" :lefticon="['fas', 'plus']"/>
      <h-btn contained bgcolor="bg-secondary" textcolor="text-white" label="secondary"/>  
      <h-btn contained bgcolor="bg-positive" textcolor="text-white" label="positive" :icon="['fas', 'envelope']"/> 
      <h-btn contained bgcolor="bg-negative" textcolor="text-white" label="negative"/> 
      <h-btn contained bgcolor="bg-info" textcolor="text-white" label="info"/> 
      <h-btn contained bgcolor="bg-warning" textcolor="text-white" label="warning"/>
    </div>
    .boxshadow
      <pre v-highlightjs="containedButtons">
        <code class="html">
        </code>
      </pre>    
    
    <h1>Text Buttons</h1>
    <div>
      <h-btn textbutton textcolor="text-black" label="black"/>
      <h-btn textbutton textcolor="text-primary" label="primary"/>
      <h-btn textbutton textcolor="text-secondary" label="secondary"/>  
      <h-btn textbutton textcolor="text-positive" label="positive"/> 
      <h-btn textbutton textcolor="text-negative" label="negative"/> 
      <h-btn textbutton textcolor="text-info" label="info"/> 
      <h-btn textbutton textcolor="text-warning" label="warning"/>      
    </div>
    .boxshadow
      <pre v-highlightjs="textbuttons">
        <code class="html">
        </code>
      </pre>

    <h1>Outlined Buttons</h1>
    <div>
      <h-btn outlined textcolor="text-black" label="black"/>
      <h-btn outlined textcolor="text-primary" label="primary"/>
      <h-btn outlined textcolor="text-secondary" label="secondary"/>  
      <h-btn outlined textcolor="text-positive" label="positive"/> 
      <h-btn outlined textcolor="text-negative" label="negative"/> 
      <h-btn outlined textcolor="text-info" label="info"/> 
      <h-btn outlined textcolor="text-warning" label="warning"/>      
    </div>  
    .boxshadow
      <pre v-highlightjs="outlinedButtons">
        <code class="html">
        </code>
      </pre>

    <h1>Float Action</h1>
    <div>
      <h-btn-float bgcolor="bg-positive" textcolor="text-white" @click="$refs.nav.open()" :icon="['fas', 'envelope']"> </h-btn-float>
      <h-btn-float bgcolor="bg-secondary" textcolor="text-white" @click="$refs.nav.close()" :icon="['fas', 'envelope']">  </h-btn-float>
      <h-btn-float bgcolor="bg-negative" textcolor="text-white" @click="$refs.nav.open()" :icon="['fas', 'plus']"> </h-btn-float>
      <h-btn-float bgcolor="bg-secondary" :icon="['fas', 'bars']"> </h-btn-float>
      <h-btn-float minifloat :icon="['fas', 'plus']"> </h-btn-float>
      <h-btn-float minifloat bgcolor="bg-warning" :icon="['fas', 'plus']"> </h-btn-float>      
    </div>  
    .boxshadow
      <pre v-highlightjs="floatActionButtons">
        <code class="html">
        </code>
      </pre> 

  </div>
</template>

<script>

import HBtn from '../components/buttons/HBtn.vue'
import HBtnFloat from '../components/buttons/HBtnFloat.vue'

export default {
  data () {
    return {
      containedButtons: `
<div>
  <h-btn contained bgcolor="bg-white" textcolor="text-black" label="white" :icon="['fas', 'envelope']"  :lefticon="['fas', 'envelope']"/>
  <h-btn contained bgcolor="bg-primary" textcolor="text-white" label="primary" :icon="['fas', 'envelope']" :lefticon="['fas', 'plus']"/>
  <h-btn contained bgcolor="bg-secondary" textcolor="text-white" label="secondary"/>  
  <h-btn contained bgcolor="bg-positive" textcolor="text-white" label="positive" :icon="['fas', 'envelope']"/> 
  <h-btn contained bgcolor="bg-negative" textcolor="text-white" label="negative"/> 
  <h-btn contained bgcolor="bg-info" textcolor="text-white" label="info"/> 
  <h-btn contained bgcolor="bg-warning" textcolor="text-white" label="warning"/>
</div>
      `,
      textbuttons: `
<div>
  <h-btn textbutton textcolor="text-black" label="black"/>
  <h-btn textbutton textcolor="text-primary" label="primary"/>
  <h-btn textbutton textcolor="text-secondary" label="secondary"/>  
  <h-btn textbutton textcolor="text-positive" label="positive"/> 
  <h-btn textbutton textcolor="text-negative" label="negative"/> 
  <h-btn textbutton textcolor="text-info" label="info"/> 
  <h-btn textbutton textcolor="text-warning" label="warning"/>      
</div>
      `,
      outlinedButtons: `
<div>
  <h-btn outlined textcolor="text-black" label="black"/>
  <h-btn outlined textcolor="text-primary" label="primary"/>
  <h-btn outlined textcolor="text-secondary" label="secondary"/>  
  <h-btn outlined textcolor="text-positive" label="positive"/> 
  <h-btn outlined textcolor="text-negative" label="negative"/> 
  <h-btn outlined textcolor="text-info" label="info"/> 
  <h-btn outlined textcolor="text-warning" label="warning"/>      
</div>
      `,
      floatActionButtons: `
<div>
  <h-btn-float bgcolor="bg-positive" textcolor="text-white" @click="$refs.nav.open()" :icon="['fas', 'envelope']"> </h-btn-float>
  <h-btn-float bgcolor="bg-secondary" textcolor="text-white" @click="$refs.nav.close()" :icon="['fas', 'envelope']">  </h-btn-float>
  <h-btn-float bgcolor="bg-negative" textcolor="text-white" @click="$refs.nav.open()" :icon="['fas', 'plus']"> </h-btn-float>
  <h-btn-float bgcolor="bg-secondary" :icon="['fas', 'bars']"> </h-btn-float>
  <h-btn-float minifloat :icon="['fas', 'plus']"> </h-btn-float>
  <h-btn-float minifloat bgcolor="bg-warning" :icon="['fas', 'plus']"> </h-btn-float>      
</div>      
      `
    }
  },
  components: {
    HBtn,
    HBtnFloat
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import '../css/variables.styl'

.teststylus
  background-color $negative

</style>
