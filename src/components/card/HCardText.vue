<template lang="pug">
  .overflow-hidden.subtitle.flex.flex-wrap(style="padding:8px;")
    strong {{desc}}
</template>

<script>

export default {
  name: 'HCardText',
  props: {
    desc: {
      type: String,
      default: ''
    }
  }
}
</script>
