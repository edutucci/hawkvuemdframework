<template>

</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date(),
      years: [],
      first_day: 0,
      days_of_week: 7,
      Calendar: [],
      activeday: false
    }
  },
  mounted () {
    this.getCalendar()
    this.fillYears()
  },
  methods: {
    updateMonth (value) {
      let currentMonth = this.currentDate.getMonth()
      console.log('currentmonth vale: ' + currentMonth)
      // console.log( 'value vale: ' + value)

      currentMonth += value
      if (currentMonth > -1 || currentMonth < 12) {
        this.currentDate.setMonth(currentMonth)
        this.currentDate = new Date(
          this.currentDate.getFullYear(),
          currentMonth,
          this.currentDate.getDate()
        )
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

      this.getCalendar()
    },
    updateYear (year) {
      console.log('up year:' + year)
      this.currentDate = new Date(year,
        this.currentDate.getMonth(),
        this.currentDate.getDate()
      )
      this.getCalendar()
    },
    updateDate (date) {
      this.currentDate = date
      this.getCalendar()
    },
    fillYears () {
      for (let index = 1950; index < 2081; index++) {
        this.years.push(index)
      }
    },
    setMonth (monthNumber) {
      console.log('up month:' + monthNumber)
      this.currentDate = new Date(this.currentDate.getFullYear(),
        monthNumber,
        this.currentDate.getDate()
      )
      this.getCalendar()
    },
    getCalendar () {
      let self = this
      let year = this.currentDate.getFullYear()
      let monnth = this.currentDate.getMonth()

      let calendarDate = new Date(year, monnth, 1)
      calendarDate.setDate(1)

      // getting last day
      let date = new Date(year, monnth + 1, 0)
      let lastDay = date.getDate()

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
    }
  }
}
</script>
