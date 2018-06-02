<template>
  <div>
    {{name}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  },
  created: function () {
    this.$on('displayTab', this.displayTab)
  },
  methods: {
    displayTab (name) {
      console.log('displayTab in tabContent')
    }
  }
}
</script>