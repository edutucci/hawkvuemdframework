<template lang="pug">
div.h-app-toolbar(
  :class="[bgColor, textColor]"
)
  slot
</template>

<script>

import componentBase from '../componentBase.vue';

export default {
  extends: componentBase,
};
</script>
