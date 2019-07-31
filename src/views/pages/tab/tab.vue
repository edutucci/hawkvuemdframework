<template>
  <h-page-content padding>
    <div class="text-h4">Tabs</div>

    <comp-code class="h-mt-md" title="Colors" :code="exTabColors">
      <h-tabs v-model="tabColors" bgcolor="bg-primary" textcolor="text-white">
        <h-tab name="HOME"></h-tab>
        <h-tab name="PROFILE"></h-tab>
        <h-tab name="SETTINGS"></h-tab>
        <h-tab name="MAIL"></h-tab>
      </h-tabs>

      <h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-secondary" textcolor="text-white">
        <h-tab name="WEB"></h-tab>
        <h-tab name="SHOPPING"></h-tab>
        <h-tab name="VIDEOS"></h-tab>
        <h-tab name="IMAGES"></h-tab>
      </h-tabs>

      <h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-positive">
        <h-tab name="GAMES"></h-tab>
        <h-tab name="BOOKS"></h-tab>
        <h-tab name="ACCOUNT"></h-tab>
        <h-tab name="DOWNLOAD"></h-tab>
      </h-tabs>
    </comp-code>

    <comp-code class="h-mt-md" title="Text and Icons" :code="exTabTextIcons">
      <h-tabs v-model="tabColors" bgcolor="bg-indigo400" textcolor="text-white">
        <h-tab name="HOME" left-icon="fas fa-home"></h-tab>
        <h-tab name="PROFILE" left-icon="fas fa-user"></h-tab>
        <h-tab name="SETTINGS" left-icon="fas fa-cog"></h-tab>
        <h-tab name="MAIL" left-icon="fas fa-envelope"></h-tab>
      </h-tabs>

      <h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-cyan400">
        <h-tab name="WEB" left-icon="fas fa-globe"></h-tab>
        <h-tab name="SHOPPING" left-icon="fas fa-shopping-cart"></h-tab>
        <h-tab name="VIDEOS" left-icon="fas fa-video"></h-tab>
        <h-tab name="IMAGES" left-icon="fas fa-image"></h-tab>
      </h-tabs>

      <h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-white">
        <h-tab name="GAMES" left-icon="fas fa-gamepad"></h-tab>
        <h-tab name="BOOKS" left-icon="fas fa-book"></h-tab>
        <h-tab name="ACCOUNT" left-icon="fas fa-user-circle"></h-tab>
        <h-tab name="DOWNLOAD" left-icon="fas fa-file-download"></h-tab>
      </h-tabs>

      <h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-indigo400" textcolor="text-white">
        <h-tab name="HOME" top-icon="fas fa-home"></h-tab>
        <h-tab name="PROFILE" top-icon="fas fa-user"></h-tab>
        <h-tab name="SETTINGS" top-icon="fas fa-cog"></h-tab>
        <h-tab name="MAIL" top-icon="fas fa-envelope"></h-tab>
      </h-tabs>

      <h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-cyan400">
        <h-tab name="WEB" top-icon="fas fa-globe"></h-tab>
        <h-tab name="SHOPPING" top-icon="fas fa-shopping-cart"></h-tab>
        <h-tab name="VIDEOS" top-icon="fas fa-video"></h-tab>
        <h-tab name="IMAGES" top-icon="fas fa-image"></h-tab>
      </h-tabs>

      <h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-white">
        <h-tab name="GAMES" top-icon="fas fa-gamepad"></h-tab>
        <h-tab name="BOOKS" top-icon="fas fa-book"></h-tab>
        <h-tab name="ACCOUNT" top-icon="fas fa-user-circle"></h-tab>
        <h-tab name="DOWNLOAD" top-icon="fas fa-file-download"></h-tab>
      </h-tabs>
    </comp-code>

    <!-- <h1>Horizontal Tab</h1>
    <div style="background: yellow; height: 220px;">
      <h-tabs v-model="tabModel" @tabChange="tabChange" bgcolor="bg-secondary" textcolor="text-white" class="h-mt-md">
        <h-tab name="Bebidas" left-icon="fas fa-home">
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
        <h-tab name="Refrigerantes e Sucos" left-icon="fas fa-globe" default>
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
          </p>      </h-tab>
        <h-tab name="Vodkas e Whisks">
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
          </p>      </h-tab>
        <h-tab name="Comida por Kg">
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
        <h-tab name="Self Service">
          This is the content of the tab 5
        </h-tab>
        <h-tab name="Sucos 2">
            This is the content of the tab 6
        </h-tab>
        <h-tab name="Comida por Kg 2">
            This is the content of the tab 7
        </h-tab>
        <h-tab name="Self Service 2">
          This is the content of the tab 8
        </h-tab>
      </h-tabs>
    </div>

    <h3>TabModel: {{tabModel}}</h3>
    <prism language="html" :code="tabhor"></prism> -->

    <h1>Vertical Tab</h1>

    <div class="scroll" style="background: yellow; height: 220px;">
      <h-tabs bgcolor="bg-primary" textcolor="text-white"  vertical class="h-mt-md">
        <h-tab name="First tab" left-icon="fas fa-globe" default>
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
        <h-tab name="TAB 2" top-icon="fas fa-globe">
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
    </div>

    <!-- <prism language="html" :code="tabver"></prism> -->

    <h2 class="h-mt-lg text-primary"> Tabs Help</h2>
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
        <div>left-icon</div>
        <div>top-icon</div>
        <div>default</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the tab name</div>
        <div>Sets the icon before tab name</div>
        <div>Sets the icon above tab name (vertical tab only)</div>
        <div>Sets the default tab</div>
      </div>
    </div>

  </h-page-content>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      tabColors: '',
      tabModel: '',
      exTabColors: `
<h-tabs v-model="tabColors" bgcolor="bg-indigo400" textcolor="text-white">
  <h-tab name="HOME"></h-tab>
  <h-tab name="PROFILE"></h-tab>
  <h-tab name="SETTINGS"></h-tab>
  <h-tab name="MAIL"></h-tab>
</h-tabs>

<h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-cyan400">
  <h-tab name="WEB"></h-tab>
  <h-tab name="SHOPPING"></h-tab>
  <h-tab name="VIDEOS"></h-tab>
  <h-tab name="IMAGES"></h-tab>
</h-tabs>

<h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-white">
  <h-tab name="GAMES"></h-tab>
  <h-tab name="BOOKS"></h-tab>
  <h-tab name="ACCOUNT"></h-tab>
  <h-tab name="DOWNLOAD"></h-tab>
</h-tabs>
`,
      exTabTextIcons: `
<h-tabs v-model="tabColors" bgcolor="bg-indigo400" textcolor="text-white">
  <h-tab name="HOME" left-icon="fas fa-home"></h-tab>
  <h-tab name="PROFILE" left-icon="fas fa-user"></h-tab>
  <h-tab name="SETTINGS" left-icon="fas fa-cog"></h-tab>
  <h-tab name="MAIL" left-icon="fas fa-envelope"></h-tab>
</h-tabs>

<h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-cyan400">
  <h-tab name="WEB" left-icon="fas fa-globe"></h-tab>
  <h-tab name="SHOPPING" left-icon="fas fa-shopping-cart"></h-tab>
  <h-tab name="VIDEOS" left-icon="fas fa-video"></h-tab>
  <h-tab name="IMAGES" left-icon="fas fa-image"></h-tab>
</h-tabs>

<h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-white">
  <h-tab name="GAMES" left-icon="fas fa-gamepad"></h-tab>
  <h-tab name="BOOKS" left-icon="fas fa-book"></h-tab>
  <h-tab name="ACCOUNT" left-icon="fas fa-user-circle"></h-tab>
  <h-tab name="DOWNLOAD" left-icon="fas fa-file-download"></h-tab>
</h-tabs>

<h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-indigo400" textcolor="text-white">
  <h-tab name="HOME" top-icon="fas fa-home"></h-tab>
  <h-tab name="PROFILE" top-icon="fas fa-user"></h-tab>
  <h-tab name="SETTINGS" top-icon="fas fa-cog"></h-tab>
  <h-tab name="MAIL" top-icon="fas fa-envelope"></h-tab>
</h-tabs>

<h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-cyan400">
  <h-tab name="WEB" top-icon="fas fa-globe"></h-tab>
  <h-tab name="SHOPPING" top-icon="fas fa-shopping-cart"></h-tab>
  <h-tab name="VIDEOS" top-icon="fas fa-video"></h-tab>
  <h-tab name="IMAGES" top-icon="fas fa-image"></h-tab>
</h-tabs>

<h-tabs class="h-mt-md" v-model="tabColors" bgcolor="bg-white">
  <h-tab name="GAMES" top-icon="fas fa-gamepad"></h-tab>
  <h-tab name="BOOKS" top-icon="fas fa-book"></h-tab>
  <h-tab name="ACCOUNT" top-icon="fas fa-user-circle"></h-tab>
  <h-tab name="DOWNLOAD" top-icon="fas fa-file-download"></h-tab>
</h-tabs>
`,
      tabhor: `
<h-tabs v-model="tabModel" @tabChange="tabChange" bgcolor="bg-secondary" textcolor="text-white" class="h-mt-md">
  <h-tab name="Bebidas" left-icon="fas fa-home">
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
  <h-tab name="Refrigerantes e Sucos" left-icon="fas fa-globe" default>
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
    </p>      </h-tab>
  <h-tab name="Vodkas e Whisks">
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
    </p>      </h-tab>
  <h-tab name="Comida por Kg">
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
  <h-tab name="Self Service">
    This is the content of the tab 5
  </h-tab>
  <h-tab name="Sucos 2">
      This is the content of the tab 6
  </h-tab>
  <h-tab name="Comida por Kg 2">
      This is the content of the tab 7
  </h-tab>
  <h-tab name="Self Service 2">
    This is the content of the tab 8
  </h-tab>
</h-tabs>

<h3>TabModel: {{tabModel}}</h3>      
      `,
      tabver: `
<h-tabs bgcolor="bg-primary" textcolor="text-white"  vertical class="h-mt-md">
  <h-tab name="First tab" lefticon="icon="fas fa-globe"" default>
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
  <h-tab name="TAB 2" topicon="icon="fas fa-globe"">
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
