<template>
   <div class="full-width  cursor-pointer">
    <div
      class="flex color-hover h-pa-sm"
      :class="[textColor, compBgColor, compBgColorHover, {active: active}]"
      style="min-height: 25px;"
    >
      <slot></slot>
    </div>
    <!-- <html-separator v-if="separator"/> -->
  </div>
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'HListItem',
  props: {
    separator: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  },
  mounted () {
    this.compBgColor = this.bgColor
    this.onBackgroundHover()
  },
  watch: {
    bgColor: function (value) {
      this.onBackgroundHover()
      this.compBgColor = this.bgColor
    }
  },
  methods: {
    onBackgroundHover () {
      this.getBackgroundHover(false)
    }
  }
}
</script>
