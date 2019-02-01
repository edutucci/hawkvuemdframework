<template>
  <div>
    <h1>Input Mask</h1>
    <html-separator/>
    <h-input-mask mask="(11)1111-1111" v-model="maskModelTel"/>
    <span>maskModel: {{maskModelTel}}</span>
    <pre v-highlightjs="mask1">
      <code class="html">
      </code>
    </pre>
    <html-separator/>
    <h-input-mask mask="11111-111" v-model="maskModelCep"/>
    <span>maskModel: {{maskModelCep}}</span>
    <pre v-highlightjs="mask2">
      <code class="html">
      </code>
    </pre>
    <h1>Model</h1>
    <strong>Model must be an Object and the user choose can choose wich value will use.</strong>
    <pre v-highlightjs="mask3">
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
      maskTel: '(11)1111-1111',
      maskCep: '11111-111',
      maskModelTel: {
        rawValue: '',
        maskedValue: ''
      },
      maskModelCep: {
        rawValue: '',
        maskedValue: ''
      },
      mask1: `
<h-input-mask mask="(11)1111-1111" v-model="maskModel"/>
      `,
      mask2: `
<h-input-mask mask="11111" v-model="maskModel"/>
      `,
      mask3: `
  maskModel: {
    rawValue: '', // value without mask
    maskedValue: '' // value with mask
  }
      `
    }
  },
  methods: {
  }
}
</script>
