<template>
  <div>

    <!--
      Add
      - add event @rightIconClick for aditional input icon click
      - add rightIcon property

      Bugs
    -->

    <h3>Input</h3>

    <comp-code class="h-mt-lg" title="Types" :code="txttypes">
      <h-input v-model="txtName" label="Standard" placeholder="Type something"/>

      <h-input type="password" v-model="txtName" label="Password"
        left-icon="fas fa-key" placeholder="type your password" clearable
        helper-text="Type a text" error-message="Invalid information"/>

      <h-input outlined v-model="txtName" label="Outlined" />
      <h-input outlined rounded v-model="txtName" label="Outlined and Rounded"/>
      <h-input filled v-model="txtName" label="Filled" />
      <h-input filled rounded  v-model="txtName" label="Filled and Rounded"/>
      <h-input v-model="txtName" label="Messages for validation" clearable
        helper-text="Type a text" error-message="Invalid information" :maxlength="10" :text-counter="10"
      />
      <h-input text-center v-model="txtName" label="Text center"/>
       <h-input text-center readonly v-model="txtName" label="Readonly"/>
    </comp-code>

    <h1>Key Events</h1>
    <html-separator/>
    <div class="col-6">
      <strong>Arrow Down, Tab or Enter. Enter works as tab</strong>
      <h-input
        class="full-width"
        v-model="form.code"
        label="Code"
        ref="code"
        left-icon="fas fa-code"
        @onKeyDown="$refs.name.focus()"
        @onEnter="$refs.name.focus()"
      />
      <h-input
        filled
        class="full-width"
        v-model="form.name"
        label="Name"
        ref="name"
        left-icon="fas fa-user"
        @onKeyDown="$refs.name2.focus()"
        @onTab="onKeyTab"
        @onEnter="$refs.name2.focus()"
      />
      <h-input
        filled
        rounded
        outlined
        class="full-width"
        v-model="form.name"
        label="Name"
        ref="name2"
        left-icon="fas fa-user"
        @onKeyDown="$refs.city.focus()"
        @onTab="onKeyTab"
        @onEnter="$refs.city.focus()"
      />
      <h-input
        outlined
        class="full-width"
        v-model="form.city"
        label="City"
        ref="city"
        left-icon="fas fa-map-marker-alt"
        @onKeyDown="$refs.city2.focus()"
        @onTab="onKeyTab"
        @onEnter="$refs.city2.focus()"
        @change="onChange"
        @blur="onBlur"
      />
      <h-input
        outlined
        rounded
        class="full-width"
        v-model="form.city"
        label="City"
        ref="city2"
        left-icon="fas fa-map-marker-alt"
        @onKeyDown="onKeyDown"
        @onTab="onKeyTab"
        @onEnter="onEnter"
        @change="onChange"
        @blur="onBlur"
      />
    </div>

    <prism language="html" :code="txtkeys"></prism>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>type</div>
        <div>placeholder</div>
        <div>left-icon</div>
        <div>label</div>
        <div>error-message</div>
        <div>helper-text</div>
        <div>maxlength</div>
        <div>text-counter</div>
        <div>text-center</div>
        <div>outlined</div>
        <div>clearable</div>
        <div>readonly</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>Number</div>
        <div>Number</div>
        <div>Boolean</div>
        <div>Boolean</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Type of input. Available: text and password</div>
        <div>Sets the placeholder for the input</div>
        <div>Sets the icon to left of the input</div>
        <div>Sets the label for the input</div>
        <div>Sets the error message for the input</div>
        <div>Sets the helper text for the input</div>
        <div>Specifies the maximum number of character for an input</div>
        <div>Specifies the quantity of character of the input</div>
        <div>Sets the text align to the center</div>
        <div>Sets the input to outlined mode</div>
        <div>Shows the icon to clear input on right side</div>
        <div>Input can not be modified</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@onKeyDown</div>
        <div>@onTab</div>
        <div>@onEnter</div>
        <div>@change(text)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on arrow down</div>
        <div>Triggered on Tab</div>
        <div>Triggered on Enter</div>
        <div>Triggered when input changes</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Methods</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>focus</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>The input get focus</div>
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
      txtName: 'Input types',
      focused: false,
      form: {
        code: '',
        name: '',
        city: ''
      },
      txttypes: `
<h-input v-model="txtName" label="Standard" placeholder="Type something" clearable/>

<h-input type="password" v-model="txtName" label="Password"
  left-icon="fas fa-key" placeholder="type your password" clearable/>

<h-input outlined v-model="txtName" label="Outlined" />
<h-input outlined rounded v-model="txtName" label="Rounded"/>
<h-input filled v-model="txtName" label="Filled" />
<h-input filled rounded  v-model="txtName" label="Filled and Rounded"/>
`,
      txtkeys: `
<div class="col-6">
  <strong>Arrow Down, Tab or Enter. Enter works as tab</strong>
  <h-input
    class="full-width"
    v-model="form.code"
    float-label="Code"
    ref="code"
    @onKeyDown="onKeyDown"
    @onEnter="$refs.name.focus()"
  />
  <h-input
    class="full-width"
    v-model="form.name"
    float-label="Name"
    ref="name"
    @onKeyDown="onKeyDown"
    @onTab="onKeyTab"
    @onEnter="$refs.city.focus()"
  />
  <h-input
    class="full-width"
    v-model="form.city"
    float-label="City"
    ref="city"
    @onKeyDown="onKeyDown"
    @onTab="onKeyTab"
    @onEnter="onEnter"
    @change="onChange"
  />
</div>
      `
    }
  },
  methods: {
    onKeyDown () {
      this.$SnackBar.create({
        message: 'Keydown key',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    },
    onKeyTab () {
      this.$SnackBar.create({
        message: 'Tab key',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    },
    onEnter () {
      this.$SnackBar.create({
        message: 'Enter key',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    },
    onChange (value) {
      this.$SnackBar.create({
        message: 'field change: ' + value,
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    },
    onBlur () {
      this.$SnackBar.create({
        message: 'Blur event ',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    }
  }
}
</script>

<style scoped>
/* .border1 {
  border-bottom-width: 5px;
  border-bottom-style: solid;
  border-bottom-color: red
} */

/* .border-positive {
  border-color: green;
} */

</style>
