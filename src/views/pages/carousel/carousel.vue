<template>
  <h-page-content padding>
    <div class="row">
      <div class="col">
        <div class="text-h4">Carousel</div>

        <div ref="car-standard"/>
        <comp-code title="Carousel" :code="carousel1">
          <h-carousel style="width:400px; height: 300px">
            <h-carousel-slider title="Elegant River" subtitle="Nice Place">
              <img src="img/mountains.jpg"  class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Nallah" subtitle="Landscape">
              <img src="img/Nallah_Sindh.jpg" class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Soccer Game" subtitle="Great Moments">
              <img src="img/90minute.png" class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Elegant River" subtitle="Nice Place">
              <img src="img/mountains.jpg"  class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Nallah" subtitle="Landscape">
              <img src="img/Nallah_Sindh.jpg" class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Soccer Game" subtitle="Great Moments">
              <img src="img/90minute.png" class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Elegant River" subtitle="Nice Place">
              <img src="img/mountains.jpg"  class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Nallah" subtitle="Landscape">
              <img src="img/Nallah_Sindh.jpg" class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Soccer Game" subtitle="Great Moments">
              <img src="img/90minute.png" class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Elegant River" subtitle="Nice Place">
              <img src="img/mountains.jpg"  class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Nallah" subtitle="Landscape">
              <img src="img/Nallah_Sindh.jpg" class="full-size"/>
            </h-carousel-slider>
            <h-carousel-slider title="Soccer Game" subtitle="Great Moments">
              <img src="img/90minute.png" class="full-size"/>
            </h-carousel-slider>
          </h-carousel>
        </comp-code>
      </div>
      <div class="col-auto">
        <list-help>
          <h-list>
            <h-list-header text="Styles"/>
            <h-list-item @click="goToElement('car-standard')">
              <h-list-item-content>
                <h-list-item-text title="Standard"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </div>
    </div>
  </h-page-content>
</template>

<script>
export default {
  data () {
    return {
      carousel1: `
<h-carousel style="width:400px; height: 300px">
  <h-carousel-slider title="Elegant River" subtitle="Nice Place">
    <img src="img/mountains.jpg"  class="full-size"/>
  </h-carousel-slider>
  <h-carousel-slider title="Nallah" subtitle="Landscape">
    <img src="img/Nallah_Sindh.jpg" class="full-size"/>
  </h-carousel-slider>
  <h-carousel-slider title="Soccer Game" subtitle="Great Moments">
    <img src="img/90minute.png" class="full-size"/>
  </h-carousel-slider>
  <h-carousel-slider title="Elegant River" subtitle="Nice Place">
    <img src="img/mountains.jpg"  class="full-size"/>
  </h-carousel-slider>
  <h-carousel-slider title="Nallah" subtitle="Landscape">
    <img src="img/Nallah_Sindh.jpg" class="full-size"/>
  </h-carousel-slider>
  <h-carousel-slider title="Soccer Game" subtitle="Great Moments">
    <img src="img/90minute.png" class="full-size"/>
  </h-carousel-slider>
</h-carousel>
`
    }
  },
  methods: {
  }
}
</script>
