<template lang="pug">
  div
    h1 CSS Classes
    html-separator
    .row.text-center
      div.inline-block.bg-primary.text-white.h-pa-md.h-mr-md primary
      div.inline-block.bg-secondary.text-white.h-pa-md.h-mr-md secondary
      div.inline-block.bg-positive.text-white.h-pa-md.h-mr-md positive
      div.inline-block.bg-negative.text-white.h-pa-md.h-mr-md negative
      div.inline-block.bg-info.text-white.h-pa-md.h-mr-md info
      div.inline-block.bg-warning.text-white.h-pa-md.h-mr-md warning

    .row
      <p>To use the classes use the prefixes <b>bg-, text-, border-</b> </p>

    <pre v-highlightjs="classes">
      <code class="html">
      </code>
    </pre>

    .row
      h1 Material Design Colors
    html-separator
    .row.flex.flex-justify-center
      .pallet-content.flex.flex-wrap
        .pallete-container.text-bold(
          v-for="(pc, pcindex) in materialPallete"
          :key="pcindex"
        )
          .flex.pallet-content.text-white(
            v-for="(color, colorindex) in pc.names"
            :key="colorindex"
            :class="[color, pc.colors[colorindex]]"
          )
            div
              | {{color}}
            div.flex-1.text-right
              | {{materialPallete[pcindex].values[colorindex]}}

</template>

<script>
export default {
  name: 'MaterialDesignColor',
  data () {
    return {
      classes: `
<div class="bg-primary text-white border-black">
  <span>Using the classes</span>
</div>
      `,
      materialPalleteArrayJSON: [],
      materialPallete: [
        {
          names: ['red50', 'red100', 'red200', 'red300', 'red400', 'red500', 'red600', 'red700', 'red800', 'red900', 'redA100', 'redA200', 'redA400', 'redA700'],
          values: ['#FFEBEE', '#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828', '#B71C1C', '#FF8A80', '#FF5252', '#FF1744', '#D50000'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-black', 'text-white', 'text-white', 'text-white']
        },
        {
          names: ['pink50', 'pink100', 'pink200', 'pink300', 'pink400', 'pink500', 'pink600', 'pink700', 'pink800', 'pink900', 'pinkA100', 'pinkA200', 'pinkA400', 'pinkA700'],
          values: ['#FCE4EC', '#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457', '#880E4F', '#FF80AB', '#FF4081', '#F50057', '#C51162'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-black', 'text-white', 'text-white', 'text-white']
        },
        {
          names: ['purple50', 'purple100', 'purple200', 'purple300', 'purple400', 'purple500', 'purple600', 'purple700', 'purple800', 'purple900', 'purpleA100', 'purpleA200', 'purpleA400', 'purpleA700'],
          values: ['#F3E5F5', '#E1BEE7', '#CE93D8', '#BA68C8', '#AB47BC', '#9C27B0', '#8E24AA', '#7B1FA2', '#6A1B9A', '#4A148C', '#EA80FC', '#E040FB', '#D500F9', '#AA00FF'],
          colors: ['text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-black', 'text-white', 'text-white', 'text-white']
        },
        {
          names: ['deepPurple50', 'deepPurple100', 'deepPurple200', 'deepPurple300', 'deepPurple400', 'deepPurple500', 'deepPurple600', 'deepPurple700', 'deepPurple800', 'deepPurple900', 'deepPurpleA100', 'deepPurpleA200', 'deepPurpleA400', 'deepPurpleA700'],
          values: ['#EDE7F6', '#D1C4E9', '#B39DDB', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#B388FF', '#7C4DFF', '#651FFF', '#6200EA'],
          colors: ['text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-black', 'text-white', 'text-white', 'text-white']
        },
        {
          names: ['indigo50', 'indigo100', 'indigo200', 'indigo300', 'indigo400', 'indigo500', 'indigo600', 'indigo700', 'indigo800', 'indigo900', 'indigoA100', 'indigoA200', 'indigoA400', 'indigoA700'],
          values: ['#E8EAF6', '#C5CAE9', '#9FA8DA', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#8C9EFF', '#536DFE', '#3D5AFE', '#304FFE'],
          colors: ['text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-black', 'text-white', 'text-white', 'text-white']
        },
        {
          names: ['blue50', 'blue100', 'blue200', 'blue300', 'blue400', 'blue500', 'blue600', 'blue700', 'blue800', 'blue900', 'blueA100', 'blueA200', 'blueA400', 'blueA700'],
          values: ['#E3F2FD', '#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-black', 'text-white', 'text-white', 'text-white']
        },
        {
          names: ['lightBlue50', 'lightBlue100', 'lightBlue200', 'lightBlue300', 'lightBlue400', 'lightBlue500', 'lightBlue600', 'lightBlue700', 'lightBlue800', 'lightBlue900', 'lightBlueA100', 'lightBlueA200', 'lightBlueA400', 'lightBlueA700'],
          values: ['#E1F5FE', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#80D8FF', '#40C4FF', '#00B0FF', '#0091EA'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-black', 'text-black', 'text-black', 'text-white']
        },
        {
          names: ['cyan50', 'cyan100', 'cyan200', 'cyan300', 'cyan400', 'cyan500', 'cyan600', 'cyan700', 'cyan800', 'cyan900', 'cyanA100', 'cyanA200', 'cyanA400', 'cyanA700'],
          values: ['#E0F7FA', '#B2EBF2', '#80DEEA', '#4DD0E1', '#26C6DA', '#00BCD4', '#00ACC1', '#0097A7', '#00838F', '#006064', '#84FFFF', '#18FFFF', '#00E5FF', '#00B8D4'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-black', 'text-black', 'text-black', 'text-black']
        },
        {
          names: ['teal50', 'teal100', 'teal200', 'teal300', 'teal400', 'teal500', 'teal600', 'teal700', 'teal800', 'teal900', 'tealA100', 'tealA200', 'tealA400', 'tealA700'],
          values: ['#E0F2F1', '#B2DFDB', '#80CBC4', '#4DB6AC', '#26A69A', '#009688', '#00897B', '#00796B', '#00695C', '#004D40', '#A7FFEB', '#64FFDA', '#1DE9B6', '#00BFA5'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-black', 'text-black', 'text-black', 'text-black']
        },
        {
          names: ['green50', 'green100', 'green200', 'green300', 'green400', 'green500', 'green600', 'green700', 'green800', 'green900', 'greenA100', 'greenA200', 'greenA400', 'greenA700'],
          values: ['#E8F5E9', '#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32', '#1B5E20', '#B9F6CA', '#69F0AE', '#00E676', '#00C853'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-black', 'text-black', 'text-black', 'text-black']
        },
        {
          names: ['lightGreen50', 'lightGreen100', 'lightGreen200', 'lightGreen300', 'lightGreen400', 'lightGreen500', 'lightGreen600', 'lightGreen700', 'lightGreen800', 'lightGreen900', 'lightGreenA100', 'lightGreenA200', 'lightGreenA400', 'lightGreenA700'],
          values: ['#F1F8E9', '#DCEDC8', '#C5E1A5', '#AED581', '#9CCC65', '#8BC34A', '#7CB342', '#689F38', '#558B2F', '#33691E', '#CCFF90', '#B2FF59', '#76FF03', '#64DD17'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-black', 'text-black', 'text-black', 'text-black']
        },
        {
          names: ['lime50', 'lime100', 'lime200', 'lime300', 'lime400', 'lime500', 'lime600', 'lime700', 'lime800', 'lime900', 'limeA100', 'limeA200', 'limeA400', 'limeA700'],
          values: ['#F9FBE7', '#F0F4C3', '#E6EE9C', '#DCE775', '#D4E157', '#CDDC39', '#C0CA33', '#AFB42B', '#9E9D24', '#827717', '#F4FF81', '#EEFF41', '#C6FF00', '#AEEA00'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-black', 'text-black', 'text-black', 'text-black']
        },
        {
          names: ['yellow50', 'yellow100', 'yellow200', 'yellow300', 'yellow400', 'yellow500', 'yellow600', 'yellow700', 'yellow800', 'yellow900', 'yellowA100', 'yellowA200', 'yellowA400', 'yellowA700'],
          values: ['#FFFDE7', '#FFF9C4', '#FFF59D', '#FFF176', '#FFEE58', '#FFEB3B', '#FDD835', '#FBC02D', '#F9A825', '#F57F17', '#FFFF8D', '#FFFF00', '#FFEA00', '#FFD600'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black']
        },
        {
          names: ['amber50', 'amber100', 'amber200', 'amber300', 'amber400', 'amber500', 'amber600', 'amber700', 'amber800', 'amber900', 'amberA100', 'amberA200', 'amberA400', 'amberA700'],
          values: ['#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000', '#FF8F00', '#FF6F00', '#FFE57F', '#FFD740', '#FFC400', '#FFAB00'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black']
        },
        {
          names: ['orange50', 'orange100', 'orange200', 'orange300', 'orange400', 'orange500', 'orange600', 'orange700', 'orange800', 'orange900', 'orangeA100', 'orangeA200', 'orangeA400', 'orangeA700'],
          values: ['#FFF3E0', '#FFE0B2', '#FFCC80', '#FFB74D', '#FFA726', '#FF9800', '#FB8C00', '#F57C00', '#EF6C00', '#E65100', '#FFD180', '#FFAB40', '#FF9100', '#FF6D00'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-black', 'text-black', 'text-black', 'text-black']
        },
        {
          names: ['deepOrange50', 'deepOrange100', 'deepOrange200', 'deepOrange300', 'deepOrange400', 'deepOrange500', 'deepOrange600', 'deepOrange700', 'deepOrange800', 'deepOrange900', 'deepOrangeA100', 'deepOrangeA200', 'deepOrangeA400', 'deepOrangeA700'],
          values: ['#FBE9E7', '#FFCCBC', '#FFAB91', '#FF8A65', '#FF7043', '#FF5722', '#F4511E', '#E64A19', '#D84315', '#BF360C', '#FF9E80', '#FF6E40', '#FF3D00', '#DD2C00'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-black', 'text-black', 'text-white', 'text-white']
        },
        {
          names: ['brown50', 'brown100', 'brown200', 'brown300', 'brown400', 'brown500', 'brown600', 'brown700', 'brown800', 'brown900'],
          values: ['#EFEBE9', '#D7CCC8', '#BCAAA4', '#A1887F', '#8D6E63', '#795548', '#6D4C41', '#5D4037', '#4E342E', '#3E2723'],
          colors: ['text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white']
        },
        {
          names: ['gray50', 'gray100', 'gray200', 'gray300', 'gray400', 'gray500', 'gray600', 'gray700', 'gray800', 'gray900'],
          values: ['#FAFAFA', '#F5F5F5', '#EEEEEE', '#E0E0E0', '#BDBDBD', '#9E9E9E', '#757575', '#616161', '#424242', '#212121'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white']
        },
        {
          names: ['blueGray50', 'blueGray100', 'blueGray200', 'blueGray300', 'blueGray400', 'blueGray500', 'blueGray600', 'blueGray700', 'blueGray800', 'blueGray900'],
          values: ['#ECEFF1', '#CFD8DC', '#B0BEC5', '#90A4AE', '#78909C', '#607D8B', '#546E7A', '#455A64', '#37474F', '#263238'],
          colors: ['text-black', 'text-black', 'text-black', 'text-black', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white', 'text-white']
        }
      ]
    }
  },
  mounted () {
    this.gerarCSS()
  },
  methods: {
    gerarCSS () {
      for (let pcindex = 0; pcindex < this.materialPallete.length; pcindex++) {
        for (let colorindex = 0; colorindex < this.materialPallete[pcindex].names.length; colorindex++) {
          let objColor = '.' + this.materialPallete[pcindex].names[colorindex] + ' { background-color: ' + this.materialPallete[pcindex].values[colorindex] + ' }'
          this.materialPalleteArrayJSON.push(objColor)
        }
      }
    }
  }
}
</script>

<style scoped>
  .pallete-container {
    width: 247px;
    margin-right: 6px;
    margin-left: 6px;
    margin-top: 6px;
  }

  .pallet-content {
    padding: 10px;
    max-width: 800px;
  }

  .text-right {
    text-align: right;
  }

  .text-white {
    color: white;
  }

  .text-black {
    color: black;
  }

  .text-bold {
    font-weight: bold;
  }

  .flex {
    display: flex;
  }

  .flex-1 {
    flex: 1;
  }

 .red50 {
   background-color: #FFEBEE
 }

 .red100 {
   background-color: #FFCDD2
 }

 .red200 {
   background-color: #EF9A9A
 }

 .red300 {
   background-color: #E57373
 }

 .red400 {
   background-color: #EF5350
 }

 .red500 {
   background-color: #F44336
 }

 .red600 {
   background-color: #E53935
 }

 .red700 {
   background-color: #D32F2F
 }

 .red800 {
   background-color: #C62828
 }

 .red900 {
   background-color: #B71C1C
 }

 .redA100 {
   background-color: #FF8A80
 }

 .redA200 {
   background-color: #FF5252
 }

 .redA400 {
   background-color: #FF1744
 }

 .redA700 {
   background-color: #D50000
 }

 .pink50 {
   background-color: #FCE4EC
 }

 .pink100 {
   background-color: #F8BBD0
 }

 .pink200 {
   background-color: #F48FB1
 }

 .pink300 {
   background-color: #F06292
 }

 .pink400 {
   background-color: #EC407A
 }

 .pink500 {
   background-color: #E91E63
 }

 .pink600 {
   background-color: #D81B60
 }

 .pink700 {
   background-color: #C2185B
 }

 .pink800 {
   background-color: #AD1457
 }

 .pink900 {
   background-color: #880E4F
 }

 .pinkA100 {
   background-color: #FF80AB
 }

 .pinkA200 {
   background-color: #FF4081
 }

 .pinkA400 {
   background-color: #F50057
 }

 .pinkA700 {
   background-color: #C51162
 }

 .purple50 {
   background-color: #F3E5F5
 }

 .purple100 {
   background-color: #E1BEE7
 }

 .purple200 {
   background-color: #CE93D8
 }

 .purple300 {
   background-color: #BA68C8
 }

 .purple400 {
   background-color: #AB47BC
 }

 .purple500 {
   background-color: #9C27B0
 }

 .purple600 {
   background-color: #8E24AA
 }

 .purple700 {
   background-color: #7B1FA2
 }

 .purple800 {
   background-color: #6A1B9A
 }

 .purple900 {
   background-color: #4A148C
 }

 .purpleA100 {
   background-color: #EA80FC
 }

 .purpleA200 {
   background-color: #E040FB
 }

 .purpleA400 {
   background-color: #D500F9
 }

 .purpleA700 {
   background-color: #AA00FF
 }

 .deepPurple50 {
   background-color: #EDE7F6
 }

 .deepPurple100 {
   background-color: #D1C4E9
 }

 .deepPurple200 {
   background-color: #B39DDB
 }

 .deepPurple300 {
   background-color: #9575CD
 }

 .deepPurple400 {
   background-color: #7E57C2
 }

 .deepPurple500 {
   background-color: #673AB7
 }

 .deepPurple600 {
   background-color: #5E35B1
 }

 .deepPurple700 {
   background-color: #512DA8
 }

 .deepPurple800 {
   background-color: #4527A0
 }

 .deepPurple900 {
   background-color: #311B92
 }

 .deepPurpleA100 {
   background-color: #B388FF
 }

 .deepPurpleA200 {
   background-color: #7C4DFF
 }

 .deepPurpleA400 {
   background-color: #651FFF
 }

 .deepPurpleA700 {
   background-color: #6200EA
 }

 .indigo50 {
   background-color: #E8EAF6
 }

 .indigo100 {
   background-color: #C5CAE9
 }

 .indigo200 {
   background-color: #9FA8DA
 }

 .indigo300 {
   background-color: #7986CB
 }

 .indigo400 {
   background-color: #5C6BC0
 }

 .indigo500 {
   background-color: #3F51B5
 }

 .indigo600 {
   background-color: #3949AB
 }

 .indigo700 {
   background-color: #303F9F
 }

 .indigo800 {
   background-color: #283593
 }

 .indigo900 {
   background-color: #1A237E
 }

 .indigoA100 {
   background-color: #8C9EFF
 }

 .indigoA200 {
   background-color: #536DFE
 }

 .indigoA400 {
   background-color: #3D5AFE
 }

 .indigoA700 {
   background-color: #304FFE
 }

 .blue50 {
   background-color: #E3F2FD
 }

 .blue100 {
   background-color: #BBDEFB
 }

 .blue200 {
   background-color: #90CAF9
 }

 .blue300 {
   background-color: #64B5F6
 }

 .blue400 {
   background-color: #42A5F5
 }

 .blue500 {
   background-color: #2196F3
 }

 .blue600 {
   background-color: #1E88E5
 }

 .blue700 {
   background-color: #1976D2
 }

 .blue800 {
   background-color: #1565C0
 }

 .blue900 {
   background-color: #0D47A1
 }

 .blueA100 {
   background-color: #82B1FF
 }

 .blueA200 {
   background-color: #448AFF
 }

 .blueA400 {
   background-color: #2979FF
 }

 .blueA700 {
   background-color: #2962FF
 }

 .lightBlue50 {
   background-color: #E1F5FE
 }

 .lightBlue100 {
   background-color: #B3E5FC
 }

 .lightBlue200 {
   background-color: #81D4FA
 }

 .lightBlue300 {
   background-color: #4FC3F7
 }

 .lightBlue400 {
   background-color: #29B6F6
 }

 .lightBlue500 {
   background-color: #03A9F4
 }

 .lightBlue600 {
   background-color: #039BE5
 }

 .lightBlue700 {
   background-color: #0288D1
 }

 .lightBlue800 {
   background-color: #0277BD
 }

 .lightBlue900 {
   background-color: #01579B
 }

 .lightBlueA100 {
   background-color: #80D8FF
 }

 .lightBlueA200 {
   background-color: #40C4FF
 }

 .lightBlueA400 {
   background-color: #00B0FF
 }

 .lightBlueA700 {
   background-color: #0091EA
 }

 .cyan50 {
   background-color: #E0F7FA
 }

 .cyan100 {
   background-color: #B2EBF2
 }

 .cyan200 {
   background-color: #80DEEA
 }

 .cyan300 {
   background-color: #4DD0E1
 }

 .cyan400 {
   background-color: #26C6DA
 }

 .cyan500 {
   background-color: #00BCD4
 }

 .cyan600 {
   background-color: #00ACC1
 }

 .cyan700 {
   background-color: #0097A7
 }

 .cyan800 {
   background-color: #00838F
 }

 .cyan900 {
   background-color: #006064
 }

 .cyanA100 {
   background-color: #84FFFF
 }

 .cyanA200 {
   background-color: #18FFFF
 }

 .cyanA400 {
   background-color: #00E5FF
 }

 .cyanA700 {
   background-color: #00B8D4
 }

 .teal50 {
   background-color: #E0F2F1
 }

 .teal100 {
   background-color: #B2DFDB
 }

 .teal200 {
   background-color: #80CBC4
 }

 .teal300 {
   background-color: #4DB6AC
 }

 .teal400 {
   background-color: #26A69A
 }

 .teal500 {
   background-color: #009688
 }

 .teal600 {
   background-color: #00897B
 }

 .teal700 {
   background-color: #00796B
 }

 .teal800 {
   background-color: #00695C
 }

 .teal900 {
   background-color: #004D40
 }

 .tealA100 {
   background-color: #A7FFEB
 }

 .tealA200 {
   background-color: #64FFDA
 }

 .tealA400 {
   background-color: #1DE9B6
 }

 .tealA700 {
   background-color: #00BFA5
 }

 .green50 {
   background-color: #E8F5E9
 }

 .green100 {
   background-color: #C8E6C9
 }

 .green200 {
   background-color: #A5D6A7
 }

 .green300 {
   background-color: #81C784
 }

 .green400 {
   background-color: #66BB6A
 }

 .green500 {
   background-color: #4CAF50
 }

 .green600 {
   background-color: #43A047
 }

 .green700 {
   background-color: #388E3C
 }

 .green800 {
   background-color: #2E7D32
 }

 .green900 {
   background-color: #1B5E20
 }

 .greenA100 {
   background-color: #B9F6CA
 }

 .greenA200 {
   background-color: #69F0AE
 }

 .greenA400 {
   background-color: #00E676
 }

 .greenA700 {
   background-color: #00C853
 }

 .lightGreen50 {
   background-color: #F1F8E9
 }

 .lightGreen100 {
   background-color: #DCEDC8
 }

 .lightGreen200 {
   background-color: #C5E1A5
 }

 .lightGreen300 {
   background-color: #AED581
 }

 .lightGreen400 {
   background-color: #9CCC65
 }

 .lightGreen500 {
   background-color: #8BC34A
 }

 .lightGreen600 {
   background-color: #7CB342
 }

 .lightGreen700 {
   background-color: #689F38
 }

 .lightGreen800 {
   background-color: #558B2F
 }

 .lightGreen900 {
   background-color: #33691E
 }

 .lightGreenA100 {
   background-color: #CCFF90
 }

 .lightGreenA200 {
   background-color: #B2FF59
 }

 .lightGreenA400 {
   background-color: #76FF03
 }

 .lightGreenA700 {
   background-color: #64DD17
 }

 .lime50 {
   background-color: #F9FBE7
 }

 .lime100 {
   background-color: #F0F4C3
 }

 .lime200 {
   background-color: #E6EE9C
 }

 .lime300 {
   background-color: #DCE775
 }

 .lime400 {
   background-color: #D4E157
 }

 .lime500 {
   background-color: #CDDC39
 }

 .lime600 {
   background-color: #C0CA33
 }

 .lime700 {
   background-color: #AFB42B
 }

 .lime800 {
   background-color: #9E9D24
 }

 .lime900 {
   background-color: #827717
 }

 .limeA100 {
   background-color: #F4FF81
 }

 .limeA200 {
   background-color: #EEFF41
 }

 .limeA400 {
   background-color: #C6FF00
 }

 .limeA700 {
   background-color: #AEEA00
 }

 .yellow50 {
   background-color: #FFFDE7
 }

 .yellow100 {
   background-color: #FFF9C4
 }

 .yellow200 {
   background-color: #FFF59D
 }

 .yellow300 {
   background-color: #FFF176
 }

 .yellow400 {
   background-color: #FFEE58
 }

 .yellow500 {
   background-color: #FFEB3B
 }

 .yellow600 {
   background-color: #FDD835
 }

 .yellow700 {
   background-color: #FBC02D
 }

 .yellow800 {
   background-color: #F9A825
 }

 .yellow900 {
   background-color: #F57F17
 }

 .yellowA100 {
   background-color: #FFFF8D
 }

 .yellowA200 {
   background-color: #FFFF00
 }

 .yellowA400 {
   background-color: #FFEA00
 }

 .yellowA700 {
   background-color: #FFD600
 }

 .amber50 {
   background-color: #FFF8E1
 }

 .amber100 {
   background-color: #FFECB3
 }

 .amber200 {
   background-color: #FFE082
 }

 .amber300 {
   background-color: #FFD54F
 }

 .amber400 {
   background-color: #FFCA28
 }

 .amber500 {
   background-color: #FFC107
 }

 .amber600 {
   background-color: #FFB300
 }

 .amber700 {
   background-color: #FFA000
 }

 .amber800 {
   background-color: #FF8F00
 }

 .amber900 {
   background-color: #FF6F00
 }

 .amberA100 {
   background-color: #FFE57F
 }

 .amberA200 {
   background-color: #FFD740
 }

 .amberA400 {
   background-color: #FFC400
 }

 .amberA700 {
   background-color: #FFAB00
 }

 .orange50 {
   background-color: #FFF3E0
 }

 .orange100 {
   background-color: #FFE0B2
 }

 .orange200 {
   background-color: #FFCC80
 }

 .orange300 {
   background-color: #FFB74D
 }

 .orange400 {
   background-color: #FFA726
 }

 .orange500 {
   background-color: #FF9800
 }

 .orange600 {
   background-color: #FB8C00
 }

 .orange700 {
   background-color: #F57C00
 }

 .orange800 {
   background-color: #EF6C00
 }

 .orange900 {
   background-color: #E65100
 }

 .orangeA100 {
   background-color: #FFD180
 }

 .orangeA200 {
   background-color: #FFAB40
 }

 .orangeA400 {
   background-color: #FF9100
 }

 .orangeA700 {
   background-color: #FF6D00
 }

 .deepOrange50 {
   background-color: #FBE9E7
 }

 .deepOrange100 {
   background-color: #FFCCBC
 }

 .deepOrange200 {
   background-color: #FFAB91
 }

 .deepOrange300 {
   background-color: #FF8A65
 }

 .deepOrange400 {
   background-color: #FF7043
 }

 .deepOrange500 {
   background-color: #FF5722
 }

 .deepOrange600 {
   background-color: #F4511E
 }

 .deepOrange700 {
   background-color: #E64A19
 }

 .deepOrange800 {
   background-color: #D84315
 }

 .deepOrange900 {
   background-color: #BF360C
 }

 .deepOrangeA100 {
   background-color: #FF9E80
 }

 .deepOrangeA200 {
   background-color: #FF6E40
 }

 .deepOrangeA400 {
   background-color: #FF3D00
 }

 .deepOrangeA700 {
   background-color: #DD2C00
 }

 .brown50 {
   background-color: #EFEBE9
 }

 .brown100 {
   background-color: #D7CCC8
 }

 .brown200 {
   background-color: #BCAAA4
 }

 .brown300 {
   background-color: #A1887F
 }

 .brown400 {
   background-color: #8D6E63
 }

 .brown500 {
   background-color: #795548
 }

 .brown600 {
   background-color: #6D4C41
 }

 .brown700 {
   background-color: #5D4037
 }

 .brown800 {
   background-color: #4E342E
 }

 .brown900 {
   background-color: #3E2723
 }

 .gray50 {
   background-color: #FAFAFA
 }

 .gray100 {
   background-color: #F5F5F5
 }

 .gray200 {
   background-color: #EEEEEE
 }

 .gray300 {
   background-color: #E0E0E0
 }

 .gray400 {
   background-color: #BDBDBD
 }

 .gray500 {
   background-color: #9E9E9E
 }

 .gray600 {
   background-color: #757575
 }

 .gray700 {
   background-color: #616161
 }

 .gray800 {
   background-color: #424242
 }

 .gray900 {
   background-color: #212121
 }

 .blueGray50 {
   background-color: #ECEFF1
 }

 .blueGray100 {
   background-color: #CFD8DC
 }

 .blueGray200 {
   background-color: #B0BEC5
 }

 .blueGray300 {
   background-color: #90A4AE
 }

 .blueGray400 {
   background-color: #78909C
 }

 .blueGray500 {
   background-color: #607D8B
 }

 .blueGray600 {
   background-color: #546E7A
 }

 .blueGray700 {
   background-color: #455A64
 }

 .blueGray800 {
   background-color: #37474F
 }

 .blueGray900 {
   background-color: #263238
 }
</style>
