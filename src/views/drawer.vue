<template>
  <div>
    <div>
      <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="Open Drawer" @click="$refs.nav.open()"/>
    </div>
    <h-nav-drawer ref="nav">
      <div class="flex flex-column bg-white full-size" style="display: inline-flex;">

        <div slot="header" class="text-center h-pa-md">
          <h-avatar src="img/hawk.jpg" size="64px"/>
          <h3 class="no-padding no-margin">Hawk </h3>
          <h3 class="no-padding no-margin"> Framework</h3>
        </div>

        <div class="flex-1">
            <h-collapsible>
              <h-collapsible-menu icon="fas fa-question-circle" text="Help">
                <h-collapsible-item text="About" @click="$refs.nav.close()"/>
              </h-collapsible-menu>

              <h-collapsible-menu icon="fas fa-box" text="Contents">
                <h-collapsible-item text="Products" @click="$refs.nav.close()"/>
                <h-collapsible-item text="Contact" @click="$refs.nav.close()"/>
              </h-collapsible-menu>
            </h-collapsible>

        </div>

        <div slot="footer" class="text-center  h-pa-md">
          <h2 class="no-margin">Free Framework</h2>
          <h2 class="no-margin">Pure CSS</h2>
        </div>

      </div>
    </h-nav-drawer>

    <prism language="html" :code="drawer"></prism>

  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: `
<h-nav-drawer ref="nav">
  <div class="flex flex-column bg-white full-size" style="display: inline-flex;">

    <div slot="header" class="text-center h-pa-md">
      <h-avatar src="img/hawk.jpg" size="64px"/>
      <h3 class="no-padding no-margin">Hawk </h3>
      <h3 class="no-padding no-margin"> Framework</h3>
    </div>

    <div class="flex-1">
        <h-collapsible>
          <h-collapsible-menu icon="fas fa-question-circle" text="Help">
            <h-collapsible-item text="About" @click="$refs.nav.close()"/>
          </h-collapsible-menu>

          <h-collapsible-menu icon="fas fa-box" text="Contents">
            <h-collapsible-item text="Products" @click="$refs.nav.close()"/>
            <h-collapsible-item text="Contact" @click="$refs.nav.close()"/>
          </h-collapsible-menu>
        </h-collapsible>

    </div>

    <div slot="footer" class="text-center  h-pa-md">
      <h2 class="no-margin">Free Framework</h2>
      <h2 class="no-margin">Pure CSS</h2>
    </div>

  </div>
</h-nav-drawer>
      `
    }
  }

}
</script>
