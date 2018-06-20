<template>
  <div>
    <h1>Search</h1>

    <h-search @search="onSearch" :options="options"/>

    <h1>Toggle</h1>
    <!-- <h-toggle/> -->

  </div>
</template>

<script>

import HSearch from '../components/Inputs/HSearch'
import HToggle from '../components/checkbox/HToggle'

export default {
  components: {
    HSearch,
    HToggle
  },
  data () {
    return {
      options: []
    }
  },
  methods: {
    onSearch (query) {
      console.log('veio a query: ' + query)
      this.options = []
      this.options.push({avatar: '/static/avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you'})
      this.options.push({img: '/static/avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017'})
      this.options.push({icon: ['fas', 'film'], text: 'Attractions', desc: 'Lets go to the movie?'})
    }
  }
}
</script>
