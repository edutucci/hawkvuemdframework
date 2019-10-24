<template lang="pug">
  .col-auto.h-ml-xs(
    @click="onClick"
  )
    h-btn(fab size="sm" bg-color="bg-transparent" :text-color="textColor" left-icon="fas fa-bars")
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'HAppToolbarNavigation',
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>
