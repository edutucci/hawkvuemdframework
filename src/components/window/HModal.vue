<template lang="pug">
    .flex.flex-justify-center.flex-items-center.drawer.bg-modal(v-if="value" )
      .boxshadow.no-user-select.bg-white
        .bg-primary.text-white.flex.h-pa-sm(v-if="showTitleBar")
          .flex-1
            h3  {{title}}
          div.h-ml-sm.h-mr-sm
            h-fa-icon(icon="fas fa-times" textcolor="text-white" @click="close")
        div
          slot
</template>

<script>

export default {
  name: 'Modal',
  components: {
  },
  props: {
    value: {
      type: Boolean
    },
    title: {
      type: String,
      default: () => ('')
    },
    showTitleBar: {
      type: Boolean,
      default: false
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

h3 {
  margin: 0;
}

</style>
