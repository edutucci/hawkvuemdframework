<template>
  <page-layout ref="pl" title="Rating">
        <template v-slot:components>
          <div ref="rt-normalpoint"/>
            <comp-code class="h-mt-lg" title="Normal Point" :code="ex1" :script="ex1Script"
              javascript
            >
              <h-rating v-model="rating1" showmessages/>
            </comp-code>

            <div ref="rt-halfpoint"/>
            <comp-code class="h-mt-lg" title="Half Point" :code="ex2" :script="ex2Script"
              javascript
            >
              <h-rating v-model="rating2" showmessages halfpoints/>
            </comp-code>

            <div ref="rt-custommessages"/>
            <comp-code class="h-mt-lg" title="Custom Messages" :code="ex3" :script="ex3Script"
              javascript
            >
              <h-rating
                :messages="['1 star', '2 stars', '3 stars', '4 stars', '5 stars']"
                v-model="rating3"
                halfpoints
                showmessages
              />
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
            <h-list-item @click="goToElement('rt-normalpoint')">
              <h-list-item-content>
                <h-list-item-text title="Normal Point"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('rt-halfpoint')">
              <h-list-item-content>
                <h-list-item-text title="Half Point"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('rt-custommessages')">
              <h-list-item-content>
                <h-list-item-text title="Custom Messages"></h-list-item-text>
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

      helpTopics: {
        properties: [],
        events: []
      },
      rating1: 2,
      rating2: 3.5,
      rating3: 3.5,
      ex1: `
<div>
  <h-rating v-model="rating1" showmessages/>
</div>
`,
      ex1Script: `
export default {
  data () {
    return {
      rating1: 3
    }
  }
}
`,
      ex2: `
<div>
  <h-rating v-model="rating2" showmessages halfpoints/>
</div>
`,
      ex2Script: `
export default {
  data () {
    return {
      rating2: 3.5
    }
  }
}
`,
      ex3: `
<h-rating
  :messages="['1 star', '2 stars', '3 stars', '4 stars', '5 stars']"
  v-model="rating3"
  halfpoints
  showmessages
/>
`,
      ex3Script: `
export default {
  data () {
    return {
      rating3: 3.5
    }
  }
}
`
    }
  },

  methods: {
    goToElement(refName) {

      this.$refs.pl.goToElement(this.$refs[refName]);
    },

  }
}
</script>
