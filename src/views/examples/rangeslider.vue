<template>
  <h-page-content padding>
    <div class="text-h4">Range SLider</div>

  <h3>Styles</h3>
 <div class="h-pa-sm border border-gray border-radius">

    <div class="row align-items-center">
      <div class="col">
        <h-range-slider v-model="modelRange"/>
      </div>
      <div class="col-auto h-pa-xs bg-gray text-caption">
        {{modelRange}}%
      </div>
    </div>

    <div class="row align-items-center h-mt-md">
      <div class="col">
        <h-range-slider v-model="modelRange" bg-color="bg-primary"/>
      </div>
      <div class="col-auto h-pa-xs bg-primary text-white text-caption">
        {{modelRange}}%
      </div>
    </div>

    <div class="row align-items-center h-mt-md">
      <div class="col">
        <h-range-slider v-model="modelRange" bg-color="bg-negative"/>
      </div>
      <div class="col-auto h-pa-xs bg-negative text-white text-caption">
        {{modelRange}}%
      </div>
    </div>

  </div>

  </h-page-content>
</template>

<script>
export default {
  data () {
    return {
      modelRange: 55
    }
  }
}
</script>
