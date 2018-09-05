<template>
   <div class="full-width list-item-container" @click="itemClick">
    <div class="menu-item bg-white flex flex-row flex-items-center" :class="{active: active}">
      <slot></slot>
    </div>
    <hr v-if="separator">
  </div>
</template>

<script>
export default {
  props: {
    selectValue: {
      type: [String, Number, Object]
    },
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
    itemClick () {
      this.$emit('itemClick', this.selectValue)
    }
  }
}
</script>

<style scoped>
.list-item-container {
  cursor: pointer;
}
</style>
