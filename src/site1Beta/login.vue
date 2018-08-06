<template lang="pug">
  div.full-width.window-height.flex.flex-justify-center.flex-items-center
    h-card.form.h-pa-sm
      .flex.flex-column
        div.flex.flex-justify-center
          h-avatar(src="/img/hawk.jpg" size="128px")
        .text-center
          h1  Login
        div
          h-input(placeholder="login")
        div
          h-input(placeholder="password")

</template>

<script>

import HCard from '../components/card/HCard'
import HInput from '../components/Inputs/HInput'
import HAvatar from '../components/image/HAvatar'

export default {
  components: {
    HCard,
    HInput,
    HAvatar
  }
}
</script>

<style scoped>
.form {
  width: 450px;
  max-width: 90%;
}
</style>
