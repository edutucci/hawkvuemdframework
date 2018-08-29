<template lang="pug">
  div
    <h1>Textfield</h1>

    .col-4.boxshadow
      H1  Text Mode
      <h-input value="txtName" static-label="Name" v-model="txtName" placeholder="" cleartext :readonly="true"/>
      <span>Name: {{ txtName }}</span>
      //- <h-input value="txtName2" helper-text="helper text" error-label="error label" float-label="Name" v-model="txtName2" placeholder="type your text"/>
      <h-input value="txtName2" error-label="error label" :left-icon="['fas', 'home']" helper-text="helper text" :maxlength="10" :textCounter="10"  v-model="txtName2" float-label="Name" outlined cleartext/>
      <span>Name: {{ txtName2 }}</span>

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
      txtName2: 'Eduardo',
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
