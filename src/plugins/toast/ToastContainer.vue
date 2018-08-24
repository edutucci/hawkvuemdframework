<template>
  <div v-show="toasts.length">
    <toast-vue
      v-for="(t, index) in toasts"
      :key="index"
      :config="t"
    />
  </div>
</template>

<script>

import ToastVue from './ToastVue'

export default {
  name: 'ToastContainer',
  components: {
    ToastVue
  },
  data () {
    return {
      toasts: []
    }
  },
  methods: {
    add (toast) {
      console.log('adding toast')
      this.toasts.push(toast)
    }
  }
}
</script>
