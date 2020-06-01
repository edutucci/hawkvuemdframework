<template>
  <h-page-content padding
    @onResize="pageResize"
    @mainLayoutDrawerIsOpened="showDrawer = false"
  >
    <template v-slot:left>
      <h-side-bar-menu
        class="h-ml-sm border border-gray border-radius"
        bg-color="bg-white"
        text-color="text-gray600"
        style="width: 200px"
      >
        <template v-slot:header>
          <div class="column align-items-center" style="margin-top: 30px;">
            <h-image avatar src="img/hawk.jpg" size="64px"/>
            <div class="text-h5">Hawk </div>
            <div class="text-h5"> Framework</div>
            <div>Sidebar Menu Working</div>
          </div>
        </template>
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
    </template>

    <div class="row ">
      <div class="col">
        <div class="row position-sticky bg-white">
          <div class="col text-h4">
            Sidebar Menu
          </div>
          <div class="col-auto">
            <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = !showDrawer"/>
          </div>
        </div>
        <div class="row">
          <div class="col">

            <div ref="sidebarmenu-icons"/>
            <comp-code class="h-mt-md" title="Icons" :code="icons">
              <img src="imgsamples/sidebarMenuIcons.png"/>
            </comp-code>

            <div ref="sidebarmenu-iconstext"/>
            <comp-code class="h-mt-md" title="Icons and Text" :code="iconsText">
              <img src="imgsamples/sidebarMenuIconsText.png"/>
            </comp-code>

            <div ref="sidebarmenu-customcolor"/>
            <comp-code class="h-mt-md" title="Custom Color" :code="customColor">
              <img src="imgsamples/sidebarMenuCustomColor.png"/>
            </comp-code>

          </div>
         </div>
      </div>
    </div>

    <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <list-help>
          <h-list>
            <h-list-header text="Styles"/>
            <h-list-item @click="goToElement('sidebarmenu-icons')">
              <h-list-item-content>
                <h-list-item-text title="Icons"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('sidebarmenu-iconstext')">
              <h-list-item-content>
                <h-list-item-text title="Icons and Text"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('sidebarmenu-customcolor')">
              <h-list-item-content>
                <h-list-item-text title="Custom Color"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </h-nav-drawer>
    </template>
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

import viewport from '../../../components/others/viewport'

export default {
  name: 'PageSliderMenu',
  data () {
    return {
      showDrawer: true,
      icons: `
<h-side-bar-menu class="border border-gray border-radius"
  bg-color="bg-white" text-color="text-gray600" style="width: 70px"
>
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
`,
      iconsText: `
<h-side-bar-menu
  class="h-ml-sm border border-gray border-radius"
  bg-color="bg-white"
  text-color="text-gray600"
  style="width: 200px"
>
  <template v-slot:header>
    <div class="column align-items-center"
      style="margin-top: 30px;"
    >
      <h-image avatar src="img/hawk.jpg" size="64px"/>
      <div class="text-h5">Hawk </div>
      <div class="text-h5"> Framework</div>
      <div>Sidebar Menu Working</div>
    </div>
  </template>
  <h-side-bar-menu-item text="Dashboard"
    caption="View Data" icon='fas fa-th-large'
    @click="$router.push('#')"
  />
  <h-side-bar-menu-item text="Tables"
    caption="View Data Table"
    icon='fas fa-table' @click="$router.push('#')"
  />
  <h-side-bar-menu-item text="User"
    caption="User Management"
    title="User" icon='fas fa-user'
  use-menu>
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
  <h-side-bar-menu-item text="Help"
    caption="Help Topics" title="Help"
    icon='far fa-question-circle'
  use-menu>
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
  <h-side-bar-menu-item text="Notifications"
    caption="View Nofitications"
    icon='far fa-bell' @click="$router.push('#')"/>
</h-side-bar-menu>
`,
      customColor: `
<h-side-bar-menu
  class="h-ml-sm border border-gray border-radius"
  bg-color="bg-primary"
  text-color="text-white"
  style="width: 200px"
>
  <template v-slot:header>
    <div class="column align-items-center text-white"
      style="margin-top: 30px;"
    >
      <h-image avatar src="img/hawk.jpg" size="64px"/>
      <div class="text-h5">Hawk </div>
      <div class="text-h5"> Framework</div>
      <div>Sidebar Menu Working</div>
    </div>
  </template>
  <h-side-bar-menu-item text="Dashboard"
    caption="View Data" icon='fas fa-th-large' 
    @click="$router.push('#')"
  />
  <h-side-bar-menu-item text="Tables"
    caption="View Data Table" icon='fas fa-table'
    @click="$router.push('#')"
  />
  <h-side-bar-menu-item text="User"
    caption="User Management"
    title="User"
    icon='fas fa-user'
    use-menu
  >
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
  <h-side-bar-menu-item text="Help"
    caption="Help Topics"
    title="Help"
    icon='far fa-question-circle'
    use-menu
  >
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
  <h-side-bar-menu-item text="Notifications"
    caption="View Nofitications"
    icon='far fa-bell'
    @click="$router.push('#')"
  />
</h-side-bar-menu>
`
    }
  },
  mounted () {
    this.checkMainBodyWidth()
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    },
    checkMainBodyWidth () {
      let value = viewport.mainBodyWidth()
      if (value < 961) {
        this.showDrawer = false
      }
    },
    pageResize (value) {
      this.$refs.navHelp.onResize(value)
    }
  }
}
</script>
