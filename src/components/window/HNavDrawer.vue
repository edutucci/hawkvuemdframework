<template>
    <div class="flex drawer"  :style="{ width: activeWidth }">
      <div class="flex flex-column drawer_container">
        <div class="topbar flex flex-justify-end h-pa-sm">
          <h-fa-icon :icon="['fas', 'times']" @click="close"/>
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

import HFaIcon from '../icons/HFaIcon'

export default {
  name: 'HNavDrawer',
  components: {
    HFaIcon
  },
  data () {
    return {
      activeWidth: '0px'
    }
  },
  methods: {
    open () {
      console.log('open nav')
      this.activeWidth = '100%'
    },
    close () {
      console.log('close nav')
      this.activeWidth = '0px'
    }
  }
}
</script>

<style scoped>
.drawer {
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: rgba(222, 222, 222, 0.6);
    transition: 0.3s;
}

.topbar {
  background-color: rgb(222, 222, 222);
}

.drawer_container {
  position: relative;
  z-index: 3;
  overflow-x: hidden;
  overflow-y: auto;  
}
</style>
