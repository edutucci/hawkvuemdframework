<template lang="pug">
  .full-size.no-user-select(v-if="isVisible")
    slot
</template>

<script>
export default {
  name: 'HCarouselSlider',
  data () {
    return {
      isVisible: false
    }
  },
  mounted: function () {
    this.$parent.addSlider(this)
  },
  methods: {
    setVisible (value) {
      this.isVisible = value
    }
  }
}
</script>
