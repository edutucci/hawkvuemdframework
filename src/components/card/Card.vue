<template lang="pug">
.shadow-2.no-user-select.border-radius.bg-white.h-pt-xs.h-pb-xs(style="display: inline-block;")
  .column.full-height
    slot
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
/* .media {
  position: relative;
  min-height: 80px;
}

img {
  padding: 0px;
  margin: 0px;
}

.media-title {
  position: absolute;
  top:-1px;
  left:-1px;
  z-index: 1;
  margin: 5px;
  height:98%;
  width:98%;
}

.media-title H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}

.header {
  padding: 16px;
  background-color: cornflowerblue;
}

.header H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}

.body {
  padding: 16px;
}

.body H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}

.actions {
  padding: 8px;
} */

</style>
