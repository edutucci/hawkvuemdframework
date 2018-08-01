<template lang="pug">
  div(style="width:350px; position:relative;")
    time-panel(
      :date="value"
      @ok="ok"
    )

</template>

<script>

import TimePanel from './TimePanel'

export default {
  props: {
    value: {
      type: Date,
      defaut: new Date()
    }
  },
  components: {
    TimePanel
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    ok (date) {
      this.$emit('input ', this.currentDate)
    }
  }
}
</script>

<style scoped>

</style>
