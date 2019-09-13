<template >
  <h-page-content padding>
    <div class="text-h4">Search</div>

    <!--
      BUGS
      - o dropdown deve ter uma direcao automatica
    -->

    <comp-code class="h-mt-lg" title="Standard" :code="exsearch" :script="exsearchScript"
      javascript
    >
      <h-input :options="options"
        v-model="model1"
        input-search
        input-icon="fas fa-search"
        label="Search"
        @input="onSearch"
      />
      <div>
        model: {{model1}}
      </div>
    </comp-code>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@search(text)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered when the input changes after 1 second</div>
      </div>
    </div>

  </h-page-content>
</template>

<script>

import _ from 'lodash'

export default {
  components: {
  },
  data () {
    return {
      model1: '',
      options: [],
      exsearch: `
<h-input :options="options"
  v-model="model1"
  search
  input-icon="fas fa-search"
  label=""
  display-mode="image"
  @input="onSearch"
/>
<div>
  model: {{model1}}
</div>
`,
      exsearchScript: `
import _ from 'lodash'
export default {
  data () {
    return {
      model1: '',
      options: []
    }
  },
  methods: {
    onSearch (query) {
      this.options = []
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions' })

      this.options = this.options.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
    }
  }
}
`
    }
  },
  methods: {
    onSearch (query) {
      this.options = []
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions' })

      this.options = this.options.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
    }
  }
}
</script>
