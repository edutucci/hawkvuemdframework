<template>
  <div>
    <h3>Boolean</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        Do you agree to our terms and conditions?
      </div>
      <div>
        <h-checkbox v-model="termAccepted" text="I agree"/>
      </div>
      <div>
        Your option is: {{ termAccepted }}
      </div>
    </div>

    <h3>Readonly</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        Checkbox disabled
      </div>
      <div>
        <h-checkbox v-model="termAccepted" text="I agree" readonly/>
      </div>
    </div>

    <h3>Option Checked</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        Option checked
      </div>
      <div>
        <h-checkbox v-model="ckChecked" text="Item checked" :checked="ckChecked"/>
      </div>
      <div>
        Your model is {{ckChecked}}
      </div>
    </div>

    <h3>List</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        Select your favorite colors
      </div>
      <div>
        <h-checkbox v-model="colors" text="Red" value="Red" :checked="true"/>
        <h-checkbox v-model="colors" text="Green" value="Green"/>
        <h-checkbox v-model="colors" text="Blue" value="Blue"/>
      </div>

      <div>
        Your favorites colors: {{ colors }}
      </div>
    </div>

    <h3>List with numbers</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        Select yours favorite numbers
      </div>
      <div>
        <h-checkbox v-model="checkedNumbers" text="1" :value="1"/>
        <h-checkbox v-model="checkedNumbers" text="2" :value="2"/>
        <h-checkbox v-model="checkedNumbers" text="3" :value="3"/>
        <h-checkbox v-model="checkedNumbers" text="4" :value="4"/>
      </div>
      <div>
        <span>Favorite numbers {{ checkedNumbers }}</span>
      </div>
    </div>

    <h3>List with objects</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        Select yours favorite objects
      </div>
      <div v-for="(opt, index) in checkedObjectsOptions" :key="index">
        <h-checkbox v-model="checkedObjects" :text="opt.name" :value="opt"/>
      </div>
      <div>
        <span>Your objects {{ checkedObjects }}</span>
      </div>
    </div>

  </div>
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
