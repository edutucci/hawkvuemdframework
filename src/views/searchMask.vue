<template>
  <div>
    <h1>Search Mask</h1>
    <html-separator/>
    <div>
      <h-toggle v-model="masked" text="Masked?"/>
    </div>
    <html-separator/>
    <h-search-mask
      @search="onSearch" :options="options" mask="1-111-111-1111" v-model="maskModelTel"
      icon="fas fa-phone" static-label="Domestic number" :masked="masked" cleartext
    />
    <span>maskModel: {{maskModelTel}}</span>
    <!-- <span>maskModel: {{maskModelTel}}</span>
    <pre v-highlightjs="mask1">
      <code class="html">
      </code>
    </pre> -->
  </div>
</template>

<script>

import _ from 'lodash'

export default {
  data () {
    return {
      masked: false,
      maskModelTel: '',
      options: [],
      mask1: `
<h-search-mask mask="(11)1111-1111" v-model="maskModelTel" icon="fas fa-phone" :masked="masked" cleartext/>
      `
    }
  },
  methods: {
    onSearch (query) {
      console.log('veio a query: ' + query)
      this.options = []
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Domestic (541) 752-3010', desc: 'Domestic Number', value: '752-3010' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Dialed 1-541-753-3010', desc: 'Dialed Number', value: '1-541-753-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Local 754-3010', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Car Plate DCY 0477', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Credit Card 4641 6797 9497 9798', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Date Card 2019/02/09', desc: 'Local Number', value: '754-3010' })

      this.options = this.options.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
    }
  }
}
</script>

<style scoped>
</style>
