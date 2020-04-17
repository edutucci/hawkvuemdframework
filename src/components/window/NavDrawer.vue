<template>
  <div v-if="value" class="full-height no-user-select">
    <div
      ref="divwindow"
      v-if="(value && displayMode === 'any' && showWindow === 'mobile') || (value && displayMode === 'window')"
      class="row bg-modal drawer_mobile "
      :class="{ 'justify-start': side === 'left', 
        'justify-end': side === 'right'
      }"
    >
      <div
        class="col-auto bg-white full-height scroll border-left border-right border-gray"
        v-on-clickaway="away"
      >
        <slot></slot>
      </div>
    </div>
    <div
      ref="divpage"
      v-else-if="(value && displayMode === 'any' && showWindow === 'page')"
      class="drawer-animation column full-height scroll  border-left border-right border-gray"
      style="display: inline-box;"
    >
      <div class="column drawer_container bg-white full-height scroll">
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'

import componentBase from '../componentBase.vue'
import resize from 'vue-resize-directive'

export default {
  extends: componentBase,
  name: 'Drawer',
  directives: {
    resize
  },
  mixins: [ clickaway ],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    displayMode: {
      type: String,
      default: 'any' // page or window
    },
    side: {
      type: String,
      default: 'left'
    }
  },
  components: {
  },
  data () {
    return {
      showWindow: 'mobile'
    }
  },
  methods: {
    closeMobile () {
      this.$emit('input', false)
    },
    away () {
      if (this.value && this.displayMode !== 'page') {
        this.closeMobile()
      }
    },
    onResize (size) {
      // console.log('dd vale: ', size, ' - ', this.displayMode)
      if (size < 961) {
        this.showWindow = 'mobile'
      } else {
        this.showWindow = 'page'
      }
    }    
  }
}
</script>
