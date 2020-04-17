<template lang="pug">
  .row.full-height.scroll(id="mainbody" style="right: 0px; max-height: 100%;" v-resize.initial="onResize")
    .col-auto
      h-nav-drawer(
        v-model="localShowDrawer"
        ref="nav"
      )
        slot(name="left")
    .col
      .column.full-height
        .col-auto
          slot(name="header")
        .col.scroll
          slot
        .col-auto
          slot(name="footer")
    .col-auto
      slot(name="right")

</template>

<script>

import resize from 'vue-resize-directive'

export default {
  name: 'MainBody',
  directives: {
    resize
  },
  props: {
    showDrawer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      localDisplayMode: '',
      localShowDrawer: false
    }
  },
  mounted () {
  },
  watch: {
    showDrawer: function (show) {
      this.localShowDrawer = show
    },
    localShowDrawer: function (show) {
      if (!show) {
        this.$emit('close-drawer', show)
      }
    }
  },
  methods: {
    width () {
      let value = 0
      let elemmainbody = document.getElementById('mainbody')
      if (elemmainbody) {
        value = elemmainbody.clientWidth
      }
      return value
    },
    onResize () {
      this.$refs.nav.onResize(this.width())
    }
  }
}
</script>
