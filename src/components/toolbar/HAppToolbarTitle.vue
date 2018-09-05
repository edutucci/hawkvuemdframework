<template lang="pug">
  div.h-pl-lg.flex.flex-1.flex-wrap
    .tbtitle {{title}}
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.tbtitle {
  font-size: 20px;
}
</style>
