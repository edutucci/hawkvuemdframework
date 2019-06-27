<template>
  <div>

    <h3>Video 1</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div><h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/nSmMkeNjjPg"/></div>
    </div>

    <h3>Video 2</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div><h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/NPjzUyax4tw"/></div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
