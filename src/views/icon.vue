<template>
  <div>
    <h1>Icons</h1>

    <div class="text-primary" style="background-color: lightgray">
      <b>Note:</b> This component has support for <b>Font Awesome Icons 5.x</b>
    </div>

      <h1>Colors</h1>
      <h-fa-icon class="bg-primary h-pa-md" icon="fas fa-camera-retro" textcolor="text-white" @click="iconClick"/>
      <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-primary"/>
      <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-secondary"/>
      <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-positive"/>
      <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-negative"/>
      <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-info"/>
      <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-warning"/>

      <pre v-highlightjs="iconColors">
        <code class="html">
        </code>
      </pre>

      <h1>Sizes</h1>
      <h-fa-icon icon="fas fa-camera-retro" size="12px"/>
      <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="18px"/>
      <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="24px"/>
      <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="36px"/>
      <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="48px"/>

      <pre v-highlightjs="iconSizes">
        <code class="html">
        </code>
      </pre>

      <h1>Animating Icons</h1>
      <h-fa-icon class="h-pa-xs" icon="fas fa-spinner" spin/>
      <h-fa-icon class="h-pa-xs" icon="fas fa-circle-notch" spin/>
      <h-fa-icon class="h-pa-xs" icon="fas fa-sync" spin/>
      <h-fa-icon class="h-pa-xs" icon="fas fa-cog" spin/>
      <h-fa-icon class="h-pa-xs" icon="fas fa-spinner" pulse/>
      <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" spin/>

      <pre v-highlightjs="iconAnimate">
        <code class="html">
        </code>
      </pre>

      <h1>Counters</h1>
      <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="24px" textcolor="text-primary">
        <h-counter bgcolor="bg-negative" textcolor="text-white">1</h-counter>
      </h-fa-icon>
      <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="36px">
        <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
      </h-fa-icon>

      <pre v-highlightjs="iconCounter">
        <code class="html">
        </code>
      </pre>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>textcolor</div>
        <div>icon</div>
        <div>size</div>
        <div>pulse</div>
        <div>spin</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the color of the icon</div>
        <div>Sets the icon</div>
        <div>Sets the icon size. Default: '16px'. Example: '24px'</div>
        <div>Sets to pulse mode</div>
        <div>Sets to spin mode</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@click</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on icon click</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      iconColors: `
<h-fa-icon class="bg-primary h-pa-md" icon="fas fa-camera-retro" textcolor="text-white" @click="iconClick"/>
<h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-primary"/>
<h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-secondary"/>
<h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-positive"/>
<h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-negative"/>
<h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-info"/>
<h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-warning"/>
      `,
      iconSizes: `
<h-fa-icon icon="fas fa-camera-retro" size="12px"/>
<h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="18px"/>
<h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="24px"/>
<h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="36px"/>
<h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="48px"/>
      `,
      iconAnimate: `
<h-fa-icon class="h-pa-xs" icon="fas fa-spinner" spin/>
<h-fa-icon class="h-pa-xs" icon="fas fa-circle-notch" spin/>
<h-fa-icon class="h-pa-xs" icon="fas fa-sync" spin/>
<h-fa-icon class="h-pa-xs" icon="fas fa-cog" spin/>
<h-fa-icon class="h-pa-xs" icon="fas fa-spinner" pulse/>
<h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" spin/>
      `,
      iconCounter: `
<h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="24px">
  <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
</h-fa-icon>
<h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="36px">
  <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
</h-fa-icon>
      `
    }
  },
  methods: {
    iconClick () {
      console.log('icon click')
    }
  }
}
</script>
