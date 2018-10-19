<template lang="pug">
  .flex.flex-1.flex-items-center(style="padding-top:8px;padding-bottom:8px;")
    .div(v-if="(icon && icon.length) || (avatar && avatar.length)" style="padding-left:16px;")
      h-fa-icon(:icon="icon" textcolor="text-gray")
      h-avatar(:src="avatar")
    .flex.flex-1(style="padding-left:16px; padding-right:16px;")
      slot
      // .flex-1(style="background:green;")
      //   | pp
      // div(style="background:gray;")
      //   | menu
</template>

<script>

export default {
  components: {
  },
  props: {
    icon: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
