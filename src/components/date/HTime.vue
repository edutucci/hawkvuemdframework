<template>

</template>

<script>
export default {
  data () {
    return {
      showDatePicker: false,
      currentDate: new Date()
    }
  },
  methods: {
    updateHour (hour) {
      console.log('hour:' + hour)
    },
    updateMin (updateMin) {
      console.log('min:' + min)
    }
  }
}
</script>

