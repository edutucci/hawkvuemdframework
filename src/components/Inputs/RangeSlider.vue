<template lang="pug">
.column
  // span(id="rs-bullet" class="rs-label")
  input(
    class="slider"
    :class="[inputBgColor]"
    type="range"
    v-model="inputDisplay"
    min="1" max="100"
    id="rs-range-line"
  )
</template>

<script>

import componentBase from '../componentBase.vue';

export default {
  extends: componentBase,
  name: 'HRangeSlider',
  props: {
    modelValue: {
      type: [Number],
      default: 0,
    },
  },
  data() {
    return {
      inputDisplay: 0,
      inputBgColor: '',
    };
  },
  emits: ['update:modelValue'],
  watch: {
    inputDisplay(value) {
      this.$emit('update:modelValue', Number(value));
      this.showSliderValue();
    },
    modelValue(value) {
      this.inputDisplay = value;
    },
    bgColor(value) {
      this.changeBackgroundColor(value);
    },
  },
  mounted() {
    this.inputDisplay = this.modelValue || 0;
    this.changeBackgroundColor(this.bgColor);
  },
  methods: {
    changeBackgroundColor(bgColor) {
      if (bgColor === 'bg-white') {
        this.inputBgColor = 'bg-gray';
      } else {
        this.inputBgColor = bgColor;
      }
    },
    showSliderValue() {
      // let rangeSlider = document.getElementById('rs-range-line')
      // let rangeBullet = document.getElementById('rs-bullet')
      // rangeBullet.innerHTML = rangeSlider.value
      // var bulletPosition = (rangeSlider.value / rangeSlider.max)
      // rangeBullet.style.left = (bulletPosition * 578) + 'px'
    },
  },
};
</script>

<style scoped>
.rs-label {
  position: relative;
  transform-origin: center center;
  display: block;
  width: 98px;
  height: 98px;
  background: blue;
  border-radius: 50%;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  padding-top: 22px;
  box-sizing: border-box;
  border: 2px solid #fff;
  margin-top: 20px;
  margin-left: -38px;
  left: attr(value);
  color: #fff;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 36px;
}
.rs-label::after {
  content: "kg";
  display: block;
  font-size: 20px;
  letter-spacing: 0.07em;
  margin-top: -2px;
}
</style>
