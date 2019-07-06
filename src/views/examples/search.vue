<template >
  <div>
    <h3>Standard</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
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
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle 2' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.options.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle 3' })
      this.options.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })
      this.options.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions' })

      this.options = this.options.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
    }
  }
}
</script>
