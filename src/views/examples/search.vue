<template >
  <h-page-content padding>
    <h3>Standard</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-input
        v-model="model1"
        input-search
        label="Search"
        leading-icon="fas fa-search"
        trailing-icon="fas fa-search"
        @onFilter="onSearch"
        dense
        clearable
        :options="options"
      />

      <div>
        model: {{model1}}
      </div>
    </div>

    <h3>Inside Toolbar</h3>
    <div class="h-pa-sm border border-gray border-radius">
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
