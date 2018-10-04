<template>
  <div
    v-if="show"
    class="loading window-height window-width flex flex-items-center flex-justify-center"
  >
    <div class="full-width flex flex-justify-center">
      <div class="flex flex-column">
        <div class="text-center">
            <h-fa-icon icon="fas fa-sync" textcolor="text-white" size="72px" spin/>
        </div>
        <div v-if="message" :class="[textcolor]">
          <h2>{{message}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    message: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      textcolor: 'text-white'
    }
  }
}
</script>

<style scoped>
.loading {
  left:0;
  top:0;
  position: fixed;
  z-index: 1700;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.32);
}
</style>
