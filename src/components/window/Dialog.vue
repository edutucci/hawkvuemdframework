<template lang="pug">
.row.justify-center.align-items-center.drawer_mobile.bg-modal(v-click-away="away" v-if="modelValue")
  .col-auto
    slot
</template>

<script>

export default {
  name: 'HDialog',
  mixins: [],
  components: {
  },
  props: {
    modelValue: {
      type: Boolean,
    },
    modal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
    };
  },
  methods: {
    close() {
      this.$emit('update:modelValue', false);
    },
    away() {
      if (!this.modal) {
        this.close();
      }
    },
  },
};
</script>

<style scoped>

h3 {
  margin: 0;
}

</style>
