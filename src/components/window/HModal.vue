<template lang="pug">
    .flex.flex-justify-center.flex-items-center.drawer.bg-modal(v-if="value")
      .boxshadow.no-user-select.bg-white
        .bg-primary.text-white.flex.h-pa-sm(v-if="showTitleBar")
          .flex-1
            h3  {{title}}
          div.h-ml-sm.h-mr-sm
            h-fa-icon(icon="fas fa-times" textcolor="text-white" @click="close")
        div(v-on-clickaway="away")
          slot
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'Modal',
  mixins: [ clickaway ],
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
    },
    close () {
      this.$emit('input', false)
    },
    away () {
      this.close()
    }
  }
}
</script>

<style scoped>

h3 {
  margin: 0;
}

</style>
