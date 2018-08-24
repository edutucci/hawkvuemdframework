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
    this.$toast.create({
      message: 'Download Completed',
      description: '165MB size completed',
      icon: ['fas', 'check-circle'],
      textcolor: 'text-white',
      bgcolor: 'bg-primary'
    })
  }
}
</script>
