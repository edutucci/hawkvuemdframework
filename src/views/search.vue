<template >
  <div>
    <h1>Search</h1>
    <h-search @search="onSearch" ref="search" :options="options"/>

    <pre v-highlightjs="exsearch">
      <code class="html">
      </code>
    </pre>

    <h1>Drawing menu from bottom to top</h1>
    <h-search @search="onSearch" ref="search2" :options="options" dtu/>

    <pre v-highlightjs="exsearch2">
      <code class="html">
      </code>
    </pre>

    <h1>Example</h1>
    <pre v-highlightjs="sample">
      <code class="javascript">
      </code>
    </pre>

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
export default {
  components: {
  },
  data () {
    return {
      options: [],
      exsearch: `
<h-search @search="onSearch" ref="search" :options="options"/>
      `,
      exsearch2: `
<h-search @search="onSearch" ref="search2" :options="options" dtu/>      `,
      sample: `
export default {
  data () {
    return {
      options: []
    }
  },
  methods: {
    onSearch (query) {
      this.options = []
      this.options.push({avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you'})
      this.options.push({img: 'avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017'})
      this.options.push({icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?'})
    }
  }
      `
    }
  },
  methods: {
    onSearch (query) {
      // console.log('veio a query: ' + query)
      this.options = []
      this.options.push({avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you'})
      this.options.push({img: 'avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017'})
      this.options.push({icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?'})
      this.options.push({avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you'})
      this.options.push({img: 'avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017'})
      this.options.push({icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?'})
      this.options.push({avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you'})
      this.options.push({img: 'avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017'})
      this.options.push({icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?'})
    }
  }
}
</script>
