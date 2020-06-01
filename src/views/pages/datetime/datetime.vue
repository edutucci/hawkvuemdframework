<template>
  <h-page-content padding
    @onResize="pageResize"
    @mainLayoutDrawerIsOpened="showDrawer = false"
  >

    <div class="row ">
      <div class="col">
        <div class="row position-sticky bg-white">
          <div class="col text-h4">
            Date and Time
          </div>
          <div class="col-auto">
            <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = !showDrawer"/>
          </div>
        </div>
        <div class="row">
          <div class="col">

            <div ref="dt-dateinput"/>
            <comp-code class="h-mt-lg" title="Date Input" :code="dateInput" :script="dateInputScript"
              javascript
            >
              <div class="row wrap align-items-center">
                <div class="col-auto" style="min-width: 100px; max-width: 400px; ">
                  <h-input dense v-model="dateInputModel"></h-input>
                </div>
                <div class="col-auto h-ml-sm">
                  <h-date-time-dialog v-model="date" mode="date"/>
                </div>
              </div>
            </comp-code>

            <div ref="dt-timeinput"/>
            <comp-code class="h-mt-lg" title="Time Input" :code="timeInput" :script="timeInputScript"
              javascript
            >
              <div class="row wrap align-items-center">
                <div class="col-auto" style="min-width: 100px; max-width: 400px; ">
                  <h-input dense v-model="timeInputModel"></h-input>
                </div>
                <div class="col-auto h-ml-sm">
                  <h-date-time-dialog class="h-ml-sm" v-model="time" mode="time"/>
                </div>
              </div>
            </comp-code>

            <div ref="dt-datetimeinput"/>
            <comp-code class="h-mt-lg" title="Date and Time Input" :code="dateTimeInput" :script="dateTimeInputScript"
              javascript
            >
              <div class="row wrap align-items-center">
                <div class="col-auto" style="min-width: 100px; max-width: 400px; ">
                  <h-input dense v-model="dateTimeInputModel"></h-input>
                </div>
                <div class="col-auto h-ml-sm">
                  <h-date-time-dialog class="h-ml-sm" v-model="datetime" mode="datetime"/>
                </div>
              </div>
            </comp-code>

            <div ref="dt-datepicker"/>
            <comp-code class="h-mt-lg" title="Date Picker" :code="datepicker" :script="datepickerScript"
              javascript
            >
              <div class="column">
                <h-date-picker v-model="datepickerModel"/>
                <div class="h-mt-sm">
                  your date is: {{datepickerString}}
                </div>
              </div>
            </comp-code>

            <div ref="dt-timepicker"/>
            <comp-code class="h-mt-lg" title="Time Picker" :code="timepicker" :script="timepickerScript"
              javascript
            >
              <div class="column">
                <h-time-picker v-model="timepickerModel"/>
                <div class="h-mt-sm">
                  your time is: {{timepickerString}}
                </div>
              </div>
            </comp-code>

          </div>
         </div>
      </div>
    </div>

    <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <list-help>
          <list-help>
            <h-list>
              <h-list-header text="Usage"/>
              <h-list-item @click="goToElement('dt-datetinput')">
                <h-list-item-content>
                  <h-list-item-text title="Date Input"></h-list-item-text>
                </h-list-item-content>
              </h-list-item>
              <h-list-item @click="goToElement('dt-timeinput')">
                <h-list-item-content>
                  <h-list-item-text title="Time Input"></h-list-item-text>
                </h-list-item-content>
              </h-list-item>
              <h-list-item @click="goToElement('dt-datetimeinput')">
                <h-list-item-content>
                  <h-list-item-text title="DateTime Input"></h-list-item-text>
                </h-list-item-content>
              </h-list-item>
              <h-list-item @click="goToElement('dt-datepicker')">
                <h-list-item-content>
                  <h-list-item-text title="Date Picker"></h-list-item-text>
                </h-list-item-content>
              </h-list-item>
              <h-list-item @click="goToElement('dt-timepicker')">
                <h-list-item-content>
                  <h-list-item-text title="Time Picker"></h-list-item-text>
                </h-list-item-content>
              </h-list-item>
            </h-list>
          </list-help>
        </list-help>
      </h-nav-drawer>
    </template>

  </h-page-content>
</template>

<script>

import viewport from '../../../components/others/viewport'
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
      showDrawer: true,
      dateInput: `
<div class="row wrap align-items-center">
  <div class="col-auto" style="min-width: 100px; max-width: 400px; ">
    <h-input dense v-model="dateInputModel"></h-input>
  </div>
  <div class="col-auto h-ml-sm">
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
<div class="row wrap align-items-center">
  <div class="col-auto" style="min-width: 100px; max-width: 400px; ">
    <h-input dense v-model="timeInputModel"></h-input>
  </div>
  <div class="col-auto h-ml-sm">
    <h-date-time-dialog class="h-ml-sm" v-model="time" mode="time"/>
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
<div class="row wrap align-items-center">
  <div class="col-auto" style="min-width: 100px; max-width: 400px; ">
    <h-input dense v-model="dateTimeInputModel"></h-input>
  </div>
  <div class="col-auto h-ml-sm">
    <h-date-time-dialog class="h-ml-sm" v-model="datetime" mode="datetime"/>
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
<div class="column">
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
<div class="column">
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
    this.checkMainBodyWidth()
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
    checkMainBodyWidth () {
      let value = viewport.mainBodyWidth()
      if (value < 961) {
        this.showDrawer = false
      }
    },
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    },
    pageResize(value) {
      this.$refs.navHelp.onResize(value);
    }
  }
}
</script>
