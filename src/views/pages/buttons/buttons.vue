<template>
  <h-page-content>
    <h1>Buttons</h1>
    <comp-code title="Contained Buttons" :code="containedButtons">
      <div>
        <div>
          <h-btn contained bgcolor="bg-white" textcolor="text-black" text="disabled" left-icon="fas fa-envelope" disabled/>
          <h-btn contained bgcolor="bg-white" textcolor="text-black" text="white" left-icon="fas fa-envelope"/>
          <h-btn contained rounded bgcolor="bg-primary" textcolor="text-white" text="primary" right-icon="fas fa-envelope"/>
          <h-btn contained rounded bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
          <h-btn contained bgcolor="bg-positive" textcolor="text-white" text="positive"/>
          <h-btn contained bgcolor="bg-negative" textcolor="text-white" text="negative"/>
          <h-btn contained bgcolor="bg-info" textcolor="text-white" text="info"/>
          <h-btn contained bgcolor="bg-warning" textcolor="text-white" text="warning"/>
        </div>
        <div class="col-6">
          <div class="flex flex-column">
            <h-btn contained class="full-width" bgcolor="bg-primary" textcolor="text-white" text="full width" right-icon="fas fa-envelope"/>
            <h-btn contained class="full-width" bgcolor="bg-positive" textcolor="text-white" text="full width" left-icon="fas fa-envelope"/>
          </div>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="Text Buttons" :code="textbuttons">
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
    </comp-code>

    <comp-code class="h-mt-md" title="Outlined Buttons" :code="outlinedButtons">
      <div>
        <h-btn outlined text="disabled" disabled/>
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
    </comp-code>

    <comp-code class="h-mt-md" title="Rounded Buttons" :code="roundedButtons">
      <div>
        <h-btn contained rounded text="disabled" disabled/>
        <h-btn outlined rounded text="disabled" disabled/>
        <h-btn contained rounded bgcolor="bg-primary" textcolor="text-white" text="primary"/>
        <h-btn contained rounded bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
        <h-btn contained rounded bgcolor="bg-positive" textcolor="text-white" text="positive"/>
        <h-btn outlined rounded textcolor="text-negative" text="negative"/>
        <h-btn outlined rounded textcolor="text-info" text="info"/>
        <h-btn outlined rounded textcolor="text-warning" text="warning"/>
      </div>

      <div class="col-6">
        <h-btn class="full-width" outlined rounded text="disabled" disabled/>
        <h-btn class="full-width" contained rounded text="disabled" disabled/>
        <h-btn class="full-width" outlined rounded textcolor="text-black" text="black"/>
        <h-btn class="full-width" contained rounded textcolor="text-primary" text="primary"/>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="Links" :code="linksButtons">
      <h-btn contained bgcolor="bg-primary">
        <html-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" textcolor="text-white"/>
      </h-btn>

      <h-btn contained rounded bgcolor="bg-primary">
        <html-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" textcolor="text-white"/>
      </h-btn>

      <h-btn textbutton>
        <html-link text="github" url="https://github.com/edutucci/hawkframework"/>
      </h-btn>

      <h-btn outlined>
        <html-link icon="fab fa-github" text="github new window" url="https://github.com/edutucci/hawkframework" new-window/>
      </h-btn>

      <h-btn outlined rounded>
        <html-link icon="fab fa-github" text="github new window" url="https://github.com/edutucci/hawkframework" new-window/>
      </h-btn>
    </comp-code>

    <comp-code class="h-mt-md" title="Router" :code="routerButtons">
      <h-btn contained bgcolor="bg-primary">
        <html-link text="to this page" url="/buttons" textcolor="text-white"/>
      </h-btn>

      <h-btn contained rounded bgcolor="bg-primary">
        <html-link text="to this page" url="/buttons" textcolor="text-white"/>
      </h-btn>

      <h-btn textbutton>
        <html-link text="to this page" url="/buttons"/>
      </h-btn>

      <h-btn outlined>
        <html-link text="to this page" url="/buttons"/>
      </h-btn>

      <h-btn outlined rounded>
        <html-link text="to this page" url="/buttons"/>
      </h-btn>
    </comp-code>

    <comp-code class="h-mt-md" title="Counters" :code="btnCounters">
      <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="warning">
        <h-counter bgcolor="bg-negative" textcolor="text-white">123</h-counter>
      </h-btn>

      <h-btn contained rounded bgcolor="bg-primary" textcolor="text-white" text="warning">
        <h-counter bgcolor="bg-negative" textcolor="text-white">123</h-counter>
      </h-btn>

      <h-btn textbutton textcolor="text-primary" text="primary">
        <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
      </h-btn>

      <h-btn outlined textcolor="text-primary" text="primary">
        <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
      </h-btn>

      <h-btn outlined rounded textcolor="text-primary" text="primary">
        <h-counter bgcolor="bg-negative" textcolor="text-white">12</h-counter>
      </h-btn>
    </comp-code>

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
        <div>rounded</div>
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
        <div>Sets to button to rounded mode</div>
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

    <comp-code class="h-mt-lg" title="Float Action" :code="floatActionButtons">
      <div>
        <h-btn-float bgcolor="bg-positive" textcolor="text-white" icon="fas fa-envelope"> </h-btn-float>
        <h-btn-float bgcolor="bg-primary" textcolor="text-white" icon="fas fa-envelope">  </h-btn-float>
        <h-btn-float bgcolor="bg-negative" textcolor="text-white"  icon="fas fa-plus"> </h-btn-float>
        <h-btn-float bgcolor="bg-secondary" icon="fas fa-bars"> </h-btn-float>
        <h-btn-float minifloat icon="fas fa-plus"> </h-btn-float>
        <h-btn-float minifloat bgcolor="bg-warning" icon="fas fa-plus"> </h-btn-float>
      </div>
    </comp-code>

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

  </h-page-content>
</template>

<script>

import mxButtons from './mxButtons'

export default {
  mixins: [mxButtons],
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
