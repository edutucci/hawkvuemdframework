<template>
  <div
    v-if="value"
    class="flex drawer-animation bg-modal "
    :class="{ 'drawer': value, 'flex-justify-start': side === 'left', 'flex-justify-end': side === 'right' }"
    :style="{ width: activeWidth }"
    v-resize.initial="onResize"
  >
    <div class="flex flex-column drawer_container position-relative" v-on-clickaway="away">
      <div class="position-relative">
        <slot name="header"></slot>
      </div>
      <main class="flex-1">
        <slot></slot>
      </main>
      <div>
        <slot name="footer"></slot>
      </div>
    </div>

  </div>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'
import resize from 'vue-resize-directive'

export default {
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
    side: {
      type: String,
      default: 'right'
    }
  },
  components: {
  },
  data () {
    return {
      activeWidth: '0px'
    }
  },
  watch: {
    value: function (show) {
      if (show) {
        this.open()
      }
    }
  },
  methods: {
    open () {
      this.activeWidth = '100%'
    },
    close () {
      this.activeWidth = '0px'
      this.$emit('input', false)
    },
    away () {
      if (this.value) {
        this.close()
      }
    },
    onResize () {
      console.log('drawer resize')
    }
  }
}
</script>

<style scoped>
.side {
  top: 0;
  right: 0;
}
</style>
