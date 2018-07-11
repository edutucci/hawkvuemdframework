<template>
    <div>
    
        <input  @click= 'showDatePicker = !showDatePicker ' placeholder= 'Selected date ' id= 'date-picker-example ' class= 'form-control datepicker picker__input picker__input--active ' readonly= ' ' aria-haspopup= 'true ' aria-expanded= 'true ' aria-readonly= 'false ' aria-owns= 'date-picker-example_root ' type= 'text ' :value= 'inputValue '>
        
        <div v-show= 'showDatePicker ' class= 'picker__holder ' tabindex= '-1 '>
            <div class= 'picker__frame '>
                <div class= 'picker__wrap '>
                    <div class= 'picker__box '>
                        <div class= 'picker__header '>
                            <div class= 'picker__date-display '>
                                <div class= 'picker__weekday-display '>{{week_days_long[currentDate.getDay()]}}</div>
                                <div class= 'picker__month-display '>
                                    <div>{{months[ currentDate.getMonth() ]}}</div>
                                </div>
                                <div class= 'picker__day-display '>
                                    <div>{{currentDate.getDate()}}</div>
                                </div>
                                <div class= 'picker__year-display '>
                                    <div>{{currentDate.getFullYear()}}</div>
                                </div>
                            </div>
                            <div @click= 'updateMonth(-1) ' class= 'picker__nav--prev ' data-nav= '-1 ' role= 'button ' aria-controls= 'date-picker-example_table ' title= 'Mês anterior '> </div>
                            <div @click= 'updateMonth(+1) ' class= 'picker__nav--next ' data-nav= '1 ' role= 'button ' aria-controls= 'date-picker-example_table ' title= 'Próximo mês '> </div>
                        </div>
                        <table class= 'picker__table ' id= 'date-picker-example_table ' role= 'grid ' aria-controls= 'date-picker-example ' aria-readonly= 'true '>
                            <thead>
                                <tr>
                                    <th v-for= 'day in 8 ' :key= 'day ' class= 'picker__weekday ' scope= 'col ' title= 'week_days_long[day-1] '>{{week_days[day-1]}}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for= 'week in Calendar ' :key= 'week.monthDay '>
                                    <td v-for= 'day in week ' :key= 'day.monthDay ' role= 'presentation '>
                                        <div @click= 'updateDate(day.date) ' class= 'picker__day picker__day--infocus ' data-pick= '1501383600000 ' role= 'gridcell ' aria-label= '30 July, 2017 '>{{day.monthDay}}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class= 'picker__footer '>
                            <button class= 'picker__button--today ' type= 'button ' data-pick= '1504062000000 ' aria-controls= 'date-picker-example '>Today</button>
                            <button class= 'picker__button--clear ' type= 'button ' data-clear= '1 ' aria-controls= 'date-picker-example '>Clear</button>
                            <button @click= 'showDatePicker = false ' class= 'picker__button--close ' type= 'button ' data-close= 'true ' aria-controls= 'date-picker-example '>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HDatePicker ',
  data () {
    return {
      showDatePicker: false,
      currentDate: new Date(),
      week_days: ['Dom ', 'Seg ', 'Ter ', 'Qua ', 'Qui ', 'Sex ', 'Sab '],
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
      inputValue: ' '
    }
  },
  props: {
    value: {
      type: Date,
      value: ' '
    },
    date: {
      type: Date,
      value: new Date()
    }
  },
  mounted: function () {
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
    updateMonth: function (value) {
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
    updateDate: function (date) {
      this.currentDate = date
      this.setModelDate(date)
      this.setInputDate(date)
    },
    setModelDate: function (date) {
      this.modelValue = date
      console.log('date vale:  ' + date)
      this.$emit('input ', this.modelValue)
    },
    setInputDate: function (date) {
      this.inputValue = ' ' + date.getDate() + ' de  ' + this.months[date.getMonth()] + ' de  ' + date.getFullYear()
    },
    getCalendar: function () {
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