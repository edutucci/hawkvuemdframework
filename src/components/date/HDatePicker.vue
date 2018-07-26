<template lang="pug">
  div(style="width:350px; position:relative;")
    .flex.flex-column.full-width
      .full-width
        h-input.full-width(
          @click="showDatePicker = !showDatePicker"
          v-model="inputValue"
          :placeholder="placeholder"
          :readonly="true")
      
      div.position-absolute.boxshadow.full-width(v-if="showDatePicker" style="top:67px;background-color: white;")
        date-panel(
          :week_days="week_days"
          :months="months"
          :date="value"
          @ok="ok"
          @cancel="hidePanel"
        )

</template>

<script>

import HFaIcon from '../icons/HFaIcon'
import HBtn from '../buttons/HBtn'
import HInput from '../Inputs/HInput.vue'
import DatePanel from './DatePanel'

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
    }
  },
  components: {
    HFaIcon,
    HBtn,
    HInput,
    DatePanel
  },
  data () {
    return {
      showDatePicker: false,
      inputValue: ' ',
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
      ]
    }
  },
  mounted () {
    this.setInputDate(this.value)
  },
  methods: {
    ok (date) {
      this.setInputDate(date)
      this.hidePanel()
      this.$emit('input ', this.currentDate)
    },
    hidePanel () {
      this.showDatePicker = false
    },
    setInputDate (date) {
      this.inputValue = ' ' + date.getDate() + ' de  ' + this.months[date.getMonth()] + ' de  ' + date.getFullYear()
    }

  }
}
</script>

<style scoped>

</style>
