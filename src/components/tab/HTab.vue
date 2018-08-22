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
    },
    icon: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  mounted: function () {
    this.$parent.addTab(this)
  },
  methods: {
    // tabIcon () {
    //   return this.icon
    // },
    // tabName () {
    //   return this.name
    // },
    // setVisible (value) {
    //   this.isVisible = value
    // }
  }
}
</script>

<style scoped>

</style>
