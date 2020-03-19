<template lang="pug">
  .flex
    .flex.flex-justify-center.inline-block
      .btn.bg-white.circle.flex.flex-justify-center.flex-items-center(
        style="width:16px;height:16px;"
      )
        h-icon.text-negative(
          icon="fas fa-minus-circle"
          size="16px"
          @click="setPlusMinusValue(-1)"
        )
    .flex.flex-justify-center.flex-items-center
      h5.no-margin {{plusMinusModel}}
    .flex.flex-justify-center.inline-block
      .btn.bg-white.circle.flex.flex-justify-center.flex-items-center(
        style="width:16px;height:16px;"
      )
        h-icon.text-positive(
          icon="fas fa-plus-circle"
          size="16px"
          @click="setPlusMinusValue(1)"
        )

</template>

<script>
export default {
  name: 'HInputPlusMinus',
  props: {
    value: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: -999
    },
    max: {
      type: Number,
      default: 999
    },
    circlebuttons: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      plusMinusModel: 0,
      containerObject: {
        width: '130px'
      }
    }
  },
  mounted () {
    this.plusMinusModel = this.value
    this.adjustModel()
    this.ajustContainerObejct()
  },
  watch: {
    min: function (value) {
      this.adjustModel(value, this.max)
    },
    max: function (value) {
      this.adjustModel(this.min, value)
    },
    // value: function (value) {
    //   this.adjustModel()
    // },
    circlebuttons: function (value) {
      this.ajustContainerObejct(value)
    }
  },
  methods: {
    adjustModel (min, max) {
      if (this.plusMinusModel < min) {
        this.plusMinusModel = min
      }
      if (this.plusMinusModel > max) {
        this.plusMinusModel = max
      }
    },
    ajustContainerObejct (circlebuttons) {
      this.containerObject.width = (circlebuttons) ? '135px' : '120px'
    },
    setPlusMinusValue (value) {
      this.plusMinusModel += value
      this.adjustModel()
      this.$emit('input', Number(this.plusMinusModel))
    }
  }
}
</script>

<style scoped>
.h-input {
  text-align: center
}

</style>
