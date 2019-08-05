<template>
  <h-page-content padding>
    <div class="text-h4"> Radio Buttons </div>

    <!--
      ADD
      - adicionar a property color para background quando estiver checked
    -->

    <comp-code class="h-mt-lg" title="Boolean" :code="rbboolean" :script="rbbooleanScript"
      javascript
    >
      <div>
        Do you agree to our terms and conditions?
      </div>
      <div>
        <h-radio v-model="typeBoolean" text="Yes" :value="true"/>
        <h-radio v-model="typeBoolean" text="No" :value="false"/>
      </div>
      <div>
        I like of: {{ typeBoolean }}
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="String" :code="rblist" :script="rblistScript"
      javascript
    >
      <div>
        What type of movies do you like?
      </div>
      <div>
        <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
        <h-radio v-model="typeMovie" text="Action" value="Action"/>
        <h-radio v-model="typeMovie" text="Science" value="Science"/>
        <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
      </div>
      <div>
        I like of: {{ typeMovie }}
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Numbers" :code="rbnumber" :script="rbnumberScript"
      javascript
    >
      <div>
        Wich number do you hate?
      </div>
      <div>
        <h-radio v-model="typeNumber" text="10" :value="10"/>
        <h-radio v-model="typeNumber" text="13" :value="13"/>
        <h-radio v-model="typeNumber" text="15" :value="15"/>
        <h-radio v-model="typeNumber" text="20" :value="20"/>
      </div>
      <div>
        I hate number: {{ typeNumber }}
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Option checked" :code="rbchecked" :script="rbcheckedScript"
      javascript
    >
      <div>
        Select your gender
      </div>
      <div>
       <h-radio v-model="gender" text="Male" value="male" checked/>
       <h-radio v-model="gender" text="Female" value="female" />
       <div>Your gender is: {{ gender }}</div>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Objects" :code="rbobjects" :script="rbobjectsScript"
      javascript
    >
      <div>
        Select yours favorite objects
      </div>
      <div>
       <h-radio v-model="radioObjects" :text="radioObjectsOptions[0].name" :value="radioObjectsOptions[0]"/>
       <h-radio v-model="radioObjects" :text="radioObjectsOptions[1].name" :value="radioObjectsOptions[1]" />
       <h-radio v-model="radioObjects" :text="radioObjectsOptions[2].name" :value="radioObjectsOptions[2]" />
       <div>Your objects: {{ radioObjects }}</div>
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
        <div>String, Number</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the text of the radio</div>
        <div>Sets the value of the radio</div>
        <div>If true the radio is checked</div>
        <div>if true the radio is disabled</div>
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
      typeBoolean: false,
      typeMovie: '',
      typeNumber: 0,
      gender: '',
      radioObjects: '',
      radioObjectsOptions: [
        { id: 1, name: 'html' },
        { id: 2, name: 'css' },
        { id: 3, name: 'vuejs' }
      ],
      rbboolean: `
<div>
  Do you agree to our terms and conditions?
</div>
<div>
  <h-radio v-model="typeBoolean" text="Yes" :value="true"/>
  <h-radio v-model="typeBoolean" text="No" :value="false"/>
</div>
<div>
  I like of: {{ typeBoolean }}
</div>
`,
      rbbooleanScript: `
export default {
  data () {
    return {
      typeBoolean: false
    }
  }
}
`,
      rblist: `
<div>
  What type of movies do you like?
</div>
<div>
  <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
  <h-radio v-model="typeMovie" text="Action" value="Action"/>
  <h-radio v-model="typeMovie" text="Science" value="Science"/>
  <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
</div>
<div>
  I like of: {{ typeMovie }}
</div>
`,
      rblistScript: `
export default {
  data () {
    return {
      typeMovie: ''
    }
  }
}
`,
      rbnumber: `
<div>
  Wich number do you hate?
</div>
<div>
  <h-radio v-model="typeNumber" text="10" :value="10"/>
  <h-radio v-model="typeNumber" text="13" :value="13"/>
  <h-radio v-model="typeNumber" text="15" :value="15"/>
  <h-radio v-model="typeNumber" text="20" :value="20"/>
</div>
<div>
  I hate number: {{ typeNumber }}
</div>
`,
      rbnumberScript: `
export default {
  data () {
    return {
      typeNumber: 0
    }
  }
}    
`,
      rbchecked: `
<div>
  Select your gender
</div>
<div>
  <h-radio v-model="gender" text="Male" value="male" checked/>
  <h-radio v-model="gender" text="Female" value="female" />
  <div>Your gender is: {{ gender }}</div>
</div>
`,
      rbcheckedScript: `
export default {
  data () {
    return {
      gender: ''
    }
  }
}
`,
      rbobjects: `
<div>
  Select yours favorite objects
</div>
<div>
  <h-radio v-model="radioObjects" :text="radioObjectsOptions[0].name" :value="radioObjectsOptions[0]"/>
  <h-radio v-model="radioObjects" :text="radioObjectsOptions[1].name" :value="radioObjectsOptions[1]" />
  <h-radio v-model="radioObjects" :text="radioObjectsOptions[2].name" :value="radioObjectsOptions[2]" />
  <div>Your objects: {{ radioObjects }}</div>
</div>
`,
      rbobjectsScript: `
export default {
  data () {
    return {
      radioObjects: [],
      radioObjectsOptions: [
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
