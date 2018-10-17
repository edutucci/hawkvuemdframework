<template>
  <div>
    <h1> Contained Buttons </h1>
    <div>
      <div>
        <h-btn contained bgcolor="bg-white" textcolor="text-black" text="white" left-icon="fas fa-envelope" @click="btnClick"/>
        <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="primary" right-icon="fas fa-envelope"/>
        <h-btn contained bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
        <h-btn contained bgcolor="bg-positive" textcolor="text-white" text="positive"/>
        <h-btn contained bgcolor="bg-negative" textcolor="text-white" text="negative"/>
        <h-btn contained bgcolor="bg-info" textcolor="text-white" text="info"/>
        <h-btn contained bgcolor="bg-warning" textcolor="text-white" text="warning"/>
      </div>
      <div class="col-6">
        <h-btn contained class="full-width" bgcolor="bg-primary" textcolor="text-white" text="full width" right-icon="fas fa-envelope"/>
        <h-btn contained class="full-width" bgcolor="bg-positive" textcolor="text-white" text="full width" left-icon="fas fa-envelope"/>
      </div>
    </div>

      <pre v-highlightjs="containedButtons">
        <code class="html">
        </code>
      </pre>

    <h1>Text Buttons</h1>
    <div>
      <h-btn textbutton textcolor="text-black" text="black" @click="btnClick"/>
      <h-btn textbutton textcolor="text-primary" text="primary"/>
      <h-btn textbutton textcolor="text-secondary" text="secondary"/>
      <h-btn textbutton textcolor="text-positive" text="positive"/>
      <h-btn textbutton textcolor="text-negative" text="negative"/>
      <h-btn textbutton textcolor="text-info" text="info"/>
      <h-btn textbutton textcolor="text-warning" text="warning"/>
    </div>
    <div class="col-6">
      <h-btn class="full-width" textbutton textcolor="text-black" text="black"/>
      <h-btn class="full-width" textbutton textcolor="text-primary" text="primary"/>
    </div>

    <pre v-highlightjs="textbuttons">
      <code class="html">
      </code>
    </pre>

    <h1>Outlined Buttons</h1>
    <div>
      <h-btn outlined text="disabled" disabled/>
      <h-btn outlined textcolor="text-black" text="black" @click="btnClick"/>
      <h-btn outlined textcolor="text-primary" text="primary"/>
      <h-btn outlined textcolor="text-secondary" text="secondary"/>
      <h-btn outlined textcolor="text-positive" text="positive"/>
      <h-btn outlined textcolor="text-negative" text="negative"/>
      <h-btn outlined textcolor="text-info" text="info"/>
      <h-btn outlined textcolor="text-warning" text="warning"/>
    </div>

    <div class="col-6">
      <h-btn class="full-width" outlined text="disabled" disabled/>
      <h-btn class="full-width" outlined textcolor="text-black" text="black"/>
      <h-btn class="full-width" outlined textcolor="text-primary" text="primary"/>
    </div>

    <pre v-highlightjs="outlinedButtons">
      <code class="html">
      </code>
    </pre>

    <h1>Links</h1>
    <h-btn contained bgcolor="bg-primary">
      <html-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" textcolor="text-white"/>
    </h-btn>

    <h-btn textbutton>
      <html-link text="github" url="https://github.com/edutucci/hawkframework"/>
    </h-btn>

    <h-btn outlined>
      <html-link icon="fab fa-github" text="github new window" url="https://github.com/edutucci/hawkframework" new-window/>
    </h-btn>

    <pre v-highlightjs="linksButtons">
      <code class="html">
      </code>
    </pre>

    <h1>Router</h1>
    <h-btn contained bgcolor="bg-primary">
      <html-link text="to this page" url="/main" textcolor="text-white"/>
    </h-btn>

    <h-btn textbutton>
      <html-link text="to this page" url="/buttons"/>
    </h-btn>

    <h-btn outlined>
      <html-link text="to this page" url="/buttons"/>
    </h-btn>

    <pre v-highlightjs="routerButtons">
      <code class="html">
      </code>
    </pre>

    <h1>Counters</h1>
    <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="warning">
      <h-counter bgcolor="bg-negative" textcolor="text-white">123</h-counter>
    </h-btn>
    <h-btn textbutton textcolor="text-primary" text="primary">
      <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
    </h-btn>
    <h-btn class="h-pl-md" outlined textcolor="text-primary" text="primary">
      <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
    </h-btn>

    <pre v-highlightjs="btnCounters">
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
        <div>transparent</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>Boolean</div>
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
        <div>Useful for toolbar icons. Removes background and shadow.</div>
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
      <h-btn-float bgcolor="bg-positive" textcolor="text-white" @click="btnClick" icon="fas fa-envelope"> </h-btn-float>
      <h-btn-float bgcolor="bg-primary" textcolor="text-white" icon="fas fa-envelope">  </h-btn-float>
      <h-btn-float bgcolor="bg-negative" textcolor="text-white"  icon="fas fa-plus"> </h-btn-float>
      <h-btn-float bgcolor="bg-secondary" icon="fas fa-bars"> </h-btn-float>
      <h-btn-float minifloat icon="fas fa-plus"> </h-btn-float>
      <h-btn-float minifloat bgcolor="bg-warning" icon="fas fa-plus"> </h-btn-float>
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
        <div>String</div>
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
  <div>
    <h-btn contained bgcolor="bg-white" textcolor="text-black" text="white" left-icon="fas fa-envelope" @click="btnClick"/>
    <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="primary" right-icon="fas fa-envelope"/>
    <h-btn contained bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
    <h-btn contained bgcolor="bg-positive" textcolor="text-white" text="positive"/>
    <h-btn contained bgcolor="bg-negative" textcolor="text-white" text="negative"/>
    <h-btn contained bgcolor="bg-info" textcolor="text-white" text="info"/>
    <h-btn contained bgcolor="bg-warning" textcolor="text-white" text="warning"/>
  </div>
  <div class="col-6">
    <h-btn contained class="full-width" bgcolor="bg-primary" textcolor="text-white" text="full width" right-icon="fas fa-envelope"/>
    <h-btn contained class="full-width" bgcolor="bg-positive" textcolor="text-white" text="full width" left-icon="fas fa-envelope"/>
  </div>
</div>
      `,
      textbuttons: `
<div>
  <h-btn textbutton textcolor="text-black" text="black"/>
  <h-btn textbutton textcolor="text-primary" text="primary"/>
  <h-btn textbutton textcolor="text-secondary" text="secondary"/>
  <h-btn textbutton textcolor="text-positive" text="positive"/>
  <h-btn textbutton textcolor="text-negative" text="negative"/>
  <h-btn textbutton textcolor="text-info" text="info"/>
  <h-btn textbutton textcolor="text-warning" text="warning"/>
</div>
<div class="col-6">
  <h-btn class="full-width" textbutton textcolor="text-black" text="black"/>
  <h-btn class="full-width" textbutton textcolor="text-primary" text="primary"/>
</div>
      `,
      outlinedButtons: `
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
<div class="col-6">
  <h-btn class="full-width" outlined text="disabled" disabled/>
  <h-btn class="full-width" outlined textcolor="text-black" text="black"/>
  <h-btn class="full-width" outlined textcolor="text-primary" text="primary"/>
</div>
      `,
      btnCounters: `
<h-btn contained bgcolor="bg-primary" textcolor="text-white" text="warning">
  <h-counter bgcolor="bg-negative" textcolor="text-white">123</h-counter>
</h-btn>
<h-btn textbutton textcolor="text-primary" text="primary">
  <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
</h-btn>
<h-btn class="h-pl-md" outlined textcolor="text-primary" text="primary">
  <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
</h-btn>
      `,
      floatActionButtons: `
<div>
  <h-btn-float bgcolor="bg-positive" textcolor="text-white" @click="btnClick" icon="fas fa-envelope"> </h-btn-float>
  <h-btn-float bgcolor="bg-secondary" textcolor="text-white" icon="fas fa-envelope">  </h-btn-float>
  <h-btn-float bgcolor="bg-negative" textcolor="text-white"  icon="fas fa-plus"> </h-btn-float>
  <h-btn-float bgcolor="bg-secondary" icon="fas fa-bars"> </h-btn-float>
  <h-btn-float minifloat icon="fas fa-plus"> </h-btn-float>
  <h-btn-float minifloat bgcolor="bg-warning" icon="fas fa-plus"> </h-btn-float>
</div>
      `,
      linksButtons: `
<h-btn contained bgcolor="bg-primary">
  <html-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" textcolor="text-white"/>
</h-btn>

<h-btn textbutton>
  <html-link text="github" url="https://github.com/edutucci/hawkframework"/>
</h-btn>

<h-btn outlined>
  <html-link icon="fab fa-github" text="github new window" url="https://github.com/edutucci/hawkframework" new-window/>
</h-btn>
      `,
      routerButtons: `
<h-btn contained bgcolor="bg-primary">
  <html-link text="to this page" url="/buttons" textcolor="text-white"/>
</h-btn>

<h-btn textbutton>
  <html-link text="to this page" url="/buttons"/>
</h-btn>

<h-btn outlined>
  <html-link text="to this page" url="/buttons"/>
</h-btn>
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
// @import '../css/variables.styl'

// .teststylus
//   background-color $negative

</style>
