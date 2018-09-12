<template>
  <div>
    <h1>SnackBar</h1>

    <div>
      <h-btn contained text="Show SnackBar" @click="showSnackBar"/>
    </div>

    <pre v-highlightjs="s1">
      <code class="javacript">
      </code>
    </pre>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>bgcolor</div>
        <div>textcolor</div>
        <div>message</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Background color of the SnackBar</div>
        <div>Text color of the SnackBar</div>
        <div>Message of the SnackBar</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      s1: `
this.$SnackBar.create({
  message: 'Download Completed',
  textcolor: 'text-white',
  bgcolor: 'bg-primary'
})
      `
    }
  },
  mounted () {
  },
  methods: {
    showSnackBar () {
      this.$SnackBar.create({
        message: 'Download Completed',
        textcolor: 'text-white',
        bgcolor: 'bg-primary'
      })
    }
  }
}
</script>
