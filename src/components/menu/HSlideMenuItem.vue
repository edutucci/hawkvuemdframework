<template>
  <div class="menu-item full-width flex flex-justify-center"
    :class="[bgcolor]"
  >
    {{label}}
  </div>
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
