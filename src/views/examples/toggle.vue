<template>
  <h-page-content padding>

    <div class="h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Boolean</div>
      <div class="column">
        <div class="col">
          Do you agree terms and conditions?
        </div>
        <div class="col">
          <h-toggle v-model="termAccepted" text="I agree"/>
        </div>
        <div class="col">
          Your option is: {{ termAccepted }}
        </div>
      </div>
    </div>

    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">List</div>
      <div class="column">
        <div class="col">
          Select your favorite colors
        </div>
        <div class="col">
          <h-toggle v-model="colors" text="Red" value="Red"/>
          <h-toggle v-model="colors" text="Green" value="Green"/>
          <h-toggle v-model="colors" text="Blue" value="Blue"/>
        </div>
        <div class="col">
          Your favorites colors: {{ colors }}
        </div>
      </div>
    </div>

    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">List with numbers</div>
      <div>
        Select yours favorite numbers
      </div>
      <div>
        <h-toggle v-model="checkedNumbers" text="1" :value="1"/>
        <h-toggle v-model="checkedNumbers" text="2" :value="2"/>
        <h-toggle v-model="checkedNumbers" text="3" :value="3"/>
        <h-toggle v-model="checkedNumbers" text="4" :value="4"/>
      </div>
      <div>
        Favorite numbers {{ checkedNumbers }}
      </div>
    </div>
  </h-page-content>
</template>

<script>
export default {
  data () {
    return {
      termAccepted: false,
      colors: [],
      checkedNumbers: [1, 3]
    }
  }
}
</script>
