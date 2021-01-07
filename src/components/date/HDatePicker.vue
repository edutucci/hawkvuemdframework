<template lang="pug">
div(style="max-width:350px; position:relative;")
  date-panel(
    :week_days="week_days"
    :months="months"
    :date="currentDate"
    @dateChanged="dateChanged"
  )

</template>

<script>

import DatePanel from './DatePanel.vue';

export default {
  props: {
    value: {
      type: Date,
      value: ' ',
    },
  },
  components: {
    DatePanel,
  },
  data() {
    return {
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
      currentDate: new Date(),
    };
  },
  mounted() {
    this.currentDate = this.value;
  },
  watch: {
    value(value) {
      this.currentDate = value;
    },
  },
  methods: {
    dateChanged(date) {
      this.currentDate = date;
      this.$emit('input', date);
    },
  },
};
</script>

<style scoped>

</style>
