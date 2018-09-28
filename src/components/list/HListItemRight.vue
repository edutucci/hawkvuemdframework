<template lang="pug">
  .flex.flex-items-center.h-pr-md
    .title
      strong  {{text}}
    .icon-right(v-if="icon && icon.length")
      h-fa-icon(:icon="icon" @click="rightIconClick")

</template>

<script>

export default {
  props: {
    selectValue: {
      type: [String, Number, Object]
    },
    icon: {
      type: Array,
      default: () => ([])
    },
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    rightIconClick () {
      this.$emit('rightIconClick', this.selectValue)
    }
  }
}
</script>

<style scoped>
.icon-right {
  padding-left: 16px;
  padding-right: 16px;
}
</style>
