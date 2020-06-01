<template>
  <div v-if="value" class="full-height no-user-select">
    <div
      ref="divwindow"
      v-if="(value && (showWindow === 'any' || showWindow === 'mobile')) || (value && displayMode === 'window')"
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
      v-else-if="(value && (showWindow === 'any' || showWindow === 'page'))"
      class="drawer-animation column full-height scroll  border-left border-right border-gray"
      style="display: inline-box;"
    >
      <div class="column bg-white full-height scroll">
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  name: 'Drawer',
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
  watch: {
    displayMode: function(value) {
      this.showWindow = value
    }
  },
  data () {
    return {
      showWindow: 'mobile'
    }
  },
  mounted () {
    this.showWindow = this.displayMode
  },
  methods: {
    close () {
      this.$emit('input', false)
    },
    away () {
      if (this.value && this.displayMode !== 'page') {
        this.close()
      }
    },
    onResize (size) {
      if (this.displayMode === 'any') {
        if (size < 961) {
          this.showWindow = 'mobile'
        } else {
          this.showWindow = 'page'
        }
      }
    }    
  }
}
</script>
