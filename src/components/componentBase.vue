<template>
    
</template>

<script>

// import colors from '../themes/theme.default.colors.json'

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
    // this.setComponentColor()
  },
  methods: {
    // setComponentColor () {
    //   if (this.color === 'default') {
    //     this.btncolor = 'component-default'
    //   } else if (this.color === 'dark') {
    //     this.btncolor = 'component-dark'
    //   } else if (this.color === 'primary') {
    //     this.btncolor = 'component-primary'
    //   } else if (this.color === 'success') {
    //     this.btncolor = 'component-success'
    //   } else if (this.color === 'info') {
    //     this.btncolor = 'component-info'
    //   } else if (this.color === 'warning') {
    //     this.btncolor = 'component-warning'
    //   } else if (this.color === 'danger') {
    //     this.btncolor = 'component-danger'
    //   }
    // }
  }
}
</script>

<style>


</style>
