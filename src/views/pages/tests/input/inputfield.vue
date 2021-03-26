<template lang="pug">
//- input(v-model="message" placeholder="edit me")
//- p Message is: {{ message }}

input(
  v-model="message"
  @input="onInput($event.target.value)"
)

</template>

<script>
export default {
  data() {
    return {
      message: '',
    };
  },
  methods: {
    onInput(value) {
      // console.log('value debounce input-field:', value);
      // this.inputDisplay = value
      this.$emit('update:modelValue', value);
    },
  },
};
</script>
