<template>
  <header style="z-index: 1000;">
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
