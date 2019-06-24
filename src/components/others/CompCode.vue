<template lang="pug">
  .flex.flex-column.full-width.border.border-gray.border-corner-rounded
    .flex.h-pa-md.bg-gray100.border-corner-rounded
      .flex-1.text-bold
        | {{title}}
      .flex
        h-fa-icon(icon="far fa-file-code" @click="changePage('result')")
        h-fa-icon.h-ml-sm(icon="fas fa-code" @click="changePage('template')")
        h-fa-icon.h-ml-sm(v-if="javascript" icon="fab fa-js" @click="changePage('javascript')")
    .flex.flex-column
      div.h-pa-sm(v-if="pageName === 'result'")
        slot
      div.position-relative(v-if="pageName === 'template'")
        .divcopycode.top-left-absolute.full-size.h-mt-sm
          textarea(:value="code" :id="codeId" style="height: 86%; width: 98%;")
        h-fa-icon.top-right-absolute.h-mr-sm.h-mt-md.buttoncopycode(icon="far fa-copy" textcolor="text-primary" @click="copyCodeToClipboard")
        prism(language="html" :code="code")
      div.position-relative(v-if="pageName === 'javascript'")
        .divcopycode.top-left-absolute.full-size.h-mt-sm
          textarea(:value="script" :id="scriptId" style="height: 86%; width: 98%;")
        h-fa-icon.top-right-absolute.h-mr-sm.h-mt-md.buttoncopycode(icon="far fa-copy" textcolor="text-primary" @click="copyCodeToClipboard")
        prism(language="javascript" :code="script")

</template>

<script>

import uuidv1 from 'uuid/v1'

export default {
  name: 'CompCode',
  props: {
    title: {
      type: String,
      default: ''
    },
    code: {
      type: String,
      default: ''
    },
    script: {
      type: String,
      default: ''
    },
    javascript: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      pageName: 'result',
      codeId: uuidv1(),
      scriptId: uuidv1()
    }
  },
  methods: {
    changePage (pageName) {
      this.pageName = (this.pageName === pageName) ? this.pageName = 'result' : this.pageName = pageName
    },
    copyCodeToClipboard () {
      try {
        var copyText = (this.pageName === 'template') ? document.getElementById(this.codeId) : document.getElementById(this.scriptId)
        copyText.select()

        /* Copy the text inside the text field */
        document.execCommand('copy')
      } catch (err) {
        console.log('unable to copy')
      }
    }
  }
}
</script>

<style scoped>
.divcopycode {
  width: 100%;
  z-index: -1
}

.buttoncopycode {
  /* position: absolute;
  right: 0; */
  z-index: 110
}
</style>
