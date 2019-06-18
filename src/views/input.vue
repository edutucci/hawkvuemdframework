<template>
  <div>
    <!-- <h1>Input Container</h1> -->
    <!-- <html-separator/> -->

    <!-- <h-input-container
      rounded
      filled
    >
      CONTAINER IMPLEMENTING
    </h-input-container> -->

    <!-- <html-separator/>
    <h1>Input Field</h1>
    <html-separator/>

    <h-input-field
      filled
      label="Nome"
      left-icon="fas fa-phone"
      v-model="txtName"
    />

    <html-separator/> -->
    <!-- <div class="border-bottom border-info border-1 text-positive">A div element with a double bottom border.</div> -->

    <h1>Input</h1>
    <h1>Standard</h1>
    <html-separator/>
    <div class="col-6">
      <h-input label="" v-model="txtName" placeholder="" cleartext/>
    </div>
    <span>Name: {{ txtName }}</span>

    <prism language="html" :code="txttextcomp"></prism>

    <h1> Filled</h1>
    <html-separator/>
    <div class="col-6">
      <h-input type="password" right-icon="fas fa-lock" filled label="Password" v-model="txtPassword" placeholder="type your password" />
      <span>Password: {{ txtPassword }}</span>
    </div>

    <prism language="html" :code="txtpasswordcomp"></prism>

    <h1>Outline</h1>
    <html-separator/>
    <div class="col-6">
      <h-input outline error-message="error message" left-icon="fas fa-birthday-cake" right-icon="fas fa-calendar-alt" helper-text="helper text"
        :maxlength="10" :text-counter="10"  v-model="txtName2"
        label="Name" cleartext text-center
        @rightIconClick="showDate()"
      />
      <span>Name: {{ txtName2 }}</span>
    </div>

    <prism language="html" :code="txtoutlined"></prism>

    <h1>Rounded</h1>
    <html-separator/>
    <div class="col-6 h-mt-md">
      <h-input outline rounded error-message="error message" left-icon="fas fa-birthday-cake" right-icon="fas fa-calendar-alt" helper-text="helper text"
        :maxlength="10" :text-counter="10"  v-model="txtName2"
        label="Name" cleartext text-center
      />
      <span>Name: {{ txtName2 }}</span>
    </div>
    <prism language="html" :code="txtrounded"></prism>

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
        outline
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
        outline
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
        outline
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
        <div>outline</div>
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
        <div>Sets the input to outline mode</div>
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
      txtName: 'Eduardo',
      txtName2: 'text align center',
      txtPassword: 'Password',
      focused: false,
      form: {
        code: '',
        name: '',
        city: ''
      },
      txttextcomp: `
<h-input float-label="Name" v-model="txtName" placeholder="" cleartext/>
<span>Name: {{ txtName }}</span>
      `,
      txtpasswordcomp: `
<h-input type="password" float-label="Password" v-model="txtPassword" placeholder="type your password"/>
<span>Password: {{ txtPassword }}</span>     
      `,
      txtoutlined: `
<h-input error-label="error label" left-icon="fas fa-home" helper-text="helper text"
  :maxlength="10" :text-counter="10"  v-model="txtName2"
  float-label="Name" outlined cleartext
/>
<span>Name: {{ txtName2 }}</span>
      `,
      txtrounded: `
<div class="col-6">
  <h-input type="password" right-icon="fas fa-lock" filled rounded float-label="Password" v-model="txtPassword" placeholder="type your password" />
  <span>Password: {{ txtPassword }}</span>
</div>

<div class="col-6 h-mt-md">
  <h-input outlined rounded error-label="error label" left-icon="fas fa-birthday-cake" right-icon="fas fa-calendar-alt" helper-text="helper text"
    :maxlength="10" :text-counter="10"  v-model="txtName2"
    float-label="Name" cleartext text-center
  />
  <span>Name: {{ txtName2 }}</span>
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
    onKeyDown () {
      console.log('keydown')
      this.$SnackBar.create({
        message: 'Keydown key',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    },
    onKeyTab () {
      console.log('tab')
      this.$SnackBar.create({
        message: 'Tab key',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    },
    onEnter () {
      console.log('enter')
      this.$SnackBar.create({
        message: 'Enter key',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    },
    onChange (value) {
      console.log('field change: ' + value)
      this.$SnackBar.create({
        message: 'field change: ' + value,
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    },
    onBlur () {
      console.log('blur event')
    },
    showDate () {
      console.log('rightIcon in action')
      this.txtName2 = 'testando edit'
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
