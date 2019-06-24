<template>
  <div>
    <h1>Checkbox</h1>

    <!--
      Bugs
      - property checked has no reactivity
      - add readonly property
    -->

    <comp-code
      title="Boolean" :code="ckboolean" :script="ckbooleanScript"
      javascript
    >
      <div>
        Do you agree to our terms and conditions?
      </div>
      <div>
        <h-checkbox v-model="termAccepted" text="I agree"/>
      </div>
      <div>
        Your option is: {{ termAccepted }}
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="Readonly" :code="ckdisabled" :script="ckbooleanScript"
      javascript
    >
      <div>
        Checkbox disabled
      </div>
      <div>
        <h-checkbox v-model="termAccepted" text="I agree" readonly/>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="List" :code="cklist" :script="cklistScript"
      javascript
    >
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
    </comp-code>
    <!-- <h-checkbox v-model="colors" text="Red" value="Red" :checked="true" :disabled="true"/>
    <h-checkbox v-model="colors" text="Green" value="Green" disabled/> -->

    <comp-code class="h-mt-md" title="List with numbers" :code="cklistnumbers" :script="checkedNumbersScript"
      javascript
    >
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
    </comp-code>

    <comp-code class="h-mt-md" title="List with objects" :code="cklistobjects" :script="cklistobjectsScript"
      javascript
    >
      <div>
        Select yours favorite objects
      </div>
      <div v-for="(opt, index) in checkedObjectsOptions" :key="index">
        <h-checkbox v-model="checkedObjects" :text="opt.name" :value="opt"/>
      </div>
      <div>
        <span>Your objects {{ checkedObjects }}</span>
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
        <div>readonly</div>
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
        <div>Sets the text of the checkbox</div>
        <div>Sets the value of the checkbox</div>
        <div>If true the checkbox is checked</div>
        <div>if true the checkbox is disabled</div>
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

  </div>

</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      termAccepted: false,
      colors: [],
      checkedNumbers: [1, 3],
      checkedObjects: [],
      checkedObjectsOptions: [
        { id: 1, name: 'html' },
        { id: 2, name: 'css' },
        { id: 3, name: 'vuejs' }
      ],
      ckboolean: `
<div>
  Do you agree to our terms and conditions?
</div>
<div>
  <h-checkbox v-model="termAccepted" text="I agree"/>
</div>
<div>
  Your option is: {{ termAccepted }}
</div>
`,
      ckbooleanScript: `
export default {
  data () {
    return {
      termAccepted: false
    }
  }
}
`,
      ckdisabled: `
<div>
  Checkbox disabled
</div>
<div>
  <h-checkbox v-model="termAccepted" text="I agree" readonly/>
</div>
`,
      cklist: `
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
`,
      cklistScript: `
export default {
  data () {
    return {
      colors: []
    }
  }
}    
`,
      cklistnumbers: `
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
`,
      checkedNumbersScript: `
export default {
  data () {
    return {
      checkedNumbers: [1, 3]
    }
  }
}    
`,
      cklistobjects: `
<div>
  Select yours favorite objects
</div>
<div v-for="(opt, index) in checkedObjectsOptions" :key="index">
  <h-checkbox v-model="checkedObjects" :text="opt.name" :value="opt"/>
</div>
<div>
  <span>Your objects {{ checkedObjects }}</span>
</div>
`,
      cklistobjectsScript: `
export default {
  data () {
    return {
      checkedObjects: [],
      checkedObjectsOptions: [
        { id: 1, name: 'html' },
        { id: 2, name: 'css' },
        { id: 3, name: 'vuejs' }
      ]
    }
  }
}    
`
    }
  }
}
</script>
