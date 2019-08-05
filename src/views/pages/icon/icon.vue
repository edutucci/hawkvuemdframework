<template>
  <h-page-content padding>
    <div class="text-h4">Icons</div>

    <div class="text-primary" style="background-color: lightgray">
      <b>Note:</b> This component has support for <b>Font Awesome Icons 5.x</b>
    </div>

    <comp-code class="h-mt-lg" title="Colors" :code="iconColors">
      <div>
        <h-fa-icon class="bg-primary h-pa-md" icon="fas fa-camera-retro" textcolor="text-white"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-primary"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-secondary"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-positive"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-negative"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-info"/>
        <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-warning"/>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Sizes" :code="iconSizes">
      <div>
        <h-fa-icon icon="fas fa-camera-retro" size="12px"/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="18px"/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="24px"/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="36px"/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="48px"/>
      </div>
    </comp-code>

    <h1>Animating Icons</h1>
    <comp-code class="h-mt-lg" title="Colors" :code="iconAnimate">
      <div>
        <h-fa-icon class="h-pa-xs" icon="fas fa-spinner" spin/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-circle-notch" spin/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-sync" spin/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-cog" spin/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-spinner" pulse/>
        <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" spin/>
      </div>
    </comp-code>

    <h1>Counters</h1>
    <comp-code class="h-mt-lg" title="Colors" :code="iconCounter">
      <div>
        <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="24px" textcolor="text-primary">
          <h-counter bgcolor="bg-negative" textcolor="text-white">1</h-counter>
        </h-fa-icon>
        <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="36px">
          <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
        </h-fa-icon>
      </div>
    </comp-code>

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

  </h-page-content>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      iconColors: `
<div>
  <h-fa-icon class="bg-primary h-pa-md" icon="fas fa-camera-retro" textcolor="text-white"/>
  <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-primary"/>
  <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-secondary"/>
  <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-positive"/>
  <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-negative"/>
  <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-info"/>
  <h-fa-icon class="h-pa-md" icon="fas fa-camera-retro" textcolor="text-warning"/>
</div>
`,
      iconSizes: `
<div>
  <h-fa-icon icon="fas fa-camera-retro" size="12px"/>
  <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="18px"/>
  <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="24px"/>
  <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="36px"/>
  <h-fa-icon class="h-pa-xs" icon="fas fa-camera-retro" size="48px"/>
</div>
`,
      iconAnimate: `
<div>
  <h-fa-icon class="h-pa-xs" icon="fas fa-spinner" spin/>
  <h-fa-icon class="h-pa-xs" icon="fas fa-circle-notch" spin/>
  <h-fa-icon class="h-pa-xs" icon="fas fa-sync" spin/>
  <h-fa-icon class="h-pa-xs" icon="fas fa-cog" spin/>
  <h-fa-icon class="h-pa-xs" icon="fas fa-spinner" pulse/>
  <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" spin/>
</div>
`,
      iconCounter: `
<div>
  <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="24px" textcolor="text-primary">
    <h-counter bgcolor="bg-negative" textcolor="text-white">1</h-counter>
  </h-fa-icon>
  <h-fa-icon class="h-pa-xs" icon="fas fa-stroopwafel" size="36px">
    <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
  </h-fa-icon>
</div>
`
    }
  }
}
</script>
