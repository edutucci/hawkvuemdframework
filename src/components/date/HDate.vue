<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      years: [],
      first_day: 0,
      days_of_week: 7,
      Calendar: [],
      activeday: false,
    };
  },
  mounted() {
    this.getCalendar();
    this.fillYears();
  },
  methods: {
    updateMonth(value) {
      let currentMonth = this.currentDate.getMonth();
      // console.log('currentmonth vale: ' + currentMonth)
      // console.log( 'value vale: ' + value)

      currentMonth += value;
      if (currentMonth > -1 || currentMonth < 12) {
        this.currentDate.setMonth(currentMonth);
        this.currentDate = new Date(
          this.currentDate.getFullYear(),
          currentMonth,
          this.currentDate.getDate(),
          this.currentDate.getHours(),
          this.currentDate.getMinutes(),
          this.currentDate.getSeconds(),
        );
      } else if (currentMonth === 0) {
        this.currentDate = new Date(
          this.currentDate.getFullYear() - 1,
          this.currentDate.getMonth(),
          this.currentDate.getDate(),
          this.currentDate.getHours(),
          this.currentDate.getMinutes(),
          this.currentDate.getSeconds(),
        );
      } else if (currentMonth === 11) {
        this.currentDate = new Date(
          this.currentDate.getFullYear() + 1,
          this.currentDate.getMonth(),
          this.currentDate.getDate(),
          this.currentDate.getHours(),
          this.currentDate.getMinutes(),
          this.currentDate.getSeconds(),
        );
      }

      this.getCalendar();
    },
    updateYear(year) {
      // console.log('up year:' + year)
      this.currentDate = new Date(year,
        this.currentDate.getMonth(),
        this.currentDate.getDate(),
        this.currentDate.getHours(),
        this.currentDate.getMinutes(),
        this.currentDate.getSeconds());
      this.getCalendar();
    },
    updateDate(date) {
      this.currentDate = date;
      this.getCalendar();
    },
    fillYears() {
      for (let index = 1950; index < 2081; index += 1) {
        this.years.push(index);
      }
    },
    setMonth(monthNumber) {
      // console.log('up month:' + monthNumber)
      this.currentDate = new Date(this.currentDate.getFullYear(),
        monthNumber,
        this.currentDate.getDate(),
        this.currentDate.getHours(),
        this.currentDate.getMinutes(),
        this.currentDate.getSeconds());
      this.getCalendar();
    },
    getCalendar() {
      const self = this;
      const year = this.currentDate.getFullYear();
      const monnth = this.currentDate.getMonth();

      const hour = this.currentDate.getHours();
      const min = this.currentDate.getMinutes();
      const sec = this.currentDate.getSeconds();

      const calendarDate = new Date(year, monnth, 1);
      calendarDate.setDate(1);

      // getting last day
      const date = new Date(year, monnth + 1, 0);
      const lastDay = date.getDate();

      self.Calendar = [];
      let days = 1;
      let startDay = calendarDate.getDay();
      let noDay = -1;

      for (let perWeek = 0; perWeek < 6; perWeek += 1) {
        const week = [];

        for (let perDay = 0; perDay < 7; perDay += 1) {
          const weekday = {};

          // console.log(calendarDate.getDate())
          // if ( (perDay == calendarDate.getDay()) && (countDays < lastDay)  ){
          if (perDay === startDay && days <= lastDay) {
            weekday.monthDay = days; // calendarDate.getDate(),
            weekday.weekDay = perDay;
            weekday.date = new Date(year, monnth, days, hour, min, sec, 0);
            days += 1; // calendarDate.setDate( calendarDate.getDate() + 1 )
            startDay += 1;
          } else {
            weekday.monthDay = noDay;
            weekday.weekDay = noDay;
            noDay -= 1;
          }

          week.push(weekday);
          // console.log(week_day)
        }

        self.Calendar.push(week);
        startDay = 0;
      }
    },
  },
};
</script>
