<template>
  <div v-show="toasts.length">
    <snack-vue
      v-for="(t, index) in toasts"
      :key="index"
      :config="t"
    />
  </div>
</template>

<script>

import SnackVue from './SnackBarVue'

export default {
  name: 'SnackBarContainer',
  components: {
    SnackVue
  },
  data () {
    return {
      toasts: []
    }
  },
  methods: {
    add (snack) {
      this.toasts.push(snack)
    }
  }
}
</script>
