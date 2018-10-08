<template>
  <div>
    <pre v-highlightjs="msg1">
      <code class="html">
      </code>
    </pre>

    <h2>Example 1 - Default layout</h2>

    <pre v-highlightjs="temp1">
      <code class="html">
      </code>
    </pre>

    <h1>Layout with Header and Footer Fixed</h1>
    <pre v-highlightjs="temp2">
      <code class="html">
      </code>
    </pre>

  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      msg1: `For this example we will use a project created with vue cli 3.`,
      temp1: `Home.vue

<template lang="pug">
  h-page
    h-page-header
      h-app-toolbar
        h-app-toolbar-container(bgcolor="bg-primary" textcolor="text-white")
          h-app-toolbar-navigation(icon="fas fa-bars" textcolor="text-white" @click="$refs.nav.open()")
          h-app-toolbar-title(title="HawkFramework")
          h-app-toolbar-action
            router-link(to="/yourpage")
              h-fa-icon(icon="fas fa-globe" textcolor="text-white")
            a(href='https://github.com/edutucci/hawkframework' target="_blank")
              h-fa-icon(icon="fab fa-github" textcolor="text-white")

    h-page-content
      router-view

    h-page-footer
      .flex.flex-justify-center.flex-items-center.bg-primary.text-white(style="height: 60px")
        H3 HawkFramework Page Footer

</template>

YourPage.vue

<template>
  <div class="text-center">
    <h1> Page Content</h1>
    <img src='img/mountains.jpg' style="width: 650px; height: 350px;">
  </div>

</template>
      `,
      temp2: `Home.vue

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

    h-page-content(style="margin-top: 64px; margin-bottom: 74px;")
      router-view

    h-page-footer(fixed)
      .flex.flex-justify-center.flex-items-center.bg-primary.text-white(style="height: 60px")
        H3 HawkFramework Page Footer

</template>

YourPage.vue

<template>
  <div class="text-center">
    <h1> Page Content</h1>
    <img src='img/mountains.jpg' style="width: 650px; height: 350px;">
  </div>

</template>
      `
    }
  }
}
</script>
