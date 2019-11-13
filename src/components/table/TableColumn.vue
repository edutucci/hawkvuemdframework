<template lang="pug">
  .table-column-container(
    :style="[colsize]"
  )
    slot
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '85px'
    }
  },
  data () {
    return {
      colsize: {
        width: ''
      }
    }
  },
  mounted () {
    this.defineColSize()
  },
  methods: {
    defineColSize () {
      this.colsize.width = this.width
    }
  }
}
</script>
