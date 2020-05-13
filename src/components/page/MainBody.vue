<template lang="pug">
  .row.full-height.scroll(id="mainbody" style="right: 0px; max-height: 100%;" v-resize.initial="onResize")
    .col-auto.full-height.scroll
      h-nav-drawer(
        v-model="localShowDrawerLeft"
        ref="navLeft"
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
    .col-auto.full-height.scroll
      h-nav-drawer(
        v-model="localShowDrawerRight"
        side="right"
        ref="navRight"
      )
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
    showDrawerLeft: {
      type: Boolean,
      default: false
    },
    showDrawerRight: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      localDisplayMode: '',
      localShowDrawerLeft: false,
      localShowDrawerRight: false
    }
  },
  mounted () {
  },
  watch: {
    showDrawerLeft: function (show) {
      this.localShowDrawerLeft = show
      this.onResize()
    },
    localShowDrawerLeft: function (show) {
      if (!show) {
        this.$emit('close-drawer-left', show)
      }
    },
    showDrawerRight: function (show) {
      this.localShowDrawerRight = show
      this.onResize()
    },
    localShowDrawerRight: function (show) {
      if (!show) {
        this.$emit('close-drawer-right', show)
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
      if (this.showDrawerLeft) {
        this.$refs.navLeft.onResize(this.width())
      }
      if (this.showDrawerRight) {
        this.$refs.navRight.onResize(this.width())
      }
    }
  }
}
</script>
