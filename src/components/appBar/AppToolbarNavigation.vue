<template lang="pug">
.col-auto.h-ml-xs
  h-btn(fab
    size="sm"
    bg-color="bg-transparent" :text-color="textColor" left-icon="fas fa-bars"
    @click="$emit('click')"
  )
</template>

<script>

import componentBase from '../componentBase.vue';

export default {
  extends: componentBase,
  name: 'HAppToolbarNavigation',
  emits: ['click'],
  methods: {
    // onClick() {
    //   this.$emit('click');
    // },
  },
};
</script>
