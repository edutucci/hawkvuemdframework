<template lang="pug">
  div.collapsible
    slot
 
</template>

<script>

export default {
  name: 'HCollapsible',
  data () {
    return {
      active: false,
      collapsibleItems: [],
      currentHash: '',
      currentCollapse: undefined,
      arrow2: {
        '-webkit-animation-name': 'example2', /* Safari 4.0 - 8.0 */
        '-webkit-animation-duration': '4s', /* Safari 4.0 - 8.0 */
        'animation-name': 'example2',
        'animation-duration': '0.4s'
      }
    }
  },
  created () {
    this.collapsibleItems = this.$children
  },
  mounted () {
  },
  methods: {
    isActive (collapsible) {
      // return this.currentHash === tab.tabName()
    },
    selectCollapsible (collapsible) {
      console.log('active ' + this.active)
      this.active = !this.active
      if (this.currentCollapse) {
        this.currentCollapse.setVisible(false)
      }
      this.currentCollapse = collapsible
      this.currentHash = this.currentCollapse.collapseName()
      this.currentCollapse.setVisible(true)
      // v-bind:class="{ 'arrow': active, 'arrow2': !active }"
    }
  }
}
</script>

<style scoped>

.collapsible {
  background-color: aqua;
}

</style>
