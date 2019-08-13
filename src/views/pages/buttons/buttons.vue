<template>
  <h-page-content padding>
    <div class="text-h4">Buttons</div>

    <comp-code title="Contained Buttons" :code="containedButtons">
      <div>
        <div>
          <h-btn bg-color="bg-white" text-color="text-black" text="disabled" left-icon="fas fa-envelope" disabled/>
          <h-btn bg-color="bg-white" text-color="text-black" text="white" left-icon="fas fa-envelope"/>
          <h-btn rounded bg-color="bg-primary" text-color="text-white" text="primary" right-icon="fas fa-envelope"/>
          <h-btn rounded bg-color="bg-secondary" text-color="text-white" text="secondary"/>
          <h-btn bg-color="bg-positive" text-color="text-white" text="positive"/>
          <h-btn bg-color="bg-negative" text-color="text-white" text="negative"/>
          <h-btn bg-color="bg-info" text-color="text-white" text="info"/>
          <h-btn bg-color="bg-warning" text-color="text-white" text="warning"/>
        </div>
        <div >
          <div>
            <h-btn class="full-width" bg-color="bg-primary" text-color="text-white" text="full width" right-icon="fas fa-envelope"/>
            <h-btn class="full-width" bg-color="bg-positive" text-color="text-white" text="full width" left-icon="fas fa-envelope"/>
          </div>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="Text Buttons" :code="textbuttons">
      <div>
        <h-btn text-button bg-color="bg-white" text-color="text-black" text="disabled" disabled/>
        <h-btn text-button bg-color="bg-primary" text-color="text-primary" text="primary"/>
        <h-btn text-button bg-color="bg-secondary" text-color="text-secondary" text="secondary"/>
        <h-btn text-button bg-color="bg-positive" text-color="text-positive" text="positive"/>
        <h-btn text-button bg-color="bg-negative" text-color="text-negative" text="negative"/>
        <h-btn text-button bg-color="bg-info" text-color="text-info" text="info"/>
        <h-btn text-button bg-color="bg-warning" text-color="text-warning" text="warning"/>
      </div>
      <div>
        <h-btn class="full-width" text-button bg-color="bg-primary" text-color="text-primary" text="full width"/>
        <h-btn class="full-width" text-button bg-color="bg-positive" text-color="text-positive" text="full-width"/>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="Outlined Buttons" :code="outlinedButtons">
      <div>
        <h-btn outlined text="disabled" disabled/>
        <h-btn bg-color="bg-primary" outlined text-color="text-primary" text="primary"/>
        <h-btn bg-color="bg-secondary" outlined text-color="text-secondary" text="secondary"/>
        <h-btn bg-color="bg-positive" outlined text-color="text-positive" text="positive"/>
        <h-btn bg-color="bg-negative" outlined text-color="text-negative" text="negative"/>
        <h-btn bg-color="bg-info" outlined text-color="text-info" text="info"/>
        <h-btn bg-color="bg-warning" outlined text-color="text-warning" text="warning"/>
      </div>

      <div>
        <h-btn class="full-width" outlined bg-color="bg-primary" text-color="text-primary" text="full width"/>
        <h-btn class="full-width" outlined bg-color="bg-positive" text-color="text-positive" text="full width"/>
      </div>
    </comp-code>

    <comp-code title="Rounded Buttons" :code="roundedButtons">
      <div>
        <h-btn rounded text="disabled" disabled/>
        <h-btn outlined rounded text="disabled" disabled/>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="primary"/>
        <h-btn rounded bg-color="bg-secondary" text-color="text-white" text="secondary"/>
        <h-btn rounded bg-color="bg-positive" text-color="text-white" text="positive"/>
        <h-btn outlined rounded text-color="text-negative" text="negative"/>
        <h-btn outlined rounded text-color="text-info" text="info"/>
        <h-btn outlined rounded text-color="text-warning" text="warning"/>
      </div>

      <div>
        <h-btn class="full-width" outlined rounded bg-color="bg-primary" text-color="text-primary" text="full width"/>
        <h-btn class="full-width" outlined rounded bg-color="bg-positive" text-color="text-positive" text="full width"/>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="FAB Buttons" :code="fabButtons">
      <div>
        <h-btn fab bg-color="bg-primary" size="xl">
          <h-fa-icon icon="fas fa-envelope"  text-color="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="xl">
          <h-fa-icon icon="fab fa-github"  text-color="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="xl">
          <h-fa-icon icon="fas fa-map-marker-alt"  text-color="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="xl">
          <h-fa-icon icon="fas fa-shopping-cart"  text-color="text-white" size="32px"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="xl">
          <h-fa-icon icon="fas fa-plane"  text-color="text-white" size="32px"/>
        </h-btn>
      </div>
      <div>
        <h-btn fab bg-color="bg-primary" size="sm">
          <h-fa-icon icon="fas fa-envelope"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="sm">
          <h-fa-icon icon="fab fa-github"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="sm">
          <h-fa-icon icon="fas fa-map-marker-alt"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="sm">
          <h-fa-icon icon="fas fa-shopping-cart"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="sm">
          <h-fa-icon icon="fas fa-plane"  text-color="text-white"/>
        </h-btn>
      </div>
    </comp-code>

    <comp-code class="h-mt-md" title="Sizes" :code="btnSizes">
      <div>
        <h-btn bg-color="bg-primary" text-color="text-white" text="xs" size="xs"/>
        <h-btn bg-color="bg-primary" text-color="text-white" text="sm" size="sm"/>
        <h-btn bg-color="bg-primary" text-color="text-white" text="md" size="md"/>
        <h-btn bg-color="bg-primary" text-color="text-white" text="lg" size="lg"/>
        <h-btn bg-color="bg-primary" text-color="text-white" text="xl" size="xl"/>
      </div>

      <div>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="xs" size="xs"/>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="sm" size="sm"/>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="md" size="md"/>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="lg" size="lg"/>
        <h-btn rounded bg-color="bg-primary" text-color="text-white" text="xl" size="xl"/>
      </div>

      <div>
        <h-btn fab bg-color="bg-primary" size="xs">
          <h-fa-icon icon="fas fa-envelope"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="sm">
          <h-fa-icon icon="fab fa-github"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="md">
          <h-fa-icon icon="fas fa-map-marker-alt"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="lg">
          <h-fa-icon icon="fas fa-shopping-cart"  text-color="text-white"/>
        </h-btn>
        <h-btn fab bg-color="bg-primary" text-color="text-white" size="xl">
          <h-fa-icon icon="fas fa-plane"  text-color="text-white" size="32px"/>
        </h-btn>
      </div>

    </comp-code>

    <comp-code class="h-mt-md" title="Links" :code="linksButtons">
      <h-btn bg-color="bg-primary">
        <h-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" text-color="text-white"/>
      </h-btn>

      <h-btn rounded bg-color="bg-primary">
        <h-link icon="fab fa-github" text="github" url="https://github.com/edutucci/hawkframework" text-color="text-white"/>
      </h-btn>

      <h-btn text-button>
        <h-link text="github" url="https://github.com/edutucci/hawkframework"/>
      </h-btn>

      <h-btn outlined>
        <h-link icon="fab fa-github" text="github new window" url="https://github.com/edutucci/hawkframework" new-window/>
      </h-btn>

      <h-btn outlined rounded>
        <h-link icon="fab fa-github" text="github new window" url="https://github.com/edutucci/hawkframework" new-window/>
      </h-btn>
    </comp-code>

    <comp-code class="h-mt-md" title="Router" :code="routerButtons">
      <h-btn bg-color="bg-primary">
        <h-link text="to this page" url="/buttons" text-color="text-white"/>
      </h-btn>

      <h-btn rounded bg-color="bg-primary">
        <h-link text="to this page" url="/buttons" text-color="text-white"/>
      </h-btn>

      <h-btn text-button>
        <h-link text="to this page" url="/buttons"/>
      </h-btn>

      <h-btn outlined>
        <h-link text="to this page" url="/buttons"/>
      </h-btn>

      <h-btn outlined rounded>
        <h-link text="to this page" url="/buttons"/>
      </h-btn>
    </comp-code>

    <comp-code class="h-mt-md" title="Counters" :code="btnCounters">
      <h-btn  bg-color="bg-primary" text-color="text-white" text="warning">
        <h-counter bg-color="bg-negative" text-color="text-white">123</h-counter>
      </h-btn>

      <h-btn  rounded bg-color="bg-primary" text-color="text-white" text="warning">
        <h-counter bg-color="bg-negative" text-color="text-white">123</h-counter>
      </h-btn>

      <h-btn text-button text-color="text-primary" bg-color="bg-primary" text="primary">
        <h-counter bg-color="bg-negative" text-color="text-white">12</h-counter>
      </h-btn>

      <h-btn outlined text-color="text-primary" bg-color="bg-primary" text="primary">
        <h-counter bg-color="bg-negative" text-color="text-white">12</h-counter>
      </h-btn>

      <h-btn outlined rounded text-color="text-primary" bg-color="bg-primary" text="primary">
        <h-counter bg-color="bg-negative" text-color="text-white">12</h-counter>
      </h-btn>
    </comp-code>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>bg-color</div>
        <div>text-color</div>
        <div>text</div>
        <div>left-icon</div>
        <div>right-icon</div>
        <div>textbutton</div>
        <div>outlined</div>
        <div>rounded</div>
        <div>disabled</div>
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
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Background color of the button</div>
        <div>Text color of the button</div>
        <div>Text of the button</div>
        <div>Sets the icon to left of the button</div>
        <div>Sets the icon to right of the button</div>
        <div>Sets to button to textbutton mode</div>
        <div>Sets to button to outlined mode</div>
        <div>Sets to button to rounded mode</div>
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
