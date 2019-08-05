<template>
  <h-page-content padding>
    <div class="text-h4">Checkbox</div>

    <!--
      ADD
      - adicionar a property color para background quando estiver checked
    -->

    <comp-code
      title="Boolean" :code="ckboolean" :script="ckbooleanScript"
      javascript
    >
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

    </comp-code>

    <comp-code class="h-mt-md" title="Readonly" :code="ckdisabled" :script="ckbooleanScript"
      javascript
    >
      <div class="column">
        <div class="col">
          Checkbox disabled
        </div>
        <div class="col">
          <h-checkbox v-model="termAccepted" text="I agree" readonly/>
        </div>
      </div>

    </comp-code>

    <comp-code class="h-mt-md" title="Option checked" :code="itemChecked" :script="itemCheckedScript"
      javascript
    >
      <div class="column">
        <div class="col">
          Option checked
        </div>
        <div class="col">
          <h-checkbox v-model="ckChecked" text="Item checked" :checked="ckChecked"/>
        </div>
        <div class="col">
          Your model is {{ckChecked}}
        </div>
      </div>

    </comp-code>

    <comp-code class="h-mt-md" title="List" :code="cklist" :script="cklistScript"
      javascript
    >
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

    </comp-code>

    <comp-code class="h-mt-md" title="List with numbers" :code="cklistnumbers" :script="checkedNumbersScript"
      javascript
    >
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

    </comp-code>

    <comp-code class="h-mt-md" title="List with objects" :code="cklistobjects" :script="cklistobjectsScript"
      javascript
    >
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

  </h-page-content>

</template>

<script>

export default {
  components: {
  },
  mounted () {
    this.checkedObjects.push(this.checkedObjectsOptions[1])
  },
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
      ],
      ckboolean: `
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
<div class="column">
  <div class="col">
    Checkbox disabled
  </div>
  <div class="col">
    <h-checkbox v-model="termAccepted" text="I agree" readonly/>
  </div>
</div>
`,
      itemChecked: `
<div class="column">
  <div class="col">
    Option checked
  </div>
  <div class="col">
    <h-checkbox v-model="ckChecked" text="Item checked" :checked="ckChecked"/>
  </div>
  <div class="col">
    Your model is {{ckChecked}}
  </div>
</div>
`,
      itemCheckedScript: `

export default {
  data () {
    return {
      ckChecked: true
    }
  }
}
`,
      cklist: `
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
