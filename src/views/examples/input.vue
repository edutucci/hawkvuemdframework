<template>
  <h-page-content>    
    <div class="col">
      <div class="text-h4">Input</div>

      <h3>Outlined</h3>
      <div class="h-pa-sm border border-gray border-radius">
        <div class="column col-inputs">
          <h-input v-model="types" label="Outlined"/>
          <h-input v-model="types" label="Outlined dense" dense/>
        </div>
      </div>

      <h3>Filled</h3>
      <div class="h-pa-sm border border-gray border-radius">
        <div class="column col-inputs">
          <h-input v-model="types" label="Filled" filled/>
          <h-input v-model="types" label="Filled dense" filled dense/>
        </div>
      </div>

      <h3>Password</h3>
      <div class="h-pa-sm border border-gray border-radius">
        <div class="column col-inputs">
          <h-input v-model="types" label="Password" dense type="password"/>
        </div>
      </div>

      <h3>Icons</h3>
      <div class="h-pa-sm border border-gray border-radius">
        <div class="column col-inputs">
          <h-input v-model="icons" label="Phone" leading-icon="fas fa-phone" clearable/>
          <h-input v-model="icons" label="E-Mail" filled leading-icon="fas fa-envelope" clearable/>
        </div>
      </div>

      <h3>Messages</h3>
      <div class="h-pa-sm border border-gray border-radius">
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
      </div>

      <h3>Prefix and suffix</h3>
      <div class="h-pa-sm border border-gray border-radius">
        <div class="column col-inputs">
          <h-input v-model="prefix" label="Price" clearable
            helper-text="Type a value" prefix="$"
          />
          <h-input v-model="suffix" label="E-Mail" leading-icon="fas fa-envelope" clearable
            helper-text="Type a valid mail" suffix="@gmail.com"
          />
        </div>
      </div>

      <h3>Input Focus (Using Enter)</h3>
      <div class="h-pa-sm border border-gray border-radius">
        <div class="column col-inputs">
          <h-input v-model="message" label="Name" ref="name"
            @onEnter="$refs.email.focus()"
          />
          <h-input v-model="message" label="E-Mail" ref="email"
            @onEnter="$refs.name.focus()"
            @blur="onBlur"
          />
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
      suffix: ''
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
