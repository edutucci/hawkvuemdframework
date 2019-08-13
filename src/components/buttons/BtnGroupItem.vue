<template lang="pug">
  h-btn(
    :class="{active: checkCurrentItem}"
    :bg-color="bg_color"
    :text-color="text_color"
    :text="text"
    :rightIcon="rightIcon"
    :leftIcon="leftIcon"
    :disabled="disabled"
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
    bgColor: function (newValue) {
      this.bg_color = newValue
    },
    textColor: function (newValue) {
      this.text_color = newValue
    }
  },
  created () {
    this.bg_color = this.bgColor
    this.text_color = this.textColor
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
        this.bg_color = this.bgColor
        this.text_color = this.textColor
      }
    }
  }
}
</script>
