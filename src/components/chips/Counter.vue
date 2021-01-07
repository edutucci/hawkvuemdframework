<template lang="pug">
//- .counter(
//-   :class="[bgcolor, textcolor]"
//- )
.top-right-absolute.counter(
  :class="[bgColor, textColor]"
)
  slot
</template>

<script>

import componentBase from '../componentBase.vue';

export default {
  name: 'Counter',
  extends: componentBase,
};
</script>

<style scoped>
.counter {
  font-size: 10px;
  border-radius: 50%;
  padding: 4px;
  z-index:8;
}

</style>
