<template>
  <page-layout ref="pl" title="Image">
    <template v-slot:components>
      <div ref="img-types"/>
      <comp-code title="Types" :code="imgTypes">
        <div class="avatar_row row wrap align-items-center">
          <div class="col-auto h-mb-sm">
            <h-image src="/img/landscape.jpeg" size="128px"/>
          </div>
          <div class="col-auto h-ml-sm h-mb-sm">
            <h-image src="/img/landscape1.jpeg" avatar size="128px"/>
          </div>
          <div class="col-auto h-ml-sm">
            <h-image src="/img/landscape2.jpeg" border-radius size="128px"/>
          </div>
        </div>
      </comp-code>

      <div ref="img-customsizes"/>
      <comp-code class="h-mt-md" title="Image Custom Sizes" :code="imgSizes">
        <div class="avatar_row row wrap align-items-center">
          <div class="col-auto h-mb-sm">
            <h-image src="/img/landscape.jpeg" style="width: 250px; height: 160px;"/>
          </div>
          <div class="col-auto h-ml-sm h-mb-sm">
            <h-image src="/img/landscape1.jpeg" style="width: 400px; height: 250px;"/>
          </div>
          <div class="col-auto h-ml-sm">
            <h-image src="/img/landscape2.jpeg" style="width: 300px; height: 200px;"/>
          </div>
        </div>
      </comp-code>

      <div ref="img-landscape"/>
      <comp-code class="h-mt-md" title="Landscape" :code="imgLandscape">
        <div class="avatar_row row">
          <div class="col">
            <h-image src="/img/landscape.jpeg" style="width: 100%; height: 800px;"/>
          </div>
        </div>
      </comp-code>

      <div ref="img-avatarstyles"/>
      <comp-code class="h-mt-md" title="Avatar Styles" :code="imgAvatar">
        <div class="avatar_row row align-items-center">
          <h-image src="/avatar/Konsta.jpg"/>
          <h-image src="/avatar/Eduard.jpg" avatar/>
          <h-image src="/avatar/AnaArmas.jpg" border-radius/>
        </div>
        <div class="avatar_row flex align-items-center">
          <h-image bg-color="bg-red400">1</h-image>
          <h-image avatar bg-color="bg-yellow400">A</h-image>
          <h-image border-radius bg-color="bg-green400">F</h-image>
        </div>
      </comp-code>

      <div ref="img-avatarcustomsizes"/>
      <comp-code class="h-mt-md" title="Avatar Custom Sizes" :code="imgAvatarSizes">
        <div class="avatar_row flex align-items-center">
          <h-image src="/avatar/Konsta.jpg" size="48px"/>
          <h-image src="/avatar/Eduard.jpg" avatar size="64px"/>
          <h-image src="/avatar/AnaArmas.jpg" border-radius size="82px"/>
        </div>
        <div class="avatar_row flex align-items-center">
          <h-image bg-color="bg-red400" size="48px">1</h-image>
          <h-image avatar bg-color="bg-yellow400" size="64px">A</h-image>
          <h-image border-radius bg-color="bg-green400" size="82px">F</h-image>
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
          <h-list-header text="Usage"/>
          <h-list-item @click="goToElement('img-types')">
            <h-list-item-content>
              <h-list-item-text title="Types"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('img-customsizes')">
            <h-list-item-content>
              <h-list-item-text title="Custom Sizes"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('img-landscape')">
            <h-list-item-content>
              <h-list-item-text title="Landscape"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-header text="Avatar"/>
          <h-list-item @click="goToElement('img-avatarstyles')">
            <h-list-item-content>
              <h-list-item-text title="Styles"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('img-avatarcustomsizes')">
            <h-list-item-content>
              <h-list-item-text title="Custom Sizes"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
        </h-list>
      </list-help>
    </template>
  </page-layout>

</template>

<script>

import PageLayout from '../pageLayout'
import helpTopics from './help'

export default {
  components: {
    PageLayout
  },
  data () {
    return {
      helpTopics: {
        properties: [],
        events: []
      },
      imgTypes: `
<div class="avatar_row row wrap align-items-center">
  <div class="col-auto h-mb-sm">
    <h-image src="img/landscape.jpeg" size="128px"/>
  </div>
  <div class="col-auto h-ml-sm h-mb-sm">
    <h-image src="img/landscape1.jpeg" avatar size="128px"/>
  </div>
  <div class="col-auto h-ml-sm">
    <h-image src="img/landscape2.jpeg" border-radius size="128px"/>
  </div>
</div>
`,
      imgSizes: `
<div class="avatar_row row wrap align-items-center">
  <div class="col-auto h-mb-sm">
    <h-image src="img/landscape.jpeg" style="width: 250px; height: 160px;"/>
  </div>
  <div class="col-auto h-ml-sm h-mb-sm">
    <h-image src="img/landscape1.jpeg" style="width: 400px; height: 250px;"/>
  </div>
  <div class="col-auto h-ml-sm">
    <h-image src="img/landscape2.jpeg" style="width: 300px; height: 200px;"/>
  </div>
</div>
`,
      imgLandscape: `
<div class="avatar_row row">
  <div class="col">
    <h-image src="img/landscape.jpeg" style="width: 100%; height: 800px;"/>
  </div>
</div>
`,
      imgAvatar: `
<div class="avatar_row flex align-items-center">
  <h-image src="avatar/Konsta.jpg"/>
  <h-image src="avatar/Eduard.jpg" avatar/>
  <h-image src="avatar/AnaArmas.jpg" border-radius/>
</div>
<div class="avatar_row flex align-items-center">
  <h-image bg-color="bg-red400">1</h-image>
  <h-image avatar bg-color="bg-yellow400">A</h-image>
  <h-image border-radius bg-color="bg-green400">F</h-image>
</div>
`,
      imgAvatarSizes: `
<div class="avatar_row flex align-items-center">
  <h-image src="avatar/Konsta.jpg" size="48px"/>
  <h-image src="avatar/Eduard.jpg" avatar size="64px"/>
  <h-image src="avatar/AnaArmas.jpg" border-radius size="82px"/>
</div>
<div class="avatar_row flex align-items-center">
  <h-image bg-color="bg-red400" size="48px">1</h-image>
  <h-image avatar bg-color="bg-yellow400" size="64px">A</h-image>
  <h-image border-radius bg-color="bg-green400" size="82px">F</h-image>
</div>
`
    }
  },
  mounted () {
    this.helpTopics.properties = helpTopics.properties
    this.helpTopics.events = helpTopics.events
  },
  methods: {
    goToElement (refName) {
      this.$ref.pl.goToElement(this.$refs[refName])
    }
  }
}
</script>

<style scoped>
.avatar_row > .h-image-container:not(:first-child) {
  margin-left: 5px;
}

.avatar_row:not(:first-child) {
  margin-top: 5px;
}

</style>
