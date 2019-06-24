<template>
  <div>
    <div class="flex flex-column">
      <div class="flex">
        <div class="flex flex-column full-width">
          <h1>Date</h1>
          <div class="flex flex-items-center">
            <div class="col-6">
              <h-input v-model="dateInput"></h-input>
            </div>
            <h-date-time-dialog v-model="date" mode="date"/>
          </div>
          <div class="col-6">
            <!-- <prism language="html" :code="dateinput"></prism> -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-column">
      <div class="flex">
        <div class="flex flex-column full-width">
          <h1>Time</h1>
          <div class="flex flex-items-center">
            <div class="col-6">
              <h-input v-model="timeInput"></h-input>
            </div>
            <h-date-time-dialog v-model="time" mode="time"/>
          </div>
          <div class="col-6">
            <!-- <prism language="html" :code="dateinput"></prism> -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-column">
      <div class="flex">
        <div class="flex flex-column full-width">
          <h1>DateTime</h1>
          <div class="flex flex-items-center">
            <div class="col-6">
              <h-input v-model="dateTimeInput"></h-input>
            </div>
            <h-date-time-dialog v-model="datetime" mode="datetime"/>
          </div>
          <div class="col-6">
            <!-- <prism language="html" :code="dateinput"></prism> -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-column">
      <div class="flex">
        <div>
          <h1>Date Picker</h1>
          <h-date-picker v-model="datepicker"/>
          <div>
            your date is: {{datepickerString}}
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-column">
      <div class="flex">
        <div class="h-pl-md">
          <h1>Time Picker</h1>
          <h-time-picker v-model="timepicker"/>
          <div>
            your time is: {{timepickerString}}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import moment from 'moment'

export default {
  components: {
  },
  computed: {
    myDate () {
      return '' + this.date.getFullYear() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getDate()
    }
  },
  data () {
    return {
      dateInput: moment(new Date()).format('YYYY-MM-DD'),
      timeInput: moment(new Date()).format('HH:mm:ss'),
      dateTimeInput: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      date: new Date(),
      time: new Date(),
      datetime: new Date(),
      datepicker: new Date(),
      datepickerString: moment(new Date()).format('YYYY-MM-DD'),
      timepicker: new Date(),
      timepickerString: moment(new Date()).format('HH:mm')
      // dateinput: `<h-date-input v-model="date"/>`,
      // datetimeinput: `<h-date-time-input v-model="datetime" @input="change" display-format="MM/DD/YYYY HH:mm:ss"/>`,
      // datepicker: `<h-date-picker v-model="date"/>`
    }
  },
  mounted () {
  },
  watch: {
    date: function (value) {
      this.dateInput = moment(value).format('YYYY-MM-DD')
    },
    time: function (value) {
      this.timeInput = moment(value).format('HH:mm:ss')
    },
    datetime: function (value) {
      this.dateTimeInput = moment(value).format('YYYY-MM-DD HH:mm:ss')
    },
    datePicker: function (value) {
      this.datepickerString = moment(value).format('YYYY-MM-DD')
    },
    timePicker: function (value) {
      this.timepickerString = moment(value).format('HH:mm')
    }
  },
  methods: {
  }
}
</script>
