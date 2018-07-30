<template lang="pug">
  <div class="full-width" style="background-color:white">
    <div class=" flex flex-justify-center flex-items-center text-white bg-primary h-pa-md">
      <div class="btn bg-primary" @click="panelMode= (panelMode === '12h' || panelMode === 'min') ? '24h' : '12h'"><h1>{{curHour}}</h1></div>
      <div class="h-pl-sm h-pr-sm"><h1>:</h1></div>
      <div class="btn bg-primary" @click="panelMode= (panelMode !== 'min') ? 'min' : '12h'"><h1>{{curMin}}</h1></div>    
    </div>
    <div class="flex flex-justify-center h-pa-lg">
      <div class="clock">
        <div v-if="panelMode==='12h'" class="bg-primary pointer12H" :style="[pointer12H]"></div>
        <div v-if="panelMode==='24h'" class="bg-primary pointer24H" :style="[pointer24H]"></div>
        <div v-if="panelMode==='min' || panelMode==='12h'" class="bg-primary pointerMin" :style="[pointerMin]"></div>
        <div v-if="panelMode==='12h'" v-for="tH in transforms12Hours" :key="tH.text" class="btn circle text-primary flex flex-justify-center" :style="tH.transform"> 
          <div> {{tH.text}} </div> 
        </div>
        <div v-if="panelMode==='24h'" v-for="tH in transforms24Hours" :key="tH.text" class="btn circle text-primary flex flex-justify-center" :class="{activehour: tH.text === curHour.toString()}" :style="tH.transform"> 
          <div @click="updateHour(tH.text, tH.rotateZ)"> {{tH.text}} </div> 
        </div>
        <div v-if="panelMode==='min'" v-for="tMin in transformsMin" :key="tMin.text" class="btn circle text-primary flex flex-justify-center" :class="{activemin: tMin.text === curMin.toString()}" :style="tMin.transform"> 
          <div @click="updateMin(tMin.text, tMin.rotateZ)">{{tMin.text}}</div>  
        </div>
      </div>
    </div>
    <div class="flex flex-justify-end">
      h-btn(textbutton label="OK" @click="onOK")
      h-btn(textbutton label="Close" @click="onClose")
    </div>
  </div>

</template>

<script>

import HBtn from '../buttons/HBtn'
import HTime from './HTime'

export default {
  extends: HTime,
  props: {
    date: {
      type: Date,
      default: new Date()
    }
  },
  components: {
    HBtn
  },
  data () {
    return {
      panelMode: '12h',
      curHour: '0',
      curMin: '0',
      pointerMin: {
        width: '4px',
        height: '150px',
        transform: 'rotateZ(0deg)'
      },
      pointer12H: {
        width: '4px',
        height: '130px',
        transform: 'rotateZ(0deg)'
      },
      pointer24H: {
        width: '4px',
        height: '130px',
        transform: 'rotateZ(0deg)'
      },
      transforms12Hours: [
        {
          transform: { transform: 'rotate(-90deg) translate(8.5rem) rotate(90deg)' },
          text: '12',
          rotateZ: 'rotateZ(0deg)'
        },
        {
          transform: { transform: 'rotate(-60deg) translate(8.5rem) rotate(60deg)' },
          text: '1',
          rotateZ: 'rotateZ(30deg)'
        },
        {
          transform: { transform: 'rotate(-30deg) translate(8.5rem) rotate(30deg)' },
          text: '2',
          rotateZ: 'rotateZ(60deg)'
        },
        {
          transform: { transform: 'rotate(0deg) translate(8.5rem) rotate(0deg)' },
          text: '3',
          rotateZ: 'rotateZ(90deg)'
        },
        {
          transform: { transform: 'rotate(30deg) translate(8.5rem) rotate(-30deg)' },
          text: '4',
          rotateZ: 'rotateZ(120deg)'
        },
        {
          transform: { transform: 'rotate(60deg) translate(8.5rem) rotate(-60deg)' },
          text: '5',
          rotateZ: 'rotateZ(150deg)'
        },
        {
          transform: { transform: 'rotate(90deg) translate(8.5rem) rotate(-90deg)' },
          text: '6',
          rotateZ: 'rotateZ(180deg)'
        },
        {
          transform: { transform: 'rotate(120deg) translate(8.5rem) rotate(-120deg)' },
          text: '7',
          rotateZ: 'rotateZ(210deg)'
        },
        {
          transform: { transform: 'rotate(150deg) translate(8.5rem) rotate(-150deg)' },
          text: '8',
          rotateZ: 'rotateZ(240deg)'
        },
        {
          transform: { transform: 'rotate(180deg) translate(8.5rem) rotate(-180deg)' },
          text: '9',
          rotateZ: 'rotateZ(270deg)'
        },
        {
          transform: { transform: 'rotate(210deg) translate(8.5rem) rotate(-210deg)' },
          text: '10',
          rotateZ: 'rotateZ(300deg)'
        },
        {
          transform: { transform: 'rotate(240deg) translate(8.5rem) rotate(-240deg)' },
          text: '11',
          rotateZ: 'rotateZ(330deg)'
        }
      ],
      transforms24Hours: [
        {
          transform: { transform: 'rotate(-90deg) translate(8.5rem) rotate(90deg)' },
          text: '0',
          rotateZ: 'rotateZ(0deg)'
        },
        {
          transform: { transform: 'rotate(-75deg) translate(8.5rem) rotate(75deg)' },
          text: '1',
          rotateZ: 'rotateZ(15deg)'
        },
        {
          transform: { transform: 'rotate(-60deg) translate(8.5rem) rotate(60deg)' },
          text: '2',
          rotateZ: 'rotateZ(30deg)'
        },
        {
          transform: { transform: 'rotate(-45deg) translate(8.5rem) rotate(45deg)' },
          text: '3',
          rotateZ: 'rotateZ(45deg)'
        },
        {
          transform: { transform: 'rotate(-30deg) translate(8.5rem) rotate(30deg)' },
          text: '4',
          rotateZ: 'rotateZ(60deg)'
        },
        {
          transform: { transform: 'rotate(-15deg) translate(8.5rem) rotate(15deg)' },
          text: '5',
          rotateZ: 'rotateZ(75deg)'
        },
        {
          transform: { transform: 'rotate(0deg) translate(8.5rem) rotate(0deg)' },
          text: '6',
          rotateZ: 'rotateZ(90deg)'
        },
        {
          transform: { transform: 'rotate(15deg) translate(8.5rem) rotate(-15deg)' },
          text: '7',
          rotateZ: 'rotateZ(105deg)'
        },
        {
          transform: { transform: 'rotate(30deg) translate(8.5rem) rotate(-30deg)' },
          text: '8',
          rotateZ: 'rotateZ(120deg)'
        },
        {
          transform: { transform: 'rotate(45deg) translate(8.5rem) rotate(-45deg)' },
          text: '9',
          rotateZ: 'rotateZ(135deg)'
        },
        {
          transform: { transform: 'rotate(60deg) translate(8.5rem) rotate(-60deg)' },
          text: '10',
          rotateZ: 'rotateZ(150deg)'
        },
        {
          transform: { transform: 'rotate(75deg) translate(8.5rem) rotate(-75deg)' },
          text: '11',
          rotateZ: 'rotateZ(165deg)'
        },
        {
          transform: { transform: 'rotate(90deg) translate(8.5rem) rotate(-90deg)' },
          text: '12',
          rotateZ: 'rotateZ(180deg)'
        },
        {
          transform: { transform: 'rotate(105deg) translate(8.5rem) rotate(-105deg)' },
          text: '13',
          rotateZ: 'rotateZ(195deg)'
        },
        {
          transform: { transform: 'rotate(120deg) translate(8.5rem) rotate(-120deg)' },
          text: '14',
          rotateZ: 'rotateZ(210deg)'
        },
        {
          transform: { transform: 'rotate(135deg) translate(8.5rem) rotate(-135deg)' },
          text: '15',
          rotateZ: 'rotateZ(225deg)'
        },
        {
          transform: { transform: 'rotate(150deg) translate(8.5rem) rotate(-150deg)' },
          text: '16',
          rotateZ: 'rotateZ(240deg)'
        },
        {
          transform: { transform: 'rotate(165deg) translate(8.5rem) rotate(-165deg)' },
          text: '17',
          rotateZ: 'rotateZ(255deg)'
        },
        {
          transform: { transform: 'rotate(180deg) translate(8.5rem) rotate(-180deg)' },
          text: '18',
          rotateZ: 'rotateZ(270deg)'
        },
        {
          transform: { transform: 'rotate(195deg) translate(8.5rem) rotate(-195deg)' },
          text: '19',
          rotateZ: 'rotateZ(285deg)'
        },
        {
          transform: { transform: 'rotate(210deg) translate(8.5rem) rotate(-210deg)' },
          text: '20',
          rotateZ: 'rotateZ(300deg)'
        },
        {
          transform: { transform: 'rotate(225deg) translate(8.5rem) rotate(-225deg)' },
          text: '21',
          rotateZ: 'rotateZ(315deg)'
        },
        {
          transform: { transform: 'rotate(240deg) translate(8.5rem) rotate(-240deg)' },
          text: '22',
          rotateZ: 'rotateZ(330deg)'
        },
        {
          transform: { transform: 'rotate(255deg) translate(8.5rem) rotate(-255deg)' },
          text: '23',
          rotateZ: 'rotateZ(345deg)'
        }
      ],
      transformsMin: [
        {
          transform: { transform: 'rotate(-90deg) translate(8.5rem) rotate(90deg)' },
          text: '0',
          rotateZ: 'rotateZ(0deg)'
        },
        {
          transform: { transform: 'rotate(-60deg) translate(8.5rem) rotate(60deg)' },
          text: '5',
          rotateZ: 'rotateZ(30deg)'
        },
        {
          transform: { transform: 'rotate(-30deg) translate(8.5rem) rotate(30deg)' },
          text: '10',
          rotateZ: 'rotateZ(60deg)'
        },
        {
          transform: { transform: 'rotate(0deg) translate(8.5rem) rotate(0deg)' },
          text: '15',
          rotateZ: 'rotateZ(90deg)'
        },
        {
          transform: { transform: 'rotate(30deg) translate(8.5rem) rotate(-30deg)' },
          text: '20',
          rotateZ: 'rotateZ(120deg)'
        },
        {
          transform: { transform: 'rotate(60deg) translate(8.5rem) rotate(-60deg)' },
          text: '25',
          rotateZ: 'rotateZ(150deg)'
        },
        {
          transform: { transform: 'rotate(90deg) translate(8.5rem) rotate(-90deg)' },
          text: '30',
          rotateZ: 'rotateZ(180deg)'
        },
        {
          transform: { transform: 'rotate(120deg) translate(8.5rem) rotate(-120deg)' },
          text: '35',
          rotateZ: 'rotateZ(210deg)'
        },
        {
          transform: { transform: 'rotate(150deg) translate(8.5rem) rotate(-150deg)' },
          text: '40',
          rotateZ: 'rotateZ(240deg)'
        },
        {
          transform: { transform: 'rotate(180deg) translate(8.5rem) rotate(-180deg)' },
          text: '45',
          rotateZ: 'rotateZ(270deg)'
        },
        {
          transform: { transform: 'rotate(210deg) translate(8.5rem) rotate(-210deg)' },
          text: '50',
          rotateZ: 'rotateZ(300deg)'
        },
        {
          transform: { transform: 'rotate(240deg) translate(8.5rem) rotate(-240deg)' },
          text: '55',
          rotateZ: 'rotateZ(330deg)'
        }
      ]
    }
  },
  mounted () {
    this.currentDate = this.date
    this.curHour = this.currentDate.getHours()
    this.curMin = this.currentDate.getMinutes()
    this.configTime(this.curHour, this.curMin)
    this.updatePointers()
  },
  methods: {
    onOK () {
      this.configTime(this.curHour, this.curMin)
      this.$emit('ok', this.currentDate)
    },
    onClose () {
      this.$emit('cancel')
    },
    updatePointers () {
      let pH = this.curHour
      let fH = this.transforms24Hours.find(hour => hour.text === pH.toString())
      if (fH) {
        this.updateHour(pH, fH.rotateZ)
      }

      let pM = this.curMin
      let minAngle = (360 / 60) * pM
      let rotMin = 'rotateZ(' + minAngle + 'deg)'
      this.updateMin(pM, rotMin)
    },
    updateHour (hour, rotateZ) {
      this.curHour = Number(hour)
      this.pointer12H.transform = rotateZ
      this.pointer24H.transform = rotateZ
      let h = this.curHour
      if (this.curHour > 12) {
        h = this.curHour - 12
      }
      let h12 = this.transforms12Hours.find(hour => hour.text === h.toString())
      if (h12) {
        this.pointer12H.transform = h12.rotateZ
      }
      this.panelMode = 'min'
    },
    updateMin (min, rotateZ) {
      this.curMin = Number(min)
      this.pointerMin.transform = rotateZ
      this.panelMode = '12h'
    }
  }
}
</script>

<style scoped>
h2,h1 {
  margin: 0
}

.clock {
	position: relative;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    /*border: 1px solid black;*/
	background-color: #E8E8E8;
}

/* @keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
} */

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

.clock > .pointer12H {
	position:absolute;
  top: calc(50% - 110px);
  left: calc(50%); 
  transform-origin: 30% 85%;  
}

.clock > .pointer24H {
	position:absolute;
  top: calc(50% - 110px);
  left: calc(50%); 
  transform-origin: 30% 85%;  
}

</style>
