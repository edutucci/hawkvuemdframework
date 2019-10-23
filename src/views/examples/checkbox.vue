<template>
  <h-page-content>

    <h3>Boolean</h3>
    <div class="h-pa-sm border border-gray border-radius">
      
      <div class="column">
        <div class="col">
          Do you agree to our terms and conditions?
        </div>
        <div class="col">
          <h-checkbox v-model="termAccepted" text="I agree"/>
        </div>
        <div class="col">
          Your option is: {{ termAccepted }}
        </div>
      </div>
    </div>

    <h3>Readonly</h3>
    <div class="h-mt-md h-pa-sm border border-gray border-radius">      
      <div class="column">
        <div class="col">
          Checkbox disabled
        </div>
        <div class="col">
          <h-checkbox v-model="termAccepted" text="I agree" readonly/>
        </div>
      </div>
    </div>

    <h3>Option Checked</h3>
    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="column">
        <div class="col">
          <h-checkbox v-model="ckChecked" text="Item checked" :checked="ckChecked"/>
        </div>
        <div class="col">
          Your model is {{ckChecked}}
        </div>
      </div>
    </div>

    <h3>List</h3>
    <div class="h-mt-md h-pa-sm border border-gray border-radius">      
      <div class="column">
        <div>
          Select your favorite colors
        </div>
        <div>
          <h-checkbox v-model="colors" text="Red" value="Red"/>
          <h-checkbox v-model="colors" text="Green" value="Green"/>
          <h-checkbox v-model="colors" text="Blue" value="Blue"/>
        </div>

        <div>
          Your favorites colors: {{ colors }}
        </div>
      </div>
    </div>

    <h3>List with numbers</h3>
    <div class="h-mt-md h-pa-sm border border-gray border-radius"> 
      <div class="column">
        <div class="col">
          Select yours favorite numbers
        </div>
        <div class="col">
          <h-checkbox v-model="checkedNumbers" text="1" :value="1"/>
          <h-checkbox v-model="checkedNumbers" text="2" :value="2"/>
          <h-checkbox v-model="checkedNumbers" text="3" :value="3"/>
          <h-checkbox v-model="checkedNumbers" text="4" :value="4"/>
        </div>
        <div class="col">
          <span>Favorite numbers {{ checkedNumbers }}</span>
        </div>
      </div>
    </div>

    <h3>List with objects</h3>
    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="column">
        <div class="col">
          Select yours favorite objects
        </div>
        <div class="col">
          <h-checkbox v-model="checkedObjects" :text="checkedObjectsOptions[0].name" :value="checkedObjectsOptions[0]"/>
          <h-checkbox v-model="checkedObjects" :text="checkedObjectsOptions[1].name" :value="checkedObjectsOptions[1]"/>
          <h-checkbox v-model="checkedObjects" :text="checkedObjectsOptions[2].name" :value="checkedObjectsOptions[2]"/>
        </div>
        <div class="col">
          <span>Your objects {{ checkedObjects }}</span>
        </div>
      </div>
    </div>

  </h-page-content>
</template>

<script>
export default {
  data () {
    return {
      ckChecked: true,
      termAccepted: false,
      colors: [],
      checkedNumbers: [1, 3],
      checkedObjects: [],
      checkedObjectsOptions: [
        { id: 1, name: 'html' },
        { id: 2, name: 'css' },
        { id: 3, name: 'vuejs' }
      ]
    }
  }
}
</script>
