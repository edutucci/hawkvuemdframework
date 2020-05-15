<template>
  <div>
    <h1>Loading</h1>

    <comp-code class="h-mt-md" title="Inside Vue File" :code="loading"
      :script="loadingScript" javascript>
      <h-btn text-button text="Default Loading" @click="showDefaultLoading"/>
      <h-btn class="h-pl-md" text-button text="Custom Loading" @click="showCustomLoading"/>
    </comp-code>

    <comp-code class="h-mt-md" title="In JS File" :code="loadingJSFile"
      :script="loadingJSFileScript" javascript>
      <h-btn text-button text="Default Loading" @click="showLoadingInJS"/>
    </comp-code>
  </div>
</template>

<script>

import jsLoading from './loadingFile'

export default {
  data () {
    return {
      loading: `
<h-btn text-button text="Default Loading" @click="showDefaultLoading"/>
<h-btn class="h-pl-md" text-button text="Custom Loading" @click="showCustomLoading"/>
`,
  loadingScript: `
export default {
  data () {
    return {
    }
  }
} 
methods: {
  showDefaultLoading () {
    this.$Loading.show()
    setTimeout(() => {
      this.$Loading.hide()
    }, 2000)
  },
  showCustomLoading () {
    this.$Loading.show({
      message: 'loading something',
      icon: 'fas fa-spinner'
    })
    setTimeout(() => {
      this.$Loading.hide()
    }, 2000)
  }
}
`,
  loadingJSFile: `
<h-btn text-button text="Default Loading" @click="showLoadingInJS"/>  
`,
  loadingJSFileScript: `
// loadingFile.js

import Vue from 'vue'

function showLoading () {
  Vue.prototype.$Loading.show()
  setTimeout(() => {
    Vue.prototype.$Loading.hide()
  }, 2000)
}

let test = {
  showLoading: showLoading
}

export default test


// Vue Component

import jsLoading from './LoadingFile'

export default {
  data () {
    return {
    }
  }
} 
methods: {
  showLoadingInJS () {
    jsLoading.showLoading()
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
      }, 2000)
    },
    showCustomLoading () {
      this.$Loading.show({
        message: 'loading something',
        icon: 'fas fa-spinner'
      })
      setTimeout(() => {
        this.$Loading.hide()
      }, 2000)
    },
    showLoadingInJS () {
      jsLoading.showLoading()
    }
  }
}
</script>
