<template>
  <h-page-content padding
    @onResize="pageResize"
    @mainLayoutDrawerIsOpened="showDrawer = false"
  >
    <div class="row ">
      <div class="col">
        <div class="row position-sticky bg-white">
          <div class="col text-h4">
            Youtube Video
          </div>
          <div class="col-auto">
            <h-image src="imgIcons/png/icon-help.png" @click="showDrawer = !showDrawer"/>
          </div>
        </div>
        <div class="row">
          <div class="col">

            <div ref="vd-1"/>
            <comp-code class="h-mt-lg" title="video 1" :code="ex1">
              <div>
                <h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/nSmMkeNjjPg"/>
              </div>
            </comp-code>

            <div ref="vd-2"/>
            <comp-code class="h-mt-lg" title="video 2" :code="ex2">
              <div>
                <h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/NPjzUyax4tw"/>
              </div>
            </comp-code>

            <div class="h-mt-md text-primary text-bold"> How to use </div>
            <div>
              <prism language="html" :code="cod1"/>
            </div>

            <!-- <prism language="html" :code="cod1" scroll></prism> -->

            <!-- <h2 class="text-primary"> Vue Properties</h2>
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
            </div> -->

          </div>
         </div>
      </div>
    </div>

    <template v-slot:right>
      <h-nav-drawer ref="navHelp" v-model="showDrawer" side="right">
        <list-help>
          <h-list>
            <h-list-header text="Youtube Video"/>
            <h-list-item @click="goToElement('vd-1')">
              <h-list-item-content>
                <h-list-item-text title="Video 1"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('vd-2')">
              <h-list-item-content>
                <h-list-item-text title="Video 2"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </h-nav-drawer>
    </template>
  </h-page-content>

</template>

<script>

import viewport from '../../../components/others/viewport'

export default {
  data () {
    return {
      showDrawer: true,
      ex1: `
<div>
  <h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/nSmMkeNjjPg"/>
</div>
`,
      ex2: `
<div>
  <h-youtube-video :width="340" :height="220" src="https://www.youtube.com/embed/NPjzUyax4tw"/>
</div>
`,
      cod1: `
1. Click right button on youtube video
2. Copy the iframe code for the video.
   <iframe width="640" height="360"
    src="https://www.youtube.com/embed/QD8U483nTIk"
    frameborder="0" allow="autoplay;
    encrypted-media" allowfullscreen/>
3. copy the src attributte for the component YoutubeVideo

4. Use the youtube video component.
  <h-youtube-video :width="340" :height="220"
    src="https://www.youtube.com/embed/QD8U483nTIk"/>
`
    }
  },
  mounted () {
    this.checkMainBodyWidth()
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    },
    checkMainBodyWidth () {
      let value = viewport.mainBodyWidth()
      if (value < 961) {
        this.showDrawer = false
      }
    },
    pageResize (value) {
      this.$refs.navHelp.onResize(value)
    }
  }
}
</script>
