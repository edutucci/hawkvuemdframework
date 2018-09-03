<template>
  <div></div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date()
    }
  },
  methods: {
    configTime (hour, min) {
      // console.log('configtime:' + hour + ':' + min)
      this.currentDate = new Date(0, 0, 0, hour, min, 0)
    }
  }
}
</script>
