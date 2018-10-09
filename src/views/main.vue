<template>
  <div class="flex flex-justify-center flex-items-center" style="min-height: calc(100vh - 124px)">
    <div>
      <h1>Hawk Framework</h1>
      <h-avatar src="img/hawk.jpg" size="256px"/>
    </div>
  </div>
</template>

<script>

import HAvatar from '../components/image/HAvatar'

export default {
  name: 'Main',
  components: {
    HAvatar
  }
}
</script>

<style scoped>

</style>
