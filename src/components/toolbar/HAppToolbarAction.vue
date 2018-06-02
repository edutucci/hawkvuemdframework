<template lang="pug">
  div.tbaction(style="padding-left: 16px; padding-right: 16px;")
    slot
</template>

<script>
export default {
  name: 'HAppToolbarAction'
}
</script>

<style scoped>
.tbaction > .faicon {
  padding-right: 16px;
  padding-left: 16px;
}
</style>
