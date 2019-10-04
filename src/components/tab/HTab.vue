<template>
  <div v-if="isVisible" class="bg-white full-height">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    topIcon: {
      type: String,
      default: ''
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
