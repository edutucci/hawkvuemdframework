<template lang="pug">
  .flex.flex-column.top-left-absolute.window-height.no-scroll(id="mainbody" style="right: 0px;")
    slot
</template>

<script>
export default {
  name: 'MainBody'
}
</script>
