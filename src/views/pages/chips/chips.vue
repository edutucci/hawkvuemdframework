<template>
  <page-layout ref="pl" title="Chips">
    <template v-slot:components>
      <div ref="chip-standard" />
      <comp-code class="h-mt-lg" title="Standard" :code="chipStandard">
        <div class="row">
          <div class="col">
            <h-chips text="Peyton Smith" />
            <h-chips text="Jonas Eckhart" />
            <h-chips text="John Pella" />
            <h-chips text="Francis Pernille" />
          </div>
        </div>

        <div class="row h-mt-md">
          <div class="col">
            <h-chips outlined text="Peyton Smith" />
            <h-chips outlined text="Jonas Eckhart" />
            <h-chips outlined text="John Pella" />
            <h-chips outlined text="Francis Pernille" />
          </div>
        </div>

        <div class="row h-mt-md">
          <div class="col">
            <h-chips dense text="Peyton Smith" />
            <h-chips dense text="Jonas Eckhart" />
            <h-chips dense text="John Pella" />
            <h-chips dense text="Francis Pernille" />
          </div>
        </div>

        <div class="row h-mt-md">
          <div class="col">
            <h-chips dense outlined text="Peyton Smith" />
            <h-chips dense outlined text="Jonas Eckhart" />
            <h-chips dense outlined text="John Pella" />
            <h-chips dense outlined text="Francis Pernille" />
          </div>
        </div>
      </comp-code>
      <div ref="chip-icons" />
      <comp-code class="h-mt-lg" title="Icons" :code="chipIcons">
        <div class="row">
          <div class="col">
            <h-chips text="Portland" icon="fas fa-map-marker-alt" />
            <h-chips text="Biking" icon="fas fa-biking" />
            <h-chips outlined text="Portland" icon="fas fa-map-marker-alt" />
            <h-chips outlined text="Biking" icon="fas fa-biking" />
          </div>
        </div>

        <div class="row h-mt-md">
          <div class="col">
            <h-chips dense text="Portland" icon="fas fa-map-marker-alt" />
            <h-chips dense text="Biking" icon="fas fa-biking" />
            <h-chips dense outlined text="Portland" icon="fas fa-map-marker-alt" />
            <h-chips dense outlined text="Biking" icon="fas fa-biking" />
          </div>
        </div>
      </comp-code>

      <div ref="chip-avatar" />
      <comp-code class="h-mt-lg" title="Avatar" :code="chipAvatar">
        <div class="row">
          <div class="col">
            <h-chips text="Kostenlose" avatar="avatar/Kostenlose.jpg" />
            <h-chips text="Eduard" avatar="avatar/Eduard.jpg" />
            <h-chips outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg" />
            <h-chips outlined text="Eduard" avatar="avatar/Eduard.jpg" />
          </div>
        </div>

        <div class="row h-mt-md">
          <div class="col">
            <h-chips dense text="Kostenlose" avatar="avatar/Kostenlose.jpg" />
            <h-chips dense text="Eduard" avatar="avatar/Eduard.jpg" />
            <h-chips dense outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg" />
            <h-chips dense outlined text="Eduard" avatar="avatar/Eduard.jpg" />
          </div>
        </div>
      </comp-code>

      <div ref="chip-select" />
      <comp-code class="h-mt-lg" title="Select" :code="chipSelect">
        <div class="row">
          <div class="col">
            <h-chips filter v-model="chipsFilter.travel" text="Travel" icon="fas fa-plane" />
            <h-chips filter v-model="chipsFilter.movies" text="Movies" icon="fas fa-film" />
            <h-chips filter v-model="chipsFilter.food" text="Food" icon="fas fa-utensils" />
          </div>
        </div>
      </comp-code>
      <tabs-help class="h-mt-md" :properties="helpTopics.properties" :events="helpTopics.events" />
    </template>

    <template v-slot:help>
      <list-help>
        <h-list>
          <h-list-header text="Styles" />
          <h-list-item @click="goToElement('chip-standard')">
            <h-list-item-content>
              <h-list-item-text title="Standard"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('chip-icons')">
            <h-list-item-content>
              <h-list-item-text title="Icons"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('chip-avatar')">
            <h-list-item-content>
              <h-list-item-text title="Avatar"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('chip-select')">
            <h-list-item-content>
              <h-list-item-text title="Select"></h-list-item-text>
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
      helpTopics: {
        properties: [],
        events: []
      },
      chipsFilter: {
        travel: false,
        movies: false,
        food: false
      },
      chipStandard: `
<div class="row">
  <div class="col">
    <h-chips text="Peyton Smith"/>
    <h-chips text="Jonas Eckhart"/>
    <h-chips text="John Pella"/>
    <h-chips text="Francis Pernille"/>
  </div>
</div>
<div class="row h-mt-md">
  <div class="col">
    <h-chips outlined text="Peyton Smith"/>
    <h-chips outlined text="Jonas Eckhart"/>
    <h-chips outlined text="John Pella"/>
    <h-chips outlined text="Francis Pernille"/>
  </div>
</div>
<div class="row h-mt-md">
  <div class="col">
    <h-chips dense text="Peyton Smith"/>
    <h-chips dense text="Jonas Eckhart"/>
    <h-chips dense text="John Pella"/>
    <h-chips dense text="Francis Pernille"/>
  </div>
</div>
<div class="row h-mt-md">
  <div class="col">
    <h-chips dense outlined text="Peyton Smith"/>
    <h-chips dense outlined text="Jonas Eckhart"/>
    <h-chips dense outlined text="John Pella"/>
    <h-chips dense outlined text="Francis Pernille"/>
  </div>
</div>
`,
      chipIcons: `
<div class="row">
  <div class="col">
    <h-chips text="Portland" icon="fas fa-map-marker-alt"/>
    <h-chips text="Biking" icon="fas fa-biking"/>
    <h-chips outlined text="Portland" icon="fas fa-map-marker-alt"/>
    <h-chips outlined text="Biking" icon="fas fa-biking"/>
  </div>
</div>
<div class="row h-mt-md">
  <div class="col">
    <h-chips dense text="Portland" icon="fas fa-map-marker-alt"/>
    <h-chips dense text="Biking" icon="fas fa-biking"/>
    <h-chips dense outlined text="Portland" icon="fas fa-map-marker-alt"/>
    <h-chips dense outlined text="Biking" icon="fas fa-biking"/>
  </div>
</div>
`,
      chipAvatar: `
<div class="row">
  <div class="col">
    <h-chips text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
    <h-chips text="Eduard" avatar="avatar/Eduard.jpg"/>
    <h-chips outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
    <h-chips outlined text="Eduard" avatar="avatar/Eduard.jpg"/>
  </div>
</div>
<div class="row h-mt-md">
  <div class="col">
    <h-chips dense text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
    <h-chips dense text="Eduard" avatar="avatar/Eduard.jpg"/>
    <h-chips dense outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
    <h-chips dense outlined text="Eduard" avatar="avatar/Eduard.jpg"/>
  </div>
</div>
`,
      chipClosable: `
<div class="row">
  <div class="col">
    <h-chips closable text="Portland" icon="fas fa-map-marker-alt"/>
    <h-chips closable text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
    <h-chips closable outlined text="Portland" icon="fas fa-map-marker-alt"/>
    <h-chips closable outlined text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
  </div>
</div>
<div class="row h-mt-md">
  <div class="col">
    <h-chips dense closable text="Portland" icon="fas fa-map-marker-alt"/>
    <h-chips dense closable text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
    <h-chips dense outlined closable text="Portland" icon="fas fa-map-marker-alt"/>
    <h-chips dense outlined closable text="Kostenlose" avatar="avatar/Kostenlose.jpg"/>
  </div>
</div>
`,
      chipSelect: `
<div class="row">
  <div class="col">
    <h-chips filter v-model="chipsFilter.travel" text="Travel" icon="fas fa-plane"/>
    <h-chips filter v-model="chipsFilter.movies" text="Movies" icon="fas fa-film"/>
    <h-chips filter v-model="chipsFilter.food" text="Food" icon="fas fa-utensils"/>
  </div>
</div>
`,
      chipSelectScript: `
export default {
  data () {
    return {
      chipsFilter: {
        travel: false,
        movies: false,
        food: false
      }
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
