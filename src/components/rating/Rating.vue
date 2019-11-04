<template lang="pug">
  .flex.flex.column(style="display:inline-block;")
    div
      h-icon.rating-star(
        text-color="text-yellow500"
        v-for="(rat, index) in ratings"
        :key="index"
        :icon="rat.icon"
        @click="setRating(rat, index)"
      )
    .text-center.text-gray.text-caption(v-if="showmessages")
      | {{currentMessage}}
</template>

<script>
export default {
  name: 'HRating',
  props: {
    messages: {
      type: Array,
      default: () => (['very bad', 'bad', 'good', 'very good', 'excellent'])
    },
    value: {
      type: Number,
      default: 1
    },
    halfpoints: {
      type: Boolean,
      default: false
    },
    showmessages: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      maxRating: 5,
      ratings: [],
      currentMessage: '',
      currentRatingIndex: 0,
      currentRating: 0
    }
  },
  created () {
    this.currentRating = this.value
    this.createRatings()
    if (this.currentRating < 0) {
      this.currentRating = 0
    }
    this.fillRatings(this.currentRating)
  },
  watch: {
    messages: function (newValue) {
      if (newValue && newValue.length) {
        for (let rat = 0; rat < this.maxRating; rat++) {
          this.ratings[rat].message = newValue[rat] || ''
        }
        this.setCurrentMessage(this.currentRatingIndex)
      } else {
        for (let rat = 0; rat < this.maxRating; rat++) {
          this.ratings[rat].message = ''
        }
        this.currentMessage = ''
      }
    },
    value: function (value) {
      if ((value < 1) || (value > this.maxRating)) {
        this.setCurrentMessage(0)
      } else {
        this.setCurrentMessage(this.currentRatingIndex)
      }
    },
    halfpoints: function (value) {
      this.fillRatings(this.currentRating)
    }
  },
  methods: {
    clearRatings () {
      for (let rat = 0; rat < this.maxRating; rat++) {
        this.ratings[rat].icon = 'far fa-star'
      }
    },
    createRatings () {
      for (let rat = 0; rat < this.maxRating; rat++) {
        this.ratings.push({
          icon: 'far fa-star',
          value: (rat + 1),
          halfvalue: 0.5,
          message: this.messages[rat] || ''
        })
      }
    },
    fillRatings (maxRating) {
      if ((maxRating >= 0) && (maxRating <= this.maxRating)) {
        for (let rat = 0; rat < parseInt(maxRating); rat++) {
          this.ratings[rat].icon = 'fas fa-star'
        }
        if (this.halfpoints) {
          let decimals = Number(maxRating.toString().split('.')[1]) || 0
          if (decimals > 0) {
            this.ratings[parseInt(maxRating)].icon = 'fas fa-star-half-alt'
            this.currentRatingIndex = (maxRating + 0.5) - 1
          } else {
            this.currentRatingIndex = (maxRating < 1) ? 0 : parseInt(maxRating) - 1
          }
        } else {
          this.currentRatingIndex = (maxRating < 1) ? 0 : parseInt(maxRating) - 1
        }

        this.setCurrentMessage(this.currentRatingIndex)
      }
    },
    setCurrentMessage (index) {
      this.currentMessage = this.messages[index] || ''
    },
    setRating (rat, index) {
      this.currentMessage = rat.message
      if (!this.halfpoints) {
        this.currentRating = rat.value
      } else {
        if (this.currentRatingIndex === index) {
          if (this.currentRating >= rat.value) {
            this.currentRating = index + rat.halfvalue
          } else {
            this.currentRating += rat.halfvalue
          }
        } else {
          this.currentRating = index + rat.halfvalue
        }
      }
      this.currentRatingIndex = index
      this.clearRatings()
      this.fillRatings(this.currentRating)
      this.$emit('input', this.currentRating)
    }
  }
}
</script>
