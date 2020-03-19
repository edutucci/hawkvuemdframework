<template lang="pug">
  h-main-body
    h-page-content
      .text-body1 Object Test

      .row.h-mt-md
        .col-auto
          h-btn(bg-color="bg-primary" text-color="text-white" text="ADD Data 1" @click="addData")
          h-btn.h-ml-sm(bg-color="bg-primary" text-color="text-white" text="ADD Data 2" @click="addData2")

      .text-h6 Using data object in data
      .row.h-mt-md(
        v-for="(data, index) in dataArray" :key="`d1-${index}`"
      )
        .col-auto {{data.name}}
        .col-auto {{data.city}}

      .text-h6 Using data object as new object
      .row.h-mt-md(
        v-for="(data, index) in dataArray2" :key="`d2-${index}`"
      )
        .col-auto {{data.name}}
        .col-auto {{data.city}}
</template>

<script>

import _ from 'lodash'

export default {
  data () {
    return {
      data: {
        name: '',
        city: ''
      },
      dataArray: [],
      dataArray2: []
    }
  },
  methods: {
    addData () {
      this.dataArray.push(_.cloneDeep(this.data))
      this.dataArray[this.dataArray.length - 1].name = 'name' + (this.dataArray.length + 1)
      this.dataArray[this.dataArray.length - 1].city = 'city' + (this.dataArray.length + 1)
    },
    addData2 () {
      this.dataArray2.push({
        name: 'name' + (this.dataArray2.length + 1),
        city: 'city' + (this.dataArray2.length + 1)
      })
    }
  }
}
</script>
