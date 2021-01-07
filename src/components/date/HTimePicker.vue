<template lang="pug">
div(style="width:350px; position:relative;")
  time-panel(
    :date="value"
    @ok="setTime"
    :pickerMode="true"
  )

</template>

<script>

import TimePanel from './TimePanel.vue';

export default {
  props: {
    value: {
      type: Date,
      defaut: new Date(),
    },
  },
  components: {
    TimePanel,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    setTime(date) {
      // console.log('date: ' + date)
      this.$emit('input', date);
    },
  },
};
</script>

<style scoped>

</style>
