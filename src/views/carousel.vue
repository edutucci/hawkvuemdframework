<template>
  <div>
    <h1>Carousel</h1>
    <html-separator/>
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

    <prism language="html" :code="carousel1"></prism>

  </div>
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
  }
}
</script>
