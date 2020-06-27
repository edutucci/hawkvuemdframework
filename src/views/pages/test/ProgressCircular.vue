<template>
  <h-page-content padding>
    <div class="wrapper column">
      <!-- <div class="text-h4"> Progress Circular</div>
      <div class="row">
        <div class="c100 p25 animate">
          <span>25%</span>
          <div class="slice">
            <div class="bar border-primary"></div>
            <div class="fill border-primary"></div>
          </div>
        </div>
        <div class="c100 p75">
          <span>75%</span>
          <div class="slice">
            <div class="bar border-pink500"></div>
            <div class="fill border-pink500"></div>
          </div>
        </div>
        <div class="c100 p70">
          <span>70%</span>
          <div class="slice">
            <div class="bar border-green500"></div>
            <div class="fill border-green500"></div>
          </div>
        </div>
        <div class="c100 p85">
          <span>85%</span>
          <div class="slice">
            <div class="bar border-orange500"></div>
            <div class="fill border-orange500"></div>
          </div>
        </div>
      </div>

      <div class="text-h4"> Progress Linear</div>

      <div class="progress-bar-container" style="max-width: 500px">
        <div class="progress-bar stripes animated" style="  background-color: #A4A4A4;">
          <span class="progress-bar-inner p50 animated" style="  background-color: #2E64FE;"></span>
        </div>
        <div class="progress-bar stripes animated reverse slower" style="  background-color: #A4A4A4;">
          <span class="progress-bar-inner p50 animated" style="  background-color: #2E64FE;">234</span>
        </div>
      </div>       -->

      <div class="text-h4 h-mt-lg"> Progress Components</div>

      <div class="text-h4 h-mt-lg"> Progress Circular</div>
      <div class="row">
        <h-progress-circular v-model="pCircular1"/>
        <h-progress-circular v-model="pCircular2" progress-bar-color="pink500"/>
        <h-progress-circular v-model="pCircular3" progress-bar-color="green500"/>
        <h-progress-circular v-model="pCircular4" progress-bar-color="orange500"/>
      </div>

      <div class="row h-mt-sm">
        <h-progress-circular v-model="pCircular1" animated/>
        <h-progress-circular v-model="pCircular2" animated progress-bar-color="pink500"/>
        <h-progress-circular v-model="pCircular3" animated progress-bar-color="green500"/>
        <h-progress-circular v-model="pCircular4" animated progress-bar-color="orange500"/>
      </div>

      <div class="row h-mt-sm align-items-center">
        <h-progress-circular v-model="pCircular1" animated/>
        <h-progress-circular v-model="pCircular2" font-size="65px" animated progress-bar-color="pink500"/>
        <h-progress-circular v-model="pCircular3" font-size="75px" animated progress-bar-color="green500"/>
        <h-progress-circular v-model="pCircular4" font-size="85px" animated progress-bar-color="orange500"/>
      </div>

      <div class="row h-mt-sm align-items-center">
        <h-progress-circular v-model="pCircular1" animated/>
        <h-progress-circular v-model="pCircular2" bg-color="bg-pink300" text-color="text-white" font-size="65px" animated progress-bar-color="pink500"/>
        <h-progress-circular v-model="pCircular3" bg-color="bg-green300" text-color="text-white"  font-size="75px" animated progress-bar-color="green500"/>
        <h-progress-circular v-model="pCircular4" bg-color="bg-orange300" text-color="text-white"  font-size="85px" animated progress-bar-color="orange500"/>
      </div>

      <div class="text-h4 h-mt-md"> Progress Linear</div>
      <h-progress-linear v-model="pLinear1"/>
      <h-progress-linear class="h-mt-sm" v-model="pLinear2" stripes/>
      <h-progress-linear class="h-mt-sm" v-model="pLinear1" stripes animated/>
      <h-progress-linear class="h-mt-sm" v-model="pLinear2" stripes stripes-animated animated/>

      <h-progress-linear class="h-mt-sm" v-model="pLinear1" height="25px" text-color="text-white"/>
      <h-progress-linear class="h-mt-sm" v-model="pLinear2" height="35px" stripes progress-bar-color="pink300"/>
      <h-progress-linear class="h-mt-sm" v-model="pLinear1" height="45px" stripes animated progress-bar-color="green300"/>
      <h-progress-linear class="h-mt-sm" v-model="pLinear2" height="60px" stripes stripes-animated animated progress-bar-color="orange300"/>

      <h-progress-linear class="h-mt-sm" v-model="pLinear1" height="25px" text-color="text-white">
        <template v-slot:text> <div class="text-black">{{pLinear1}}%</div></template>
      </h-progress-linear>
      <h-progress-linear class="h-mt-sm" v-model="pLinear2" height="35px" stripes progress-bar-color="pink300">
        <template v-slot:text> <div class="text-white">{{pLinear2}}%</div></template>
      </h-progress-linear>


    </div>

  </h-page-content>

</template>

<script>
export default {
  data() {
    return {
      pLinear1: 35,
      pLinear2: 50,
      pLinear1Animated: false,
      pCircular1: 25,
      pCircular2: 50,
      pCircular3: 75,
      pCircular4: 90
    };
  },
  mounted () {
    // this.generateProgressCircularCSSKeyframe()
    // this.generateProgressLinearCSSKeyframe()
  },
  methods: {
    generateProgressLinearCSSKeyframe () {
      for (let number = 1; number < 101; number++) {
        let angleNumber = number
        
        let localCSS = `
.progress-bar-inner.p{angleNumber}.animated {
   animation: auto-progress-p{angleNumber} 3s infinite linear; 
}

@keyframes auto-progress-p{angleNumber} {
  0% {
    width: 0%;
  }

  100% {
    width: {angleNumber}%;
  }
}
`
        let angleNumberStr = '' + angleNumber
        localCSS = localCSS.replace(/{angleNumber}/g, angleNumberStr)
        console.log(localCSS)
      }
    },
    generateProgressCircularCSSKeyframe () {

      for (let number = 1; number < 101; number++) {
        let angleNumber = number
        let angleDeg = 360*(angleNumber/100)
        angleDeg = angleDeg.toFixed(2)
        
        let localCSS = `
          .c100.p{angleNumber} .bar {
            -moz-transform: rotate({angleDeg}deg);
            -ms-transform: rotate({angleDeg}deg);
            -webkit-transform: rotate({angleDeg}deg);
            transform: rotate({angleDeg}deg);
          }

          .c100.p{angleNumber}.animated .bar {
            animation: fill{angleNumber} ease-in-out 3s infinite;
          }

          @keyframes fill{angleNumber} {
            0% {
              -moz-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            100% {
              -moz-transform: rotate({angleDeg}deg);
              -ms-transform: rotate({angleDeg}deg);
              -webkit-transform: rotate({angleDeg}deg);
              transform: rotate({angleDeg}deg);
            }
          }
        `
        let angleStr = '' + angleDeg
        let angleNumberStr = '' + angleNumber

        localCSS = localCSS.replace(/{angleDeg}/g, angleStr)
        localCSS = localCSS.replace(/{angleNumber}/g, angleNumberStr)
        // console.log('CSS FOR ', number)
        console.log(localCSS)
      }

    }
  }
};
</script>

<style scoped>

</style>