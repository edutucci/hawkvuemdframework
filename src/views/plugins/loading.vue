<template>
  <div>
    <h1>Loading</h1>
    <div>
      <h-btn contained text="Show Loading" @click="showLoading"/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    showLoading () {
      this.$Loading.show('teste loading')
      setTimeout(() => {
        this.$Loading.hide()
      }, 5000)
    }
  }
}
</script>
