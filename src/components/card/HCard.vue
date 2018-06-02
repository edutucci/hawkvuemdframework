<template lang="pug">
  .boxshadow.no-user-select.overflow-hidden(style="display:inline-block;")
    .flex.flex-column
      slot
</template>

<script>
import HBtnFloat from '../buttons/HBtnFloat.vue'
import HFaIcon from '../icons/HFaIcon'

export default {
  components: {
    HBtnFloat,
    HFaIcon
  },
  data () {
    return {
      numbers: [1, 2, 3]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.media {
  position: relative;
  /* background-color: cadetblue; */
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
  /* color:white; */
  /* background-color: aquamarine; */
  /* opacity: 0.5; */
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
}

</style>
