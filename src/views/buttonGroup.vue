<template>
  <div>
    <h1> Contained Buttons </h1>
    <div>
      <h-btn-group contained>
        <h-btn-group-item name="bold" bgcolor="bg-primary" textcolor="text-white" left-icon="fas fa-bold" text="Bold" @click="btnClick"/>
        <h-btn-group-item name="italic" bgcolor="bg-positive" textcolor="text-white" right-icon="fas fa-italic" text="Italic"/>
        <h-btn-group-item name="sub" bgcolor="bg-negative" textcolor="text-white"  left-icon="fas fa-underline" text="Underline"/>
      </h-btn-group>
    </div>

      <pre v-highlightjs="containedButtons">
        <code class="html">
        </code>
      </pre>

    <h1>Outlined Buttons</h1>
    <div>
      <h-btn-group outlined>
        <h-btn-group-item name="bold" left-icon="fas fa-bold"/>
        <h-btn-group-item name="italic" left-icon="fas fa-italic"/>
        <h-btn-group-item name="sub" left-icon="fas fa-underline"/>
      </h-btn-group>
    </div>

    <pre v-highlightjs="outlinedButtons">
      <code class="html">
      </code>
    </pre>

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
        <div>bgcolor</div>
        <div>textcolor</div>
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
  <h-btn-group contained>
    <h-btn-group-item name="bold" bgcolor="bg-primary" textcolor="text-white" text="primary" @click="btnClick"/>
    <h-btn-group-item name="italic" bgcolor="bg-positive" textcolor="text-white" text="positive"/>
    <h-btn-group-item name="sub" bgcolor="bg-negative" textcolor="text-white" text="negative"/>
  </h-btn-group>
</div>
      `,
      textbuttons: `
<div>
  <h-btn-group textbutton>
    <h-btn-group-item name="bold" bgcolor="bg-primary" textcolor="text-white" text="primary"/>
    <h-btn-group-item name="italic" bgcolor="bg-positive" textcolor="text-white" text="positive"/>
    <h-btn-group-item name="sub" bgcolor="bg-negative" textcolor="text-white" text="negative"/>
  </h-btn-group>
</div>
      `,
      outlinedButtons: `
<div>
  <h-btn-group outlined>
    <h-btn-group-item name="bold" bgcolor="bg-primary" textcolor="text-white" text="primary"/>
    <h-btn-group-item name="italic" bgcolor="bg-positive" textcolor="text-white" text="positive"/>
    <h-btn-group-item name="sub" bgcolor="bg-negative" textcolor="text-white" text="negative"/>
  </h-btn-group>
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

<style scoped>
</style>
