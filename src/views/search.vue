<template>
  <div>
    <h1>Search</h1>
    <h-search @search="onSearch" :options="options"/>
  </div>
</template>

<script>

import HSearch from '../components/Inputs/HSearch'

export default {
  components: {
    HSearch
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
      this.options.push({avatar: '/avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you'})
      this.options.push({img: '/avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017'})
      this.options.push({icon: ['fas', 'volleyball-ball'], text: 'Attractions', desc: 'Lets go to the movie?'})
    }
  }
}
</script>
