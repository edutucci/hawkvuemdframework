<template>
  <div class="full-width h-pt-sm h-pb-sm">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: 'HListBody',
  data () {
    return {
      currentTextLeft: ''
    }
  },
  methods: {
    getCurrentTextLeft () {
      return this.currentTextLeft
    },
    setCurrentTextLeft (text) {
      // console.log('text: ' + text)
      this.currentTextLeft = text
    }
  }
}
</script>
