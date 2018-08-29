<template>
  <div v-if="isVisible" class="tab full-width  full-height scroll">
    <div class="h-pa-sm">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    lefticon: {
      type: Array,
      default: () => ([])
    },
    topicon: {
      type: Array,
      default: () => ([])
    },
    default: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  mounted: function () {
    this.$parent.addTab(this)
    if (this.default) {
      this.setVisible(true)
    }
  },
  methods: {
    // tabIcon () {
    //   return this.icon
    // },
    // tabName () {
    //   return this.name
    // },
    setVisible (value) {
      this.isVisible = value
    }
  }
}
</script>

<style scoped>

</style>
