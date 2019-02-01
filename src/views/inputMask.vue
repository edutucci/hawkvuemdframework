<template>
  <div>
    <h1>Input Mask</h1>
    <html-separator/>
    <div>
      <h-toggle v-model="masked" text="Masked?"/>
    </div>
    <html-separator/>
    <h-input-mask mask="(11)1111-1111" v-model="maskModelTel" icon="fas fa-phone" :masked="masked" cleartext/>
    <span>maskModel: {{maskModelTel}}</span>
    <pre v-highlightjs="mask1">
      <code class="html">
      </code>
    </pre>
    <html-separator/>
    <h-input-mask mask="11111-111" v-model="maskModelCep" icon="fas fa-home" static-label="static label" :masked="masked" cleartext/>
    <span>maskModel: {{maskModelCep}}</span>
    <pre v-highlightjs="mask2">
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
      masked: false,
      maskTel: '(11)1111-1111',
      maskCep: '11111-111',
      maskModelTel: '',
      maskModelCep: '',
      mask1: `
<h-input-mask mask="(11)1111-1111" v-model="maskModelTel" icon="fas fa-phone" float-label="Phone" :masked="masked" cleartext/>
      `,
      mask2: `
<h-input-mask mask="11111-111" v-model="maskModelCep" icon="fas fa-home" float-label="ZipCode" :masked="masked" cleartext/>
      `,
      mask3: `
      `
    }
  },
  methods: {
  }
}
</script>
