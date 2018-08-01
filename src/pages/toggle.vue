<template>
  <div>
    <h1>Toggle</h1>
    <h-toggle/>

        <div>
          <h-toggle v-model="colors" label="Red" value="Red"/>
          <h-toggle v-model="colors" label="Green" value="Green"/>
          <h-toggle v-model="colors" label="Blue" value="Blue"/>        
        </div>

        <div>
          | Your favorites colors: {{ colors }}
        </div>     

  </div>
</template>

<script>

import HToggle from '../components/checkbox/HToggle'

export default {
  components: {
    HToggle
  },
  data () {
    return {
      colors: []
    }
  }
}
</script>
