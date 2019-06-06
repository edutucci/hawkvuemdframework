<template lang="pug">
  div
    img.avatar(:src="src" alt="avatar" :style="[imgsize]")
</template>

<script>

export default {
  props: {
    src: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '32px'
    }
  },
  data () {
    return {
      imgsize: {
        width: this.size,
        height: this.size
      }
    }
  },
  mounted () {
    this.defineSize()
  },
  watch: {
    size: function (value) {
      this.defineSize()
    }
  },
  methods: {
    defineSize () {
      this.imgsize.width = this.size
      this.imgsize.height = this.size
    }
  }

}
</script>

<style scoped>
/* Rounded avatar */
.avatar {
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

    /* -webkit-box-shadow: 0 0 0 3px #fff, 0 0 0 4px #999, 0 2px 5px 4px rgba(0,0,0,.2);
    -moz-box-shadow: 0 0 0 3px #fff, 0 0 0 4px #999, 0 2px 5px 4px rgba(0,0,0,.2);
    box-shadow: 0 0 0 3px #fff, 0 0 0 4px #999, 0 2px 5px 4px rgba(0,0,0,.2); */
}
</style>
