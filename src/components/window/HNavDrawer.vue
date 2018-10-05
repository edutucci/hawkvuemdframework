<template>
    <div
      class="flex drawer drawer-animation bg-modal"
      :style="{ width: activeWidth }"
    >
      <div class="flex flex-column drawer_container">
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
  components: {
  },
  data () {
    return {
      activeWidth: '0px'
    }
  },
  methods: {
    open () {
      // console.log('open nav')
      this.activeWidth = '100%'
    },
    close () {
      // console.log('close nav')
      this.activeWidth = '0px'
    }
  }
}
</script>

<style scoped>

</style>
