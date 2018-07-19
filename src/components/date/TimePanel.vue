<template lang="pug">
  <div>
    <div class="clock h-pa-md">
      <div class="pointerHour bg-primary"></div>
      <div class="pointerMin bg-primary"></div>
      <div v-for="tH in transformsHours" :key="tH.text" class="btn circle text-primary flex flex-justify-center" :class="{activehour: tH.text === curHour}" :style="tH.transform"> 
        | {{tH.text}} 
      </div>
    </div>
    <div class="clock h-pa-md">
      <div class="pointerHour bg-primary"></div>
      <div class="pointerMin bg-primary"></div>
      <div v-for="tMin in transformsMin" :key="tMin.text" class="btn circle text-primary flex flex-justify-center" :class="{activemin: tMin.text === curMin}" :style="tMin.transform"> 
        <div>{{tMin.text}}</div>  
      </div>
    </div>    
  </div>

</template>

<script>
export default {
  data () {
    return {
      curHour: '1',
      curMin: '25',
      transformsHours: [
        {
          transform: { transform: 'rotate(-90deg) translate(8.5rem) rotate(90deg)' },
          text: '12'
        },
        {
          transform: { transform: 'rotate(-60deg) translate(8.5rem) rotate(60deg)' },
          text: '1'
        },
        {
          transform: { transform: 'rotate(-30deg) translate(8.5rem) rotate(30deg)' },
          text: '2'
        },
        {
          transform: { transform: 'rotate(0deg) translate(8.5rem) rotate(0deg)' },
          text: '3'
        },
        {
          transform: { transform: 'rotate(30deg) translate(8.5rem) rotate(-30deg)' },
          text: '4'
        },
        {
          transform: { transform: 'rotate(60deg) translate(8.5rem) rotate(-60deg)' },
          text: '5'
        },
        {
          transform: { transform: 'rotate(90deg) translate(8.5rem) rotate(-90deg)' },
          text: '6'
        },
        {
          transform: { transform: 'rotate(120deg) translate(8.5rem) rotate(-120deg)' },
          text: '7'
        },
        {
          transform: { transform: 'rotate(150deg) translate(8.5rem) rotate(-150deg)' },
          text: '8'
        },
        {
          transform: { transform: 'rotate(180deg) translate(8.5rem) rotate(-180deg)' },
          text: '9'
        },
        {
          transform: { transform: 'rotate(210deg) translate(8.5rem) rotate(-210deg)' },
          text: '10'
        },
        {
          transform: { transform: 'rotate(240deg) translate(8.5rem) rotate(-240deg)' },
          text: '11'
        }
      ],
      transformsMin: [
        {
          transform: { transform: 'rotate(-90deg) translate(8.5rem) rotate(90deg)' },
          text: '0'
        },
        {
          transform: { transform: 'rotate(-60deg) translate(8.5rem) rotate(60deg)' },
          text: '5'
        },
        {
          transform: { transform: 'rotate(-30deg) translate(8.5rem) rotate(30deg)' },
          text: '10'
        },
        {
          transform: { transform: 'rotate(0deg) translate(8.5rem) rotate(0deg)' },
          text: '15'
        },
        {
          transform: { transform: 'rotate(30deg) translate(8.5rem) rotate(-30deg)' },
          text: '20'
        },
        {
          transform: { transform: 'rotate(60deg) translate(8.5rem) rotate(-60deg)' },
          text: '25'
        },
        {
          transform: { transform: 'rotate(90deg) translate(8.5rem) rotate(-90deg)' },
          text: '30'
        },
        {
          transform: { transform: 'rotate(120deg) translate(8.5rem) rotate(-120deg)' },
          text: '35'
        },
        {
          transform: { transform: 'rotate(150deg) translate(8.5rem) rotate(-150deg)' },
          text: '40'
        },
        {
          transform: { transform: 'rotate(180deg) translate(8.5rem) rotate(-180deg)' },
          text: '45'
        },
        {
          transform: { transform: 'rotate(210deg) translate(8.5rem) rotate(-210deg)' },
          text: '50'
        },
        {
          transform: { transform: 'rotate(240deg) translate(8.5rem) rotate(-240deg)' },
          text: '55'
        }
      ]
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

.pointerMin {
  width: 4px;
  height: 150px;
  transform: rotateZ(170deg);
  /* animation: rotate 3s infinite; */
}

.pointerHour {
  width: 4px;
  height: 130px;
  transform: rotateZ(180deg);
  /* animation: rotate 8s infinite; */
}

.clock > .btn {
	position:absolute;
  top: calc(50% - 13px);
  left: calc(50% - 20px);
  width: 26px;
  height: 26px;
}

.clock > .pointerMin {
	position:absolute;
  top: calc(50% - 125px);
  left: calc(50%); 
  transform-origin: 30% 85%;  
}

.clock > .pointerHour {
	position:absolute;
  top: calc(50% - 110px);
  left: calc(50%); 
  transform-origin: 30% 85%;  
}

</style>
