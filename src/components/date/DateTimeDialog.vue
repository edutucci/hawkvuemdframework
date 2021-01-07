<template lang="pug">
.flex.flex-column()
  div(v-if="this.mode === 'time' || this.mode === 'date'")
    h-icon.cursor-pointer(:icon="componentIcon" @click="showDateTime = true")
  div(v-else-if="this.mode === 'datetime'")
    h-image.cursor-pointer(src="/img/icons/datetime.png" size="22px" @click="showDateTime = true")

  h-dialog(v-model="showDateTime")
    .flex.flex.column
      date-panel(
        v-if="panelType === 'date' && (this.mode === 'datetime' || this.mode === 'date')"
        :show-time="this.mode === 'datetime' || this.mode === 'time'"
        :week_days="week_days"
        :months="months"
        :date="currentDateTime",
        :pickerMode="false"
        @dateChanged="dateChanged"
        @yearMonthChanged="yearMonthChanged"
        @onShowTime="panelType = 'time'"
      )
      time-panel(
        v-else-if="isTimeMode"
        :date="currentDateTime"
        @ok="setTime"
        @cancel="panelType = 'date'"
        :pickerMode="false"
      )
</template>

<script>

import datePanel from './DatePanel.vue';
import timePanel from './TimePanel.vue';

export default {
  name: 'DateTimeDialog',
  mixins: [],
  props: {
    value: {
      type: Date,
      default: new Date(),
    },
    mode: {
      type: String,
      default: 'datetime',
    },
  },
  components: {
    datePanel,
    timePanel,
  },
  data() {
    return {
      showDateTime: false,
      currentDateTime: new Date(),
      panelType: 'date',
      componentIcon: '',
      week_days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    };
  },
  mounted() {
    this.currentDateTime = this.value;
    this.changeComponentIcon(this.mode);
  },
  watch: {
    value(value) {
      this.currentDateTime = value;
    },
    mode(value) {
      this.changeComponentIcon(value);
    },
  },
  computed: {
    isTimeMode() {
      let value = false;
      if (this.panelType === 'time' && (this.mode === 'datetime' || this.mode === 'time')) {
        value = true;
      }
      console.log('value vale: ', value);
      return value;
    },
  },
  methods: {
    changeComponentIcon(value) {
      if (value === 'datetime' || value === 'date') {
        this.componentIcon = 'far fa-calendar-alt';
      } else if (value === 'time') {
        this.componentIcon = 'far fa-clock';
        this.panelType = 'time';
      }
    },
    dateChanged(date) {
      this.currentDateTime = date;
      this.showDateTime = false;
      this.$emit('input', date);
    },
    yearMonthChanged(date) {
      this.currentDateTime = date;
      this.$emit('input', date);
    },
    ok(date) {
      this.$emit('input', date);
      this.showDateTime = false;
    },
    hidePanel() {
      this.showDateTime = false;
    },
    setTime(time) {
      const year = this.currentDateTime.getFullYear();
      const month = this.currentDateTime.getMonth();
      const day = this.currentDateTime.getDate();

      const hour = time.getHours();
      const min = time.getMinutes();

      this.currentDateTime = new Date(year, month, day, hour, min, 0, 0);

      if (this.mode === 'time') {
        this.ok(this.currentDateTime);
      } else {
        this.panelType = 'date';
      }
    },
    away() {
      this.hidePanel();
    },
  },
};
</script>

<style scoped>

</style>
