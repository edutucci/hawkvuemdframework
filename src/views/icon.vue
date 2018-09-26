<template>
  <div>
    <h1>Icons</h1>

    <div class="text-primary" style="background-color: lightgray">
      <b>Note:</b> This component has support for <b>Font Awesome Icons 5.0.0</b>
    </div>

      <h1>Colors</h1>
      <h-fa-icon class="bg-primary h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-white" size="lg" @click="iconClick"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-primary" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-secondary" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-positive" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-negative" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-info" size="lg"/>
      <h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-warning" size="lg"/>

      <pre v-highlightjs="iconColors">
        <code class="html">
        </code>
      </pre>

      <h1>Sizes</h1>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="xs"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="sm"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="lg"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="2x"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="4x"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="6x"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="8x"/>
      <h-fa-icon :icon="['fas', 'camera-retro']" size="10x"/>

      <pre v-highlightjs="iconSizes">
        <code class="html">
        </code>
      </pre>

      <h1>List</h1>

      <div class="flex">
        <div class="flex flex-column">
          <div class="flex flex-justify-center">
            <h-fa-icon :icon="['fas', 'home']" size="lg"/>
          </div>
          <div class="flex flex-justify-center">
            <h-fa-icon :icon="['fas', 'info']" size="lg"/>
          </div>
          <div class="flex flex-justify-center">
            <h-fa-icon :icon="['fas', 'spinner']" size="lg" pulse/>
          </div>
          <div class="flex flex-justify-center">
            <h-fa-icon :icon="['fas', 'sync']" size="lg" spin/>
          </div>
        </div>
      </div>

      <div class="flex flex-column">
        <div class="flex flex-column">
          <div class="flex flex-justify-center">
            | Home
          </div>
          <div class="flex flex-justify-center">
            | Info
          </div>
          <div class="flex flex-justify-center">
            | spinner
          </div>
          <div class="flex flex-justify-center">
            | sync
          </div>
        </div>
      </div>

      <pre v-highlightjs="iconList">
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
        <div>Array</div>
        <div>String</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the color of the icon</div>
        <div>Sets the icon</div>
        <div>Sets the icon size</div>
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
<h-fa-icon class="bg-primary h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-white" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-primary" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-secondary" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-positive" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-negative" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-info" size="lg"/>
<h-fa-icon class="h-pa-md" :icon="['fas', 'camera-retro']" textcolor="text-warning" size="lg"/>
      `,
      iconSizes: `
<h-fa-icon :icon=['fas', 'camera-retro'] size="xs"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="sm"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="lg"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="2x"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="4x"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="6x"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="8x"/>
<h-fa-icon :icon=['fas', 'camera-retro'] size="10x"/>  
      `,
      iconList: `
 <h-fa-icon :icon=['fas', 'home'] size="lg"/>
 <h-fa-icon :icon=['fas', 'info'] size="lg"/>
 <h-fa-icon :icon=['fas', 'spinner'] size="lg" pulse/>
 <h-fa-icon :icon=['fas', 'sync'] size="lg" spin/>
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
