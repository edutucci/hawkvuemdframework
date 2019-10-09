<template lang="pug">
  .col-space.text-bold.position-relative
    .row.full-height.align-items-center.align-content-center.h-app-toolbar-title(
      :class="[ fabAlign, { 'btnfabend': align === 'end' } ]"
    )
      .col-auto(v-if="!inset")
        h-btn.btnfab(fab bg-color="bg-black" size="lg")
          h-fa-icon(:icon="fabIcon" text-color="text-white" size="24px")
      .col-auto(v-else)
        div.btnfabinset.bg-white.h-pa-sm(style="border-radius: 50%")
          h-btn(fab bg-color="bg-black" size="lg")
            h-fa-icon(:icon="fabIcon" text-color="text-white" size="24px")

</template>

<script>
export default {
  name: 'HAppToolbarFab',
  props: {
    fabIcon: {
      type: String,
      default: () => 'fas fa-plus'
    },
    align: {
      type: String,
      default: () => 'center'
    },
    inset: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    fabAlign () {
      let align = ''
      switch (this.align) {
        case 'center':
          align = 'justify-center'
          break
        case 'end':
          align = 'justify-end'
          break
        default:
          align = 'justify-center'
      }
      return align
    }
  }
}
</script>

<style scoped>
.btnfab {
  position: absolute;
  top: 0px;
  transform: translate(0px, -34px);
  -ms-transform: translate(0px, -34px);
  -webkit-transform: translate(0px, -34px);
}

.btnfabinset {
  position: absolute;
  top: 0px;
  transform: translate(0px, -42px);
  -ms-transform: translate(0px, -42px);
  -webkit-transform: translate(0px, -42px);
}

.btnfabend {
  transform: translate(-62px, 0);
  -ms-transform: translate(-62px, 0);
  -webkit-transform: translate(-62px, 0);
}
</style>
