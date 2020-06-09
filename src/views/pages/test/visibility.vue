<template>
  <h-main-body v-resize.initial="onResize">

    <div class="text-h4">Window Width</div>
    <h-separator></h-separator>

    <div class="xs bg-primary">
      my content page xs (equal 640px)
    </div>

    <div class="sm bg-negative">
      my content page sm (equal 960px)
    </div>

    <div class="md bg-positive">
      my content page md (equal 1440px)
    </div>

    <div class="lg bg-info">
      my content page lg (equal 1920px)
    </div>

    <div class="text-h4">Higher</div>
    <h-separator></h-separator>

    <div class="gt-xs bg-negative">
      my content page gt-xs (higher than 640)
    </div>

    <div class="gt-sm bg-positive">
      my content page gt-sm (higher than 960px)
    </div>

    <div class="gt-md bg-secondary">
      my content page gt-md (higher than 1440px)
    </div>
    
    <div class="gt-lg bg-info">
      my content page gt-lg (higher than 1920px)
    </div>

    <div class="text-h4">Less</div>
    <h-separator></h-separator>

    <div class="lt-sm bg-negative">
      my content page lt-sm (max 640px)
    </div>

    <div class="lt-md bg-positive">
      my content page lt-md (max 960px)
    </div>

    <div class="lt-lg bg-secondary">
      my content page lt-lg (max 1440px)
    </div>
    
    <div class="lt-xl bg-info">
      my content page lt-xl (max 1920px)
    </div>

    <div class="text-h4">Col Size</div>
    <h-separator></h-separator>

    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 bg-negative">
      my content page col-xs-12 (max 640px)
    </div>

    <div class="row">
      <div class="col">
        <h-btn text="tam tela" @click="tamtela"/>
        <p>tamanho da tela: {{tt}}</p>
        <p>showDrawer: {{showDrawer}}</p>
        <h-btn text="show drawer" @click="showDrawer = !showDrawer"/>
      </div>
    </div>

  </h-main-body>
</template>

<script>

import resize from 'vue-resize-directive'

export default {
  directives: {
    resize
  },
  data () {
    return {
      showtb: false,
      showDrawer: false,
      tt: 0
    }
  },
  created () {
  },
  methods: {
    tamtela () {
      let elem = document.getElementById('mainbody')
      this.tt = elem.clientWidth
    },
    onResize () {
      let elem = document.getElementById('app')
      this.tt = elem.clientWidth
    }
  }
}
</script>

<style scoped>
</style>
