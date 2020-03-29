<template>
  <h-page-content padding>
    <div class="row">
      <div class="col">
        <div class="text-h4">Icons</div>

        <div ref="icon-color"/>
        <comp-code class="h-mt-lg" title="Colors" :code="iconColors">
          <div class="row">
            <h-icon class="bg-primary h-pa-md" icon="fas fa-camera-retro" text-color="text-white"/>
            <h-icon class="h-pa-md" icon="fas fa-camera-retro" text-color="text-primary"/>
            <h-icon class="h-pa-md" icon="fas fa-camera-retro" text-color="text-secondary"/>
            <h-icon class="h-pa-md" icon="fas fa-camera-retro" text-color="text-positive"/>
            <h-icon class="h-pa-md" icon="fas fa-camera-retro" text-color="text-negative"/>
            <h-icon class="h-pa-md" icon="fas fa-camera-retro" text-color="text-info"/>
            <h-icon class="h-pa-md" icon="fas fa-camera-retro" text-color="text-warning"/>
          </div>
        </comp-code>

        <div ref="icon-sizes"/>
        <comp-code class="h-mt-lg" title="Sizes" :code="iconSizes">
          <div class="row">
            <h-icon icon="fas fa-camera-retro" size="12px"/>
            <h-icon class="h-pa-xs" icon="fas fa-camera-retro" size="18px"/>
            <h-icon class="h-pa-xs" icon="fas fa-camera-retro" size="24px"/>
            <h-icon class="h-pa-xs" icon="fas fa-camera-retro" size="36px"/>
            <h-icon class="h-pa-xs" icon="fas fa-camera-retro" size="48px"/>
          </div>
        </comp-code>

        <div ref="icon-md"/>
        <comp-code class="h-mt-lg" title="Material Design" :code="iconMaterial">
          <div class="row">
            <h-icon class="h-pa-xs" icon="camera_alt" size="18px"/>
            <h-icon class="h-pa-xs" icon="flip_camera_android" size="18px"/>
            <h-icon class="h-pa-xs" icon="fas fa-th-large" size="18px"/>
            <h-icon class="h-pa-xs" icon="surround_sound" size="18px"/>
            <h-icon class="h-pa-xs" icon="wb_cloudy" size="18px"/>
            <h-icon class="h-pa-xs" icon="directions_bike" size="18px"/>
          </div>
        </comp-code>

        <div ref="icon-fa"/>
        <comp-code class="h-mt-lg" title="Fonte Awesome" :code="iconFonteAwesome">
          <div class="row">
            <h-icon class="h-pa-xs" icon="fas fa-camera" size="18px"/>
            <h-icon class="h-pa-xs" icon="dashboard" size="18px"/>
            <h-icon class="h-pa-xs" icon="fas fa-volume-up" size="18px"/>
            <h-icon class="h-pa-xs" icon="fas fa-cloud" size="18px"/>
            <h-icon class="h-pa-xs" icon="fab fa-accessible-icon" size="18px"/>
          </div>
        </comp-code>

        <div ref="icon-faanimating"/>
        <comp-code class="h-mt-lg" title="Animating" :code="iconAnimate">
          <div class="row">
            <h-icon class="h-pa-xs" icon="fas fa-spinner" spin/>
            <h-icon class="h-pa-xs" icon="fas fa-circle-notch" spin/>
            <h-icon class="h-pa-xs" icon="fas fa-sync" spin/>
            <h-icon class="h-pa-xs" icon="fas fa-cog" spin/>
            <h-icon class="h-pa-xs" icon="fas fa-spinner" pulse/>
            <h-icon class="h-pa-xs" icon="fas fa-stroopwafel" spin/>
          </div>
        </comp-code>

        <div ref="icon-svg"/>
        <comp-code class="h-mt-lg" title="SVG" :code="iconSVG">
          <div class="row">
            <h-icon class="h-pa-xs" image icon="imgIcons/svg/camera-24px.svg" size="24px"/>
            <h-icon class="h-pa-xs" image icon="imgIcons/svg/directions_bike-24px.svg" size="24px"/>
            <h-icon class="h-pa-xs" image icon="imgIcons/svg/bag_currency.svg" size="24px"/>
          </div>
        </comp-code>

        <div ref="icon-png"/>
        <comp-code class="h-mt-lg" title="PNG" :code="iconPNG">
          <div class="row">
            <h-icon class="h-pa-xs" image icon="imgIcons/png/logo_linux.png" size="24px"/>
            <h-icon class="h-pa-xs" image icon="imgIcons/png/logo_gmail.png" size="24px"/>
            <h-icon class="h-pa-xs" image icon="imgIcons/png/logo_icloud.png" size="24px"/>
          </div>
        </comp-code>

        <div ref="icon-counter"/>
        <comp-code class="h-mt-lg" title="Counters" :code="iconCounter">
          <div class="row">
            <h-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="24px" text-color="text-primary">
              <h-counter bg-color="bg-negative" text-color="text-white">1</h-counter>
            </h-icon>
            <h-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="36px">
              <h-counter bg-color="bg-negative" text-color="text-white">12</h-counter>
            </h-icon>
          </div>
        </comp-code>

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
            <h-list-item @click="goToElement('icon-color')">
              <h-list-item-content>
                <h-list-item-text title="Color"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('icon-sizes')">
              <h-list-item-content>
                <h-list-item-text title="Sizes"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-header text="Material Design"/>
            <h-list-item @click="goToElement('icon-md')">
              <h-list-item-content>
                <h-list-item-text title="Example"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-header text="Fonte Awesome"/>
            <h-list-item @click="goToElement('icon-fa')">
              <h-list-item-content>
                <h-list-item-text title="Example"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('icon-faanimating')">
              <h-list-item-content>
                <h-list-item-text title="Animating"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-header text="Image"/>
            <h-list-item @click="goToElement('icon-svg')">
              <h-list-item-content>
                <h-list-item-text title="SVG"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('icon-png')">
              <h-list-item-content>
                <h-list-item-text title="PNG"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-header text="Others"/>
            <h-list-item @click="goToElement('icon-counter')">
              <h-list-item-content>
                <h-list-item-text title="Counters"></h-list-item-text>
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
      iconColors: `
<div class="row">
  <h-icon class="bg-primary h-pa-md" icon="fas fa-camera-retro"
    text-color="text-white"/>
  <h-icon class="h-pa-md" icon="fas fa-camera-retro"
    text-color="text-primary"/>
  <h-icon class="h-pa-md" icon="fas fa-camera-retro"
    text-color="text-secondary"/>
  <h-icon class="h-pa-md" icon="fas fa-camera-retro"
    text-color="text-positive"/>
  <h-icon class="h-pa-md" icon="fas fa-camera-retro"
    text-color="text-negative"/>
  <h-icon class="h-pa-md" icon="fas fa-camera-retro"
    text-color="text-info"/>
  <h-icon class="h-pa-md" icon="fas fa-camera-retro"
    text-color="text-warning"/>
</div>
`,
      iconSizes: `
<div class="row">
  <h-icon icon="fas fa-camera-retro" size="12px"/>
  <h-icon class="h-pa-xs" icon="fas fa-camera-retro" size="18px"/>
  <h-icon class="h-pa-xs" icon="fas fa-camera-retro" size="24px"/>
  <h-icon class="h-pa-xs" icon="fas fa-camera-retro" size="36px"/>
  <h-icon class="h-pa-xs" icon="fas fa-camera-retro" size="48px"/>
</div>
`,
      iconMaterial: `
<div class="row">
  <h-icon class="h-pa-xs" icon="camera_alt" size="18px"/>
  <h-icon class="h-pa-xs" icon="flip_camera_android" size="18px"/>
  <h-icon class="h-pa-xs" icon="fas fa-th-large" size="18px"/>
  <h-icon class="h-pa-xs" icon="surround_sound" size="18px"/>
  <h-icon class="h-pa-xs" icon="wb_cloudy" size="18px"/>
  <h-icon class="h-pa-xs" icon="directions_bike" size="18px"/>
</div>
`,
      iconFonteAwesome: `
<div class="row">
  <h-icon class="h-pa-xs" icon="fas fa-camera" size="18px"/>
  <h-icon class="h-pa-xs" icon="dashboard" size="18px"/>
  <h-icon class="h-pa-xs" icon="fas fa-volume-up" size="18px"/>
  <h-icon class="h-pa-xs" icon="fas fa-cloud" size="18px"/>
  <h-icon class="h-pa-xs" icon="fab fa-accessible-icon" size="18px"/>
</div>
`,
      iconAnimate: `
<div class="row">
  <h-icon class="h-pa-xs" icon="fas fa-spinner" spin/>
  <h-icon class="h-pa-xs" icon="fas fa-circle-notch" spin/>
  <h-icon class="h-pa-xs" icon="fas fa-sync" spin/>
  <h-icon class="h-pa-xs" icon="fas fa-cog" spin/>
  <h-icon class="h-pa-xs" icon="fas fa-spinner" pulse/>
  <h-icon class="h-pa-xs" icon="fas fa-stroopwafel" spin/>
</div>
`,
      iconSVG: `
<div class="row">
  <h-icon class="h-pa-xs" image
    icon="imgIcons/svg/camera-24px.svg" size="24px"/>
  <h-icon class="h-pa-xs" image
    icon="imgIcons/svg/directions_bike-24px.svg" size="24px"/>
  <h-icon class="h-pa-xs" image
    icon="imgIcons/svg/bag_currency.svg" size="24px"/>
</div>      
`,
      iconPNG: `
<div class="row">
  <h-icon class="h-pa-xs" image
    icon="imgIcons/png/logo_linux.png" size="24px"/>
  <h-icon class="h-pa-xs" image
    icon="imgIcons/png/logo_gmail.png" size="24px"/>
  <h-icon class="h-pa-xs" image
    icon="imgIcons/png/logo_icloud.png" size="24px"/>
</div>
`,
      iconCounter: `
<div class="row">
  <h-icon class="h-pa-xs" icon="fas fa-stroopwafel"
    size="24px" text-color="text-primary"
  >
    <h-counter bgcolor="bg-negative" text-color="text-white">
      1
    </h-counter>
  </h-icon>
  <h-icon class="h-pa-xs" icon="fas fa-stroopwafel"
    size="36px"
  >
    <h-counter bgcolor="bg-negative" text-color="text-white">
      12
    </h-counter>
  </h-icon>
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
      viewport.goToElement(this.$refs[refName])
    }
  }
}
</script>
