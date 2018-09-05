<template lang="pug">
  div(style="display:inline-flex;")
    div(v-if="contained"
      @click="onClick"
      class="btn flex flex-items-center boxshadow"
      :class="[bgcolor, textcolor]"
      :style="[btnSize]"
    )
      div(v-if="icon" class="flex-align-center")
        h-fa-icon(:textcolor="textcolor" :icon="icon")

      div(class="flex flex-1 flex-align-center h-ml-sm h-mr-sm")
        strong  {{label.toUpperCase()}}

      div(v-if="lefticon" class="flex-align-center")
        h-fa-icon(:textcolor="textcolor" :icon="lefticon")

    div(v-else-if="textbutton"
      @click="onClick"
      class="btn flatbtn"
      :class="[textcolor]"
    )
      div(class="flex flex-1 flex-align-center")
        strong(:class="[textcolor]")  {{label.toUpperCase()}}
        slot

    div(v-else-if="outlined"
      @click="onClick"
      class="btn outlinedbtn"
      :class="[textcolor]"
    )
      div(class="flex flex-1 flex-align-center")
        strong(:class="[textcolor]")  {{label.toUpperCase()}}

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
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: Array
    },
    lefticon: {
      type: Array
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
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
