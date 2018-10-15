<template lang="pug">
  div(
    v-on-clickaway="hidePanel"
    style="width:350px; position:relative;"
  )
    .flex.flex-column.full-width
      .full-width
        h-input.full-width(
          @click="showTimePicker = !showTimePicker"
          v-model="inputValue"
          :placeholder="placeholder"
          :readonly="true")

      .flex.flex-justify-center.position-absolute.boxshadow.full-width(
        v-if="showTimePicker"
        style="top:67px;background-color: white;z-index: 2;"
      )
        time-panel(
          :date="value"
          @ok="ok"
          @cancel="hidePanel"
          :pickerMode="false"
        )

</template>

<script>

import TimePanel from './TimePanel'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [clickaway],
  props: {
    placeholder: {
      type: String,
      default: ''
    },
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
      showTimePicker: false,
      inputValue: ' '
    }
  },
  mounted () {
    this.setInputDate(this.value)
  },
  watch: {
    value: function (value) {
      this.ok(value)
    }
  },
  methods: {
    ok (date) {
      this.setInputDate(date)
      this.hidePanel()
      this.$emit('input', date)
    },
    hidePanel () {
      this.showTimePicker = false
    },
    setInputDate (date) {
      this.inputValue = ' ' + date.getHours() + ':' + date.getMinutes()
    }
  }
}
</script>

<style scoped>

</style>
