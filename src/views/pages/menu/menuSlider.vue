<template>
  <div style="min-height: calc(100vh - 97px);">
    <h1>Slide Menu Icons</h1>

    <h-slide-menu-list bgcolor="bg-primary" textcolor="text-white">
      <h-slide-menu text="Menu Slider" icon='fas fa-user'>
        <h-slide-menu-item text="this page" url="/menuSlider"/>
        <h-slide-menu-item text="this page" url="/menuSlider"/>
      </h-slide-menu>
      <h-slide-menu text="Github" icon='fab fa-github'>
        <h-slide-menu-item text="Hawk Framework" @itemClick="itemClick" url="https://github.com/edutucci/hawkframework" new-window/>
        <h-slide-menu-item text="Starter Kit" @itemClick="itemClick" url="https://github.com/edutucci/hawkframework-starter-kit" new-window/>
      </h-slide-menu>
    </h-slide-menu-list>

    <pre v-highlightjs="menu">
      <code class="html">
      </code>
    </pre>

    <h2 class="text-primary"> Slide Menu List Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>bgcolor</div>
        <div>textcolor</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Background color of the menu and title bar menu</div>
        <div>Text color of the icon and title bar text</div>
      </div>
    </div>

    <h2 class="text-primary"> Slide Menu Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>icon</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the icon for the menu and title bar menu</div>
      </div>
    </div>

    <h2 class="text-primary"> Slide Menu Item Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>text</div>
        <div>url</div>
        <div>new-window</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>text of the menu item</div>
        <div>url or router-link</div>
        <div>if true will open url in new window. Default is <b>false</b></div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'PageSliderMenu',
  data () {
    return {

      menu: `
<h-slide-menu-list bgcolor="bg-primary" textcolor="text-white">
  <h-slide-menu text="Menu Slider" icon='fas fa-user'>
    <h-slide-menu-item text="this page" url="/menuSlider"/>
    <h-slide-menu-item text="this page" url="/menuSlider"/>
  </h-slide-menu>
  <h-slide-menu text="Github" icon='fab fa-github'>
    <h-slide-menu-item text="Hawk Framework" @itemClick="itemClick" url="https://github.com/edutucci/hawkframework" new-window/>
    <h-slide-menu-item text="Starter Kit" @itemClick="itemClick" url="https://github.com/edutucci/hawkframework-starter-kit" new-window/>
  </h-slide-menu>
</h-slide-menu-list>
      `
    }
  },
  methods: {
  }
}
</script>
