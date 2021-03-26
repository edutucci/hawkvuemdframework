<template lang="pug">
h-card(style="width: 100%")
  h-card-section(auto)
    .row.border.border-primary.border-radius.h-pa-sm
      .col-auto
        h-icon(icon="fas fa-book-reader" text-color="text-primary" size="22px")
      .col.h-pl-sm.text-h6.text-primary
        | {{title}}
  h-card-section(auto)
    h-tabs(v-model="horTab" bg-color="bg-primary" text-color="text-white")
      h-tab(name="result" text="RESULT" left-icon="fas fa-file-alt")
        .h-pa-xs.h-mt-sm
          slot

      h-tab(name="html" text="SOURCE" left-icon="fas fa-file-code")
        div.scroll.position-relative
          ssh-pre(language="html" label="HTML Vue Template")
            | {{code}}

          textarea(:value="code" :id="textareaId" style="visibility: hidden; height: 1px")

          .top-right-absolute.h-mr-sm.h-mt-md.buttoncopycode
            h-icon.cursor-pointer(icon="far fa-copy" size="24px" text-color="text-primary" @click="copyCodeToClipboard")

      h-tab(name="javascript" text="JAVASCRIPT" left-icon="fas fa-file-code")
        div.scroll.position-relative
          ssh-pre(language="js" label="Javascript Vue")
            | {{script}}

          textarea(:value="script" :id="textareaId" style="visibility: hidden; height: 1px")

          .top-right-absolute.h-mr-sm.h-mt-md.buttoncopycode
            h-icon.cursor-pointer(icon="far fa-copy" size="24px" text-color="text-primary" @click="copyCodeToClipboard")

</template>

<script>

// eslint-disable-next-line import/no-extraneous-dependencies
import { v1 as uuidv1 } from 'uuid';

import SshPre from 'simple-syntax-highlighter';
import 'simple-syntax-highlighter/dist/sshpre.css';

export default {
  name: 'CompCode',
  props: {
    title: {
      type: String,
      default: '',
    },
    code: {
      type: String,
      default: '',
    },
    script: {
      type: String,
      default: '',
    },
    javascript: {
      type: Boolean,
      default: false,
    },
    page: {
      type: String,
      default: 'result',
    },
    hideCode: {
      type: Boolean,
      default: false,
    },
  },
  components: { SshPre },
  data() {
    return {
      pageName: 'result',
      textareaId: uuidv1(),
      textareaCode: '',
      horTab: 'result',
    };
  },
  watch: {
    page(value) {
      this.pageName = value;
    },
    pageName(value) {
      switch (value) {
        case 'template':
          this.textareaCode = this.code;
          break;
        case 'javascript':
          this.textareaCode = this.script;
          break;
        default:
          this.textareaCode = '';
      }
    },
  },
  mounted() {
    this.pageName = this.page;
  },
  methods: {
    changePage(pageName) {
      this.pageName = (this.pageName === pageName) ? this.pageName = 'result' : this.pageName = pageName;
    },
    copyCodeToClipboard() {
      try {
        const copyText = document.getElementById(this.textareaId);
        copyText.select();

        /* Copy the text inside the text field */
        document.execCommand('copy');
      } catch (err) {
        console.log('unable to copy');
      }
    },
  },
};
</script>

<style scoped>
.divcopycode {
  width: 100%;
  z-index: -1
}

.buttoncopycode {
  z-index: 110;
  top: 35px;
}

.ssh-pre button {
  border: none;
}

</style>
