<template>
  <div>
    <div class="flex flex-column">
      <div class="flex">
        <div class="flex flex-column">
          <h1>Date Input</h1>
          <h-date-input v-model="date"/>
          <div>
            your date is: {{date}}
          </div>
          <div class="boxshadow">
            <pre v-highlightjs="dateinput">
              <code class="html">
              </code>
            </pre>
          </div>
        </div>

        <div class="h-pl-md">
          <h1>Time Input</h1>
          <h-time-input v-model="time"/>
          <div>
            your time is: {{myHour}}
          </div>
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
          <div>
            your date is: {{myDate}}
          </div>
          <div class="boxshadow">
            <pre v-highlightjs="datepicker">
              <code class="html">
              </code>
            </pre>
          </div>
        </div>
        <div class="h-pl-md">
          <h1>Time Picker</h1>
          <h-time-picker v-model="time"/>
          <div>
            your time is: {{myHour}}
          </div>
          <div class="boxshadow">
            <pre v-highlightjs="timepicker">
              <code class="html">
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-primary"> Date Input Help</h1>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>locale</div>
        <div> display-format</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the locale for the date. Default <b>'en'</b></div>
        <div>Sets how the date is displayed. Default <b>'L'</b>. See <a href="https://momentjs.com/docs/#/displaying/"> moment displat format</a>.</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  computed: {
    myHour () {
      return '' + this.time.getHours() + ':' + this.time.getMinutes() + ':' + this.time.getSeconds()
    },
    myDate () {
      return '' + this.date.getFullYear() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getDate()
    }
  },
  data () {
    return {
      date: new Date(),
      time: new Date(),
      dateinput: `<h-date-input v-model="date"/>`,
      timeinput: `<h-time-input v-model="date"/>`,
      datepicker: `<h-date-picker v-model="date"/>`,
      timepicker: `<h-time-picker v-model="date"/>`
    }
  }
}
</script>
