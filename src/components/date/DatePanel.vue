<template lang="pug">
  div
    .full-width
      .flex.flex-justify-center.flex-items-center.bg-primary.h-pa-md
        .text-white
          h-fa-icon(:icon="['fas', 'chevron-left']")

        .flex-1
          .flex.flex-column
            .flex.flex-justify-center.text-white
              h2  {{currentdate.getFullYear()}}

            .flex.flex-justify-center.text-white
              h2  {{weekdays[currentdate.getDay()]}}, {{months[currentdate.getMonth()]}} {{currentdate.getDate()}}

        .text-white
          h-fa-icon(:icon="['fas', 'chevron-right']")
    
    .flex
      .flex-1.text-center(v-for="day in 6" :key="day")
        | {{weekdays[day-1]}}

    .flex(v-for="week in calendar" :key="week.monthDay")
      .flex-1.flex.flex-justify-center(v-for="day in week" :key="day.monthDay")
        .btn.bg-white.circle.flex.flex-justify-center.flex-items-center(v-if="day.monthDay > 0"
          :class="{activeday: day.monthDay === currentdate.getDate()}"
          @click="updateDate(day.date)"
          style="width:26px; height:26px;"
        )
          | {{day.monthDay}}

    .flex.flex-justify-end
      h-btn(textbutton label="OK" @click="onOK")
      h-btn(textbutton label="Close" @click="onClose")  
</template>

<script>
import HFaIcon from '../icons/HFaIcon'
import HBtn from '../buttons/HBtn'

export default {
  props: {
    months: {
      type: Array,
      default: () => { return [] }
    },
    currentdate: Date,
    calendar: {
      type: Array,
      default: () => { return [] }
    },
    weekdays: {
      type: Array,
      default: () => { return [] }
    }
  },
  components: {
    HFaIcon,
    HBtn
  },
  methods: {
    onOK () {
      this.$emit('ok')
    },
    onClose () {
      this.$emit('cancel')
    },
    updateDate (date) {
      this.$emit('updateDate', date)
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0
}
</style>
