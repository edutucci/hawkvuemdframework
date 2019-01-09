<template lang="pug">
  .carousel-container.border-corner-rounded.boxshadow.flex.flex-column.overflow-hidden.no-user-select
    h-slider-button.top-left-absolute(
      icon="fas fa-chevron-left"
      @click="movSlider(-1)"
    )
    h-slider-button.top-right-absolute(
      icon="fas fa-chevron-right"
      @click="movSlider(1)"
    )
    .flex-1
      slot
    .bg-modal.full-width.scroll.bottom-left-absolute
      .flex.flex-column
        .row.flex.flex-justify-center
          .carousel-navigation-container.flex.flex-justify-center.flex-align-center.h-pa-sm
            swiper.flex.flex-items-center(:options="swiperOption")
              swiper-slide(
                v-for="(slider, index) in sliderList"
                :key="index"
                class=" overflow-hidden"
              )
                h-fa-icon.h-mr-xs.text-white(
                  :icon="sliderIcon(index)"
                  @click="selectSlider(slider, index)"
                )

</template>

<script>
export default {
  name: 'HCarousel',
  props: {
  },
  data () {
    return {
      sliderList: [],
      currentSlider: undefined,
      currentIndex: undefined,
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 3,
        slidesPerGroup: 1,
        loop: true,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted () {
    if (this.sliderList && this.sliderList.length) {
      this.selectSlider(this.sliderList[0], 0)
      this.swiperOption.slidesPerView = this.sliderList.length
    }
  },
  methods: {
    sliderIcon (index) {
      let icon = (this.currentIndex === index) ? 'fas fa-dot-circle' : 'far fa-dot-circle'
      return icon
    },
    addSlider (slider) {
      this.sliderList.push(slider)
    },
    selectSlider (slider, index) {
      if (this.currentSlider) {
        this.currentSlider.setVisible(false)
      }
      this.currentSlider = slider
      this.currentSlider.setVisible(true)
      this.currentIndex = index
    },
    movSlider (value) {
      this.currentIndex += value
      console.log('this.currentIndex antes: ' + this.currentIndex)
      if (this.currentIndex < 0) {
        this.currentIndex = this.sliderList.length - 1
      }
      if (this.currentIndex >= (this.sliderList.length)) {
        this.currentIndex = 0
      }
      console.log('this.currentIndex depois: ' + this.currentIndex)
      this.selectSlider(this.sliderList[this.currentIndex], this.currentIndex)
    }
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
}

.carousel-navigation-container {
  width: 70%;
}

.slider-button {
  background-color: none !important;
  padding-left: 4px;
  padding-right: 4px;
}

</style>
