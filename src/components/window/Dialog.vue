<template lang="pug">
    .row.justify-center.align-items-center.drawer.bg-modal(v-if="value")
      .boxshadow.no-user-select.bg-white.border-radius
        .bg-primary.text-white.flex.h-pa-sm.border-top-radius(v-if="showTitleBar")
          .flex-1
            h3  {{title}}
          div.h-ml-sm.h-mr-sm
            h-icon(icon="fas fa-times" text-color="text-white" @click="close")
        div(v-on-clickaway="away")
          slot
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  name: 'HDialog',
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
    },
    modal: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    close () {
      this.$emit('input', false)
    },
    away () {
      if (!this.modal) {
        this.close()
      }
    }
  }
}
</script>

<style scoped>

h3 {
  margin: 0;
}

</style>
