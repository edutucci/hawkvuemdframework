<template lang="pug">
.column.border.border-gray(style="max-width:400px")
  .col.bg-primary.text-white.text-bold(style="padding: 8px 16px")
    .text-caption SELECT DATE

    .row.h-mt-lg
      .col.text-h6
        | {{week_days[currentDate.getDay()]}}, {{months[currentDate.getMonth()]}} {{currentDate.getDate()}}

    .row(v-if="showTime")
      .col.text-h6
        | {{datetime}}
      .col-auto
        h-icon(icon="fas fa-clock" text-color="text-white" @click="onShowTime")

  .col.bg-white(style="padding: 16px;")
    .col.cursor-pointer
      .row.align-items-center
        .col
          h-btn(@click="panelMode= (panelMode === 'months') ? 'days' : 'months'")
            | {{months[currentDate.getMonth()]}}
          h-btn(@click="panelMode= (panelMode === 'years') ? 'days' : 'years'")
            | {{currentDate.getFullYear().toString()}}

        .col-auto(v-show="panelMode === 'days'")
          h-btn(fab size="xs")
            h-icon(icon="fas fa-chevron-left" size="12px" @click="onPrevNextMonth(-1)")

          h-btn(fab size="xs")
            h-icon(icon="fas fa-chevron-right" size="12px" @click="onPrevNextMonth(1)")
    .col(v-show="panelMode === 'days'" style="padding: 16px 0px;")
      .row.align-items-center
        .col.text-center(v-for="day in 7" :key="day")
          | {{week_days[day-1]}}

    .col(v-show="panelMode === 'days'")
      .row(v-for="week in Calendar" :key="week.monthDay" style="padding: 3px 0px;")
        .col-auto.justify-center(v-for="day in week" :key="day.monthDay" style="width:46px; padding: 2px 0px;")
          h-btn(fab v-if="day.monthDay > 0"
            :bg-color="(day.monthDay === currentDate.getDate()) ? 'bg-primary' : 'bg-white'"
            :text-color="(day.monthDay === currentDate.getDate()) ? 'text-white' : 'text-black'"
            @click="applyDay(day.date)"
          )
            | {{day.monthDay}}
    .col.scroll-y-only(v-show="panelMode==='months'" style="max-height:310px")
      .row.wrap
        .col(v-for="(month, index) in months")
          h-btn(:text="month" @click="applyMonth(index)")
    .col.scroll-y-only(v-show="panelMode==='years'" style="max-height:310px")
      .row.wrap
        .col(v-for="year in years")
          h-btn(:text="year.toString()" @click="applyYear(year)")
</template>

<script>
import moment from 'moment';
import HDate from './HDate.vue';

export default {
  extends: HDate,
  props: {
    date: {
      type: Date,
      default: new Date(),
    },
    months: {
      type: Array,
      default: () => [],
    },
    week_days: {
      type: Array,
      default: () => [],
    },
    pickerMode: {
      type: Boolean,
      default: true,
    },
    showTime: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      panelMode: 'days',
      inputValue: ' ',
    };
  },
  mounted() {
    this.setPanelDate(this.date);
  },
  watch: {
    date(value) {
      this.setPanelDate(value);
    },
  },
  computed: {
    datetime() {
      return moment(this.currentDate).format('HH:mm A');
    },
  },
  methods: {
    setPanelDate(date) {
      this.currentDate = date;
      this.getCalendar();
    },
    onOK() {
      // this.$emit('ok', this.currentDate)
    },
    // onClose () {
    //   this.$emit('cancel')
    // },
    onPrevNextMonth(value) {
      this.panelMode = 'days';
      this.updateMonth(value);
    },
    onMonthClick(month) {
      this.panelMode = 'days';
      this.setMonth(month);
      if (this.pickerMode) {
        this.onOK();
      }
    },
    applyDay(date) {
      this.updateDate(date);
      this.$emit('dateChanged', this.currentDate);
    },
    applyYear(year) {
      this.onYearClick(year);
      this.$emit('yearMonthChanged', this.currentDate);
    },
    applyMonth(index) {
      this.onMonthClick(index);
      this.$emit('yearMonthChanged', this.currentDate);
    },
    onYearClick(year) {
      this.panelMode = 'days';
      this.updateYear(year);
      // if (this.pickerMode) {
      //   this.onOK()
      // }
    },
    onShowTime() {
      this.$emit('onShowTime');
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0
}
</style>
