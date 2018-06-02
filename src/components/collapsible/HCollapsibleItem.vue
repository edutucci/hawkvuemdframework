<template lang="pug">
   
  div.flex.flex-1.flex-wrap.collapsible-item(
    @click="onClick"
  )
    | {{text}} 

</template>

<script>

export default {
  props: {
    text: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
.collapsible-item {
  font-size: 16px;
  max-width: 162px;
  padding-left: 42px;
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer; 
}

</style>
