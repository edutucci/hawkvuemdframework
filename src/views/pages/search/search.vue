<template >
  <h-page-content padding>
    <div class="text-h4">Search</div>

    <comp-code class="h-mt-lg" title="Standard" :code="exsearch" :script="exsearchScript"
      javascript
    >
      <h-input
        v-model="model1"
        input-search
        label="Search"
        leading-icon="fas fa-search"
        trailing-icon="fas fa-search"
        @onFilter="onSearch"
        dense
        clearable
        helper-text="Search here"
        error-message="error"
      />

      <div>
        model: {{model1}}
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Standard" :code="exsearch" :script="exsearchScript"
      javascript
    >
      <h-app-toolbar bg-color="bg-primary" text-color="text-white">
        <h-app-toolbar-container>
          <h-app-toolbar-title class="text-body1">
            Musics
          </h-app-toolbar-title>
          <h-app-toolbar-action>
            <div>
              <h-input
                v-model="model1"
                input-search
                label="Search"
                leading-icon="fas fa-search"
                trailing-icon="fas fa-search"
                @onFilter="onSearch"
                dense
                bg-color="bg-primary"
                filled
                clearable
                helper-text="Search here"
              />
            </div>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>
    </comp-code>

    <comp-code class="h-mt-lg" title="Standard" :code="exsearch" :script="exsearchScript"
      javascript
    >
      <h-app-toolbar bg-color="bg-primary" text-color="text-white">
        <h-app-toolbar-container>
          <h-app-toolbar-title class="text-body1">
            Collection
          </h-app-toolbar-title>
          <h-app-toolbar-action>
            <div>
              <h-input
                v-model="model1"
                input-search
                label="Search"
                leading-icon="fas fa-search"
                trailing-icon="fas fa-search"
                @onFilter="onSearch"
                dense
                bg-color="bg-primary"
                clearable
                error-message="Invalid information"
              />
            </div>
          </h-app-toolbar-action>
        </h-app-toolbar-container>
      </h-app-toolbar>
    </comp-code>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@onFilter(text)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered when the input changes after 1/2 second</div>
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
      model1: 'input text',
      selectOptions: [],
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
  mounted () {
    this.loadOptions()
  },
  methods: {
    loadOptions () {
      this.selectOptions = []
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions' })
    },
    onSearch (query) {
      this.options = []
      if (query.length === 0) {
        this.options = _.cloneDeep(this.selectOptions)
      } else {
        this.options = this.selectOptions.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
      }
    }
  }
}
</script>
