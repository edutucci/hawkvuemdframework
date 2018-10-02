<template>
    <div
      class="flex drawer"
      :style="{ width: activeWidth }"
    >
      <div class="flex flex-column drawer_container">
        <div class="flex flex-justify-end h-pa-sm bg-primary">
          <h-fa-icon :icon="['fas', 'times']" textcolor="text-white" @click="close"/>
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

export default {
  name: 'HNavDrawer',
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
.drawer {
    height: 100%;
    position: fixed;
    z-index: 1600;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.32);
    transition: 0.3s;
}

.drawer_container {
  position: relative;
  z-index: 1610;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
