<template>
  <div class="full-size">
    <h1> Contained Buttons </h1>
    <div>
      <h-btn contained bgcolor="bg-white" textcolor="text-black" text="white" :left-icon="['fas', 'envelope']" @click="btnClick"/>
      <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="primary" :right-icon="['fas', 'envelope']"/>
      <h-btn contained bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
      <h-btn contained bgcolor="bg-positive" textcolor="text-white" text="positive" :right-icon="['fas', 'envelope']"/>
      <h-btn contained bgcolor="bg-negative" textcolor="text-white" text="negative"/>
      <h-btn contained bgcolor="bg-info" textcolor="text-white" text="info"/>
      <h-btn contained bgcolor="bg-warning" textcolor="text-white" text="warning"/>
    </div>

      <pre v-highlightjs="containedButtons">
        <code class="html">
        </code>
      </pre>

    <h1>Text Buttons</h1>
    <div>
      <h-btn textbutton textcolor="text-black" text="black"/>
      <h-btn textbutton textcolor="text-primary" text="primary"/>
      <h-btn textbutton textcolor="text-secondary" text="secondary"/>
      <h-btn textbutton textcolor="text-positive" text="positive"/>
      <h-btn textbutton textcolor="text-negative" text="negative"/>
      <h-btn textbutton textcolor="text-info" text="info"/>
      <h-btn textbutton textcolor="text-warning" text="warning"/>
    </div>

    <pre v-highlightjs="textbuttons">
      <code class="html">
      </code>
    </pre>

    <h1>Outlined Buttons</h1>
    <div>
      <h-btn outlined text="disabled" disabled/>
      <h-btn outlined textcolor="text-black" text="black"/>
      <h-btn outlined textcolor="text-primary" text="primary"/>
      <h-btn outlined textcolor="text-secondary" text="secondary"/>
      <h-btn outlined textcolor="text-positive" text="positive"/>
      <h-btn outlined textcolor="text-negative" text="negative"/>
      <h-btn outlined textcolor="text-info" text="info"/>
      <h-btn outlined textcolor="text-warning" text="warning"/>
    </div>

    <pre v-highlightjs="outlinedButtons">
      <code class="html">
      </code>
    </pre>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>bgcolor</div>
        <div>textcolor</div>
        <div>text</div>
        <div>left-icon</div>
        <div>right-icon</div>
        <div>contained</div>
        <div>textbutton</div>
        <div>outlined</div>
        <div>disabled</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>Array</div>
        <div>Array</div>
        <div>Boolean</div>
        <div>Boolean</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Background color of the button</div>
        <div>Text color of the button</div>
        <div>Text of the button</div>
        <div>Sets the icon to left of the button</div>
        <div>Sets the icon to right of the button</div>
        <div>Sets to button to contained mode</div>
        <div>Sets to button to textbutton mode</div>
        <div>Sets to button to outlined mode</div>
        <div>Button is disabled</div>
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
        <div>Triggered on button click</div>
      </div>
    </div>

    <div class="h-pt-lg"></div>
    <h1>Float Action</h1>
    <div>
      <h-btn-float bgcolor="bg-positive" textcolor="text-white" @click="$refs.nav.open()" :icon="['fas', 'envelope']"> </h-btn-float>
      <h-btn-float bgcolor="bg-secondary" textcolor="text-white" @click="$refs.nav.close()" :icon="['fas', 'envelope']">  </h-btn-float>
      <h-btn-float bgcolor="bg-negative" textcolor="text-white" @click="$refs.nav.open()" :icon="['fas', 'plus']"> </h-btn-float>
      <h-btn-float bgcolor="bg-secondary" :icon="['fas', 'bars']"> </h-btn-float>
      <h-btn-float minifloat :icon="['fas', 'plus']"> </h-btn-float>
      <h-btn-float minifloat bgcolor="bg-warning" :icon="['fas', 'plus']"> </h-btn-float>
    </div>

    <pre v-highlightjs="floatActionButtons">
      <code class="html">
      </code>
    </pre>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>bgcolor</div>
        <div>textcolor</div>
        <div>icon</div>
        <div>minifloat</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>Array</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Background color of the button</div>
        <div>Text color of the button</div>
        <div>Sets the icon to the button</div>
        <div>Sets to button to minifloat mode</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@click</div>
      </div>
      <div>
        <h3 class="h-pl-md">Description</h3>
        <div>Triggered on button click</div>
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
      containedButtons: `
<div>
  <h-btn contained bgcolor="bg-white" textcolor="text-black" label="white" :icon="['fas', 'envelope']"  :lefticon="['fas', 'envelope']"/>
  <h-btn contained bgcolor="bg-primary" textcolor="text-white" label="primary" :icon="['fas', 'envelope']" :lefticon="['fas', 'plus']"/>
  <h-btn contained bgcolor="bg-secondary" textcolor="text-white" label="secondary"/>  
  <h-btn contained bgcolor="bg-positive" textcolor="text-white" label="positive" :icon="['fas', 'envelope']"/> 
  <h-btn contained bgcolor="bg-negative" textcolor="text-white" label="negative"/> 
  <h-btn contained bgcolor="bg-info" textcolor="text-white" label="info"/> 
  <h-btn contained bgcolor="bg-warning" textcolor="text-white" label="warning"/>
</div>
      `,
      textbuttons: `
<div>
  <h-btn textbutton textcolor="text-black" label="black"/>
  <h-btn textbutton textcolor="text-primary" label="primary"/>
  <h-btn textbutton textcolor="text-secondary" label="secondary"/>  
  <h-btn textbutton textcolor="text-positive" label="positive"/> 
  <h-btn textbutton textcolor="text-negative" label="negative"/> 
  <h-btn textbutton textcolor="text-info" label="info"/> 
  <h-btn textbutton textcolor="text-warning" label="warning"/>      
</div>
      `,
      outlinedButtons: `
<div>
  <h-btn outlined textcolor="text-black" label="black"/>
  <h-btn outlined textcolor="text-primary" label="primary"/>
  <h-btn outlined textcolor="text-secondary" label="secondary"/>  
  <h-btn outlined textcolor="text-positive" label="positive"/> 
  <h-btn outlined textcolor="text-negative" label="negative"/> 
  <h-btn outlined textcolor="text-info" label="info"/> 
  <h-btn outlined textcolor="text-warning" label="warning"/>      
</div>
      `,
      floatActionButtons: `
<div>
  <h-btn-float bgcolor="bg-positive" textcolor="text-white" @click="$refs.nav.open()" :icon="['fas', 'envelope']"> </h-btn-float>
  <h-btn-float bgcolor="bg-secondary" textcolor="text-white" @click="$refs.nav.close()" :icon="['fas', 'envelope']">  </h-btn-float>
  <h-btn-float bgcolor="bg-negative" textcolor="text-white" @click="$refs.nav.open()" :icon="['fas', 'plus']"> </h-btn-float>
  <h-btn-float bgcolor="bg-secondary" :icon="['fas', 'bars']"> </h-btn-float>
  <h-btn-float minifloat :icon="['fas', 'plus']"> </h-btn-float>
  <h-btn-float minifloat bgcolor="bg-warning" :icon="['fas', 'plus']"> </h-btn-float>      
</div>      
      `
    }
  },
  methods: {
    btnClick () {
      console.log('btnclick')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../css/variables.styl'

.teststylus
  background-color $negative

</style>
