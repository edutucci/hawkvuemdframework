<template>
  <div>
    <h1>Tabs</h1>

    <h1>Horizontal Tab</h1>
    <h-tabs v-model="tabModel" @tabChange="tabChange" bgcolor="bg-secondary" textcolor="text-white" class="h-mt-md">
      <h-tab name="TAB 1" :lefticon="['fas', 'home']">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
        </p>
      </h-tab>
      <h-tab name="TAB 2" :topicon="['fas', 'globe']" default>
          This is the content of the second tab
      </h-tab>
      <h-tab name="TAB 3">
          This is the content of the tab 3
      </h-tab>
      <h-tab name="TAB 4">
          This is the content of the tab 4
      </h-tab>
      <h-tab name="TAB 5">
        This is the content of the tab 5
      </h-tab>
    </h-tabs>

    <h3>TabModel: {{tabModel}}</h3>

    <pre v-highlightjs="tabhor">
    <code class="html">
    </code>
    </pre>

    <h1>Vertical Tab</h1>

    <h-tabs bgcolor="bg-primary" textcolor="text-white"  vertical class="h-mt-md">
      <h-tab name="First tab" :lefticon="['fas', 'globe']" default>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
        </p>
      </h-tab>
      <h-tab name="TAB 2" :topicon="['fas', 'globe']">
          This is the content of the second tab
      </h-tab>
      <h-tab name="TAB 3">
          This is the content of the tab 3
      </h-tab>
      <h-tab name="TAB 4">
          This is the content of the tab 4
      </h-tab>
      <h-tab name="TAB 5">
        This is the content of the tab 5
      </h-tab>
    </h-tabs>

    <pre v-highlightjs="tabver">
    <code class="html">
    </code>
    </pre>

    <h2 class="text-primary"> Tabs Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>vertical</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>If true tab is set to vertical mode</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@tabChange(value)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered when tabs change. The tab name is sent.</div>
      </div>
    </div>

    <h2 class="text-primary"> Tab Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>name</div>
        <div>lefticon</div>
        <div>topicon</div>
        <div>default</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>Array</div>
        <div>Array</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the tab name</div>
        <div>Sets the icon before tab name</div>
        <div>Sets the icon above tab name</div>
        <div>Sets the default tab</div>
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
      tabModel: '',
      tabhor: `
<h-tabs v-model="tabModel" @tabChange="tabChange" bgcolor="bg-secondary" textcolor="text-white" class="h-mt-md">
  <h-tab name="TAB 1" :lefticon="['fas', 'home']">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
    </p>
  </h-tab>
  <h-tab name="TAB 2" :topicon="['fas', 'globe']" default>
      This is the content of the second tab
  </h-tab>
  <h-tab name="TAB 3">
      This is the content of the tab 3
  </h-tab>
  <h-tab name="TAB 4">
      This is the content of the tab 4
  </h-tab>
  <h-tab name="TAB 5">
    This is the content of the tab 5
  </h-tab>
</h-tabs>

<h3>TabModel: {{tabModel}}</h3>      
      `,
      tabver: `
<h-tabs bgcolor="bg-primary" textcolor="text-white"  vertical class="h-mt-md">
  <h-tab name="First tab" :lefticon="['fas', 'globe']" default>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odit magnam minima, soluta doloribus reiciendis molestiae placeat unde eos molestias. Quisquam aperiam, pariatur. Tempora, placeat ratione porro voluptate odit minima.
    </p>
  </h-tab>
  <h-tab name="TAB 2" :topicon="['fas', 'globe']">
      This is the content of the second tab
  </h-tab>
  <h-tab name="TAB 3">
      This is the content of the tab 3
  </h-tab>
  <h-tab name="TAB 4">
      This is the content of the tab 4
  </h-tab>
  <h-tab name="TAB 5">
    This is the content of the tab 5
  </h-tab>
</h-tabs>
      `
    }
  },
  methods: {
    tabChange (value) {
      console.log('tab change name: ' + value)
    }
  }
}
</script>
