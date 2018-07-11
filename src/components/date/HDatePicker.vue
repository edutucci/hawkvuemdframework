<template>
    <div style="width:350px;">
      <div class="flex flex-column full-width">
        <div class="full-width">
          <input 
            @click= 'showDatePicker = !showDatePicker ' :placeholder= 'placeholder'
            class="full-width"
            readonly="true"
            type='text'
            :value= 'inputValue '>
        </div>
        <div class="full-width">
          <div class="flex flex-justify-center flex-items-center bg-primary h-pa-md">
            <div class="text-white">
              <h-fa-icon :icon="['fas', 'chevron-left']"/>
            </div>
            <div class="flex-1">
              <div class="flex flex-column">
                <div class="flex flex-justify-center text-white">
                  <h2>{{currentDate.getFullYear()}}</h2>
                </div>
                <div class="flex flex-justify-center text-white">
                  <h2>{{week_days[currentDate.getDay()]}}, {{months[currentDate.getMonth()]}} {{currentDate.getDate()}}</h2>
                </div>
              </div>
            </div>
            <div class="text-white">
              <h-fa-icon :icon="['fas', 'chevron-right']"/>
            </div>
          </div>
        </div>
        <div class="flex">
          <div v-for="day in 6" :key="day" class="flex-1 text-center">{{week_days[day-1]}}</div>
        </div>
        <div class="flex" v-for="week in Calendar" :key="week.monthDay">
          <div class="flex-1 flex flex-justify-center" v-for="day in week" :key="day.monthDay">
            <div v-if="day.weekDay !== -1" class="btn bg-white circle flex flex-justify-center flex-items-center" :class="{activeday: day.monthDay === currentDate.getDate()}" @click="updateDate(day.date)" style="width:26px; height:26px;">{{day.monthDay}}</div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>

import HFaIcon from '../icons/HFaIcon'

export default {
  name: 'HDatePicker ',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: Date,
      value: ' '
    },
    date: {
      type: Date,
      value: new Date()
    }
  },
  components: {
    HFaIcon
  },
  data () {
    return {
      showDatePicker: false,
      currentDate: new Date(),
      week_days: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      months: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
      ],
      week_days_long: [
        'Domingo',
        'Segunda-Feira ',
        'Terça-Feira ',
        'Quarta-Feira ',
        'Quinta-Feira ',
        'Sexta-Feira ',
        'Sábado '
      ],
      first_day: 0,
      days_of_week: 7,
      Calendar: [],
      modelValue: new Date(),
      inputValue: ' ',
      activeday: false
    }
  },
  mounted () {
    let self = this

    // console.log( 'self.cuurentdate vale:  ' + self.currentDate)
    // console.log( 'self.date vale:  ' + self.date)

    self.currentDate = self.date
    // console.log( 'self.cuurentdate vale:  ' + self.currentDate)
    // console.log( 'month vale:  ' + self.currentDate.getMonth())

    this.getCalendar()
    this.setModelDate(this.currentDate)
    this.setInputDate(this.currentDate)

    // let jan = new Date(2017,0,3)
    // let fev = new Date(2017,8,2)
    // console.log( 'jan vale: ' + jan)
    // console.log( 'fev vale: ' + fev)
  },
  methods: {
    updateMonth (value) {
      let currentMonth = this.currentDate.getMonth()
      // console.log( 'currentmonth vale: ' + currentMonth)
      // console.log( 'value vale: ' + value)

      currentMonth += value
      if (currentMonth > -1 || currentMonth < 12) {
        this.currentDate.setMonth(currentMonth)
      } else if (currentMonth === 0) {
        this.currentDate = new Date(
          this.currentDate.getFullYear() - 1,
          this.currentDate.getMonth(),
          this.currentDate.getDate()
        )
      } else if (currentMonth === 11) {
        this.currentDate = new Date(
          this.currentDate.getFullYear() + 1,
          this.currentDate.getMonth(),
          this.currentDate.getDate()
        )
      }
      // console.log( 'currentdate vale: ' + this.currentDate)
      // console.log( 'currentdate vale: ' + this.currentDate.getFullYear() +  '- ' + this.currentDate.getMonth() +  '- ' + this.currentDate.getDate() )
      // console.log(this.months[this.currentDate.getMonth()])

      this.getCalendar()
    },
    updateDate (date) {
      this.currentDate = date
      this.setModelDate(date)
      this.setInputDate(date)
    },
    setModelDate (date) {
      this.modelValue = date
      console.log('date vale:  ' + date)
      this.$emit('input ', this.modelValue)
    },
    setInputDate (date) {
      this.inputValue = ' ' + date.getDate() + ' de  ' + this.months[date.getMonth()] + ' de  ' + date.getFullYear()
    },
    getCalendar () {
      let self = this
      let year = this.currentDate.getFullYear()
      let monnth = this.currentDate.getMonth()
      // let day = this.currentDate.getDate()
      // let dayweek = this.currentDate.getDay()
      // let daylong = this.week_days_long[dayweek]

      let calendarDate = new Date(year, monnth, 1)
      calendarDate.setDate(1)

      console.log('month vale: ' + monnth)

      // getting last day
      let date = new Date(year, monnth + 1, 0)
      let lastDay = date.getDate()
      // console.log( 'date vale:  ' + date)
      console.log('last dat vale: ' + lastDay)
      // console.log( 'Gerando calendario para o mes de  ' + this.months[monnth] +   ' de  ' + year +  '( ' + day_long +  ') '  )

      self.Calendar = []
      let days = 1
      let startDay = calendarDate.getDay()

      for (let perWeek = 0; perWeek < 6; perWeek++) {
        let week = []

        for (let perDay = 0; perDay < 7; perDay++) {
          let weekday = {}

          console.log(calendarDate.getDate())
          // if ( (perDay == calendarDate.getDay()) && (countDays < lastDay)  ){
          if (perDay === startDay && days <= lastDay) {
            weekday.monthDay = days  // calendarDate.getDate(),
            weekday.weekDay = perDay
            weekday.date = new Date(year, monnth, days)
            days++  // calendarDate.setDate( calendarDate.getDate() + 1 )
            startDay++
          } else {
            weekday.monthDay = ''
            weekday.weekDay = -1
          }

          week.push(weekday)
          // console.log(week_day)
        }

        self.Calendar.push(week)
        startDay = 0
      }

      // console.log( 'calenda vale: ' + self.Calendar.length)
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0
}
</style>
