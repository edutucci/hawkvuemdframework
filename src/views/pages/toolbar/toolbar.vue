<template>
  <div>
    <h1  class="text-primary">Toolbar App Top</h1>

    <div class="text-primary" style="background-color: lightgray">
      <b>Note:</b> To add Toolbar App Top in the top of element the use the classes: <b>top-left-absolute</b> or <b>top-left-fixed</b>
    </div>

    <h2>Example 1</h2>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
        <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
        <h-app-toolbar-title title="My big music collection to sing"/>
        <h-app-toolbar-action>
          <h-fa-icon icon="fas fa-heart" textcolor="text-white" @click="iconClick"/>
          <h-fa-icon icon="fas fa-search" textcolor="text-white"/>
        </h-app-toolbar-action>
        <h-app-toolbar-menu>
          <h-menu-dropdown rtl icon="fas fa-ellipsis-v" textcolor="text-white">
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." />
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands"/>
          </h-menu-dropdown>
        </h-app-toolbar-menu>
      </h-app-toolbar-container>
    </h-app-toolbar>

    <prism language="html" :code="tb1"></prism>

    <h2>Example 2</h2>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
        <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
        <h-app-toolbar-title title="My big music collection to sing"  style="padding-top: 60px;"/>
        <h-app-toolbar-action>
          <h-fa-icon icon="fas fa-heart" textcolor="text-white" @click="iconClick"/>
          <h-fa-icon icon="fas fa-search" textcolor="text-white"/>
        </h-app-toolbar-action>
        <h-app-toolbar-menu>
          <h-menu-dropdown rtl icon="fas fa-ellipsis-v" textcolor="text-white">
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." />
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands"/>
          </h-menu-dropdown>
        </h-app-toolbar-menu>
      </h-app-toolbar-container>
    </h-app-toolbar>

    <prism language="html" :code="tb2"></prism>

    <h1 class="text-primary">Toolbar App Bottom</h1>

    <div class="text-primary" style="background-color: lightgray">
      <b>Note:</b> To add Toolbar App Bottom in the bottom of element the use the classes: <b>bottom-left-absolute</b> or <b>bottom-left-fixed</b>
    </div>

    <h1> Centered Fab</h1>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
        <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
        <h-app-toolbar-menu>
          <h-menu-dropdown dtu icon="fas fa-ellipsis-v" textcolor="text-white">
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." />
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands"/>
          </h-menu-dropdown>
         </h-app-toolbar-menu>
         <h-app-toolbar-fab class="flex-justify-center">
           <h-btn-float bgcolor="bg-black" textcolor="text-white" icon="fas fa-plus"/>
         </h-app-toolbar-fab>
         <h-app-toolbar-action >
           <h-fa-icon icon="fas fa-heart" textcolor="text-white"/>
           <h-fa-icon icon="fas fa-film" textcolor="text-white"/>
           <h-fa-icon icon="fas fa-music" textcolor="text-white"/>
           <h-fa-icon icon="fas fa-share-alt" textcolor="text-white"/>
         </h-app-toolbar-action>
       </h-app-toolbar-container>
    </h-app-toolbar>

    <prism language="html" :code="tb3"></prism>

     <h1> End Fab</h1>
    <h-app-toolbar>
       <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
         <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
         <h-app-toolbar-action class="flex flex-1">
           <h-fa-icon icon="fas fa-heart" textcolor="text-white"/>
           <h-fa-icon icon="fas fa-film" textcolor="text-white"/>
           <h-fa-icon icon="fas fa-music" textcolor="text-white"/>
           <h-fa-icon icon="fas fa-share-alt" textcolor="text-white"/>
         </h-app-toolbar-action>
         <h-app-toolbar-fab class="flex-justify-end">
           <h-btn-float bgcolor="bg-black" textcolor="text-white" icon="fas fa-plus"/>
         </h-app-toolbar-fab>
       </h-app-toolbar-container>
    </h-app-toolbar>

    <prism language="html" :code="tb4"></prism>

    <h1> No Fab</h1>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
        <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
        <h-app-toolbar-action class="flex flex-1 flex-justify-end">
           <h-fa-icon icon="fas fa-heart" textcolor="text-white"/>
           <h-fa-icon icon="fas fa-film" textcolor="text-white"/>
           <h-fa-icon icon="fas fa-music" textcolor="text-white"/>
           <h-fa-icon icon="fas fa-share-alt" textcolor="text-white"/>
        </h-app-toolbar-action>
      </h-app-toolbar-container>
    </h-app-toolbar>

    <prism language="html" :code="tb5"></prism>

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
    <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
    <h-app-toolbar-title title="My big music collection to sing"/>
    <h-app-toolbar-action>
      <h-fa-icon icon="fas fa-heart" textcolor="text-white" @click="iconClick"/>
      <h-fa-icon icon="fas fa-search" textcolor="text-white"/>
    </h-app-toolbar-action>
    <h-app-toolbar-menu>
      <h-menu-dropdown rtl icon="fas fa-ellipsis-v" textcolor="text-white">
        <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." />
        <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands"/>
      </h-menu-dropdown>
    </h-app-toolbar-menu>
  </h-app-toolbar-container>
</h-app-toolbar>
      `,
      tb2: `
<h-app-toolbar>
  <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
    <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
    <h-app-toolbar-title title="My big music collection to sing"  style="padding-top: 60px;"/>
    <h-app-toolbar-action>
      <h-fa-icon icon="fas fa-heart" textcolor="text-white" @click="iconClick"/>
      <h-fa-icon icon="fas fa-search" textcolor="text-white"/>
    </h-app-toolbar-action>
    <h-app-toolbar-menu>
      <h-menu-dropdown rtl icon="fas fa-ellipsis-v" textcolor="text-white">
        <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." />
        <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands"/>
      </h-menu-dropdown>
    </h-app-toolbar-menu>
  </h-app-toolbar-container>
</h-app-toolbar>
      `,
      tb3: `
<h-app-toolbar>
  <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
    <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
    <h-app-toolbar-menu>
      <h-menu-dropdown dtu icon="fas fa-ellipsis-v" textcolor="text-white">
        <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." />
        <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands"/>
      </h-menu-dropdown>
      </h-app-toolbar-menu>
      <h-app-toolbar-fab class="flex-justify-center">
        <h-btn-float bgcolor="bg-black" textcolor="text-white" icon="fas fa-plus"/>
      </h-app-toolbar-fab>
      <h-app-toolbar-action >
        <h-fa-icon icon="fas fa-heart" textcolor="text-white"/>
        <h-fa-icon icon="fas fa-film" textcolor="text-white"/>
        <h-fa-icon icon="fas fa-music" textcolor="text-white"/>
        <h-fa-icon icon="fas fa-share-alt" textcolor="text-white"/>
      </h-app-toolbar-action>
    </h-app-toolbar-container>
</h-app-toolbar>
      `,
      tb4: `
<h-app-toolbar>
    <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
      <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
      <h-app-toolbar-action class="flex flex-1">
        <h-fa-icon icon="fas fa-heart" textcolor="text-white"/>
        <h-fa-icon icon="fas fa-film" textcolor="text-white"/>
        <h-fa-icon icon="fas fa-music" textcolor="text-white"/>
        <h-fa-icon icon="fas fa-share-alt" textcolor="text-white"/>
      </h-app-toolbar-action>
      <h-app-toolbar-fab class="flex-justify-end">
        <h-btn-float bgcolor="bg-black" textcolor="text-white" icon="fas fa-plus"/>
      </h-app-toolbar-fab>
    </h-app-toolbar-container>
</h-app-toolbar>
      `,
      tb5: `
<h-app-toolbar>
  <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
    <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
    <h-app-toolbar-action class="flex flex-1 flex-justify-end">
        <h-fa-icon icon="fas fa-heart" textcolor="text-white"/>
        <h-fa-icon icon="fas fa-film" textcolor="text-white"/>
        <h-fa-icon icon="fas fa-music" textcolor="text-white"/>
        <h-fa-icon icon="fas fa-share-alt" textcolor="text-white"/>
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
