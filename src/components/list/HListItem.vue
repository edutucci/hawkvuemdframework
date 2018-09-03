<template>
   <div class="full-width list-item-container" @click="onClick">
    <div class="menu-item bg-white flex flex-row" :class="{active: active}">
      <slot></slot>
    </div>
    <hr v-if="separator">
  </div>
</template>

<script>
export default {
  props: {
    separator: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onClick () {
      // console.log('item click')
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.list-item-container {
  cursor: pointer;
}
</style>
