<template lang="pug">
  h-page

    <h-app-toolbar class="top-left-absolute">
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

    <h-app-toolbar class="top-left-absolute" style="top:60px;">
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
    </h-app-toolbar/>

    <div class="top-left-absolute full-width h-pt-xl h-pb-xl" style="top:160px; overflow-y:auto;">
        <pre v-highlightjs="tb1" >
          <code class="html">
          </code>
        </pre>
    </div>

    //- h1 Centered Fab
    //- <h-app-toolbar class="bottom-right-fixed">
    //-   <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
    //-     <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
    //-     <h-app-toolbar-menu>
    //-       <h-menu-dropdown dtu :icon="['fas', 'ellipsis-v']" textcolor="text-white">
    //-         <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct."/>
    //-         <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
    //-       </h-menu-dropdown>
    //-     </h-app-toolbar-menu>
    //-     <h-app-toolbar-fab class="flex-1 flex-justify-center">
    //-       <h-btn-float bgcolor="bg-black" textcolor="text-white" :icon="['fas', 'plus']"/>
    //-     </h-app-toolbar-fab>
    //-     <h-app-toolbar-action>
    //-       <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
    //-       <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
    //-       <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
    //-       <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
    //-     </h-app-toolbar-action>
    //-   </h-app-toolbar-container>
    //- </h-app-toolbar/>

    //- h1 End Fab
    //- <h-app-toolbar class="bottom-right-fixed">
    //-   <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
    //-     <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
    //-     <h-app-toolbar-action>
    //-       <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
    //-       <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
    //-       <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
    //-       <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
    //-     </h-app-toolbar-action>
    //-     <h-app-toolbar-fab class="full-width flex flex-justify-end">
    //-       <h-btn-float bgcolor="bg-black" textcolor="text-white" :icon="['fas', 'plus']"/>
    //-     </h-app-toolbar-fab>
    //-   </h-app-toolbar-container>
    //- </h-app-toolbar/>

    h1 No Fab
    <h-app-toolbar class="bottom-right-fixed">
      <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
        <h-app-toolbar-navigation :icon="['fas', 'bars']" textcolor="text-white"/>
        <h-app-toolbar-action class="flex flex-1 flex-justify-end">
          <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
          <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
          <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
          <h-fa-icon :icon="['fas', 'heart']" textcolor="text-white"/>
        </h-app-toolbar-action>
      </h-app-toolbar-container>
    </h-app-toolbar/>

</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      tb1: `
<h-app-toolbar class="top-left-absolute" style="top:30px;">
  <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
    <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
    <h-app-toolbar-title title="My big music collection to sing"/>
    <h-app-toolbar-action>
      <h-fa-icon :icon="['fas', 'heart']"/>
      <h-fa-icon :icon="['fas', 'search']"/>
    </h-app-toolbar-action>
    <h-app-toolbar-menu>
      <h-menu-dropdown rtl :icon="['fas', 'ellipsis-v']">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." />
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
      </h-menu-dropdown>
    </h-app-toolbar-menu>     
  </h-app-toolbar-container>
</h-app-toolbar>   

<h-app-toolbar class="top-left-absolute" style="top:90px;">
  <h-app-toolbar-container bgcolor="bg-secondary" textcolor="text-white">
    <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
    <h-app-toolbar-title title="My big music collection to sing"  style="padding-top: 60px;"/>
    <h-app-toolbar-action>
      <h-fa-icon :icon="['fas', 'heart']"/>
      <h-fa-icon :icon="['fas', 'search']"/>     
    </h-app-toolbar-action>
    <h-app-toolbar-menu>
      <h-menu-dropdown rtl :icon="['fas', 'ellipsis-v']">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." />
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
      </h-menu-dropdown>     
    </h-app-toolbar-menu>     
  </h-app-toolbar-container>
</h-app-toolbar/>

<h-app-toolbar class="bottom-right-fixed">
  <h-app-toolbar-container bgcolor="bg-info" textcolor="text-white">
    <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
    <h-app-toolbar-fab>
      <h-btn-float bgcolor="bg-black" textcolor="text-white" :icon="['fas', 'plus']"/>
    </h-app-toolbar-fab>         
    <h-app-toolbar-action>
      <h-fa-icon :icon="['fas', 'heart']"/>
    </h-app-toolbar-action>
    <h-app-toolbar-menu>
      <h-menu-dropdown rtl dtu :icon="['fas', 'ellipsis-v']">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct."/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands"/>
      </h-menu-dropdown>
    </h-app-toolbar-menu>     
  </h-app-toolbar-container>
</h-app-toolbar/>      
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
