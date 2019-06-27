<template>
  <div
    v-if="value"
    class="flex drawer-animation bg-modal "
    :class="{ 'drawer': value, 'flex-justify-start': side === 'left', 'flex-justify-end': side === 'right' }"
    :style="{ width: activeWidth }"
  >
    <div class="flex flex-column drawer_container" v-on-clickaway="away">
      <div class="flex flex-justify-end h-pa-sm bg-primary">
        <h-fa-icon icon="fas fa-times" textcolor="text-white" @click="close"/>
      </div>
      <header>
        <slot name="header"></slot>
      </header>
      <main class="flex-1">
        <slot></slot>
      </main>
      <footer>
        <slot name="footer"></slot>
      </footer>
    </div>

  </div>
</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'Drawer',
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
