<template>
  <div></div>
</template>

<script>

export default {
  props: {
    textcolor: {
      type: String,
      default: 'text-black'
    },
    bgcolor: {
      type: String,
      default: 'bg-white'
    },
    borderColor: {
      type: String,
      default: 'border-gray'
    }
  },
  data () {
    return {
      compBgColor: '',
      compBgColorHover: '',
      compBorderColor: ''
    }
  },
  mounted () {
    this.getBackgroundHover()
  },
  methods: {
    getBackgroundHover (flat) {
      this.compBgColorHover = ''
      console.log('this.bgcolor vale:', this.bgcolor)
      switch (this.bgcolor) {
        case 'bg-white':
        case 'bg-black':
        case 'bg-primary':
        case 'bg-secondary':
        case 'bg-positive':
        case 'bg-negative':
        case 'bg-info':
        case 'bg-warning':
          this.compBgColorHover = this.bgcolor + '-hover'
          break
        default:
          this.getBackgroundFromMaterialPallete(flat)
      }
      if (flat) {
        this.compBgColorHover = this.compBgColorHover.replace(/-hover/, '-flat-hover')
      }
    },
    getBackgroundFromMaterialPallete (flat) {
      if (this.bgcolor.indexOf('red') !== -1) {
        this.compBgColorHover = 'bg-red-hover'
      } else if (this.bgcolor.indexOf('pink') !== -1) {
        this.compBgColorHover = 'bg-pink-hover'
      } else if (this.bgcolor.indexOf('deepPurple') !== -1) {
        this.compBgColorHover = 'bg-deepPurple-hover'
      } else if (this.bgcolor.indexOf('purple') !== -1) {
        this.compBgColorHover = 'bg-purple-hover'
      } else if (this.bgcolor.indexOf('indigo') !== -1) {
        this.compBgColorHover = 'bg-indigo-hover'
      } else if (this.bgcolor.indexOf('lightBlue') !== -1) {
        this.compBgColorHover = 'bg-lightBlue-hover'
      } else if (this.bgcolor.indexOf('blueGray') !== -1) {
        this.compBgColorHover = 'bg-blueGray-hover'
      } else if (this.bgcolor.indexOf('blue') !== -1) {
        this.compBgColorHover = 'bg-blue-hover'
      } else if (this.bgcolor.indexOf('cyan') !== -1) {
        this.compBgColorHover = 'bg-cyan-hover'
      } else if (this.bgcolor.indexOf('teal') !== -1) {
        this.compBgColorHover = 'bg-teal-hover'
      } else if (this.bgcolor.indexOf('lightGreen') !== -1) {
        this.compBgColorHover = 'bg-lightGreen-hover'
      } else if (this.bgcolor.indexOf('green') !== -1) {
        this.compBgColorHover = 'bg-green-hover'
      } else if (this.bgcolor.indexOf('lime') !== -1) {
        this.compBgColorHover = 'bg-lime-hover'
      } else if (this.bgcolor.indexOf('yellow') !== -1) {
        this.compBgColorHover = 'bg-yellow-hover'
      } else if (this.bgcolor.indexOf('amber') !== -1) {
        this.compBgColorHover = 'bg-amber-hover'
      } else if (this.bgcolor.indexOf('deepOrange') !== -1) {
        this.compBgColorHover = 'bg-deepOrange-hover'
      } else if (this.bgcolor.indexOf('orange') !== -1) {
        this.compBgColorHover = 'bg-orange-hover'
      } else if (this.bgcolor.indexOf('brown') !== -1) {
        this.compBgColorHover = 'bg-brown-hover'
      } else if (this.bgcolor.indexOf('gray') !== -1) {
        this.compBgColorHover = 'bg-gray-hover'
      }
    }
  }
}
</script>

<style scoped>

</style>
