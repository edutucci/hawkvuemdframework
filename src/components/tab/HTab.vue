<template>
  <div v-if="isVisible" class="tab full-width  full-height">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    tabName () {
      return this.name
    },
    setVisible (value) {
      this.isVisible = value
    }
  }
}
</script>

<style scoped>

</style>
