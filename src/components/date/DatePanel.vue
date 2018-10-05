<template lang="pug">
  .flex.flex-column
    .flex.full-width
      .full-width.flex.flex-justify-center.flex-items-center.bg-primary.h-pa-md
        div
          .btn.bg-primary
            h-fa-icon(textcolor="text-white" icon="fas fa-chevron-left" size="24px" @click="onPrevNextMonth(-1)")

        .flex-1
          .flex.flex-column
            .flex.flex-justify-center
              .btn.bg-primary.text-white(@click="panelMode= (panelMode === 'years') ? 'days' : 'years'")
                h2 {{currentDate.getFullYear().toString()}}

            .flex.flex-justify-center.text-white
              .btn.bg-primary.text-white(@click="panelMode= (panelMode === 'months') ? 'days' : 'months'")
                h2  {{week_days[currentDate.getDay()]}}, {{months[currentDate.getMonth()]}} {{currentDate.getDate()}}

        div
          .btn.bg-primary
            h-fa-icon(textcolor="text-white" icon="fas fa-chevron-right" size="24px" @click="onPrevNextMonth(1)")

    .flex-1.h-pt-md(v-show="panelMode==='days'" style="height:280px")
      .flex
        .flex-1.text-center(v-for="day in 7" :key="day")
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
        h-btn(outlined text="OK" @click="onOK")
        h-btn(outlined text="Close" @click="onClose")
    .flex-1.scroll(v-show="panelMode==='years'" style="max-height:280px")
      .flex.flex-justify-center.btn.bg-white(v-for="year in years" @click="onYearClick(year)")
        | {{year}}
    .flex-1.scroll(v-show="panelMode==='months'" style="max-height:280px")
      .flex.flex-justify-center.btn.bg-white(v-for="(month, index) in months" @click="onMonthClick(index)")
        | {{month}}

</template>

<script>
import HDate from './HDate'

export default {
  extends: HDate,
  props: {
    date: {
      type: Date,
      default: new Date()
    },
    months: {
      type: Array,
      default: () => { return [] }
    },
    week_days: {
      type: Array,
      default: () => { return [] }
    }
  },
  data () {
    return {
      panelMode: 'days',
      inputValue: ' '
    }
  },
  mounted () {
    this.setPanelDate()
  },
  watch: {
    date: function (value) {
      this.setPanelDate()
    }
  },
  methods: {
    setPanelDate () {
      this.currentDate = this.date
      this.getCalendar()
    },
    onOK () {
      this.$emit('ok', this.currentDate)
    },
    onClose () {
      this.$emit('cancel')
    },
    onPrevNextMonth (value) {
      this.panelMode = 'days'
      this.updateMonth(value)
    },
    onMonthClick (month) {
      this.panelMode = 'days'
      this.setMonth(month)
    },
    onYearClick (year) {
      this.panelMode = 'days'
      this.updateYear(year)
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0
}
</style>
