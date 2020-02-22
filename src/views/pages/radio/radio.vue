<template>
  <h-page-content padding>
    <!--
      ADD
      - adicionar a property color para background quando estiver checked
      - verificar se disabled esta funcionando.
    -->
    <div class="row">
      <div class="col">

        <div class="text-h4"> Radio Buttons </div>

        <div ref="rd-boolean"/>
        <comp-code class="h-mt-lg" title="Boolean" :code="rbboolean" :script="rbbooleanScript"
          javascript
        >
          <div class="column">
            <div class="col">
              Do you agree to our terms and conditions?
            </div>
            <div class="col">
              <h-radio v-model="typeBoolean" text="Yes" :value="true"/>
              <h-radio v-model="typeBoolean" text="No" :value="false"/>
            </div>
            <div class="col">
              I like of: {{ typeBoolean }}
            </div>
          </div>

        </comp-code>

        <div ref="rd-string"/>
        <comp-code class="h-mt-lg" title="String" :code="rblist" :script="rblistScript"
          javascript
        >
          <div class="column">
            <div class="col">
              What type of movies do you like?
            </div>
            <div class="col">
              <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
              <h-radio v-model="typeMovie" text="Action" value="Action"/>
              <h-radio v-model="typeMovie" text="Science" value="Science"/>
              <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
            </div>
            <div class="col">
              I like of: {{ typeMovie }}
            </div>
          </div>

        </comp-code>

        <div ref="rd-numbers"/>
        <comp-code class="h-mt-lg" title="Numbers" :code="rbnumber" :script="rbnumberScript"
          javascript
        >
          <div class="column">
            <div class="col">
              Wich number do you hate?
            </div>
            <div class="col">
              <h-radio v-model="typeNumber" text="10" :value="10"/>
              <h-radio v-model="typeNumber" text="13" :value="13"/>
              <h-radio v-model="typeNumber" text="15" :value="15"/>
              <h-radio v-model="typeNumber" text="20" :value="20"/>
            </div>
            <div class="col">
              I hate number: {{ typeNumber }}
            </div>
          </div>

        </comp-code>

        <div ref="rd-checked"/>
        <comp-code class="h-mt-lg" title="Option checked" :code="rbchecked" :script="rbcheckedScript"
          javascript
        >
          <div class="column">
            <div class="col">
              Select your gender
            </div>
            <div class="col">
              <h-radio v-model="gender" text="Male" value="male" checked/>
              <h-radio v-model="gender" text="Female" value="female" />
              <div>Your gender is: {{ gender }}</div>
            </div>
          </div>

        </comp-code>

        <div ref="rd-objects"/>
        <comp-code class="h-mt-lg" title="Objects" :code="rbobjects" :script="rbobjectsScript"
          javascript
        >
          <div class="column">
            <div class="col">
              Select yours favorite objects
            </div>
            <div class="col">
              <h-radio v-model="radioObjects" :text="radioObjectsOptions[0].name" :value="radioObjectsOptions[0]"/>
              <h-radio v-model="radioObjects" :text="radioObjectsOptions[1].name" :value="radioObjectsOptions[1]" />
              <h-radio v-model="radioObjects" :text="radioObjectsOptions[2].name" :value="radioObjectsOptions[2]" />
              <div>Your objects: {{ radioObjects }}</div>
            </div>
          </div>

        </comp-code>

        <!-- <h2 class="text-primary"> Vue Properties</h2>
        <hr>

        <div class="flex">
          <div>
            <h3>Name</h3>
            <div>disabled</div>
          </div>
          <div class="h-pl-md">
            <h3>Type</h3>
            <div>Boolean</div>
          </div>
          <div class="h-pl-md">
            <h3 >Description</h3>
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
        </div> -->
        <tabs-help
          class="h-mt-md"
          :properties="helpTopics.properties"
          :events="helpTopics.events"
        />
      </div>
      <div class="col-auto">
        <list-help>
          <h-list>
            <h-list-header text="Usage"/>
            <h-list-item @click="goToElement('rd-boolean')">
              <h-list-item-content>
                <h-list-item-text title="Boolean"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('rd-string')">
              <h-list-item-content>
                <h-list-item-text title="String"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('rd-numbers')">
              <h-list-item-content>
                <h-list-item-text title="Numbers"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('rd-checked')">
              <h-list-item-content>
                <h-list-item-text title="Checked"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('rd-objects')">
              <h-list-item-content>
                <h-list-item-text title="Object"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </div>
    </div>
  </h-page-content>
</template>

<script>

import viewport from '../../../components/others/viewport'
import helpTopics from './help'

export default {
  data () {
    return {
      helpTopics: {
        properties: [],
        events: []
      },
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
<div class="column">
  <div class="col">
    Do you agree to our terms and conditions?
  </div>
  <div class="col">
    <h-radio v-model="typeBoolean" text="Yes" :value="true"/>
    <h-radio v-model="typeBoolean" text="No" :value="false"/>
  </div>
  <div class="col">
    I like of: {{ typeBoolean }}
  </div>
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
<div class="column">
  <div class="col">
    What type of movies do you like?
  </div>
  <div class="col">
    <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
    <h-radio v-model="typeMovie" text="Action" value="Action"/>
    <h-radio v-model="typeMovie" text="Science" value="Science"/>
    <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
  </div>
  <div class="col">
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
<div class="column">
  <div class="col">
    Wich number do you hate?
  </div>
  <div class="col">
    <h-radio v-model="typeNumber" text="10" :value="10"/>
    <h-radio v-model="typeNumber" text="13" :value="13"/>
    <h-radio v-model="typeNumber" text="15" :value="15"/>
    <h-radio v-model="typeNumber" text="20" :value="20"/>
  </div>
  <div class="col">
    I hate number: {{ typeNumber }}
  </div>
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
<div class="column">
  <div class="col">
    Select your gender
  </div>
  <div class="col">
    <h-radio v-model="gender" text="Male" value="male" checked/>
    <h-radio v-model="gender" text="Female" value="female" />
    <div>Your gender is: {{ gender }}</div>
  </div>
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
<div class="column">
  <div class="col">
    Select yours favorite objects
  </div>
  <div class="col">
    <h-radio v-model="radioObjects" :text="radioObjectsOptions[0].name" :value="radioObjectsOptions[0]"/>
    <h-radio v-model="radioObjects" :text="radioObjectsOptions[1].name" :value="radioObjectsOptions[1]" />
    <h-radio v-model="radioObjects" :text="radioObjectsOptions[2].name" :value="radioObjectsOptions[2]" />
    <div>Your objects: {{ radioObjects }}</div>
  </div>
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
  },
  mounted () {
    this.helpTopics.properties = helpTopics.properties
    // this.helpTopics.events = helpTopics.events
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    }
  }
}
</script>
