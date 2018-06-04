<template>
  <textarea 
    @change="onChange" 
    v-model="value" 
    v-bind:class="[areaText]"
     v-bind:style="active2"
  />      
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      activeClass: 'c-area',
      active: {
        background: 'green',
        color: 'white'
      },
      areaText: {
        border: '1px solid black',
        background: 'green',
        color: 'white',
        padding: '10px',
        width: '500px',
        height: '300px'
      }
    }
  },
  created () {

  },
  methods: {
    onChange () {
      this.$emit('input', this.value)
    }
  }
}
</script>

<style scoped>
/* .c-area {
  border: 1px solid black;
  background: green;
  color: white;
  padding: 10px;
  width: 500px;
  height: 300px;
} */
</style>

