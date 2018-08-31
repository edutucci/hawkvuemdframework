<template>
  <div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    this.$SnackBar.create({
      message: 'Download Completed',
      textcolor: 'text-white',
      bgcolor: 'bg-primary'
    })
  }
}
</script>
