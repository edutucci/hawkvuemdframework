<template>
  <div>
    <h1>Input Mask</h1>
    <html-separator/>
    <div>
      <h-toggle v-model="masked" text="Masked?"/>
    </div>
    <html-separator/>
    <h-btn contained @click="$refs.mask1.focus()"/>
    <h-btn contained @click="$refs.mask2.focus()"/>
    <html-separator/>
    <h-input-mask ref="mask1" outlined mask="(11)1111-1111" v-model="maskModelTel" icon="fas fa-phone" :masked="masked" cleartext
      @onTab="onKeyTab"  @onEnter="$refs.mask2.focus()"
    />
    <span>maskModel: {{maskModelTel}}</span>
    <pre v-highlightjs="mask1">
      <code class="html">
      </code>
    </pre>
    <html-separator/>
    <h-input-mask ref="mask2" mask="11111-111" v-model="maskModelCep" icon="fas fa-home" static-label="static label" :masked="masked" cleartext
      @onTab="onKeyTab" @onEnter="$refs.mask3.focus()"
    />
    <span>maskModel: {{maskModelCep}}</span>
    <pre v-highlightjs="mask2">
      <code class="html">
      </code>
    </pre>
    <h1>Search Mask</h1>
    <html-separator/>
    <h-search-mask
      @search="onSearch" ref="mask3" :options="options" mask="1-111-111-1111" v-model="maskModelTel2"
      icon="fas fa-phone" static-label="Domestic number" :masked="masked" cleartext
      @onTab="onKeyTab" @onEnter="$refs.mask1.focus()"
    />
    <span>maskModel: {{maskModelTel2}}</span>
    <pre v-highlightjs="mask3">
      <code class="html">
      </code>
    </pre>

    <h2 class="text-primary"> Vue Example</h2>
    <html-separator/>
    <pre v-highlightjs="sample1">
      <code class="html">
      </code>
    </pre>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>placeholder</div>
        <div>left-icon</div>
        <div>float-label</div>
        <div>static-label</div>
        <div>error-label</div>
        <div>helper-text</div>
        <div>outlined</div>
        <div>cleartext</div>
        <div>readonly</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>Number</div>
        <div>Boolean</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the placeholder for the input</div>
        <div>Sets the icon to left of the input</div>
        <div>Sets the float label for the input</div>
        <div>Sets the static label for the input</div>
        <div>Sets the error label for the input</div>
        <div>Sets the helper text for the input</div>
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
        <div>@onTab</div>
        <div>@onEnter</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on Tab</div>
        <div>Triggered on Enter</div>
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

import _ from 'lodash'

export default {
  components: {
  },
  data () {
    return {
      masked: false,
      maskModelTel: '',
      maskModelCep: '',
      maskModelTel2: '',
      options: [],
      mask1: `
<h-input-mask mask="(11)1111-1111" v-model="maskModelTel" icon="fas fa-phone" float-label="Phone" :masked="masked" cleartext/>
      `,
      mask2: `
<h-input-mask mask="11111-111" v-model="maskModelCep" icon="fas fa-home" float-label="ZipCode" :masked="masked" cleartext/>
      `,
      mask3: `
<h-search-mask mask="(11)1111-1111" v-model="maskModelTel" icon="fas fa-phone" :masked="masked" cleartext/>
      `,
      sample1: `
import _ from 'lodash'

export default {
  data () {
    return {
      masked: false,
      maskModelTel: '',
      maskModelCep: '',
      maskModelTel2: '',
      options: []
    }
  },
  methods: {
    onSearch (query) {
      console.log('query: ' + query)
      this.options = []
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Domestic (541) 752-3010', desc: 'Domestic Number', value: '752-3010' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Dialed 1-541-753-3010', desc: 'Dialed Number', value: '1-541-753-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Local 754-3010', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Car Plate DCY 0477', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Credit Card 4641 6797 9497 9798', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Date Card 2019/02/09', desc: 'Local Number', value: '754-3010' })

      this.options = this.options.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
    },
    onKeyTab () {
      console.log('tab')
      this.$SnackBar.create({
        message: 'Tab key pressed',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    }
  }
}  
      `
    }
  },
  methods: {
    onSearch (query) {
      console.log('query: ' + query)
      this.options = []
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Domestic (541) 752-3010', desc: 'Domestic Number', value: '752-3010' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Dialed 1-541-753-3010', desc: 'Dialed Number', value: '1-541-753-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Local 754-3010', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Car Plate DCY 0477', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Credit Card 4641 6797 9497 9798', desc: 'Local Number', value: '754-3010' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Date Card 2019/02/09', desc: 'Local Number', value: '754-3010' })

      this.options = this.options.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
    },
    onKeyTab () {
      console.log('tab')
      this.$SnackBar.create({
        message: 'Tab key pressed',
        textcolor: 'text-white',
        bgcolor: 'bg-positive'
      })
    }
  }
}
</script>
