<template>

</template>

<script>
export default {
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
      years: [],
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

    this.fillYears()

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
    updateYear (year) {
      this.currentDate = new Date(year,
        this.currentDate.getMonth(),
        this.currentDate.getDate()
      )
    },
    updateDate (date) {
      this.currentDate = date
    },

    configDate () {
      this.showDatePicker = false
      this.setModelDate(this.currentDate)
      this.setInputDate(this.currentDate)
    },
    fillYears () {
      for (let index = 1950; index < 1971; index++) {
        this.years.push(index)
      }
    },
    setModelDate (date) {
      this.modelValue = date
      // console.log('date vale:  ' + date)
      this.$emit('input ', this.modelValue)
    },
    setMonth (monthNumber) {
      this.currentDate = new Date(this.currentDate.getFullYear(),
        monthNumber,
        this.currentDate.getDate()
      )
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

      // console.log('month vale: ' + monnth)

      // getting last day
      let date = new Date(year, monnth + 1, 0)
      let lastDay = date.getDate()
      // console.log( 'date vale:  ' + date)
      // console.log('last dat vale: ' + lastDay)
      // console.log( 'Gerando calendario para o mes de  ' + this.months[monnth] +   ' de  ' + year +  '( ' + day_long +  ') '  )

      self.Calendar = []
      let days = 1
      let startDay = calendarDate.getDay()
      let noDay = -1

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
            weekday.monthDay = noDay
            weekday.weekDay = noDay
            noDay--
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
