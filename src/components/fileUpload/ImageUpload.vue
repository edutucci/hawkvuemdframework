<template>
  <div>
    <div
      class="border-primary h-pa-sm flex flex-column no-user-select scroll"
    >
      <div>
        <div class="flex bg-primary position-relative overflow-hidden file-upload-container">
          <div class="h-pa-sm flex flex-items-center">
            <h-icon icon="fas fa-cloud-upload-alt text-white" size="24px"/>
          </div>
          <div class="flex-1 h-pa-sm text-white">
            <div>
              <h3 class="no-margin">Select Images</h3>
            </div>
            <div>
              <p class="no-margin">Add images to upload</p>
            </div>
          </div>
          <input type="file"
            class="full-width"
            accept="image/*"
            :multiple="multiple"
             @change="handleFileChange"
            />
        </div>
      </div>

      <div
        v-if="allowDrop"
        class="flex flex-1 flex-wrap flex-align-center border-primary border-dashed border-2 h-mt-md"
        @drop="dropHandlerImages"
        @dragover="dragOverHandler"
      >
        <div v-if="multiple" class="row">
          <p class="text-center text-primary">Drag one or more images</p>
        </div>
        <div v-else class="row">
          <p class="text-center text-primary">Drag your image</p>
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
        class="row flex flex-wrap flex-justify-center"
      >
        <h-card
          v-for="(file, index) in fileList"
          :key="index"
          style="width: 200px;"
          class="h-ma-sm"
        >
          <h-card-media>
            <h-card-media-img :img="file.imageData" style="max-height: 150px;"/>
          </h-card-media>
          <h-card-section>
            <div class="text-h6">{{file.file.name}}</div>
            <div class="caption">{{file.fileSize}}</div>
          </h-card-section>
        </h-card>
      </div>

    </div>

  </div>
</template>

<script>

import uploadBase from './uploadBase'
import _ from 'lodash'

export default {
  name: 'HFileUpload',
  extends: uploadBase,
  methods: {
    async handleFileChange (ev) {
      for (let i = 0; i < ev.target.files.length; i++) {
        let file = ev.target.files[i]
        if (_.includes(file.type, 'image/')) {
          await this.addDropFile(file)
        }
      }
      this.$emit('addFiles', this.fileList)
    },
    async dropHandlerImages (ev) {
      ev.preventDefault()

      if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
          // If dropped items aren't files, reject them
          if (ev.dataTransfer.items[i].kind === 'file') {
            let file = ev.dataTransfer.items[i].getAsFile()
            if (_.includes(file.type, 'image/')) {
              await this.addDropFile(file)
            }
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
          if (_.includes(file.type, 'image/')) {
            await this.addDropFile(file)
          }

          if (!this.multiple && i === 0) {
            break
          }
        }
      }
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
