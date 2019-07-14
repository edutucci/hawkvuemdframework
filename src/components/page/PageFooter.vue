<template>
  <footer style="z-index: 1000;">
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
