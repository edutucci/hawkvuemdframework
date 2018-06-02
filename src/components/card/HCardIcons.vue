<template lang="pug">
  .cardicon.full-width.flex.flex-justify-end
    slot
</template>

<script>
export default {
  name: 'HCardIcons'
}
</script>

<style scoped>
.cardicon > .btn {
  padding-right: 16px;
  padding-left: 16px;
}
</style>