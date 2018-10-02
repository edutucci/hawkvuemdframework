<template>
  <header :class="{'top-left-fixed': fixed, 'full-width': fixed, 'z-header-index': fixed}">
    <slot></slot>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.z-header-index {
  z-index: 1500;
}
</style>
