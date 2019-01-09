<template lang="pug">
  div(style="display:inline-flex;")
    div(
      v-if="contained"
      class="btngroup flex flex-items-center full-width"
    )
      div(class="full-width flex flex-justify-center")
        slot
    div(v-else-if="outlined"
      class="btngroup outlinedbtn flex flex-items-center full-width"
      style="padding: 4px;"
    )
      div(class="full-width flex flex-justify-center")
        slot

</template>

<script>

export default {
  name: 'HBtnGroup',
  props: {
    contained: {
      type: Boolean
    },
    outlined: {
      type: Boolean
    }
  },
  components: {
  },
  data () {
    return {
      name: ''
    }
  },
  mounted () {
  },
  methods: {
    setName (name) {
      this.name = name
    },
    getName () {
      return this.name
    }
  }
}
</script>

<style scoped>

</style>
