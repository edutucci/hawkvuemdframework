<template>
<div v-if="isVisible" class="bg-white full-height">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'HTab',
  props: {
    name: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    leftIcon: {
      type: String,
      default: '',
    },
    topIcon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    this.$parent.addTab(this);
    if (this.default) {
      this.setVisible(true);
    }
  },
  methods: {
    // tabIcon () {
    //   return this.icon
    // },
    // tabName () {
    //   return this.name
    // },
    setVisible(value) {
      this.isVisible = value;
    },
  },
};
</script>

<style scoped>

</style>
