<template lang="pug">
  div(style="display:inline-flex;")
    div(
      class="btngroup flex flex-justify-center flex-items-center full-width"
      :class="[ {'rounded': rounded, 'outlined border border-gray border-radius': outlined } ]"
    )
      slot

</template>

<script>

export default {
  name: 'HBtnGroup',
  props: {
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  components: {
  },
  data () {
    return {
      name: '',
      currentButton: undefined
    }
  },
  mounted () {
  },
  methods: {
    setActiveButton (btn) {
      if (this.currentButton) {
        this.currentButton.setActive(false)
      }

      this.currentButton = btn
      btn.setActive(true)
    },
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
