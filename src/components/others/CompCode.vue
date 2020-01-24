<template lang="pug">
  .flex.border.border-gray.border-radius
    .column.full-width
      .flex.h-pa-md.bg-gray100
        .flex-1.text-bold
          | {{title}}
        .flex
          h-icon(icon="far fa-file-code" @click="changePage('result')")
          h-icon.h-ml-sm(icon="fas fa-code" @click="changePage('template')")
          h-icon.h-ml-sm(v-if="javascript" icon="fab fa-js" @click="changePage('javascript')")
      .column.full-width.bg-white.position-relative.scroll-x-only
        div.h-pa-sm(v-if="pageName === 'result'")
          slot
        div.position-relative(v-if="pageName === 'template'" style="min-height: 60px;")
          .top-right-absolute.h-mr-sm.h-mt-md.buttoncopycode
            h-icon(icon="far fa-copy" text-color="text-primary" @click="copyCodeToClipboard")
          prism(language="html" :code="code")
        div.position-relative(v-if="pageName === 'javascript'" style="min-height: 60px;")
          .top-right-absolute.h-mr-sm.h-mt-md.buttoncopycode
            h-icon(icon="far fa-copy" text-color="text-primary" @click="copyCodeToClipboard")
          prism(language="javascript" :code="script")
        .divcopycode.top-left-absolute.full-size.h-mt-sm(
          v-if="pageName === 'template' || pageName === 'javascript'"
        )
          textarea(:value="textareaCode" :id="textareaId" style="max-height: 86%; width: 98%;")

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
    },
    page: {
      type: String,
      default: 'result'
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
    page: function (value) {
      this.pageName = value
    },
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
  mounted () {
    this.pageName = this.page
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
