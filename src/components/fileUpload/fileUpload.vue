<template>
  <div>
    <div
      class="border-primary h-pa-sm flex flex-column no-user-select scroll"
    >
      <div>
        <div class="flex bg-primary position-relative overflow-hidden file-upload-container">
          <div class="h-pa-sm flex flex-items-center">
            <h-fa-icon icon="fas fa-cloud-upload-alt text-white" size="24px"/>
          </div>
          <div class="flex-1 h-pa-sm text-white">
            <div>
              <h3 class="no-margin">Select Files</h3>
            </div>
            <div>
              <p class="no-margin">Add files to upload</p>
            </div>
          </div>
          <input
            type="file"
            class="full-width"
            :accept="extensions"
            :multiple="multiple"
            @change="handleFileChange"
            />
        </div>
      </div>

      <div
        v-if="allowDrop"
        class="flex flex-1 flex-wrap flex-align-center border-primary border-dashed border-2 h-mt-md"
        @drop="dropHandler"
        @dragover="dragOverHandler"
      >
        <div v-if="multiple" class="row">
          <p class="text-center text-primary">Drag one or more files</p>
        </div>
        <div v-else class="row">
          <p class="text-center text-primary">Drag your file</p>
        </div>
      </div>

      <div class="h-mt-md flex flex-justify-end">
        <h-btn
          contained
          bgcolor="bg-primary" textcolor="text-white"
          text="Clear"
          @click="clearFilesList"
        />
      </div>

      <div
        v-if="fileList && fileList.length"
        class="row"
      >
        <div
          class="flex border-gray h-ma-sm h-pa-sm overflow-hidden"
          v-for="(file, fileIndex) in fileList"
          :key="fileIndex"
        >
          <div class="flex-1">
            <div class="full-height flex flex-items-center">
              <div class="row flex flex-column">
                <h5 class="no-margin">{{file.file.name}}</h5>
                <p class="no-margin text-gray">{{file.fileSize}}</p>
                <p class="no-margin text-gray">{{file.file.type}}</p>
              </div>
            </div>
          </div>
          <div v-if="file.imageData" class="inline-block h-ma-sm">
            <img :src="file.imageData" :alt="file.file.name" style="width:150px; height: 100px"/>
          </div>
          <div class="flex flex-items-center h-ma-sm">
            <h-fa-icon
              class="text-negative"
              icon="fas fa-times-circle"
              @click="removeFile(fileIndex)"
            />
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>

import uploadBase from './uploadBase'

export default {
  name: 'HFileUpload',
  extends: uploadBase,
  props: {
    extensions: {
      type: String,
      default: '.*'
    }
  },
  methods: {
    async handleFileChange (ev) {
      for (let i = 0; i < ev.target.files.length; i++) {
        let file = ev.target.files[i]
        await this.addDropFile(file)
      }
      this.$emit('addFiles', this.fileList)
    },
    async dropHandler (ev) {
      // console.log('File(s) dropped')

      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault()

      if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
          // If dropped items aren't files, reject them
          if (ev.dataTransfer.items[i].kind === 'file') {
            let file = ev.dataTransfer.items[i].getAsFile()
            await this.addDropFile(file)
          }
          if (!this.multiple && i === 0) {
            break
          }
        }
      } else {
        // console.log('passou por ev.dataTransfer.files.length')
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          // console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name)
          let file = ev.dataTransfer.files[i]
          await this.addDropFile(file)
          if (!this.multiple && i === 0) {
            break
          }
        }
      }
      console.log('this.fileList.length: ' + this.fileList.length)
      this.$emit('addFiles', this.fileList)
    }
  }
}
</script>

<style scoped>
.file-upload-container input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
