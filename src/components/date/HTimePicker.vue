<template lang="pug">
  div(style="width:350px; position:relative;")
    .flex.flex-column.full-width
      .full-width
        h-input.full-width(
          @click="showTimePicker = !showTimePicker"
          v-model="inputValue"
          :placeholder="placeholder"
          :readonly="true")
      
      .flex.flex-justify-center.position-absolute.boxshadow.full-width(v-if="showTimePicker" style="top:67px;background-color: white;")
        time-panel(
          @ok="ok"
          @cancel="hidePanel"
        )

</template>

<script>

import HFaIcon from '../icons/HFaIcon'
import HBtn from '../buttons/HBtn'
import HInput from '../Inputs/HInput.vue'
import TimePanel from './TimePanel'

export default {
  name: 'HTimePicker ',
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
    HFaIcon,
    HBtn,
    HInput,
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
  methods: {
    ok (date) {
      this.setInputDate(date)
      this.hidePanel()
      this.$emit('input ', this.currentDate)
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
