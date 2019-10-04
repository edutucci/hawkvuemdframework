<template lang="pug">
  .slider-button.full-height.flex.flex-items-center
    .flex.flex-items-center(
      style="diplay:inline-block; min-width: 24px; min-height: 24px;"
    )
      h-btn(text-button bg-color="bg-primary" fab size="lg")
        h-fa-icon(
          text-color="text-white"
          :icon="icon"
          @click="onClick"
          size="32px"
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
