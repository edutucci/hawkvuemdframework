<template lang="pug">
  div.full-width.window-height.flex.flex-justify-center.flex-items-center
    h-card.div-rounded.form.h-pa-sm
      .flex.flex-column
        div.flex.flex-justify-center
          h-avatar(src="/img/hawk.jpg" size="128px")
        .row.text-center
          h2  Hawk App
        .row
          h-input(placeholder="login" v-model="form.username" cleartext)
        .row
          h-input(placeholder="password" type="password" v-model="form.password")
        .row.flex.flex-justify-center
          h-btn(contained label="Entrar" @click="login")
</template>

<script>

import HCard from '../components/card/HCard'
import HInput from '../components/Inputs/HInput'
import HAvatar from '../components/image/HAvatar'
import HBtn from '../components/buttons/HBtn'

export default {
  components: {
    HCard,
    HInput,
    HAvatar,
    HBtn
  },
  data () {
    return {
      form: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    login () {
      let Parse = this.$parse

      Parse.User.logIn(this.form.username, this.form.password).then((user) => {
        if (user) {
          this.$router.push('/site1Beta/main')
        }
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.form {
  width: 450px;
  max-width: 90%;
}
</style>
