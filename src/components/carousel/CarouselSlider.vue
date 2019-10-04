<template lang="pug">
  .full-size.no-user-select(v-if="isVisible")
    slot
</template>

<script>
export default {
  name: 'HCarouselSlider',
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  mounted: function () {
    this.$parent.addSlider(this)
  },
  watch: {
    title: function (value) {
      this.$parent.setTitle(value)
    },
    subtitle: function (value) {
      this.$parent.setSubtitle(value)
    }
  },
  methods: {
    setVisible (value) {
      this.isVisible = value
    },
    getTitle () {
      return this.title || ''
    },
    getSubtitle () {
      return this.subtitle || ''
    }
  }
}
</script>
