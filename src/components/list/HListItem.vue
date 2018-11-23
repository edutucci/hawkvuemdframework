<template>
   <div class="full-width list-item-container">
    <div class="menu-item bg-white flex flex-row flex-items-center" :class="{active: active}">
      <slot></slot>
    </div>
    <html-separator v-if="separator"/>
  </div>
</template>

<script>
export default {
  props: {
    separator: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    setActive (value) {
      this.active = value
    },
    getCurrentTextLeft () {
      return this.$parent.getCurrentTextLeft()
    },
    setCurrentTextLeft (text) {
      this.$parent.setCurrentTextLeft(text)
    }
  }
}
</script>

<style scoped>
.list-item-container {
  cursor: pointer;
}
</style>
