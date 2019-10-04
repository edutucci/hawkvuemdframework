<template>
  <h-page-content padding>

    <!--
      Add
      - add event @rightIconClick for aditional input icon click
      - add rightIcon property

      Bugs
    -->

    <div class="text-h4">Input</div>

    <comp-code class="h-mt-lg" title="Types" :code="txttypes">
      <div class="column col-inputs">
        <h-input v-model="types" label="Outlined"/>
        <h-input v-model="types" label="Filled" filled/>
      </div>
      <div class="row h-mt-md">
        <div class="col">
          <h-input v-model="types" label="Outlined dense" dense/>
        </div>
        <div class="col">
          <h-input v-model="types" label="Filled dense" filled dense/>
        </div>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Password" :code="txtpassword">
      <div class="column col-inputs">
        <h-input v-model="types" label="Password" dense type="password"/>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Icons" :code="txttypes">
      <div class="column col-inputs">
        <h-input v-model="icons" label="Phone" leading-icon="fas fa-phone" clearable/>
        <h-input v-model="icons" label="E-Mail" filled leading-icon="fas fa-envelope" clearable/>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Messages" :code="txttypes">
      <div class="column col-inputs">
        <h-input v-model="message" label="Phone" clearable
          helper-text="Type a phone"
        />
        <h-input v-model="message" label="Phone" clearable
          error-message="Invalid information"
        />
        <h-input v-model="message" label="TextCounter" clearable
          helper-text="Counter:" input-counter :text-counter="60" :maxlength="60"
        />
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Prefix and suffix" :code="txttypes">
      <div class="column col-inputs">
        <h-input v-model="prefix" label="Price" clearable
          helper-text="Type a value" prefix="$"
        />
        <h-input v-model="suffix" label="E-Mail" leading-icon="fas fa-envelope" clearable
          helper-text="Type a valid mail" suffix="@gmail.com"
        />
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Input Focus (Using Enter)" :code="txttypes">
      <div class="column col-inputs">
        <h-input v-model="message" label="Name" ref="name"
          @onEnter="$refs.email.focus()"
        />
        <h-input v-model="message" label="E-Mail" ref="email"
          @onEnter="$refs.name.focus()"
          @blur="onBlur"
        />
      </div>
    </comp-code>

    <!-- <div class="border border-primary">
      <div class="column col-inputs">
        <h-input v-model="icons" label="Phone" leading-icon="fas fa-phone" clearable
          error-message="Invalid information"
        />
      </div>
    </div> -->
    <!-- <h-input type="password" v-model="txtName" label="Password"
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
    <h-input text-center readonly v-model="txtName" label="Readonly"/> -->

    <!-- <h1>Key Events</h1>
    <h-separator/>
    <div>
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
    </div> -->

    <!-- <prism language="html" :code="txtkeys"></prism> -->

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

  </h-page-content>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      types: '',
      icons: '',
      message: '',
      prefix: '',
      suffix: '',
      txtName: 'Input types',
      focused: false,
      form: {
        code: '',
        name: '',
        city: ''
      },
      txttypes: `
<div class="column col-inputs">
  <h-input v-model="types" label="Outlined"/>
  <h-input v-model="types" label="Filled" filled/>
  <h-input v-model="types" label="Outlined dense" dense/>
  <h-input v-model="types" label="Filled dense" filled dense/>
</div>
`,
      txtpassword: `
<div class="column col-inputs">
  <h-input v-model="types" label="Password" dense type="password"/>
</div>    
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
    onKeyTab () {
      console.log('method onKeyTab fired')
      this.$nextTick(() => {
        this.$refs.name.focus()
      })
    },
    onBlur () {
      console.log('method onBlur fired')
      this.$nextTick(() => {
        this.$refs.name.focus()
      })
    }
  }
}
</script>

<style scoped>
 .col-inputs > .main-input-container {
   margin-top: 10px;
 }

</style>
