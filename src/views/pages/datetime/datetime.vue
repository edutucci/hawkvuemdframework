<template>
  <h-page-content padding>
    <div class="text-h4">Date and Time</div>

    <comp-code class="h-mt-lg" title="Date Input" :code="dateInput" :script="dateInputScript"
      javascript
    >
      <div class="flex flex-column full-width">
        <div class="flex flex-items-center">
          <div class="col-6">
            <h-input v-model="dateInputModel"></h-input>
          </div>
          <h-date-time-dialog v-model="date" mode="date"/>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Time Input" :code="timeInput" :script="timeInputScript"
      javascript
    >
      <div class="flex flex-column full-width">
        <div class="flex flex-items-center">
          <div class="col-6">
            <h-input v-model="timeInputModel"></h-input>
          </div>
          <h-date-time-dialog v-model="time" mode="time"/>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Date and Time Input" :code="dateTimeInput" :script="dateTimeInputScript"
      javascript
    >
      <div class="flex flex-column full-width">
        <div class="flex flex-items-center">
          <div class="col-6">
            <h-input v-model="dateTimeInputModel"></h-input>
          </div>
          <h-date-time-dialog v-model="datetime" mode="datetime"/>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Date Picker" :code="datepicker" :script="datepickerScript"
      javascript
    >
      <div class="flex flex-column">
        <h-date-picker v-model="datepickerModel"/>
        <div class="h-mt-sm">
          your date is: {{datepickerString}}
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Time Picker" :code="timepicker" :script="timepickerScript"
      javascript
    >
      <div class="flex flex-column">
        <h-time-picker v-model="timepickerModel"/>
        <div class="h-mt-sm">
          your time is: {{timepickerString}}
        </div>
      </div>
    </comp-code>

  </h-page-content>
</template>

<script>

import moment from 'moment'

export default {
  components: {
  },
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
      timepickerString: moment(new Date()).format('HH:mm'),
      dateInput: `
<div class="flex flex-column full-width">
  <div class="flex flex-items-center">
    <div class="col-6">
      <h-input v-model="dateInputModel"></h-input>
    </div>
    <h-date-time-dialog v-model="date" mode="date"/>
  </div>
</div>
`,
      dateInputScript: `
import moment from 'moment'

export default {
  data () {
    return {
      dateInputModel: moment(new Date()).format('YYYY-MM-DD'),
      date: new Date()
    }
  },
  watch: {
    date: function (value) {
      this.dateInputModel = moment(value).format('YYYY-MM-DD')
    }
  }
}
`,
      timeInput: `
<div class="flex flex-column full-width">
  <div class="flex flex-items-center">
    <div class="col-6">
      <h-input v-model="timeInputModel"></h-input>
    </div>
    <h-date-time-dialog v-model="time" mode="time"/>
  </div>
</div>
`,
      timeInputScript: `
import moment from 'moment'

export default {
  data () {
    return {
      timeInputModel: moment(new Date()).format('HH:mm:ss'),
      time: new Date()
    }
  },
  watch: {
    time: function (value) {
      this.timeInputModel = moment(value).format('HH:mm:ss')
    }
  }
}
`,
      dateTimeInput: `
<div class="flex flex-column full-width">
  <div class="flex flex-items-center">
    <div class="col-6">
      <h-input v-model="dateTimeInputModel"></h-input>
    </div>
    <h-date-time-dialog v-model="datetime" mode="datetime"/>
  </div>
</div>  
`,
      dateTimeInputScript: `
import moment from 'moment'

export default {
  data () {
    return {
      dateTimeInputModel: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      datetime: new Date()
    }
  },
  watch: {
    datetime: function (value) {
      this.dateTimeInputModel = moment(value).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
`,
      datepicker: `
<div class="flex flex-column">
  <h-date-picker v-model="datepickerModel"/>
  <div class="h-mt-sm">
    your date is: {{datepickerString}}
  </div>
</div>      
`,
      datepickerScript: `
import moment from 'moment'

export default {
  data () {
    return {
      datepickerModel: new Date(),
      datepickerString: moment(new Date()).format('YYYY-MM-DD')
    }
  },
  watch: {
    datepickerModel: function (value) {
      this.datepickerString = moment(value).format('YYYY-MM-DD')
    }
  }
}    
`,
      timepicker: `
<div class="flex flex-column">
  <h-time-picker v-model="timepickerModel"/>
  <div class="h-mt-sm">
    your time is: {{timepickerString}}
  </div>
</div>      
`,
      timepickerScript: `
import moment from 'moment'

export default {
  data () {
    return {
      timepickerModel: new Date(),
      timepickerString: moment(new Date()).format('HH:mm')
    }
  },
  watch: {
    timepickerModel: function (value) {
      this.timepickerString = moment(value).format('HH:mm')
    }
  }
}      
`
    }
  },
  mounted () {
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
  },
  methods: {
  }
}
</script>
