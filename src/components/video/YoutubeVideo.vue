<template>
  <iframe
    :width="width"
    :height="height"
    :src="videosrc"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
  />
</template>

<script>
export default {
  name: 'YoutubeVideo', // example site => http://www.javascriptkit.com/dhtmltutors/youtube-api-lightbox2.shtml
  props: {
    width: {
      type: Number,
      default: 1000
    },
    height: {
      type: Number,
      default: 750
    },
    src: {
      type: String
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      videosrc: ''
    }
  },
  mounted () {
    this.makevideosrc()
  },
  watch: {
    autoplay: function (value) {
      this.makevideosrc()
    }
  },
  methods: {
    makevideosrc () {
      this.videosrc = this.src + '?'
      if (this.autoplay) {
        this.videosrc += 'autoplay=1'
      }
    }
  }
}
</script>
