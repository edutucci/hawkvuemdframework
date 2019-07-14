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
    .bg-modal.full-width.bottom-left-absolute.text-center
      .row.flex.flex-column
        .row.flex-column.flex.flex-justify-center.h-mt-md.h-mb-md
          .row.text-center
            h2.text-white.no-margin {{title}}
          .row.text-center
            strong.text-white {{subtitle}}
      .row.flex.flex-justify-center.h-mb-md
        .carousel-navigation-container
          h-scroll-navigator(
            icon-color="text-white"
          )
            .flex
              h-fa-icon.h-mr-lg(
                textcolor="text-white"
                v-for="(slider, index) in sliderList"
                :key="index"
                :icon="sliderIcon(index)"
                @click="selectSlider(slider, index)"
              )
        //- .carousel-navigation-container
        //-   swiper(:options="swiperOption")
        //-     swiper-slide(
        //-       v-for="(slider, index) in sliderList"
        //-       :key="index"
        //-       class="overflow-hidden"
        //-     )
        //-       h-fa-icon.h-mr-xs.text-white(
        //-         :icon="sliderIcon(index)"
        //-         @click="selectSlider(slider, index)"
        //-       )

</template>

<script>

import HSliderButton from './SliderButton'

export default {
  name: 'HCarousel',
  components: {
    HSliderButton
  },
  data () {
    return {
      sliderList: [],
      currentSlider: undefined,
      currentIndex: undefined,
      title: '',
      subtitle: ''
    }
  },
  mounted () {
    if (this.sliderList && this.sliderList.length) {
      this.selectSlider(this.sliderList[0], 0)
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
      this.title = this.currentSlider.getTitle()
      this.subtitle = this.currentSlider.getSubtitle()
    },
    movSlider (value) {
      this.currentIndex += value
      if (this.currentIndex < 0) {
        this.currentIndex = this.sliderList.length - 1
      }
      if (this.currentIndex >= (this.sliderList.length)) {
        this.currentIndex = 0
      }
      this.selectSlider(this.sliderList[this.currentIndex], this.currentIndex)
    },
    setTitle (title) {
      this.title = title
    },
    setSubtitle (subtitle) {
      this.subtitle = subtitle
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
