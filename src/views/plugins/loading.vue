<template>
  <div>
    <h1>Loading</h1>
    <h-btn contained text="Default Loading" @click="showDefaultLoading"/>
    <h-btn class="h-pl-md" textbutton text="Custom Loading" @click="showCustomLoading"/>

    <pre v-highlightjs="loading">
      <code class="html">
      </code>
    </pre>

  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: `
<h-btn contained text="Default Loading" @click="showDefaultLoading"/>
<h-btn class="h-pl-md" contained text="Custom Loading" @click="showCustomLoading"/>

methods: {
  showDefaultLoading () {
    this.$Loading.show()
    setTimeout(() => {
      this.$Loading.hide()
    }, 5000)
  },
  showCustomLoading () {
    this.$Loading.show({
      message: 'loading something',
      icon: 'fas fa-spinner'
    })
    setTimeout(() => {
      this.$Loading.hide()
    }, 5000)
  }
}
      `
    }
  },
  methods: {
    showDefaultLoading () {
      this.$Loading.show()
      setTimeout(() => {
        this.$Loading.hide()
      }, 5000)
    },
    showCustomLoading () {
      this.$Loading.show({
        message: 'loading something',
        icon: 'fas fa-spinner'
      })
      setTimeout(() => {
        this.$Loading.hide()
      }, 5000)
    }
  }
}
</script>
