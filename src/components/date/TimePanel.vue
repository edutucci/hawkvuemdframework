<template lang="pug">
  <div class="clock">
    <div class="pointerHour"></div>
    <div class="pointerMin"></div>
    <div class="btn btn12"> 12 </div>
    <div class="btn btn1"> 1 </div>
    <div class="btn btn2"> 2 </div>
    <div class="btn btn3"> 3 </div>
    <div class="btn btn4"> 4 </div>
    <div class="btn btn5"> 5 </div> 
    <div class="btn btn6"> 6 </div> 
    <div class="btn btn7"> 7 </div> 
    <div class="btn btn8"> 8 </div> 
    <div class="btn btn9"> 9 </div> 
    <div class="btn btn10"> 10 </div> 
    <div class="btn btn11"> 11 </div> 
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.clock {
	position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    /*border: 1px solid black;*/
	background-color: #E8E8E8;
}

@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}

.pointerHour {
  width: 4px;
  height: 130px;
  background-color: yellow;
  transform: rotate(180deg);
  /* animation: rotate 8s infinite; */
}

.pointerMin {
  width: 4px;
  height: 150px;
  background-color: yellow;
  transform: rotateZ(60deg);
  /* animation: rotate 3s infinite; */
}

.clock > .btn {
	position:absolute;
    top: calc(50% - 13px);
    left: calc(50% - 13px);
}

.clock > .pointerHour {
	position:absolute;
  top: calc(50% - 105px);
  left: calc(50%); 
transform-origin: 30% 85%;  
}

.clock > .pointerMin {
	position:absolute;
  top: calc(50% - 130px);
  left: calc(50%); 
transform-origin: 30% 85%;  
}

.btn {
	border-radius: 50%;
  width: 26px;
  height: 26px;
  text-align: center;
}

.btnMin {
  font-size: 10px;
}

.btn12 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(-90deg) translate(8.5rem) rotate(90deg);
}

.btn1 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(-60deg) translate(8.5rem) rotate(60deg);
}

.btn2 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(-30deg) translate(8.5rem) rotate(30deg);
}

.btn3 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(0deg) translate(8.5rem);
}

.btn4 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(30deg) translate(8.5rem) rotate(-30deg);
}

.btn5 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(60deg) translate(8.5rem) rotate(-60deg);
}

.btn6 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(90deg) translate(8.5rem) rotate(-90deg);
}

.btn7 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(120deg) translate(8.5rem) rotate(-120deg);
}

.btn8 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(150deg) translate(8.5rem) rotate(-150deg);
}

.btn9 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(180deg) translate(8.5rem) rotate(-180deg);
}

.btn10 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(210deg) translate(8.5rem) rotate(-210deg);
}

.btn11 {
     /* -ms-transform: translate(50px,100px);IE 9 */
    /* -webkit-transform: translate(50px,100px); Safari */
  transform: rotate(240deg) translate(8.5rem) rotate(-240deg);
}
</style>
