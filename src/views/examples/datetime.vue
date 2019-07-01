<template>
  <div>
    <h1>Date and Time</h1>

    <h3>Date Input</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div class="flex flex-column full-width">
        <div class="flex flex-items-center">
          <div class="col-6">
            <h-input v-model="dateInputModel"></h-input>
          </div>
          <h-date-time-dialog v-model="date" mode="date"/>
        </div>
      </div>
    </div>

    <h3>Time Input</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div class="flex flex-column full-width">
        <div class="flex flex-items-center">
          <div class="col-6">
            <h-input v-model="timeInputModel"></h-input>
          </div>
          <h-date-time-dialog v-model="time" mode="time"/>
        </div>
      </div>
    </div>

    <h3>Date and Time Input</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div class="flex flex-column full-width">
        <div class="flex flex-items-center">
          <div class="col-6">
            <h-input v-model="dateTimeInputModel"></h-input>
          </div>
          <h-date-time-dialog v-model="datetime" mode="datetime"/>
        </div>
      </div>
    </div>

    <h3>Date Picker</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div class="flex flex-column">
        <h-date-picker v-model="datepickerModel"/>
        <div class="h-mt-sm">
          your date is: {{datepickerString}}
        </div>
      </div>
    </div>

    <h3>Time Picker</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div class="flex flex-column">
        <h-time-picker v-model="timepickerModel"/>
        <div class="h-mt-sm">
          your time is: {{timepickerString}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import moment from 'moment'

export default {
  data () {
    return {
      dateInputModel: moment(new Date()).format('YYYY-MM-DD'),
      timeInputModel: moment(new Date()).format('HH:mm:ss'),
      dateTimeInputModel: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      date: new Date(),
      time: new Date(),
      datetime: new Date(),
      datepickerModel: new Date(),
      datepickerString: moment(new Date()).format('YYYY-MM-DD'),
      timepickerModel: new Date(),
      timepickerString: moment(new Date()).format('HH:mm')
    }
  },
  watch: {
    date: function (value) {
      this.dateInputModel = moment(value).format('YYYY-MM-DD')
    },
    time: function (value) {
      this.timeInputModel = moment(value).format('HH:mm:ss')
    },
    datetime: function (value) {
      this.dateTimeInputModel = moment(value).format('YYYY-MM-DD HH:mm:ss')
    },
    datepickerModel: function (value) {
      this.datepickerString = moment(value).format('YYYY-MM-DD')
    },
    timepickerModel: function (value) {
      this.timepickerString = moment(value).format('HH:mm')
    }
  }
}
</script>
