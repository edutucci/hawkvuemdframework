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

        .full-width
          .flex.flex-justify-center.flex-items-center.bg-primary.h-pa-md
            .text-white
              h-fa-icon(:icon="['fas', 'chevron-left']")

            .flex-1
              .flex.flex-column
                .flex.flex-justify-center.text-white
                  h2  {{currentDate.getFullYear()}}

                .flex.flex-justify-center.text-white
                  h2  {{week_days[currentDate.getDay()]}}, {{months[currentDate.getMonth()]}} {{currentDate.getDate()}}

            .text-white
              h-fa-icon(:icon="['fas', 'chevron-right']")
        
        .flex
          .flex-1.text-center(v-for="day in 6" :key="day")
            | {{week_days[day-1]}}

        .flex(v-for="week in Calendar" :key="week.monthDay")
          .flex-1.flex.flex-justify-center(v-for="day in week" :key="day.monthDay")
            .btn.bg-white.circle.flex.flex-justify-center.flex-items-center(v-if="day.monthDay > 0"
              :class="{activeday: day.monthDay === currentDate.getDate()}"
              @click="updateDate(day.date)"
              style="width:26px; height:26px;"
            )
              | {{day.monthDay}}

        .flex.flex-justify-end
          h-btn(textbutton label="OK" @click="configDate")
          h-btn(textbutton label="Close" @click="showDatePicker = !showDatePicker")

</template>

<script>

import HDate from './HDate'
import HFaIcon from '../icons/HFaIcon'
import HBtn from '../buttons/HBtn'
import HInput from '../Inputs/HInput.vue'

export default {
  name: 'HDatePicker ',
  extends: HDate,
  components: {
    HFaIcon,
    HBtn,
    HInput
  }
}
</script>

<style scoped>
h2 {
  margin: 0
}
</style>
