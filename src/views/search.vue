<template >
  <div>
    <h1>Search</h1>
    <!-- <h-search @search="onSearch" ref="search" :options="options" v-model="model1"/> -->
    <div>
      <h-input :options="options"
        v-model="model1"
        search
        input-icon="fas fa-search"
        label=""
        display-mode="image"
        @input="onSearch"
        bgcolor="bg-primary"
        textcolor="text-white"
      />
    </div>
    <span>model: {{model1}}</span>
    <div>
      <h-btn contained bgcolor="bg-secondary" textcolor="text-white" text="secondary"/>
    </div>
    <prism language="html" :code="exsearch"></prism>

    <h1>Drawing menu from bottom to top</h1>
    <h-search @search="onSearch" ref="search2" :options="options" dtu/>
    <prism language="html" :code="exsearch2"></prism>

    <h1>Example</h1>
    <prism language="javascript" :code="sample"></prism>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>options</div>
        <div>placeholder</div>
        <div>icon</div>
        <div>dtu</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Array</div>
        <div>String</div>
        <div>String</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets a array with popup menu for the search</div>
        <div>Sets the placeholder for the input</div>
        <div>Replaces the icon</div>
        <div>Draws the menu from bottom to top</div>
      </div>
    </div>

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

  </div>
</template>

<script>

// import _ from 'lodash'

export default {
  components: {
  },
  data () {
    return {
      model1: '',
      options: [],
      exsearch: `
<h-search @search="onSearch" ref="search" :options="options"/>
      `,
      exsearch2: `
<h-search @search="onSearch" ref="search2" :options="options" dtu/>      `,
      sample: `

import _ from 'lodash'

export default {
  data () {
    return {
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
      `
    }
  },
  methods: {
    onSearch (query) {
      console.log('veio a query: ' + query)
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

      // this.options = this.options.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
    }
  }
}
</script>
