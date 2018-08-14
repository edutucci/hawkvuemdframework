<template lang="pug">
  .flex.flex-items-center
    .title
      strong  {{text}}
    .icon-right(v-if="icon && icon.length")
      h-fa-icon(:icon="icon")

</template>

<script>

export default {
  props: {
    icon: {
      type: Array,
      default: () => ([])
    },
    text: {
      type: String,
      default: ''
    }
  },
  components: {
  }
}
</script>

<style scoped>
.icon-right {
  padding-left: 16px;
  padding-right: 16px;
}
</style>
