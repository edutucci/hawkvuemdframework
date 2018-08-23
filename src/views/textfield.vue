<template lang="pug">
  div
    <h1>Textfield</h1>

    .col-4.boxshadow
      H1  Text Mode
      <h-input value="txtName" float-label="Name" v-model="txtName" placeholder="type your text"/>
      <span>Name: {{ txtName }}</span>

    <pre v-highlightjs="txttextcomp">
      <code class="html">
      </code>
    </pre>

    .col-4.boxshadow
      H1  Password
      <h-input value="txtPassword" type="password" float-label="Password" v-model="txtPassword" placeholder="type your password"/>
      <span>Password: {{ txtPassword }}</span>

    <pre v-highlightjs="txtpasswordcomp">
      <code class="html">
      </code>
    </pre>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      txtName: 'Eduardo',
      txtPassword: 'Password',
      txttextcomp: `
<h-input value="txtName" float-label="Name" v-model="txtName" placeholder="type your text"/>
<span>Name: {{ txtName }}</span>
      `,
      txtpasswordcomp: `
<h-input value="txtPassword" type="password" float-label="Password" v-model="txtPassword" placeholder="type your password"/>
<span>Password: {{ txtPassword }}</span>        
      `
    }
  }
}
</script>
