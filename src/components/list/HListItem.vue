<template>
   <div class="full-width list-item-padding list-item-container">
    <div class="bg-white flex" :class="{active: active}">
      <slot></slot>
    </div>
    <html-separator v-if="separator"/>
  </div>
</template>

<script>
export default {
  name: 'HListItem',
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
