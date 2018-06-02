<template lang="pug">
  .flex.flex-column.dropdown(
    v-on-clickaway="checkDropdownState"
  )
    div
      h-fa-icon(
        :textwhite="textwhite"
        @click="showdropdown = !showdropdown"        
        :icon="icon"
      )

    div.dropdown-menu.boxshadow(
      v-show="showdropdown"
      @click="showdropdown = !showdropdown"
      :style="{left: left, right: right}"
    )
      slot

</template>

<script>

import HBtnFloat from '../buttons/HBtnFloat.vue'
import HFaIcon from '../icons/HFaIcon.vue'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  components: {
    HBtnFloat,
    HFaIcon
  },
  props: {
    icon: {
      type: Array,
      default: () => ([])
    },
    textwhite: {
      type: Boolean,
      default: false
    },
    rtl: {
      type: Boolean
    }
  },
  mixins: [ clickaway ],
  data () {
    return {
      showdropdown: false,
      left: '0px',
      right: ''
    }
  },
  created () {
    if (this.rtl) {
      this.left = ''
      this.right = '0px'
    }
  },
  methods: {
    checkDropdownState () {
      if (this.showdropdown) {
        this.showdropdown = false
      }
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  background-color: white;
  min-width: 250px;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1;
  cursor: pointer;
}
</style>
