<template lang="pug">
  div(style="display:inline-flex;")
    div(v-if="contained"
      @click="onClick"
      class="btn flex flex-items-center boxshadow"
      :class="[bgcolor, textcolor]"
      :style="[btnSize]"
    )
      div(v-if="leftIcon" class="flex-align-center")
        h-fa-icon(:textcolor="textcolor" :icon="leftIcon")

      div(class="flex flex-1 flex-align-center h-ml-sm h-mr-sm")
        strong  {{text.toUpperCase()}}

      div(v-if="rightIcon" class="flex-align-center")
        h-fa-icon(:textcolor="textcolor" :icon="rightIcon")

    div(v-else-if="textbutton"
      @click="onClick"
      class="btn flatbtn"
      :class="[textcolor, disabled]"
    )
      div(class="flex flex-1 flex-align-center")
        strong(:class="[textcolor]")  {{text.toUpperCase()}}
        slot

    div(v-else-if="outlined"
      @click="onClick"
      class="btn outlinedbtn flex flex-1 flex-align-center"
      :class="[textcolor, { disabled: disabled}]"
    )
      strong {{text.toUpperCase()}}

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    textbutton: {
      type: Boolean
    },
    contained: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    },
    text: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: Array
    },
    leftIcon: {
      type: Array
    },
    disabled: {
      type: Boolean
    }
  },
  components: {
  },
  data () {
    return {
      btnSize: {
        height: '20px'
      }
    }
  },
  mounted () {
  },
  methods: {
    onClick () {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style scoped>

</style>
