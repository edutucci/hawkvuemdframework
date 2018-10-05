<template>
  <div>
    <loading-vue
      :cfg="cfg"
      :show="open"
    />
  </div>
</template>

<script>

import LoadingVue from './LoadingVue'

export default {
  name: 'LoadingContainer',
  components: {
    LoadingVue
  },
  data () {
    return {
      cfg: {
        message: '',
        icon: 'fas fa-sync'
      },
      open: false
    }
  },
  methods: {
    limparCfg () {
      this.cfg.message = ''
      this.cfg.icon = 'fas fa-sync'
    },
    show (cfg) {
      this.limparCfg()
      console.log('veio cfg:' + JSON.stringify(cfg))
      if (cfg) {
        if (cfg.message) {
          this.cfg.message = cfg.message
        }

        if (cfg.icon) {
          console.log('veio icon: ' + cfg.icon)
          this.cfg.icon = cfg.icon
        }
      }
      this.open = true
    },
    hide () {
      this.limparCfg()
      this.open = false
    }
  }
}
</script>
