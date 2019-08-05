<template>
  <h-page-content padding>
    <div class="text-h4">Toggle</div>

    <!--
      Bugs
      - property checked has no reactivity
      - add readonly property
      - add css for readonly property
    -->

    <comp-code class="h-mt-lg" title="Boolean" :code="ckboolean" :script="ckbooleanScript"
      javascript
    >
      <div>
        Do you agree terms and conditions?
      </div>
      <div>
        <h-toggle v-model="termAccepted" text="I agree"/>
      </div>
      <div>
        Your option is: {{ termAccepted }}
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="List" :code="cklist" :script="cklistScript"
      javascript
    >
      <div>
        Select your favorite colors
      </div>
      <div>
        <h-toggle v-model="colors" text="Red" value="Red"/>
        <h-toggle v-model="colors" text="Green" value="Green"/>
        <h-toggle v-model="colors" text="Blue" value="Blue"/>
      </div>
      <div>
        Your favorites colors: {{ colors }}
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="List with numbers" :code="cklistnumbers" :script="cklistnumbersScript"
      javascript
    >
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
    </comp-code>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>text</div>
        <div>value</div>
        <div>checked</div>
        <div>disabled</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String, Number</div>
        <div>String, Number, Object</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the text of the toggle</div>
        <div>Sets the value of the toggle</div>
        <div>If true the toggle is on</div>
        <div>if true the toggle is disabled</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@change(value)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered immediately on model change</div>
      </div>
    </div>

  </h-page-content>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      termAccepted: false,
      colors: [],
      checkedNames2: ['Maça', 'Uva', 'Abacaxi'],
      checkedNumbers: [1, 3],
      checked2: false,
      ckboolean: `
<div>
  Do you agree terms and conditions?
</div>
<div>
  <h-toggle v-model="termAccepted" text="I agree"/>
</div>
<div>
  Your option is: {{ termAccepted }}
</div> 
`,
      ckbooleanScript: `
  data () {
    return {
      termAccepted: false
    }
  }    
`,
      cklist: `
<div>
  Select your favorite colors
</div>
<div>
  <h-toggle v-model="colors" text="Red" value="Red"/>
  <h-toggle v-model="colors" text="Green" value="Green"/>
  <h-toggle v-model="colors" text="Blue" value="Blue"/>
</div>
<div>
  Your favorites colors: {{ colors }}
</div>
`,
      cklistScript: `
  data () {
    return {
      colors: []
    }
  }    
`,
      cklistnumbers: `
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
`,
      cklistnumbersScript: `
  data () {
    return {
      checkedNumbers: [1, 3]
    }
  }      
`
    }
  }
}
</script>
