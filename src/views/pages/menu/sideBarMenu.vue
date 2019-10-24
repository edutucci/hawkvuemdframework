<template>
    <h-page-content padding>
      <div class="text-h4">SideBar Menu</div>

      <comp-code class="h-mt-md" title="Icons">
          <h-side-bar-menu class="border border-gray border-radius" bg-color="bg-white" text-color="text-gray600" style="width: 70px">
            <h-side-bar-menu-item icon='fas fa-th-large' @click="$router.push('#')"/>
            <h-side-bar-menu-item icon='fas fa-table' @click="$router.push('#')"/>
            <h-side-bar-menu-item icon='fas fa-user' use-menu>
              <h-list style="width: 180px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Add User"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Account Settings"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Profile"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>
            </h-side-bar-menu-item>
            <h-side-bar-menu-item icon='far fa-question-circle' use-menu>
              <h-list style="width: 200px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="About"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Check for updates"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="View license"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>
            </h-side-bar-menu-item>
            <h-side-bar-menu-item icon='far fa-bell' @click="$router.push('#')"/>
          </h-side-bar-menu>
      </comp-code>

      <comp-code class="h-mt-md" title="Icons and Text">
          <h-side-bar-menu class="border border-gray border-radius" bg-color="bg-white" text-color="text-gray600" style="width: 200px;">
            <h-side-bar-menu-item text="Dashboard" caption="View Data" icon='fas fa-th-large' @click="$router.push('#')"/>
            <h-side-bar-menu-item text="Tables" caption="View Data Table" icon='fas fa-table' @click="$router.push('#')"/>
            <h-side-bar-menu-item text="User" caption="User Management" title="User" icon='fas fa-user' use-menu>
              <h-list style="width: 180px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Add User"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Account Settings"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Profile"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>
            </h-side-bar-menu-item>
            <h-side-bar-menu-item text="Help" caption="Help Topics" title="Help" icon='far fa-question-circle' use-menu>
              <h-list style="width: 200px">
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="About"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="Check for updates"/>
                  </h-list-item-content>
                </h-list-item>
                <h-list-item>
                  <h-list-item-content>
                    <h-list-item-text title="View license"/>
                  </h-list-item-content>
                </h-list-item>
              </h-list>
            </h-side-bar-menu-item>
            <h-side-bar-menu-item text="Notifications" caption="View Nofitications" icon='far fa-bell' @click="$router.push('#')"/>
          </h-side-bar-menu>
      </comp-code>
    </h-page-content>

    <!-- <h2 class="text-primary"> Slide Menu List Help</h2>
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
    </div> -->

</template>

<script>
export default {
  name: 'PageSliderMenu',
  data () {
    return {
      showDrawer: false,
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

<style>
.slide-menu-list .h-list .h-list-item.active {
  background-color: #EEEEEE;
  border-left: 3px solid #42A5F5;
  border-right: 3px solid #42A5F5;
}
</style>
