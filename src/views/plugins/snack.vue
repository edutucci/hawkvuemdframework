<template>
  <h-page-content padding>
    <h1>SnackBar</h1>

    <comp-code class="h-mt-md" title="Inside Vue File" :code="snack"
      :script="snackScript" javascript>
       <h-btn text="Show SnackBar" @click="showSnackBar"/>
    </comp-code>

    <comp-code class="h-mt-md" title="In JS File" :code="snackJSFile"
      :script="snackJSFileScript" javascript>
      <h-btn text="Show SnackBarInJS" @click="showSnackBarInJS"/>
    </comp-code>

    <!-- <pre v-highlightjs="s1">
      <code class="javacript">
      </code>
    </pre> -->

    <!-- <h2 class="text-primary"> Vue Properties</h2>
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
    </div> -->

  </h-page-content>
</template>

<script>
import jsSnack from './snackFile'
export default {
  data () {
    return {
      snack: `
<h-btn text="Show SnackBar" @click="showSnackBar"/>
`,
  snackScript: `
export default {
  data () {
    return {
    }
  }
} 
methods: {
  showSnackBar () {
    this.$SnackBar.create({
      message: 'Download Completed',
      textcolor: 'text-white',
      bgcolor: 'bg-positive'
    })
  }
}
`,
  snackJSFile: `
<h-btn text="Show SnackBarInJS" @click="showSnackBarInJS"/>
`,
  snackJSFileScript: `
// snackFile.js

import Vue from 'vue'

function showSnack () {
  Vue.prototype.$SnackBar.create({
    message: 'Download Completed',
    textcolor: 'text-white',
    bgcolor: 'bg-positive'
  })
}

let test = {
  showSnack: showSnack
}

export default test


// Vue Component

import jsSnack from './snackFile'

export default {
  data () {
    return {
    }
  }
} 
methods: {
  showSnackBarInJS () {
    jsSnack.showSnack()
  }
}
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
        bgcolor: 'bg-positive'
      })
    },
    showSnackBarInJS () {
      jsSnack.showSnack()
    }
  }
}
</script>
