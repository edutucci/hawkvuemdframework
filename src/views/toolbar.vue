<template>
  <div>
    <h1  class="text-primary">Toolbar App Top</h1>

    <div class="text-primary" style="background-color: lightgray">
      <b>Note:</b> To add Toolbar App Top in the top of page the use the classes: <b>top-left-absolute</b> or <b>top-left-fixed</b>
    </div>

    <h2>Example 1</h2>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
        <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
        <h-app-toolbar-title title="My big music collection to sing"/>
        <h-app-toolbar-action>
          <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white" @click="iconClick"/>
          <h-fa-icon :icon="['fas', 'search']" textcolor="text-white"/>
        </h-app-toolbar-action>
        <h-app-toolbar-menu>
          <h-menu-dropdown rtl :icon="['fas', 'ellipsis-v']" textcolor="text-white">
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." />
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
          </h-menu-dropdown>
        </h-app-toolbar-menu>
      </h-app-toolbar-container>
    </h-app-toolbar>

    <div class="full-width h-pt-xl h-pb-xl">
        <pre v-highlightjs="tb1" >
          <code class="html">
          </code>
        </pre>
    </div>

    <h2>Example 2</h2>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
        <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
        <h-app-toolbar-title title="My big music collection to sing"  style="padding-top: 60px;"/>
        <h-app-toolbar-action>
          <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
          <h-fa-icon :icon="['fas', 'search']" textcolor="text-white"/>
        </h-app-toolbar-action>
        <h-app-toolbar-menu>
          <h-menu-dropdown rtl :icon="['fas', 'ellipsis-v']" textcolor="text-white">
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." />
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
          </h-menu-dropdown>
        </h-app-toolbar-menu>
      </h-app-toolbar-container>
    </h-app-toolbar>

    <div class="full-width h-pt-xl h-pb-xl">
        <pre v-highlightjs="tb2" >
          <code class="html">
          </code>
        </pre>
    </div>

    <h1 class="text-primary">Toolbar App Bottom</h1>

    <div class="text-primary" style="background-color: lightgray">
      <b>Note:</b> To add Toolbar App Bottom in the bottom of page the use the classes: <b>bottom-left-absolute</b> or <b>bottom-left-fixed</b>
    </div>

    <h1> Centered Fab</h1>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
        <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
        <h-app-toolbar-menu>
          <h-menu-dropdown dtu :icon="['fas', 'ellipsis-v']" textcolor="text-white">
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct."/>
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
          </h-menu-dropdown>
         </h-app-toolbar-menu>
         <h-app-toolbar-fab class="flex-justify-center">
           <h-btn-float bgcolor="bg-black" textcolor="text-white" :icon="['fas', 'plus']"/>
         </h-app-toolbar-fab>
         <h-app-toolbar-action >
           <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
           <h-fa-icon :icon="['fas', 'film']" textcolor="text-white"/>
           <h-fa-icon :icon="['fas', 'music']" textcolor="text-white"/>
           <h-fa-icon :icon="['fas', 'share-alt']" textcolor="text-white"/>
         </h-app-toolbar-action>
       </h-app-toolbar-container>
    </h-app-toolbar>

    <div class="full-width h-pt-xl h-pb-xl">
        <pre v-highlightjs="tb3" >
          <code class="html">
          </code>
        </pre>
    </div>

     <h1> End Fab</h1>
    <h-app-toolbar>
       <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
         <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
         <h-app-toolbar-action class="flex flex-1">
           <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
           <h-fa-icon :icon="['fas', 'film']" textcolor="text-white"/>
           <h-fa-icon :icon="['fas', 'music']" textcolor="text-white"/>
           <h-fa-icon :icon="['fas', 'share-alt']" textcolor="text-white"/>
         </h-app-toolbar-action>
         <h-app-toolbar-fab class="flex-justify-end">
           <h-btn-float bgcolor="bg-black" textcolor="text-white" :icon="['fas', 'plus']"/>
         </h-app-toolbar-fab>
       </h-app-toolbar-container>
    </h-app-toolbar>

    <div class="full-width h-pt-xl h-pb-xl">
        <pre v-highlightjs="tb4" >
          <code class="html">
          </code>
        </pre>
    </div>

    <h1> No Fab</h1>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
        <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
        <h-app-toolbar-action class="flex flex-1 flex-justify-end">
          <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
          <h-fa-icon :icon="['fas', 'film']" textcolor="text-white"/>
          <h-fa-icon :icon="['fas', 'music']" textcolor="text-white"/>
          <h-fa-icon :icon="['fas', 'share-alt']" textcolor="text-white"/>
        </h-app-toolbar-action>
      </h-app-toolbar-container>
    </h-app-toolbar>

    <div class="full-width h-pt-xl h-pb-xl">
        <pre v-highlightjs="tb5" >
          <code class="html">
          </code>
        </pre>
    </div>

  </div>

</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      tb1: `
<h-app-toolbar>
  <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
    <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
    <h-app-toolbar-title title="My big music collection to sing"/>
    <h-app-toolbar-action>
      <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white" @click="iconClick"/>
      <h-fa-icon :icon="['fas', 'search']" textcolor="text-white"/>
    </h-app-toolbar-action>
    <h-app-toolbar-menu>
      <h-menu-dropdown rtl :icon="['fas', 'ellipsis-v']" textcolor="text-white">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." />
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
      </h-menu-dropdown>
    </h-app-toolbar-menu>
  </h-app-toolbar-container>
</h-app-toolbar>   
      `,
      tb2: `
<h-app-toolbar>
  <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
    <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
    <h-app-toolbar-title title="My big music collection to sing"  style="padding-top: 60px;"/>
    <h-app-toolbar-action>
      <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
      <h-fa-icon :icon="['fas', 'search']" textcolor="text-white"/>
    </h-app-toolbar-action>
    <h-app-toolbar-menu>
      <h-menu-dropdown rtl :icon="['fas', 'ellipsis-v']" textcolor="text-white">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." />
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
      </h-menu-dropdown>
    </h-app-toolbar-menu>
  </h-app-toolbar-container>
</h-app-toolbar>
      `,
      tb3: `
<h-app-toolbar>
  <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
    <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
    <h-app-toolbar-menu>
      <h-menu-dropdown dtu :icon="['fas', 'ellipsis-v']" textcolor="text-white">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct."/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
      </h-menu-dropdown>
      </h-app-toolbar-menu>
      <h-app-toolbar-fab class="flex-justify-center">
        <h-btn-float bgcolor="bg-black" textcolor="text-white" :icon="['fas', 'plus']"/>
      </h-app-toolbar-fab>
      <h-app-toolbar-action >
        <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
        <h-fa-icon :icon="['fas', 'film']" textcolor="text-white"/>
        <h-fa-icon :icon="['fas', 'music']" textcolor="text-white"/>
        <h-fa-icon :icon="['fas', 'share-alt']" textcolor="text-white"/>
      </h-app-toolbar-action>
    </h-app-toolbar-container>
</h-app-toolbar>
      `,
      tb4: `
<h-app-toolbar>
    <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
      <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
      <h-app-toolbar-action class="flex flex-1">
        <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
        <h-fa-icon :icon="['fas', 'film']" textcolor="text-white"/>
        <h-fa-icon :icon="['fas', 'music']" textcolor="text-white"/>
        <h-fa-icon :icon="['fas', 'share-alt']" textcolor="text-white"/>
      </h-app-toolbar-action>
      <h-app-toolbar-fab class="flex-justify-end">
        <h-btn-float bgcolor="bg-black" textcolor="text-white" :icon="['fas', 'plus']"/>
      </h-app-toolbar-fab>
    </h-app-toolbar-container>
</h-app-toolbar>
      `,
      tb5: `
<h-app-toolbar>
  <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
    <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
    <h-app-toolbar-action class="flex flex-1 flex-justify-end">
      <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
      <h-fa-icon :icon="['fas', 'film']" textcolor="text-white"/>
      <h-fa-icon :icon="['fas', 'music']" textcolor="text-white"/>
      <h-fa-icon :icon="['fas', 'share-alt']" textcolor="text-white"/>
    </h-app-toolbar-action>
  </h-app-toolbar-container>
</h-app-toolbar>
      `
    }
  },
  methods: {
    iconClick () {
      // console.log('icon click')
    }
  }
}
</script>

<style scoped>

</style>
