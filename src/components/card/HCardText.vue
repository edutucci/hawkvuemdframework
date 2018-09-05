<template lang="pug">
  .overflow-hidden.subtitle.flex.flex-wrap(style="padding-left:16px;padding-right:16px;")
    | {{desc}}
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
