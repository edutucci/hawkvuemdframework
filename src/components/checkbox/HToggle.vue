<template lang="pug">
  <label class="switch">
    <input type="checkbox"  @click="onChange(this)" :checked="checkboxState">
    <span class="slider round"></span>
  </label>
</template>

<script>
import HCheckbox from './HCheckbox'
export default {
  extends: HCheckbox,
  data () {
    return {}
  }
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 20px;
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
  top: -6px;
  content: "";
  height: 32px;
  width: 32px;
  left: 4px;
  bottom: 4px;
  background-color: blue;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(46px);
  -ms-transform: translateX(46px);
  transform: translateX(160px);
  
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
