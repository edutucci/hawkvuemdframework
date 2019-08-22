<template>
  <div class="flex flex-justify-center flex-items-center" style="min-height: calc(100vh - 120px)">
    <div class="flex flex-column">
      <div class="text-center">
        <h1>Hawk Framework</h1>
        <h-avatar src="img/hawk.jpg" size="256px"/>
      </div>
      <div class="flex h-pt-md">
        <div class="text-center" style="width: 250px">
          <h-link icon="far fa-newspaper" url="https://github.com/edutucci/hawkframework" icon-size="72px" new-window/>
          <h3 class="no-margin">
            Build web pages with lightweight components.
          </h3>
        </div>
        <div class="text-center" style="width: 250px">
          <h-link icon="fab fa-github" url="https://github.com/edutucci/hawkframework-starter-kit" icon-size="72px" new-window/>
          <h3 class="no-margin">
            Download the project starter kit to test this library.
          </h3>
        </div>
      </div>
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
