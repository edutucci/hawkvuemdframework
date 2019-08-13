<template>
  <h-page-content padding>
    <div class="text-h4">Buttons  Group</div>

    <comp-code class="h-mt-lg" title="Types" :code="containedButtons">
      <div>
        <h-btn-group contained>
          <h-btn bg-color="bg-primary" text-color="text-white" left-icon="fas fa-bold" text="Bold"/>
          <h-btn bg-color="bg-positive" text-color="text-white" right-icon="fas fa-italic" text="Italic"/>
          <h-btn bg-color="bg-negative" active-class="btnactive" text-color="text-white"  left-icon="fas fa-underline" text="Underline"/>
        </h-btn-group>

      </div>

      <div class="h-mt-md">
        <h-btn-group outlined>
          <h-btn bg-color="bg-gray" left-icon="fas fa-bold"/>
          <h-btn bg-color="bg-gray" left-icon="fas fa-italic"/>
          <h-btn bg-color="bg-gray" left-icon="fas fa-underline"/>
          <h-btn-dropdown text="Align" drop-down-icon="fas fa-caret-down" bg-color="bg-gray">
            <div class="row h-pa-sm">
             <h-fa-icon icon="fas fa-align-left"/>
             <h-fa-icon icon="fas fa-align-center" class="h-ml-xs"/>
             <h-fa-icon icon="fas fa-align-right" class="h-ml-xs"/>
             <h-fa-icon icon="fas fa-align-justify" class="h-ml-xs"/>
            </div>
          </h-btn-dropdown>
        </h-btn-group>

        <h-btn-group outlined rounded class="h-ml-sm">
          <h-btn border-left-rounded bg-color="bg-gray" left-icon="fas fa-bold"/>
          <h-btn bg-color="bg-gray" left-icon="fas fa-italic"/>
          <h-btn border-right-rounded bg-color="bg-gray" left-icon="fas fa-underline"/>
          <h-btn-dropdown text="Align" drop-down-icon="fas fa-caret-down" bg-color="bg-gray">
            <div class="row h-pa-sm">
             <h-fa-icon icon="fas fa-align-left"/>
             <h-fa-icon icon="fas fa-align-center" class="h-ml-xs"/>
             <h-fa-icon icon="fas fa-align-right" class="h-ml-xs"/>
             <h-fa-icon icon="fas fa-align-justify" class="h-ml-xs"/>
            </div>
          </h-btn-dropdown>
        </h-btn-group>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Rounded Buttons" :code="outlinedButtons">
      <div>
        <h-btn-group outlined rounded>
          <h-btn border-left-rounded bg-color="bg-gray" left-icon="fas fa-bold"/>
          <h-btn bg-color="bg-gray" left-icon="fas fa-italic"/>
          <h-btn border-right-rounded bg-color="bg-gray" left-icon="fas fa-underline"/>
        </h-btn-group>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Custom Active" :code="containedButtons">
      <div>
        <h-btn-group contained>
          <h-btn bg-color="bg-primary" active-class="btnactive" text-color="text-white" left-icon="fas fa-bold" text="Bold"/>
          <h-btn bg-color="bg-positive" active-class="btnactive" text-color="text-white" right-icon="fas fa-italic" text="Italic"/>
          <h-btn bg-color="bg-negative" active-class="btnactive" text-color="text-white"  left-icon="fas fa-underline" text="Underline"/>
        </h-btn-group>
      </div>
    </comp-code>

    <h2 class="text-primary">Button Group</h2>
    <h2 class="text-primary">Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>contained</div>
        <div>outlined</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets to buttongroup to contained mode</div>
        <div>Sets to buttongroup to outlined mode</div>
      </div>
    </div>

    <h2 class="text-primary">Button Group Item</h2>
    <h2 class="text-primary">Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>name</div>
        <div>bg-color</div>
        <div>text-color</div>
        <div>text</div>
        <div>left-icon</div>
        <div>right-icon</div>
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
        <div>String</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the name for the current button and used to set current button</div>
        <div>Background color of the button</div>
        <div>Text color of the button</div>
        <div>Text of the button</div>
        <div>Sets the icon to left of the button</div>
        <div>Sets the icon to right of the button</div>
        <div>Button is disabled</div>
        <div>Useful for toolbar icons. Removes background and shadow</div>
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

import mxButtonGroup from './mxButtonGroup'

export default {
  mixins: [mxButtonGroup],
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style>

/* .btnactive, .btn.active:hover {
  background-color: gray;
  color: black;
} */
</style>
