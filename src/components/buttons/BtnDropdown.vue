<template lang="pug">
  div(
    class="btn-dropdown no-user-select"
    :class="[bgColor]"
    v-on-clickaway="close"
    :id="containerid"
  )
    .btn-dropdown-container.flex.flex-items-center.cursor-pointer.full-height(
      :class="[size]"
      @click="checkViewport"
    )
      h-fa-icon(
        v-if="icon && icon.length"
        :icon="icon"
        :text-color="textColor"
      )
      h-avatar(
        v-else-if="avatar && avatar.length > 0"
        :src="avatar"
      )
      img(v-else-if="img && img.length > 0"
        :src="img" style="width:32px; height:32px;"
      )

      .btn-dropdown-content.flex.flex-items-center.text-body1(
        :class="[textColor]"
        @click="checkViewport"
      )
        .text-body1.h-mr-xs(
          v-if="text"
        )
          | {{text}}
        h-fa-icon(
          :icon="dropDownIcon"
          :text-color="textColor"
          size="18px"
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
    value: {
      type: Boolean,
      default: false
    },
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
    },
    size: {
      type: String,
      default: 'md'
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
    close () {
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
          if (rectMenu['0'].width > rectContainer['0'].right) {
            this.right = ''
            this.left = '0'
          }
        }
      })
    }
  }
}
</script>
