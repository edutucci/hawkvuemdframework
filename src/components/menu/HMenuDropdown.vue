<template lang="pug">
  div( class="dropdown" v-on-clickaway="hiddeMenu")
    h-fa-icon(
      @click="checkViewport"
      :icon="icon"
      :textcolor="textcolor"
      id="menu"
    )

    .dropdown-content.shadow.bg-white(
      v-if="showdropdown"
      :style="{right: right, bottom: bottom}"
      id="dropmenu"
    )
      slot

</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'
import componentBase from '../componentBase.vue'
import uuidv1 from 'uuid/v1'

export default {
  extends: componentBase,
  mixins: [ clickaway ],
  directives: {
  },
  props: {
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      id: uuidv1(),
      containerid: uuidv1(),
      showdropdown: false,
      left: '',
      right: '',
      top: '',
      bottom: '', // sum bottom + height of menu + icon height
      dtu: false,
      rtl: false
    }
  },
  mounted () {
  },
  methods: {
    hiddeMenu () {
      this.showdropdown = false
    },
    checkViewport () {
      this.showdropdown = true

      this.$nextTick(() => {
        let menu = document.getElementById('menu')
        // let container = document.getElementById(this.containerid)
        if (menu) {
          let rectMenu = menu.getClientRects()
          console.log('rectMenu:', JSON.stringify(rectMenu))
          // this.right = '' + ((window.innerWidth - rectMenu['0'].right) - (rectMenu['0'].width * 1.5)) + 'px'
          // this.top = '' + rectMenu['0'].top + 'px'
          console.log(' this.right:', this.right)
          // console.log(' this.top:', this.top)
          console.log('window.innerWidth:', window.innerWidth)

          let dropmenu = document.getElementById('dropmenu')
          rectMenu = dropmenu.getClientRects()
          console.log('dropmenu:', JSON.stringify(rectMenu))
        }
      })
    }
  }
}
</script>

<style scoped>

  /* .menu {
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    color: #212529;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    position:absolute;
    left:0;
  }

  .menu-item {
    color: #212529;
    padding: .25rem 1.5rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .menu-item:hover {
    background-color: #F4F6F6;
    cursor: pointer;
  } */
</style>
