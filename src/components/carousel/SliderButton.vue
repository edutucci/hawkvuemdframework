<template lang="pug">
  .slider-button.full-height.flex.flex-items-center
    .flex.flex-items-center.bg-modal.circle.btn(
      style="diplay:inline-block; width: 24px; height: 24px;"
    )
      h-fa-icon(
        textcolor="text-white"
        :icon="icon"
        @click="onClick"
        size="36px"
      )
</template>

<script>
export default {
  name: 'HSliderButton',
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.slider-button {
  background: none !important;
  z-index: 1000;
}
</style>
