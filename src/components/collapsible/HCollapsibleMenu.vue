<template lang="pug">
  div.flex.flex-column.full-width
    .div(v-if="separator" :class="[bgcolor]")
      hr
    .flex.full-with(@click="selectCollapse()" )
      .flex.flex-items-center(v-if="icon && icon.length" :class="[bgcolor]" style="padding-left:16px;padding-right:8px;height:40px;")
        h-fa-icon(:icon="icon" :textcolor="textcolor" size="lg")
      .flex-column.full-width()
        .flex(style="height:40px;")
          .flex.flex-1.flex-items-center(:class="[textcolor, bgcolor]" style="padding-left:16px;")
            | {{text}}
          .flex.flex-items-center.arrow(:class="[bgcolor]" style="padding-left:16px;padding-right:16px;")
            h-fa-icon(
              :textcolor="textcolor"
              :class="{ 'arrow2': !isVisible, 'arrow': isVisible }"
              :icon="['fas', 'angle-down']"
            )
        div(v-if="isVisible")
          slot
    div(v-if="separator" :class="[bgcolor]")
      hr

</template>

<script>

import componentBase from '../componentBase'

export default {
  extends: componentBase,
  props: {
    text: {
      type: String
    },
    icon: {
      type: Array,
      default: () => ([])
    }
  },
  data () {
    return {
      isVisible: false,
      separator: false
    }
  },
  mounted () {
  },
  methods: {
    selectCollapse () {
      this.$parent.selectCollapse(this)
    },
    setVisible (value) {
      this.isVisible = value
    },
    setSeparator (value) {
      this.separator = value
    },
    toggle () {
      this.setVisible(!this.isVisible)
      this.setSeparator(!this.separator)
    }
  }
}
</script>

<style scoped>
</style>
