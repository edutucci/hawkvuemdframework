<template>
   <div class="full-width h-list-item cursor-pointer">
    <div
      class="flex color-hover h-list-item-container h-pa-sm"
      :class="[textColor, compBgColor, compBgColorHover, {active: active}]"
      style="min-height: 25px;"
      @click="onClick"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'HListItem',
  props: {

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
    },
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
