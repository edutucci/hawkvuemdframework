<template>
  <div>
    <div class="flex flex-column">
      <div class="flex">
        <div>
          <h1>Date Input</h1>
          <h-date-input v-model="date"/>
          <div class="boxshadow">
            <pre v-highlightjs="dateinput">
              <code class="html">
              </code>
            </pre>
          </div>
        </div>
        <div class="h-pl-md">
          <h1>Time Input</h1>
          <h-time-input v-model="date"/>
          <div class="boxshadow">
            <pre v-highlightjs="timeinput">
              <code class="html">
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-column">
      <div class="flex">
        <div>
          <h1>Date Picker</h1>
          <h-date-picker v-model="date"/>
          <div class="boxshadow">
            <pre v-highlightjs="datepicker">
              <code class="html">
              </code>
            </pre>
          </div>
        </div>
        <div class="h-pl-md">
          <h1>Time Picker</h1>
          <h-time-picker v-model="date"/>
          <div class="boxshadow">
            <pre v-highlightjs="timepicker">
              <code class="html">
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import HDatePicker from '../components/date/HDatePicker.vue'
import HDateInput from '../components/date/HDateInput.vue'
import HTimePicker from '../components/date/HTimePicker.vue'
import HTimeInput from '../components/date/HTimeInput.vue'

export default {
  components: {
    HDatePicker,
    HDateInput,
    HTimePicker,
    HTimeInput
  },
  data () {
    return {
      date: new Date(),
      dateinput: `<h-date-input v-model="date"/>`,
      timeinput: `<h-time-input v-model="date"/>`,
      datepicker: `<h-date-picker v-model="date"/>`,
      timepicker: `<h-time-picker v-model="date"/>`
    }
  }
}
</script>
