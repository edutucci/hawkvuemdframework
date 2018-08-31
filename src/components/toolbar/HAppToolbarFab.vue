<template lang="pug">
  div.tbfab.h-pl-lg.flex.flex-wrap
    slot
</template>

<script>
export default {
  name: 'HAppToolbarFab'
}
</script>

<style scoped>
.tbfab > .btnfab {
  position: absolute;
  z-index: 3;
  top: -25px;
}
</style>
