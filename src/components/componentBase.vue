<template>
  <div></div>
</template>

<script>

export default {
  props: {
    value: {
      type: String
    },
    textcolor: {
      type: String,
      default: 'text-black'
    },
    bgcolor: {
      type: String,
      default: 'bg-white'
    }
  },
  data () {
    return {
      themeColors: undefined
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
