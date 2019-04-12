<template>
  <div>
    <div class="flex flex-column">
      <div class="flex">

        <div class="h-pl-md">
          <h1>Time Input</h1>
          <h-time-input v-model="time" @input="change"/>
          <div>
            your time is: {{myHour}}
          </div>
          <prism language="html" :code="timeinput"></prism>
        </div>
      </div>
    </div>

    <div class="flex flex-column">
      <div class="flex">
        <div class="h-pl-md">
          <h1>Time Picker</h1>
          <h-time-picker v-model="time" @input="change"/>
          <div>
            your time is: {{myHour}}
          </div>
          <prism language="html" :code="timepicker"></prism>
        </div>
      </div>
    </div>

    <h1 class="text-primary"> Time Picker and Time Input Help</h1>
    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@input(value)</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Triggered on v-model changes</div>
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
    }
  },
  data () {
    return {
      time: new Date(),
      timeinput: `<h-time-input v-model="date"/>`,
      timepicker: `<h-time-picker v-model="date"/>`
    }
  },
  methods: {
    change (value) {
      console.log('time changed: ' + value)
    }
  }
}
</script>
