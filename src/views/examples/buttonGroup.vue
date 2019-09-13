<template>
  <h-page-content padding>
    <h3>Types</h3>
     <div class="h-pa-sm border border-gray border-radius">
      <div>
        <h-btn-group contained>
          <h-btn bg-color="bg-primary" text-color="text-white" left-icon="fas fa-bold" text="Bold"/>
          <h-btn bg-color="bg-positive" text-color="text-white" right-icon="fas fa-italic" text="Italic"/>
          <h-btn bg-color="bg-negative" text-color="text-white"  left-icon="fas fa-underline" text="Underline"/>
        </h-btn-group>
      </div>

      <div class="h-mt-md">
        <h-btn-group bg-color="bg-gray">
          <h-btn text-button left-icon="fas fa-bold"/>
          <h-btn text-button left-icon="fas fa-italic"/>
          <h-btn text-button left-icon="fas fa-underline"/>
          <h-btn dropdown
            text="Align"
            bg-color="bg-transparent"
            v-model="btnAlign1"
            @click="btnAlign1 = true"
          >
            <div class="row">
              <h-btn text-button left-icon="fas fa-align-left"/>
              <h-btn text-button left-icon="fas fa-align-center" class="h-ml-xs"/>
              <h-btn text-button left-icon="fas fa-align-right" class="h-ml-xs"/>
              <h-btn text-button left-icon="fas fa-align-justify" class="h-ml-xs"/>
            </div>
          </h-btn>
        </h-btn-group>

        <h-btn-group rounded class="h-ml-sm" bg-color="bg-gray">
          <h-btn text-button left-icon="fas fa-bold"/>
          <h-btn text-button left-icon="fas fa-italic"/>
          <h-btn text-button left-icon="fas fa-underline"/>
          <h-btn dropdown
            text="Align"
            bg-color="bg-transparent"
            v-model="btnAlign2"
            @click="btnAlign2 = true"
          >
            <div class="row">
              <h-btn text-button left-icon="fas fa-align-left"/>
              <h-btn text-button left-icon="fas fa-align-center" class="h-ml-xs"/>
              <h-btn text-button left-icon="fas fa-align-right" class="h-ml-xs"/>
              <h-btn text-button left-icon="fas fa-align-justify" class="h-ml-xs"/>
            </div>
          </h-btn>
        </h-btn-group>
      </div>

      <div class="h-mt-md">
        <h-btn-group outlined bg-color="bg-primary">
          <h-btn text-button left-icon="fas fa-bold"/>
          <h-btn text-button left-icon="fas fa-italic"/>
          <h-btn text-button left-icon="fas fa-underline"/>
          <h-btn dropdown
            text-button
            text="Align"
            v-model="btnAlign3"
            @click="btnAlign3 = true"
          >
            <div class="row">
              <h-btn text-button left-icon="fas fa-align-left"/>
              <h-btn text-button left-icon="fas fa-align-center" class="h-ml-xs"/>
              <h-btn text-button left-icon="fas fa-align-right" class="h-ml-xs"/>
              <h-btn text-button left-icon="fas fa-align-justify" class="h-ml-xs"/>
            </div>
          </h-btn>
        </h-btn-group>

        <h-btn-group outlined rounded class="h-ml-sm" bg-color="bg-primary">
          <h-btn text-button left-icon="fas fa-bold"/>
          <h-btn text-button left-icon="fas fa-italic"/>
          <h-btn text-button left-icon="fas fa-underline"/>
          <h-btn dropdown
            text-button
            text="Align"
            v-model="btnAlign4"
            @click="btnAlign4 = true"
          >
            <div class="row">
              <h-btn text-button left-icon="fas fa-align-left"/>
              <h-btn text-button left-icon="fas fa-align-center" class="h-ml-xs"/>
              <h-btn text-button left-icon="fas fa-align-right" class="h-ml-xs"/>
              <h-btn text-button left-icon="fas fa-align-justify" class="h-ml-xs"/>
            </div>
          </h-btn>
        </h-btn-group>
      </div>

     </div>

  </h-page-content>
</template>

<script>

export default {
  data () {
    return {
      btnAlign1: false,
      btnAlign2: false,
      btnAlign3: false,
      btnAlign4: false
    }
  }
}
</script>
