<template>
  <page-layout ref="pl" title="Toogle">
      <template v-slot:components>
      <div ref="tg-boolean"/>
        <comp-code class="h-mt-lg" title="Boolean" :code="ckboolean" :script="ckbooleanScript"
          javascript
        >
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

        </comp-code>

        <div ref="tg-readonly"/>
        <comp-code class="h-mt-lg" title="Readonly" :code="ckreadonly" :script="ckreadonlyScript"
          javascript
        >
          <div class="column">
            <div class="col">
              <h-toggle v-model="typeReadOnly" text="Disabled" value="ad" readonly/>
              <h-toggle v-model="typeReadOnly" text="Action1" value="a1"/>
              <h-toggle v-model="typeReadOnly" text="Action2" value="a2"/>
            </div>
            <div class="col">
              Model: {{ typeReadOnly }}
            </div>
          </div>

        </comp-code>

        <comp-code class="h-mt-lg" title="Option checked" :code="ckOptChecked" :script="ckOptCheckedScript"
          javascript
        >
          <div class="column">
            <div class="col">
              <h-toggle v-model="ckChecked" text="Item checked"/>
            </div>
            <div class="col">
              Your model is {{ckChecked}}
            </div>
          </div>
        </comp-code>

        <div ref="tg-list"/>
        <comp-code class="h-mt-lg" title="List" :code="cklist" :script="cklistScript"
          javascript
        >
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

        </comp-code>

        <div ref="tg-listnumbers"/>
        <comp-code class="h-mt-lg" title="List with numbers" :code="cklistnumbers" :script="cklistnumbersScript"
          javascript
        >
          <div class="column">
            <div class="col">
              Select yours favorite numbers
            </div>
            <div class="col">
              <h-toggle v-model="checkedNumbers" text="1" :value="1"/>
              <h-toggle v-model="checkedNumbers" text="2" :value="2"/>
              <h-toggle v-model="checkedNumbers" text="3" :value="3"/>
              <h-toggle v-model="checkedNumbers" text="4" :value="4"/>
            </div>
            <div class="col">
              Favorite numbers {{ checkedNumbers }}
            </div>
          </div>

        </comp-code>

        <tabs-help
          class="h-mt-md"
          :properties="helpTopics.properties"
          :events="helpTopics.events"
        />
      </template>


    <template v-slot:help>

        <list-help>
          <h-list>
            <h-list-header text="Styles"/>
            <h-list-item @click="goToElement('tg-boolean')">
              <h-list-item-content>
                <h-list-item-text title="Boolean"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('tg-readonly')">
              <h-list-item-content>
                <h-list-item-text title="Readonly"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('tg-list')">
              <h-list-item-content>
                <h-list-item-text title="List"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('tg-listnumbers')">
              <h-list-item-content>
                <h-list-item-text title="Numbers"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>

    </template>
  </page-layout>

</template>

<script>

import PageLayout from '../pageLayout';

export default {
  components: {PageLayout},
  data () {
    return {
      ckChecked: true,
      termAccepted: false,
      typeReadOnly: ['a2'],
      colors: [],
      checkedNames2: ['Maça', 'Uva', 'Abacaxi'],
      checkedNumbers: [1, 3],
      checked2: false,
      helpTopics: {
        properties: [],
        events: []
      },
      ckboolean: `
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
`,
      ckbooleanScript: `
  data () {
    return {
      termAccepted: false
    }
  }
`,
      ckreadonly: `
<div class="column">
  <div class="col">
    <h-toggle v-model="typeReadOnly" text="Disabled" value="ad" readonly/>
    <h-toggle v-model="typeReadOnly" text="Action1" value="a1"/>
    <h-toggle v-model="typeReadOnly" text="Action2" value="a2"/>
  </div>
  <div class="col">
    Model: {{ typeReadOnly }}
  </div>
</div>
`,
      ckreadonlyScript: `
export default {
  data () {
    return {
      typeReadOnly: ['a2']
    }
  }
}
`,
      ckOptChecked: `
<div class="column">
  <div class="col">
    <h-toggle v-model="ckChecked" text="Item checked"/>
  </div>
  <div class="col">
    Your model is {{ckChecked}}
  </div>
</div>
`,
      ckOptCheckedScript: `
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
`,
      cklistScript: `
  data () {
    return {
      colors: []
    }
  }
`,
      cklistnumbers: `
<div class="column">
  <div class="col">
    Select yours favorite numbers
  </div>
  <div class="col">
    <h-toggle v-model="checkedNumbers" text="1" :value="1"/>
    <h-toggle v-model="checkedNumbers" text="2" :value="2"/>
    <h-toggle v-model="checkedNumbers" text="3" :value="3"/>
    <h-toggle v-model="checkedNumbers" text="4" :value="4"/>
  </div>
  <div class="col">
    Favorite numbers {{ checkedNumbers }}
  </div>
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
  },

  methods: {
    goToElement (refName) {
        this.$refs.pl.goToElement(this.$refs[refName]);
    },

  }
}
</script>
