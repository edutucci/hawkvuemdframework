<template lang="pug">
  div(style="width:350px; position:relative;")
    .flex.flex-column.full-width
      .full-width
        h-input.full-width(
          @click="showDatePicker = !showDatePicker"
          v-model="inputValue"
          :placeholder="placeholder"
          :readonly="true")
      
      // div.position-absolute.boxshadow.full-width(v-if="showDatePicker" style="top:67px;background-color: white;")
      //   time-panel(
      //     :currentdate="currentDate"
      //     @cancel="showDatePicker = !showDatePicker"
      //     @updateHour="updateHour"
      //     @updateMin="updateMin"
      //   )

</template>

<script>

import HTime from './HTime'
import HFaIcon from '../icons/HFaIcon'
import HBtn from '../buttons/HBtn'
import HInput from '../Inputs/HInput.vue'
import TimePanel from './TimePanel'

export default {
  name: 'HTimePicker ',
  extends: HTime,
  components: {
    HFaIcon,
    HBtn,
    HInput,
    TimePanel
  }
}
</script>

<style scoped>

</style>
