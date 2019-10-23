<template>
  <h-page-content padding>

    <!--
      Add
      - add event @rightIconClick for aditional input icon click
      - add rightIcon property

      Bugs
    -->

    <div class="row">
      <div class="col">
        <div class="text-h4">Input</div>

        <div ref="txt-outlined"/>
        <comp-code class="h-mt-lg" title="Outlined" :code="txtoutlined">
          <div class="column col-inputs">
            <h-input v-model="types" label="Outlined"/>
            <h-input v-model="types" label="Outlined dense" dense/>
          </div>
        </comp-code>

        <div ref="txt-filled"/>
        <comp-code class="h-mt-lg" title="Filled" :code="txtfilled">
          <div class="column col-inputs">
            <h-input v-model="types" label="Filled" filled/>
            <h-input v-model="types" label="Filled dense" filled dense/>
          </div>
        </comp-code>

        <div ref="txt-password"/>
        <comp-code class="h-mt-lg" title="Password" :code="txtpassword">
          <div class="column col-inputs">
            <h-input v-model="types" label="Password" dense type="password"/>
          </div>
        </comp-code>

        <div ref="txt-icons"/>
        <comp-code class="h-mt-lg" title="Icons" :code="txticons">
          <div class="column col-inputs">
            <h-input v-model="icons" label="Phone" leading-icon="fas fa-phone" clearable/>
            <h-input v-model="icons" label="E-Mail" filled leading-icon="fas fa-envelope" clearable/>
          </div>
        </comp-code>

        <div ref="txt-messages"/>
        <comp-code class="h-mt-lg" title="Messages" :code="txtmessages">
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

        <div ref="txt-prefix-suffix"/>
        <comp-code class="h-mt-lg" title="Prefix and suffix" :code="txtprefixsuffix">
          <div class="column col-inputs">
            <h-input v-model="prefix" label="Price" clearable
              helper-text="Type a value" prefix="$"
            />
            <h-input v-model="suffix" label="E-Mail" leading-icon="fas fa-envelope" clearable
              helper-text="Type a valid mail" suffix="@gmail.com"
            />
          </div>
        </comp-code>

        <div ref="txt-focus-enter"/>
        <comp-code class="h-mt-lg" title="Input Focus (Using Enter)" :code="txtfocus">
          <div class="column col-inputs">
            <h-input v-model="message" label="Name" ref="name"
              @onEnter="$refs.email.focus()"
            />
            <h-input v-model="message" label="E-Mail" ref="email"
              @onEnter="$refs.name.focus()"
            />
          </div>
        </comp-code>

      </div>
      <div class="col-auto h-pl-xs">
        <h-list class="sticky">
          <h-list-header text="Types" class="bg-gray"/>
          <h-list-item @click="goToElement('txt-outlined')">
            <h-list-item-content>
              <h-list-item-text title="Outlined"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('txt-filled')">
            <h-list-item-content>
              <h-list-item-text title="Filled"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-header text="Examples" class="bg-gray"/>
          <h-list-item @click="goToElement('txt-password')">
            <h-list-item-content>
              <h-list-item-text title="Password"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('txt-icons')">
            <h-list-item-content>
              <h-list-item-text title="Icons"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('txt-messages')">
            <h-list-item-content>
              <h-list-item-text title="Messages"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('txt-prefix-suffix')">
            <h-list-item-content>
              <h-list-item-text title="Prefix and suffix"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('txt-focus-enter')">
            <h-list-item-content>
              <h-list-item-text title="Focus(Enter)"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-header text="Additional Types" class="bg-gray"/>
        </h-list>
      </div>
    </div>

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

import viewport from '../../../components/others/viewport'

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
      txtoutlined: `
<div class="column col-inputs">
  <h-input v-model="types" label="Outlined"/>
  <h-input v-model="types" label="Outlined dense" dense/>
</div>
`,
      txtfilled: `
<div class="column col-inputs">
  <h-input v-model="types" label="Filled" filled/>
  <h-input v-model="types" label="Filled dense" filled dense/>
</div>
`,
      txtpassword: `
<div class="column col-inputs">
  <h-input v-model="types" label="Password" dense type="password"/>
</div>  
`,
      txticons: `
<div class="column col-inputs">
  <h-input v-model="icons" label="Phone" leading-icon="fas fa-phone" clearable/>
  <h-input v-model="icons" label="E-Mail" filled leading-icon="fas fa-envelope" clearable/>
</div> 
`,
      txtmessages: `
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
`,
      txtprefixsuffix: `
<div class="column col-inputs">
  <h-input v-model="prefix" label="Price" clearable
    helper-text="Type a value" prefix="$"
  />
  <h-input v-model="suffix" label="E-Mail" leading-icon="fas fa-envelope" clearable
    helper-text="Type a valid mail" suffix="@gmail.com"
  />
</div>
`,
      txtfocus: `
<div class="column col-inputs">
  <h-input v-model="message" label="Name" ref="name"
    @onEnter="$refs.email.focus()"
  />
  <h-input v-model="message" label="E-Mail" ref="email"
    @onEnter="$refs.name.focus()"
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
    },
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    }
  }
}
</script>

<style scoped>
 .col-inputs > .main-input-container {
   margin-top: 10px;
 }

</style>
