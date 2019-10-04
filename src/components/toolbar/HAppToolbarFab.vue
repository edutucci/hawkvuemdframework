<template lang="pug">
  div.tbfab.h-pl-lg.flex.flex-1.flex-wrap
    slot
</template>

<script>
export default {
  name: 'HAppToolbarFab'
}
</script>

<style scoped>
.tbfab {
  position: relative;
  padding: 4px;
}

.tbfab > .btnfab {
  position: absolute;
  z-index: 3;
  top: -0px;
  transform: translate(0px, -42px);
  -ms-transform: translate(0px, -42px); /* IE 9 */
  -webkit-transform: translate(0px, -42px); /* Safari 3-8 */
}
</style>
