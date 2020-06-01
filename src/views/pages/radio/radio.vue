<template>
  <h-page-content padding
    @onResize="pageResize"
    @mainLayoutDrawerIsOpened="showDrawer = false"
  >
    <div class="row ">
      <div class="col">
        <div class="row position-sticky bg-white">
          <div class="col text-h4">
            Radio Buttons
          </div>
          <div class="col-auto">
            <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = !showDrawer"/>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="col">
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

        <div ref="rd-readonly"/>
        <comp-code class="h-mt-lg" title="Readonly" :code="rbreadonly" :script="rbreadonlyScript"
          javascript
        >
          <div class="column">
            <div class="col">
              <h-radio v-model="typeReadOnly" text="Disabled" value="ad" readonly/>
              <h-radio v-model="typeReadOnly" text="Action1" value="a1"/>
              <h-radio v-model="typeReadOnly" text="Action2" value="a2"/>
            </div>
            <div class="col">
              Model: {{ typeReadOnly }}
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
            </div>
            <tabs-help
          class="h-mt-md"
          :properties="helpTopics.properties"
          :events="helpTopics.events"
        />
          </div>
         </div>
      </div>
    </div>

    <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <list-help>
          <h-list>
            <h-list-header text="Usage"/>
            <h-list-item @click="goToElement('rd-boolean')">
              <h-list-item-content>
                <h-list-item-text title="Boolean"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('rd-readonly')">
              <h-list-item-content>
                <h-list-item-text title="Readonly"></h-list-item-text>
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
      </h-nav-drawer>
    </template>
  </h-page-content>

</template>

<script>

import viewport from '../../../components/others/viewport'
import helpTopics from './help'

export default {
  data () {
    return {
      showDrawer :  true,
      helpTopics: {
        properties: [],
        events: []
      },
      typeBoolean: false,
      typeReadOnly: 'a2',
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
      rbreadonly: `
<div class="column">
  <div class="col">
    <h-radio v-model="typeReadOnly" text="Disabled" value="ad" readonly/>
    <h-radio v-model="typeReadOnly" text="Action1" value="a1"/>
    <h-radio v-model="typeReadOnly" text="Action2" value="a2"/>
  </div>
  <div class="col">
    Model: {{ typeReadOnly }}
  </div>
</div>
`,
      rbreadonlyScript: `
export default {
  data () {
    return {
      typeReadOnly: 'a2'
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
    <h-radio v-model="radioObjects"
      :text="radioObjectsOptions[0].name"
      :value="radioObjectsOptions[0]"
    />
    <h-radio v-model="radioObjects"
      :text="radioObjectsOptions[1].name"
      :value="radioObjectsOptions[1]"
    />
    <h-radio v-model="radioObjects"
      :text="radioObjectsOptions[2].name"
      :value="radioObjectsOptions[2]"
    />
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
    this.checkMainBodyWidth()
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    },
    pageResize (value) {
      this.$refs.navHelp.onResize(value)
    },
    checkMainBodyWidth () {
      let value = viewport.mainBodyWidth()
      if (value < 961) {
        this.showDrawer = false
    }
  },
  }
}
</script>
