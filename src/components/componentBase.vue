<script>
// eslint-disable-next-line linebreak-style
export default {
  props: {
    textColor: {
      type: String,
      default: 'text-black',
    },
    bgColor: {
      type: String,
      default: 'bg-white',
    },
    borderColor: {
      type: String,
      default: 'border-gray',
    },
  },
  data() {
    return {
      compTextColor: '',
      compBgColor: '',
      compBgColorHover: '',
      compBorderColor: '',
    };
  },
  mounted() {
    this.getBackgroundHover();
  },
  methods: {
    getBackgroundHover(flat) {
      this.compBgColorHover = '';
      switch (this.bgColor) {
        case 'bg-white':
        case 'bg-primary':
        case 'bg-secondary':
        case 'bg-positive':
        case 'bg-negative':
        case 'bg-info':
        case 'bg-warning':
          this.compBgColorHover = `${this.bgColor}-hover`;
          break;
        default:
          this.getBackgroundFromMaterialPallete();
      }
      if (flat) {
        this.compBgColorHover = this.compBgColorHover.replace(/-hover/, '-flat-hover');
      }
    },
    getBackgroundFromMaterialPallete() {
      if (this.bgColor.indexOf('red') !== -1) {
        this.compBgColorHover = 'bg-red-hover';
      } else if (this.bgColor.indexOf('pink') !== -1) {
        this.compBgColorHover = 'bg-pink-hover';
      } else if (this.bgColor.indexOf('deepPurple') !== -1) {
        this.compBgColorHover = 'bg-deepPurple-hover';
      } else if (this.bgColor.indexOf('purple') !== -1) {
        this.compBgColorHover = 'bg-purple-hover';
      } else if (this.bgColor.indexOf('indigo') !== -1) {
        this.compBgColorHover = 'bg-indigo-hover';
      } else if (this.bgColor.indexOf('lightBlue') !== -1) {
        this.compBgColorHover = 'bg-lightBlue-hover';
      } else if (this.bgColor.indexOf('blueGray') !== -1) {
        this.compBgColorHover = 'bg-blueGray-hover';
      } else if (this.bgColor.indexOf('blue') !== -1) {
        this.compBgColorHover = 'bg-blue-hover';
      } else if (this.bgColor.indexOf('cyan') !== -1) {
        this.compBgColorHover = 'bg-cyan-hover';
      } else if (this.bgColor.indexOf('teal') !== -1) {
        this.compBgColorHover = 'bg-teal-hover';
      } else if (this.bgColor.indexOf('lightGreen') !== -1) {
        this.compBgColorHover = 'bg-lightGreen-hover';
      } else if (this.bgColor.indexOf('green') !== -1) {
        this.compBgColorHover = 'bg-green-hover';
      } else if (this.bgColor.indexOf('lime') !== -1) {
        this.compBgColorHover = 'bg-lime-hover';
      } else if (this.bgColor.indexOf('yellow') !== -1) {
        this.compBgColorHover = 'bg-yellow-hover';
      } else if (this.bgColor.indexOf('amber') !== -1) {
        this.compBgColorHover = 'bg-amber-hover';
      } else if (this.bgColor.indexOf('deepOrange') !== -1) {
        this.compBgColorHover = 'bg-deepOrange-hover';
      } else if (this.bgColor.indexOf('orange') !== -1) {
        this.compBgColorHover = 'bg-orange-hover';
      } else if (this.bgColor.indexOf('brown') !== -1) {
        this.compBgColorHover = 'bg-brown-hover';
      } else if (this.bgColor.indexOf('gray') !== -1) {
        this.compBgColorHover = 'bg-gray-hover';
      }
    },
  },
};
</script>
