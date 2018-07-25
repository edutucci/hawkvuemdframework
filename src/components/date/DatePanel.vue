<template lang="pug">
  .flex.flex-column
    .flex.full-width
      .full-width.flex.flex-justify-center.flex-items-center.bg-primary.h-pa-md
        div
          .btn.bg-primary.text-white
            h-fa-icon(:icon="['fas', 'chevron-left']" @click="updateMonth(-1)")

        .flex-1
          .flex.flex-column
            .flex.flex-justify-center
              .btn.bg-primary.text-white(@click="panelMode= (panelMode === 'years') ? 'days' : 'years'")
                h2 {{currentdate.getFullYear().toString()}}

            .flex.flex-justify-center.text-white
              .btn.bg-primary.text-white(@click="panelMode= (panelMode === 'months') ? 'days' : 'months'")
                h2  {{weekdays[currentdate.getDay()]}}, {{months[currentdate.getMonth()]}} {{currentdate.getDate()}}

        div
          .btn.bg-primary.text-white
            h-fa-icon(:icon="['fas', 'chevron-right']" @click="updateMonth(1)")
    
    div.h-pt-md(v-show="panelMode==='days'" style="height:280px")
      .flex
        .flex-1.text-center(v-for="day in 7" :key="day")
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
    div.scroll(v-show="panelMode==='years'" style="height:280px")
      .flex.flex-justify-center.btn.bg-white(v-for="year in years" @click="updateYear(year)")
        | {{year}}
    div.scroll(v-show="panelMode==='months'" style="height:280px")
      .flex.flex-justify-center.btn.bg-white(v-for="(month, index) in months" @click="setMonth(index)")
        | {{month}}

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
    years: {
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
  data () {
    return {
      panelMode: 'days'
    }
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
    },
    updateMonth (value) {
      console.log('emting up month')
      this.$emit('updateMonth', value)
    },
    updateYear (value) {
      this.$emit('updateYear', value)
    },
    setMonth (value) {
      this.$emit('setMonth', value)
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0
}
</style>
