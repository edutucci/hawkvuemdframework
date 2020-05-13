<template lang="pug">
  .collapsible-item.flex.flex-1.flex-items-center.flex-wrap(
    @click.stop="onClick"
    class="color-hover h-pa-sm"
    :class="[textColor, compBgColor, compBgColorHover]"
  )
    | {{text}}

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  name: 'HCollapsibleItem',
  extends: componentBase,
  props: {
    text: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.compBgColor = this.bgColor
    this.onBackgroundHover()
  },
  watch: {
    bgColor: function (value) {
      this.onBackgroundHover()
      this.compBgColor = value
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

<style scoped>
.collapsible-item {
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  cursor: pointer;
}

</style>
