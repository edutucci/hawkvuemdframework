<template lang="pug">
  div(style="display:inline-block;")
    div(v-if="contained"
      @click="onClick"
      class="btn flex flex-items-center boxshadow"
      :class="[bgcolor, textcolor]"
      :style="[btnSize]"
    )
      div(class="full-width flex flex-justify-center")
        div(v-if="leftIcon && leftIcon.length > 0" class="flex-align-center")
          <i :class="leftIcon"></i>
          //- h-fa-icon(:textcolor="textcolor" :icon="leftIcon")
        div(v-if="text && text.length > 0" class="flex flex-align-center h-ml-sm h-mr-sm")
          strong  {{text.toUpperCase()}}

        div(v-if="rightIcon && rightIcon.length > 0" class="flex-align-center")
          <i :class="rightIcon"></i>
          //- h-fa-icon(:textcolor="textcolor" :icon="rightIcon")
    div(v-else-if="textbutton"
      @click="onClick"
      class="btn flatbtn full-width"
      :class="[textcolor, disabled]"
    )
      div(class="full-width flex flex-justify-center")
        div(class="flex flex-align-center")
          strong(:class="[textcolor]")  {{text.toUpperCase()}}
          slot

    div(v-else-if="outlined"
      @click="onClick"
      class="btn outlinedbtn flex flex-align-center"
      :class="[textcolor, { disabled: disabled}]"
    )
      div(class="full-width flex flex-justify-center")
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
      type: String
    },
    leftIcon: {
      type: String
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
      console.log('clicked in ' + this.text)
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  }
}
</script>

<style scoped>

</style>
