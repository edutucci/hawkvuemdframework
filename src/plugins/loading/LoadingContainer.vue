<template>
  <div>
    <loading-vue
      :message="message"
      :show="showMessage"
    />
  </div>
</template>

<script>

import LoadingVue from './LoadingVue'

export default {
  name: 'LoadingContainer',
  components: {
    LoadingVue
  },
  data () {
    return {
      message: ''
    }
  },
  computed: {
    showMessage () {
      let value = false
      if (this.message !== undefined && this.message.length > 0) {
        value = true
      }
      return value
    }
  },
  methods: {
    show (message) {
      this.message = message
    },
    hide () {
      this.message = ''
    }
  }
}
</script>
