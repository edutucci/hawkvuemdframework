<template lang="pug">
  div.boxshadow2.no-user-select(
    :class="[ { 'border border-gray border-radius': bordered } ]"
  )
    slot

</template>

<script>

export default {
  name: 'HList',
  props: {
    bordered: {
      type: Boolean,
      default: false
    }
  }
}
</script>
