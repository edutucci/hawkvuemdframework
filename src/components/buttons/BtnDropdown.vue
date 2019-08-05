<template lang="pug">
  div(
    class="dropdown"
    :class="[bgcolor]"
    v-on-clickaway="hideMenu"
    :id="containerid"
  )
    .flex.flex-items-center.cursor-pointer
      div(@click="checkViewport")
        h-fa-icon(
          v-if="icon && icon.length"
          :icon="icon"
          :textcolor="textcolor"
          :id="containerid"
        )
        h-avatar(
          v-else-if="avatar && avatar.length > 0"
          :src="avatar"
        )
        img(v-else-if="img && img.length > 0"
          :src="img" style="width:32px; height:32px;"
        )
      .flex.flex-items-center.text-body1(
        :class="[textcolor]"
        @click="checkViewport"
      )
        .text-body1.h-mr-sm(v-if="text") {{text}}
        h-fa-icon(
          :icon="dropDownIcon"
          :textcolor="textcolor"
        )

    .dropdown-content.shadow.bg-white(
      v-if="showdropdown"
      :style="{left: left, right: right, bottom: bottom}"
      :id="menuid"
    )
      slot

</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'
import componentBase from '../componentBase.vue'
import uuidv1 from 'uuid/v1'

export default {
  name: 'BtnDropdown',
  extends: componentBase,
  mixins: [ clickaway ],
  directives: {
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    dropDownIcon: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      menuid: uuidv1(),
      containerid: uuidv1(),
      showdropdown: false,
      left: '',
      right: '0',
      top: '',
      bottom: ''
    }
  },
  mounted () {
  },
  methods: {
    hideMenu () {
      this.showdropdown = false
    },
    checkViewport () {
      this.showdropdown = true

      this.left = ''
      this.right = '0'
      this.top = ''
      this.bottom = ''

      this.$nextTick(() => {
        let menu = document.getElementById(this.menuid)
        let container = document.getElementById(this.containerid)
        if (container && menu) {
          let rectMenu = menu.getClientRects()
          let rectContainer = container.getClientRects()
          console.log('rectContainer:', JSON.stringify(rectContainer))
          // console.log('window', JSON.stringify(window.innerWidth))
          // this.right = '' + ((window.innerWidth) - (rectContainer['0'].right)) + 'px'
          // this.top = '' + rectMenu['0'].top + 'px'
          // console.log(' this.right:', this.right)
          // console.log(' this.menuid[0].width:', rectMenu['0'].width)
          if (rectMenu['0'].width > rectContainer['0'].right) {
            this.right = ''
            this.left = '0'
          }

          let pageContent = document.getElementById('page-content')
          if (pageContent) {
            // let rectpageContent = pageContent.getClientRects()
            // console.log('clientWidth:', JSON.stringify(pageContent.clientWidth))
            // console.log('classList:', JSON.stringify(pageContent.classList))
          }
          // console.log(' this.top:', this.top)
          // console.log('window.innerWidth:', window.innerWidth)

          // let dropmenu = document.getElementById('dropmenu')
          // rectMenu = dropmenu.getClientRects()
          // console.log('dropmenu:', JSON.stringify(rectMenu))
        }
      })
    }
  }
}
</script>
