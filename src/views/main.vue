<template>
  <div class="text-center">
    <h1> Page Content</h1>
    <div> <img src='img/mountains.jpg' style="width: 650px; height: 350px;"></div>
    <div> <img src='img/mountains.jpg' style="width: 650px; height: 350px;"></div>
    <div> <img src='img/mountains.jpg' style="width: 650px; height: 350px;"></div>
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
h1 {
  padding: 0;
  margin: 0;
}
</style>
// img.full-width(src='img/mountains.jpg')
// .full-size.top-left-absolute.flex.flex-justify-center.flex-items-center(style="z-index: 1;")
//   .flex.flex-column
//     .flex.flex-justify-center
//       //- h-avatar(src="static/img/hawk.jpg" size="128px")
//       img(src="img/hawkface.png")
//     .flex.flex-justify-center.text-white.h-pt-md
//       h1 HAWK
//     .flex.flex-justify-center.text-white
//       h1 FRAMEWORK
