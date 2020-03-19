<template>
  <footer class="bottom-left-fixed" style="right:0px; z-index: 1000;" id="page-footer">
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
