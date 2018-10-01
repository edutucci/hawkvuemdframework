<template>
  <div>
    <h1>Layout with Toolbar Fixed</h1>

    <pre v-highlightjs="msg1">
      <code class="html">
      </code>
    </pre>

    <h2>Example 1 - Default layout</h2>

    <pre v-highlightjs="temp1">
      <code class="html">
      </code>
    </pre>

    <h2>Example 1 - Flexbox layout</h2>

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
    h-app-toolbar.top-left-fixed
      h-app-toolbar-container(bgcolor="bg-primary" textcolor="text-white")
        h-app-toolbar-navigation(:icon="['fas', 'bars']" textcolor="text-white" @click="$refs.nav.open()")
        h-app-toolbar-title(title="Hawk Framework")
        h-app-toolbar-action
          router-link(to="/mypage")
            h-fa-icon(:icon="['fas', 'globe']" textcolor="text-white")
          a(href='https://github.com/edutucci/hawkframework' target="_blank")
            h-fa-icon(:icon="['fab', 'github']" textcolor="text-white")

    h-page-container(style="padding-top: 50px;")
      router-view

</template>
      `,
      temp2: `Home.vue

<template lang="pug">
  h-page
    h-app-toolbar.top-left-fixed
      h-app-toolbar-container(bgcolor="bg-primary" textcolor="text-white")
        h-app-toolbar-navigation(:icon="['fas', 'bars']" textcolor="text-white" @click="$refs.nav.open()")
        h-app-toolbar-title(title="Hawk Framework")
        h-app-toolbar-action
          router-link(to="/mypage")
            h-fa-icon(:icon="['fas', 'globe']" textcolor="text-white")
          a(href='https://github.com/edutucci/hawkframework' target="_blank")
            h-fa-icon(:icon="['fab', 'github']" textcolor="text-white")

    h-page-container(style="height: calc(100vh - 70px);  padding-top: 50px;")
      router-view

</template>

YourPage.vue

<template lang="pug">
  .flex.flex-column.full-height
    div
      | Header
    .flex-1
      | Body
    div
      | Footer

</template>
      `
    }
  }
}
</script>
