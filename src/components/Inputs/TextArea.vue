<template>
<textarea
  @change="onChange"
  :value="modelValue"
  v-bind:class="[areaText]"
    v-bind:style="active2"
/>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      activeClass: 'c-area',
      active: {
        background: 'green',
        color: 'white',
      },
      areaText: {
        border: '1px solid black',
        background: 'green',
        color: 'white',
        padding: '10px',
        width: '500px',
        height: '300px',
      },
    };
  },
  created() {

  },
  methods: {
    onChange() {
      this.$emit('update:modelValue', this.modelValue);
    },
  },
};
</script>

<style scoped>
/* .c-area {
  border: 1px solid black;
  background: green;
  color: white;
  padding: 10px;
  width: 500px;
  height: 300px;
} */
</style>
