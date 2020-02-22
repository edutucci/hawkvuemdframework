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
        trailing-icon="fas fa-search"
        @onFilter="onSearch"
        dense
        clearable
        :options="options"
      />

      <div>
        model: {{model1}}
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Inside Toolbar" :code="exsearch2" :script="exsearchScript2"
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
                v-model="model2"
                input-search
                label="Search"
                trailing-icon="fas fa-search"
                @onFilter="onSearch2"
                dense
                bg-color="bg-primary"
                clearable
                :options="options2"
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
      model1: '',
      model2: '',
      selectOptions: [],
      options: [],
      options2: [],
      exsearch: `
<h-input
  v-model="model1"
  input-search
  label="Search"
  leading-icon="fas fa-search"
  trailing-icon="fas fa-search"
  @onFilter="onSearch"
  dense
  clearable
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
      selectOptions: [],
      options: []
    }
  },
  mounted () {
    this.loadOptions()
  },
  methods: {
    loadOptions () {
      this.selectOptions = []
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })
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
`,
      exsearch2: `
<h-app-toolbar-container>
  <h-app-toolbar-title class="text-body1">
    Collection
  </h-app-toolbar-title>
  <h-app-toolbar-action>
    <div>
      <h-input
        v-model="model2"
        input-search
        label="Search"
        trailing-icon="fas fa-search"
        @onFilter="onSearch2"
        dense
        bg-color="bg-primary"
        clearable
        :options="options2"
      />
    </div>
  </h-app-toolbar-action>
</h-app-toolbar-container>
</h-app-toolbar>
`,
      exsearchScript2: `
import _ from 'lodash'
export default {
  data () {
    return {
      model2: '',
      selectOptions: [],
      options2: []
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
    onSearch2 (query) {
      this.options2 = []
      if (query.length === 0) {
        this.options2 = _.cloneDeep(this.selectOptions)
      } else {
        this.options2 = this.selectOptions.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
      }
    }
  }
}
`
    }
  },
  mounted () {
    this.loadSearchOptions()
  },
  methods: {
    loadSearchOptions () {
      this.selectOptions = []
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions' })
    },
    onSearch (query) {
      this.options = []
      if (query.length === 0) {
        this.options = _.cloneDeep(this.selectOptions)
      } else {
        this.options = this.selectOptions.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
      }
    },
    onSearch2 (query) {
      this.options2 = []
      if (query.length === 0) {
        this.options2 = _.cloneDeep(this.selectOptions)
      } else {
        this.options2 = this.selectOptions.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
      }
    }
  }
}
</script>
