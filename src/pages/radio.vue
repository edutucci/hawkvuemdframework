<template lang="pug">
  <div>
    <h1> Radio Buttons </h1>
    div
      h1 List
      h-card
        h-card-text(
          desc="What type of movies do you like?"
        )
        div
          h-radio(v-model="typeMovie" label="Comedy" value="Comedy")
          h-radio(v-model="typeMovie" label="Action" value="Action")
          h-radio(v-model="typeMovie" label="Science" value="Science")
          h-radio(v-model="typeMovie" label="Romance" value="Romance")
        div
          | I like of: {{ typeMovie }}
    div
      h1 List with option checked
      h-card
        h-card-text(
          desc="Select your gender"
        )      
        <div>
          <h-radio v-model="gender" label="Male" value="male" checked/>
          <h-radio v-model="gender" label="Female" value="female" />
          <div>Your gender is: {{ gender }}</div>      
        </div>

  </div>
</template>

<script>

import HRadio from '../components/radio/HRadio.vue'
import HCard from '../components/card/HCard'
import HCardText from '../components/card/HCardText'

export default {
  components: {
    HRadio,
    HCard,
    HCardText
  },
  data () {
    return {
      typeMovie: '',
      gender: ''
    }
  }
}
</script>
