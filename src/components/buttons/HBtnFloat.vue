<template lang="pug">
    div.btncontainer(style="display:inline-flex;"
      @click="onClick"
      class="btnfab ripple flat circle flex boxshadow flex-justify-center flex-items-center"
      :class="[bgcolor, textcolor]"
      :style="[btnSize]"
    )
      div(v-if="icon")
        h-fa-icon(:textcolor="textcolor" :icon="icon")

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    minifloat: {
      type: Boolean
    },
    icon: {
      type: String
    }
  },
  components: {
  },
  data () {
    return {
      btnSize: {
        width: '42px',
        height: '42px'
      }
    }
  },
  created () {
    this.setButtonSize()
    // this.setButtonColor()
  },
  methods: {
    onClick () {
      this.$emit('click')
    },
    // setButtonColor () {
    //   if (this.bgcolor !== 'bg-white') {
    //     this.textcolor = 'text-white'
    //   }
    // },
    setButtonSize () {
      if (this.minifloat) {
        this.btnSize.width = '26px'
        this.btnSize.height = '26px'
      }
    }
  }
}
</script>

<style scoped>

</style>
