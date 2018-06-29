<template>
    <div class="flex flex-justify-center flex-items-center drawer" v-if="value">
      <div>
        <slot> </slot>
      </div>
    </div>    
</template>

<script>

import HFaIcon from '../icons/HFaIcon'

export default {
  name: 'HNavDrawer',
  components: {
    HFaIcon
  },
  props: {
    value: {
      type: Boolean
    }
  },
  data () {
    return {
    }
  },
  methods: {
    open () {
      console.log('open nav')
    },
    close () {
      this.$emit('input', false)
      console.log('close nav')
    }
  }
}
</script>

<style scoped>
.drawer {
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 13;
    top: 0;
    left: 0;
    background-color: rgba(222, 222, 222, 0.6);
}

</style>
