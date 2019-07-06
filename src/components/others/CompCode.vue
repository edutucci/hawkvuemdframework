<template lang="pug">
  .flex.flex-column.full-width.border.border-gray.border-corner-rounded
    .flex.h-pa-md.bg-gray100.border-corner-rounded
      .flex-1.text-bold
        | {{title}}
      .flex
        h-fa-icon(icon="far fa-file-code" @click="changePage('result')")
        h-fa-icon.h-ml-sm(icon="fas fa-code" @click="changePage('template')")
        h-fa-icon.h-ml-sm(v-if="javascript" icon="fab fa-js" @click="changePage('javascript')")
    .flex.flex-column.position-relative
      div.h-pa-sm(v-if="pageName === 'result'")
        slot
      div.position-relative(v-if="pageName === 'template'")
        .top-right-absolute.h-mr-sm.h-mt-md.buttoncopycode
          h-fa-icon(icon="far fa-copy" textcolor="text-primary" @click="copyCodeToClipboard")
        prism(language="html" :code="code")
      div.position-relative(v-if="pageName === 'javascript'")
        .top-right-absolute.h-mr-sm.h-mt-md.buttoncopycode
          h-fa-icon(icon="far fa-copy" textcolor="text-primary" @click="copyCodeToClipboard")
        prism(language="javascript" :code="script")
      .divcopycode.top-left-absolute.full-size.h-mt-sm(
        v-if="pageName === 'template' || pageName === 'javascript'"
      )
        textarea(:value="textareaCode" :id="textareaId" style="height: 86%; width: 98%;")

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
      textareaId: uuidv1(),
      textareaCode: ''
    }
  },
  watch: {
    pageName: function (value) {
      switch (value) {
        case 'template':
          this.textareaCode = this.code
          break
        case 'javascript':
          this.textareaCode = this.script
          break
        default:
          this.textareaCode = ''
      }
    }
  },
  methods: {
    changePage (pageName) {
      this.pageName = (this.pageName === pageName) ? this.pageName = 'result' : this.pageName = pageName
    },
    copyCodeToClipboard () {
      try {
        var copyText = document.getElementById(this.textareaId)
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
  z-index: 110
}
</style>
