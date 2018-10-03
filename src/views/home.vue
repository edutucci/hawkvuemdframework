<template lang="pug">
  h-page
    h-page-header(fixed)
      h-app-toolbar
        h-app-toolbar-container(bgcolor="bg-primary" textcolor="text-white")
          h-app-toolbar-navigation(icon="fas fa-bars" textcolor="text-white" @click="$refs.nav.open()")
          h-app-toolbar-title(title="HawkFramework")
          h-app-toolbar-action
            router-link(to="/yourpage")
              h-fa-icon(icon="fas fa-globe" textcolor="text-white")
            a(href='https://github.com/edutucci/hawkframework' target="_blank")
              h-fa-icon(icon="fab fa-github" textcolor="text-white")

    <h-nav-drawer ref="nav">
      <div class="flex flex-column bg-white full-size" style="display: inline-flex;">

        <div slot="header" class="text-center h-pa-md">
          <h-avatar src="img/hawk.jpg" size="64px"/>
          <h3 class="no-padding no-margin">Hawk </h3>
          <h3 class="no-padding no-margin"> Framework</h3>
        </div>

        <div class="flex-1">
            <h-collapsible>

              <h-collapsible-menu icon="fas fa-question-circle" text="Guide">
                <h-collapsible-item text="Installation" @click="$router.push('/installation'), $refs.nav.close()"/>
                <h-collapsible-item text="Layout" @click="$router.push('/layout'), $refs.nav.close()"/>
              </h-collapsible-menu>

              <h-collapsible-menu icon="fab fa-css3" text="CSS">
                <h-collapsible-item text="Spacing" @click="$router.push('/spacing'), $refs.nav.close()"/>
                <h-collapsible-item text="Flexbox" @click="$router.push('/flexbox'), $refs.nav.close()"/>
                <h-collapsible-item text="Text Alignment" @click="$router.push('/textalignment'), $refs.nav.close()"/>
                <h-collapsible-item text="Positioning" @click="$router.push('/positioning'), $refs.nav.close()"/>
                <h-collapsible-item text="Others" @click="$router.push('/cssothers'), $refs.nav.close()"/>
              </h-collapsible-menu>

              <h-collapsible-menu text="Components" icon="fas fa-hdd">
                <h-collapsible-item text="Buttons" @click="$router.push('/buttons'), $refs.nav.close()"/>
                <h-collapsible-item text="Icons" @click="$router.push('/icon'), $refs.nav.close()"/>
                <h-collapsible-item text="Textfield" @click="$router.push('/textfield'), $refs.nav.close()"/>
                <h-collapsible-item text="Search" @click="$router.push('/search'), $refs.nav.close()"/>
                <h-collapsible-item text="Cards" @click="$router.push('/card'), $refs.nav.close()"/>
                <h-collapsible-item text="Collapsible" @click="$router.push('/collapsible'), $refs.nav.close()"/>
                <h-collapsible-item text="Chips/InputChips" @click="$router.push('/chip'), $refs.nav.close()"/>
                <h-collapsible-item text="Menu" @click="$router.push('/menu'), $refs.nav.close()"/>
                <h-collapsible-item text="List" @click="$router.push('/list'), $refs.nav.close()"/>
                <h-collapsible-item text="Checkbox" @click="$router.push('/checkbox'), $refs.nav.close()"/>
                <h-collapsible-item text="Radio" @click="$router.push('/radio'), $refs.nav.close()"/>
                <h-collapsible-item text="Select" @click="$router.push('/select'), $refs.nav.close()"/>
                <h-collapsible-item text="Tab" @click="$router.push('/tab'), $refs.nav.close()"/>
                <h-collapsible-item text="Table" @click="$router.push('/table'), $refs.nav.close()"/>
                <h-collapsible-item text="Toolbar" @click="$router.push('/toolbar'), $refs.nav.close()"/>
                <h-collapsible-item text="Modal" @click="$router.push('/modal'), $refs.nav.close()"/>
                <h-collapsible-item text="DateTime" @click="$router.push('/datetime'), $refs.nav.close()"/>
                <h-collapsible-item text="Toggle" @click="$router.push('/toggle'), $refs.nav.close()"/>
                <h-collapsible-item text="SnackBar" @click="$router.push('/snack'), $refs.nav.close()"/>
              </h-collapsible-menu>

            </h-collapsible>

        </div>

        <div slot="footer" class="text-center  h-pa-md">
          <h2 class="no-margin">Free Framework</h2>
          <h2 class="no-margin">Pure CSS</h2>
        </div>

      </div>
    </h-nav-drawer>

    h-page-content(style="margin-top: 52px; margin-bottom: 62px")
      router-view

    h-page-footer(fixed)
      .flex.flex-justify-center.flex-items-center.bg-primary.text-white(style="height: 60px")
        H3 HawkFramework Page Footer

</template>

<script>

export default {
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style scoped>

</style>
