<template lang="pug">
  .col-auto.h-ml-xs
    h-btn(fab
      size="sm"
      bg-color="bg-transparent" :text-color="textColor" left-icon="fas fa-bars"
      @click="onClick"
    )
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
