<template>
    <div class="flex flex-column sidenav"  :style="{ width: activeWidth }">
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
</template>

<script>
export default {
  data () {
    return {
      activeWidth: '0px'
    }
  },
  methods: {
    open () {
      console.log('open nav')
      this.activeWidth = '350px'
    },
    close () {
      console.log('close nav')
      this.activeWidth = '0px'
    }
  }
}
</script>

<style scoped>
.sidenav {
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    background-color: white;
    overflow-x: hidden;
    overflow-y: scroll;
    transition: 0.3s;
}
</style>
