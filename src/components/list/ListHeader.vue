<template lang="pug">
.h-list-header.list-title.flex(:class="[bgColor]")
  .flex.flex-justify-start.title
    .text-body1(:class="[textColor]")  {{text}}
  .flex.flex-justify-start.title(style="padding-left: 48px;")
    .text-body1(:class="[textColor]")  {{middletext}}
  div
    slot
</template>

<script>

import componentBase from '../componentBase.vue';

export default {
  extends: componentBase,
  name: 'HListHeader',
  props: {
    text: {
      type: String,
      default: '',
    },
    middletext: {
      type: String,
      default: '',
    },
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>

.list-title {
  position: relative;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.no-padding {
  padding: 0px;
}

</style>
