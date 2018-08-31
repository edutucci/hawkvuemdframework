<template>
  <div
    v-if="show"
    class="toast"
    :class="[bgcolor]"
  >
    <div class="flex flex-items-center">
      <!-- <div v-if="config.icon"><h-fa-icon :class="[textcolor]" :icon="config.icon" size="lg"/></div> -->
      <div class="flex flex-column h-pl-sm">
        <div v-if="config.message" :class="[textcolor]">{{config.message}}</div>
        <!-- <div v-if="config.description" :class="[textcolor]">{{config.description}}</div> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    config: {
      type: Object,
      default: () => { return {} }
    }
  },
  data () {
    return {
      show: true,
      textcolor: 'text-white',
      bgcolor: 'bg-primary'
    }
  },
  mounted () {
    // console.log('mounted')
    // console.log('color: ' + this.config.textcolor)
    this.textcolor = this.config.textcolor
    this.bgcolor = this.config.bgcolor
    setTimeout(() => {
      this.show = false
    }, 5000)
  }
}
</script>

<style scoped>
.toast {
  left:0;
  bottom:0;
  position: fixed;
  padding: 16px;
}
</style>

/*
https://github.com/TerryZ/v-dialogs
*/
