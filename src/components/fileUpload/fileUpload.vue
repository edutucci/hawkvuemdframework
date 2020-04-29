<template>
  <div>
    <div
      class="border-primary h-pa-sm flex flex-column no-user-select scroll"
      @drop="preventDrop"
      @dragover="preventDrop"
    >
      <div>
        <div class="flex bg-primary position-relative overflow-hidden file-upload-container">
          <div class="h-pa-sm flex flex-items-center">
            <h-icon icon="fas fa-cloud-upload-alt text-white" size="24px"/>
          </div>
          <div class="flex-1 h-pa-sm text-white">
            <div class="text-h6">
              {{title}}
            </div>
            <div class="text-caption">
              {{subtitle}}
            </div>
          </div>
          <input
            type="file"
            class="full-width"
            :accept="extensionDisplay"
            :multiple="multiple"
            @change="handleFileChange"
            />
        </div>
      </div>

      <div
        v-if="allowDrop"
        class="column border-primary border-dashed border-2 h-mt-md"
        @drop="dropHandler"
        @dragover="dragOverHandler"
      >
        <div v-if="multiple" class="col">
          <p class="text-center text-primary">Drag one or more files</p>
        </div>
        <div v-else class="col">
          <p class="text-center text-primary">Drag your file</p>
        </div>
      </div>

      <h-list
        v-if="fileList && fileList.length"
        class="h-mt-sm border border-gray"
        item-separator
      >
        <h-list-item
          v-for="(file, fileIndex) in fileList"
          :key="fileIndex"  
        >
          <h-list-item-side class="h-pa-sm">
            <div class="row full-height align-items-center">
              <h-icon
                text-color="text-primary"
                icon="fas fa-file-upload"
                size="24px"
              />
            </div>
          </h-list-item-side>
          <h-list-item-content>
            <h-list-item-text
              :title="file.file.name"
              :caption="'' + file.fileSize + ' - ' + file.file.type"
            />
            <h-list-item-text
              :caption="'' + file.file.type"
            />
          </h-list-item-content>
          <h-list-item-side class="h-pa-sm">
            <div class="row full-height align-items-center">
              <h-icon
                text-color="text-negative"
                icon="fas fa-trash-alt"
                @click="removeFile(fileIndex)"
                size="24px"
              />
            </div>
          </h-list-item-side>
        </h-list-item>
      </h-list>

      <div class="h-mt-md flex flex-justify-end"
       >
        <h-btn
          bg-color="bg-primary" text-color="text-white"
          text="Clear"
          @click="clearFilesList"
        />
      </div>

    </div>

  </div>
</template>

<script>

import uploadBase from './uploadBase'

export default {
  name: 'HFileUpload',
  extends: uploadBase,
  methods: {
    async handleFileChange (ev) {
      for (let i = 0; i < ev.target.files.length; i++) {
        let file = ev.target.files[i]
        await this.addDropFile(file)
      }
      this.emitAddedFiles()
    },
    preventDrop (ev) {
      console.log('preventDrop')
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault()
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
      // console.log('this.fileList.length: ' + this.fileList.length)
      this.emitAddedFiles()
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
