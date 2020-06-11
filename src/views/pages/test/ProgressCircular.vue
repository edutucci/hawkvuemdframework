<template>
  <h-page-content padding>
    <div class="wrapper column">
      <div class="text-h4"> Progress Circular</div>
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
      </div>      

      <div class="text-h4 h-mt-lg"> Progress Components</div>
      <h-progress-linear v-model="pLinear1"/>
      <h-progress-linear v-model="pLinear1" stripes animated/>

    </div>

  </h-page-content>

</template>

<script>
export default {
  data() {
    return {
      pLinear1: 50,
      pLinear1Animated: false
    };
  },
  methods: {}
};
</script>

<style scoped>

</style>