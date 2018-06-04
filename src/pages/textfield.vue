<template lang="pug">
  <div>
    <h1>Textfield</h1>

    .col-4.boxshadow
      H1  Text
      h-input(:value="txtName" float-label="Name" v-model="txtName" cleartext)
      span  Name: {{ txtName }}
    
    .col-4.boxshadow
      H1  Password
      h-input(:value="txtPassword" type="password" float-label="Password" v-model="txtPassword" cleartext)
      span  Password: {{ txtPassword }}
  </div>
</template>

<script>
import HInput from '../components/Inputs/HInput.vue'

export default {
  components: {
    HInput
  },
  data () {
    return {
      txtName: 'Eduardo',
      txtPassword: 'Password'
    }
  }
}
</script>
