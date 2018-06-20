<template lang="pug">
  <div class="container">
    <input type="checkbox" class="cbx hidden" checked/>
    <label class="lbl"></label>
    //- <input type="checkbox" id="checked" class="cbx hidden" checked/>
    //- <label for="checked" class="lbl"></label>
  </div>  
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
body {
  background: #eee;
}
.lbl {
  position: relative;
  display: block;
  height: 20px;
  background: #898989;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.lbl:after {
  position: absolute;
  left: -2px;
  top: -3px;
  display: block;
  width: 26px;
  height: 26px;
  border-radius: 100px;
  background: #fff;
  box-shadow: 0px 3px 3px rgba(0,0,0,0.05);
  content: '';
  transition: all 0.3s ease;
}
.lbl:active:after {
  transform: scale(1.15, 0.85);
}
.cbx:checked ~ label {
  background: #6fbeb5;
}
.cbx:checked ~ label:after {
  left: calc(100% - 20px);
  background: #179588;
}
.cbx:disabled ~ label {
  background: #d5d5d5;
  pointer-events: none;
}
.cbx:disabled ~ label:after {
  background: #bcbdbc;
}
.cntr {
  margin-left: 100px;
}
.press {
  margin-bottom: 40px;
}
.hidden {
  display: none;
}

</style>
