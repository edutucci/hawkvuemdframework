<template lang="pug">
  div.flex.flex-column.full-width(style="background-color: blue")
    .flex.flex-row.flex-items-center.collapsible-menu(
       @click="setVisible()"
    )
      .flex-1
        .flex.flex-row.flex-items-center
          div(v-if="" style="padding-left:8px;padding-right:16px;")
            h-fa-icon(:icon="icon")

          .flex.flex-1.flex-justify-start
            | {{text}}

      .arrow(style="padding-left:8px;padding-right:8px;")
        h-fa-icon(
          :class="{ 'arrow2': !isVisible, 'arrow': isVisible }"
          :icon="['fas', 'angle-down']"
        )
    .collapsible-content(v-if="isVisible")
      slot

</template>

<script>

import HFaIcon from '../icons/HFaIcon'

export default {
  props: {
    text: {
      type: String
    },
    icon: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    HFaIcon
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    setVisible () {
      this.isVisible = !this.isVisible
    }
    // collapseName () {
    //   return this.name
    // }
  }
}
</script>

<style scoped>
.collapsible-menu {
  background-color:midnightblue;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
  color: white;
}

.collapsible-content {
  padding: 8px;
  background-color: dodgerblue;
  color: white;
}

.arrow {
   transform: rotate(0deg);
  -webkit-animation-name: example;
  -webkit-animation-duration: 0.3s;
  animation-name: example;
  animation-duration: 0.3s;
}

.arrow2 {
    transform: rotate(180deg);
    -webkit-animation-name: example2;
    -webkit-animation-duration: 0.3s;
    animation-name: example2;
    animation-duration: 0.3s;
}

/* Standard syntax */
@keyframes example {
  0% { transform: rotate(0deg); }/* Standard syntax */
  50% { transform: rotate(90deg); }/* Standard syntax */
  100% { transform: rotate(180deg); } /* Standard syntax */
}

/* Standard syntax */
 @keyframes example2 {
  0% { transform: rotate(180deg); }
  50% { transform: rotate(90deg); }
  100% { transform: rotate(0deg); }
}

</style>
