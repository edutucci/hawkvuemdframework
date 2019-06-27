<template>
  <div>
    <h1>Youtube Video</h1>

    <comp-code class="h-mt-lg" title="video 1" :code="ex1">
      <div><h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/nSmMkeNjjPg"/></div>
    </comp-code>

    <comp-code class="h-mt-lg" title="video 2" :code="ex2">
      <div><h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/NPjzUyax4tw"/></div>
    </comp-code>

    <h2 class="text-primary"> How to use</h2>

    <prism language="html" :code="cod1"></prism>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>
    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>width</div>
        <div>height</div>
        <div>src</div>
        <div>autoplay</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Number</div>
        <div>Number</div>
        <div>String</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Width of the video</div>
        <div>Height of the video</div>
        <div>Sets the video url.</div>
        <div>Starts the video automatically.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ex1: `
<div><h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/nSmMkeNjjPg"/></div>
`,
      ex2: `
<div><h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/NPjzUyax4tw"/></div>
`,
      cod1: `
1. Click right button on youtube video
2. Copy the iframe code for the video.
   <iframe width="640" height="360" src="https://www.youtube.com/embed/QD8U483nTIk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen/>
3. copy the src attributte for the component YoutubeVideo

4. Use the youtube video component.
  <h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/QD8U483nTIk"/>
`
    }
  }
}
</script>
