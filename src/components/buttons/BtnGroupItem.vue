<template lang="pug">
  h-btn(
    contained
    :class="{active: checkCurrentItem}"
    :bgcolor="bg_color"
    :textcolor="text_color"
    :text="text"
    :rightIcon="rightIcon"
    :leftIcon="leftIcon"
    :disabled="disabled"
    :transparent="transparent"
    @click="onClick"
  )
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  name: 'HBtnGroupItem',
  extends: componentBase,
  props: {
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
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      bg_color: '',
      text_color: ''
    }
  },
  computed: {
    checkCurrentItem () {
      let result = false
      if (this.name && this.name.length > 0) {
        result = (this.$parent.getName() === this.name)
      }
      this.updateColor(result)
      return result
    }
  },
  watch: {
    bgcolor: function (newValue) {
      this.bg_color = newValue
    },
    textcolor: function (newValue) {
      this.text_color = newValue
    }
  },
  created () {
    this.bg_color = this.bgcolor
    this.text_color = this.textcolor
  },
  methods: {
    onClick () {
      this.$parent.setName(this.name)
      this.$emit('click')
    },
    updateColor (result) {
      if (result) {
        this.bg_color = 'bg-gray'
        this.text_color = 'text-black'
      } else {
        this.bg_color = this.bgcolor
        this.text_color = this.textcolor
      }
    }
  }
}
</script>
