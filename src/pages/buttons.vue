<template>
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
    
    <h1>Float Action</h1>
    <div>
      <h-btn-float bgcolor="bg-positive" textcolor="text-white" @click="$refs.nav.open()" :icon="['fas', 'envelope']"> </h-btn-float>
      <h-btn-float bgcolor="bg-secondary" textcolor="text-white" @click="$refs.nav.close()" :icon="['fas', 'envelope']">  </h-btn-float>
      <h-btn-float bgcolor="bg-negative" textcolor="text-white" @click="$refs.nav.open()" :icon="['fas', 'plus']"> </h-btn-float>
      <h-btn-float bgcolor="bg-secondary" :icon="['fas', 'bars']"> </h-btn-float>
      <h-btn-float minifloat :icon="['fas', 'plus']"> </h-btn-float>
      <h-btn-float minifloat bgcolor="bg-warning" @click="$refs.nav.open()" :icon="['fas', 'plus']"> </h-btn-float>      
    </div>  

    
        <!-- 

    <pre><code class="hljs python ">1111</code></pre> -->

  </div>
</template>

<script>

import HBtn from '../components/buttons/HBtn.vue'
import HBtnFloat from '../components/buttons/HBtnFloat.vue'

export default {
  data () {
    return {
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
