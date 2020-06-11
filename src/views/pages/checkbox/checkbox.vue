<template>
  <page-layout ref="pl" title="Checkbox">
    <template v-slot:components>
      <div ref="ck-boolean" />
      <comp-code title="Boolean" :code="ckboolean" :script="ckbooleanScript" javascript>
        <div class="column">
          <div class="col">Do you agree to our terms and conditions?</div>
          <div class="col">
            <h-checkbox v-model="termAccepted" text="I agree" />
          </div>
          <div class="col">Your option is: {{ termAccepted }}</div>
        </div>
      </comp-code>

      <div ref="ck-readonly" />
      <comp-code
        class="h-mt-md"
        title="Readonly"
        :code="ckdisabled"
        :script="ckbooleanScript"
        javascript
      >
        <div class="column">
          <div class="col">
            <h-checkbox v-model="termAccepted" text="I agree" readonly />
          </div>
          <div class="col">Your model is {{termAccepted}}</div>
        </div>
      </comp-code>

      <div ref="ck-checked" />
      <comp-code
        class="h-mt-md"
        title="Option checked"
        :code="itemChecked"
        :script="itemCheckedScript"
        javascript
      >
        <div class="column">
          <div class="col">
            <h-checkbox v-model="ckChecked" text="Item checked" :checked="ckChecked" />
          </div>
          <div class="col">Your model is {{ckChecked}}</div>
        </div>
      </comp-code>

      <div ref="ck-list" />
      <comp-code class="h-mt-md" title="List" :code="cklist" :script="cklistScript" javascript>
        <div class="column">
          <div>Select your favorite colors</div>
          <div>
            <h-checkbox v-model="colors" text="Red" value="Red" />
            <h-checkbox v-model="colors" text="Green" value="Green" />
            <h-checkbox v-model="colors" text="Blue" value="Blue" />
          </div>

          <div>Your favorites colors: {{ colors }}</div>
        </div>
      </comp-code>

      <div ref="ck-listnumbers" />
      <comp-code
        class="h-mt-md"
        title="List with numbers"
        :code="cklistnumbers"
        :script="checkedNumbersScript"
        javascript
      >
        <div class="column">
          <div class="col">Select yours favorite numbers</div>
          <div class="col">
            <h-checkbox v-model="checkedNumbers" text="1" :value="1" />
            <h-checkbox v-model="checkedNumbers" text="2" :value="2" />
            <h-checkbox v-model="checkedNumbers" text="3" :value="3" />
            <h-checkbox v-model="checkedNumbers" text="4" :value="4" />
          </div>
          <div class="col">
            <span>Favorite numbers {{ checkedNumbers }}</span>
          </div>
        </div>
      </comp-code>

      <div ref="ck-listobjects" />
      <comp-code
        class="h-mt-md"
        title="List with objects"
        :code="cklistobjects"
        :script="cklistobjectsScript"
        javascript
      >
        <div class="column">
          <div class="col">Select yours favorite objects</div>
          <div class="col">
            <h-checkbox
              v-model="checkedObjects"
              :text="checkedObjectsOptions[0].name"
              :value="checkedObjectsOptions[0]"
            />
            <h-checkbox
              v-model="checkedObjects"
              :text="checkedObjectsOptions[1].name"
              :value="checkedObjectsOptions[1]"
            />
            <h-checkbox
              v-model="checkedObjects"
              :text="checkedObjectsOptions[2].name"
              :value="checkedObjectsOptions[2]"
            />
          </div>
          <div class="col">
            <span>Your objects {{ checkedObjects }}</span>
          </div>
        </div>
      </comp-code>
      <tabs-help class="h-mt-md" :properties="helpTopics.properties" :events="helpTopics.events" />
    </template>

    <template v-slot:help>
      <list-help>
        <h-list>
          <h-list-header text="Usage" />
          <h-list-item @click="goToElement('ck-boolean')">
            <h-list-item-content>
              <h-list-item-text title="Boolean"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('ck-readonly')">
            <h-list-item-content>
              <h-list-item-text title="Readonly"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('ck-checked')">
            <h-list-item-content>
              <h-list-item-text title="Checked"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('ck-list')">
            <h-list-item-content>
              <h-list-item-text title="List"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('ck-listnumbers')">
            <h-list-item-content>
              <h-list-item-text title="List with numbers"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('ck-listobjects')">
            <h-list-item-content>
              <h-list-item-text title="List with objects"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
        </h-list>
      </list-help>
    </template>
  </page-layout>
</template>

<script>
import PageLayout from "../pageLayout";

export default {
  components: { PageLayout },

  data() {
    return {
      ckChecked: true,
      termAccepted: false,
      colors: [],
      checkedNumbers: [1, 3],
      checkedObjects: [],
      checkedObjectsOptions: [
        { id: 1, name: "html" },
        { id: 2, name: "css" },
        { id: 3, name: "vuejs" }
      ],
      helpTopics: {
        properties: [],
        events: []
      },
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
    <h-checkbox v-model="ckChecked" text="Item checked"
      :checked="ckChecked"/>
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
    <h-checkbox v-model="checkedObjects"
      :text="checkedObjectsOptions[0].name"
      :value="checkedObjectsOptions[0]"
    />
    <h-checkbox v-model="checkedObjects"
      :text="checkedObjectsOptions[1].name"
      :value="checkedObjectsOptions[1]"
    />
    <h-checkbox v-model="checkedObjects"
      :text="checkedObjectsOptions[2].name"
      :value="checkedObjectsOptions[2]"
    />
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
    };
  },
  methods: {
    goToElement(refName) {
      this.$refs.pl.goToElement(this.$refs[refName]);
    }
  }
};
</script>
