<template>
  <div class="row full-height position-relative">
    <div class="col-auto full-height scroll">
      <slot name="left"></slot>
    </div>
    <div class="col page-content full-height scroll"
      :class="[{'page-padding': padding}]"
    >
      <div id="page-content-slot" class="full-height scroll">
        <slot></slot>
      </div>
    </div>
    <div class="col-auto full-height scroll">
      <slot name="right"></slot>
    </div>
  </div>

</template>

<script>

export default {
  name: 'HPageContent',
  props: {
    padding: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
