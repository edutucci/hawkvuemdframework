<template lang="pug">
    .flex.flex-justify-center.flex-items-center.drawer(v-if="value" )
      .boxshadow.no-user-select.bg-white
        .bg-primary.text-white.flex.h-pa-sm
          .flex-1
            h3  {{title}}
          div.h-ml-sm.h-mr-sm
            h-fa-icon(icon="fas fa-times" textcolor="text-white" @click="close")
        div.h-pa-sm
          slot
</template>

<script>

export default {
  name: 'HNavDrawer',
  components: {
  },
  props: {
    value: {
      type: Boolean
    },
    title: {
      type: String,
      default: () => ('')
    }
  },
  data () {
    return {
    }
  },
  methods: {
    open () {
      // console.log('open nav')
    },
    close () {
      this.$emit('input', false)
      // console.log('close nav')
    }
  }
}
</script>

<style scoped>
.drawer {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 13;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.32);
}

h3 {
  margin: 0;
}

</style>
