<template>
  <h-page-content>
    <h1>Input Mask</h1>
    <h-separator/>

    <div>
      <h-toggle v-model="masked" text="Masked?"/>
    </div>

    <!-- <h-input outlined input-mask mask="(##)#####-####" v-model="maskModelTel" left-icon="fas fa-phone" :masked="masked" clearable/>
    <span>maskModel: {{maskModelTel}}</span> -->

    <!-- <h-input outlined input-mask mask="11111-111" v-model="maskModelCep" left-icon="fas fa-home" :masked="masked" clearable/>
    <span>maskModel: {{maskModelCep}}</span> -->

    <!-- <input type="text" v-mask="'AAA-####'" v-model="myInputModel2"/> -->

    <!-- <h1>Currency Mask</h1>
    <h-input outlined input-currency v-model="maskModelCurrency" left-icon="fas fa-money" :masked="masked" clearable/>
    <span>maskModel: {{maskModelCurrency}}</span> -->

  </h-page-content>
</template>

<script>

import _ from 'lodash'

export default {
  components: {
  },
  data () {
    return {
      masked: false,
      maskModelTel: '',
      maskModelCep: '',
      maskModelTel2: '',
      maskModelCurrency: '20000',
      options: [],
      mask1: `
<h-input-mask mask="(11)1111-1111" v-model="maskModelTel" icon="fas fa-phone" float-label="Phone" :masked="masked" cleartext/>
      `,
      mask2: `
<h-input-mask mask="11111-111" v-model="maskModelCep" icon="fas fa-home" float-label="ZipCode" :masked="masked" cleartext/>
      `,
      mask3: `
<h-search-mask mask="(11)1111-1111" v-model="maskModelTel" icon="fas fa-phone" :masked="masked" cleartext/>
      `,
      sample1: `
import _ from 'lodash'

export default {
  data () {
    return {
      masked: false,
      maskModelTel: '',
      maskModelCep: '',
      maskModelTel2: '',
      options: []
    }
  },
  methods: {
    onSearch (query) {
      console.log('query: ' + query)
      this.options = []
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Domestic (541) 752-3010', desc: 'Domestic Number', value: '752-3010' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Dialed 1-541-753-3010', desc: 'Dialed Number', value: '1-541-753-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Local 754-3010', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Car Plate DCY 0477', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Credit Card 4641 6797 9497 9798', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Date Card 2019/02/09', desc: 'Local Number', value: '754-3010' })

      this.options = this.options.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
    },
    onKeyTab () {
      console.log('tab')
      this.$SnackBar.create({
        message: 'Tab key pressed',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    }
  }
}  
      `
    }
  },
  methods: {
    onSearch (query) {
      console.log('query: ' + query)
      this.options = []
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Domestic (541) 752-3010', desc: 'Domestic Number', value: '752-3010' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Dialed 1-541-753-3010', desc: 'Dialed Number', value: '1-541-753-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Local 754-3010', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Car Plate DCY 0477', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Credit Card 4641 6797 9497 9798', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Date Card 2019/02/09', desc: 'Local Number', value: '754-3010' })

      this.options = this.options.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
    },
    onKeyTab () {
      console.log('tab')
      this.$SnackBar.create({
        message: 'Tab key pressed',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    }
  }
}
</script>
