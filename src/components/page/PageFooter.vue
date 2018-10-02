<template>
  <footer :class="{'bottom-left-fixed': fixed, 'full-width': fixed, 'z-footer-index': fixed}">
    <slot></slot>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
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
.z-footer-index {
  z-index: 1500;
}
</style>
