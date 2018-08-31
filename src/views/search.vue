<template >
  <div>
    <h1>Search</h1>
    <h-search @search="onSearch" ref="search" @onEnter="$refs.code.focus()" :options="options"/>
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
    />
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      focused: false,
      form: {
        code: '',
        name: '',
        city: ''
      },
      query: '',
      options: []
    }
  },
  methods: {
    onSearch (query) {
      console.log('veio a query: ' + query)
      this.options = []
      this.options.push({avatar: '/avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you'})
      this.options.push({img: '/avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017'})
      this.options.push({icon: ['fas', 'volleyball-ball'], text: 'Attractions', desc: 'Lets go to the movie?'})
    },
    onKeyDown () {
      console.log('keydown')
    },
    onKeyTab () {
      console.log('tab')
    },
    onEnter () {
      console.log('enter')
    }
  }
}
</script>
