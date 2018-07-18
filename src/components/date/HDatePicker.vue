<template lang="pug">
  div(style="width:350px; position:relative;")
    .flex.flex-column.full-width
      .full-width
        h-input.full-width(
          @click="showDatePicker = !showDatePicker"
          v-model="inputValue"
          :placeholder="placeholder"
          :readonly="true")
      
      div.position-absolute.boxshadow.full-width(v-if="showDatePicker" style="top:67px;background-color: white;")
        date-panel(
          :months="months"
          :currentdate="currentDate"
          :calendar="Calendar"
          :weekdays="week_days"
          @ok="configDate"
          @cancel="showDatePicker = !showDatePicker"
          @updateDate="updateDate"
        )

</template>

<script>

import HDate from './HDate'
import HFaIcon from '../icons/HFaIcon'
import HBtn from '../buttons/HBtn'
import HInput from '../Inputs/HInput.vue'
import DatePanel from './DatePanel'

export default {
  name: 'HDatePicker ',
  extends: HDate,
  components: {
    HFaIcon,
    HBtn,
    HInput,
    DatePanel
  }
}
</script>

<style scoped>

</style>
