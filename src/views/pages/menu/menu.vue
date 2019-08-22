<template>
  <h-page-content>

  </h-page-content>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {}
  },
  methods: {
    showSnackBar (msg) {
      this.$SnackBar.create({
        message: msg,
        bgcolor: 'bg-positive',
        textcolor: 'text-white'
      })
    }
  }
}
</script>
