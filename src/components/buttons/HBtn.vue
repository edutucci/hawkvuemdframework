<template lang="pug">
  div(style="display:inline-block;")
    div(v-if="contained"
      @click="onClick"
      class="btn flex flex-items-center"
      :class="[bgcolor, textcolor, {'boxshadow': !transparent}]"
      style="position: relative;"
      :style="[btnObject]"
    )
      div(class="btn-content full-width flex flex-justify-center")
        div(v-if="leftIcon && leftIcon.length > 0" class="flex-align-center")
          h-fa-icon(:textcolor="textcolor" :icon="leftIcon" size="16px")
        div(v-if="text && text.length > 0" class="flex flex-align-center h-ml-sm h-mr-sm")
          | {{text.toUpperCase()}}
        div(v-if="rightIcon && rightIcon.length > 0" class="flex-align-center")
          h-fa-icon(:textcolor="textcolor" :icon="rightIcon" size="16px")
        slot
    div(v-else-if="textbutton"
      @click="onClick"
      class="btn flatbtn full-width"
      :class="[textcolor, disabled]"
      style="position: relative;"
    )
      div(class="btn-content full-width flex flex-justify-center")
        | {{text.toUpperCase()}}
        slot
    div(v-else-if="outlined"
      @click="onClick"
      class="btn outlinedbtn flex flex-align-center"
      :class="[textcolor, { disabled: disabled}]"
      style="position: relative;"
    )
      div(class="btn-content full-width flex flex-justify-center")
        | {{text.toUpperCase()}}
        slot

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
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  components: {
  },
  data () {
    return {
      btnObject: {
        height: '20px',
        background: ''
      }
    }
  },
  mounted () {
    this.checkTransparent()
  },
  watch: {
    transparent: function (value) {
      this.checkTransparent()
    }
  },
  methods: {
    checkTransparent () {
      this.btnObject.background = (this.transparent) ? 'none' : ''
    },
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
