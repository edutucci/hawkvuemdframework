<template lang="pug">
  <div class="flex flex-items-center switch-container">
    <div>
      <label class="switch">
        <input type="checkbox"  @click="onChange(this)" :checked="checkboxState" :disabled="disabled">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="h-pl-sm">{{text}}</div>
  </div>
</template>

<script>
import HCheckbox from './HCheckbox'
export default {
  extends: HCheckbox,
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    // value: {
    //   type: [String, Number]
    // },
    // text: [String, Number],
    // checked: Boolean,
    // model: {
    //   type: [String, Array, Boolean],
    //   default: undefined
    // }
    // id: {
    //   type: [String, Number]
    // }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.switch-container {
  display: inline-flex;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 13px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  top: -4px;
  content: "";
  height: 21px;
  width: 21px;
  left: 0px;
  bottom: 4px;
  box-shadow:  0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);
  background-color: #f2f2f2;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider::before > .switch-text {
  left: 40px;
}

/* input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
} */

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
