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
          <div class="text-h6">
            Select Images
          </div>
          <div class="text-caption">
            Add files to upload
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
      class="column border-primary border-dashed border-2 h-mt-md bg"
      @drop="dropHandlerImages"
      @dragover="dragOverHandler"
    >
      <div v-if="multiple" class="col">
        <p class="text-center text-primary">Drag one or more images</p>
      </div>
      <div v-else class="col">
        <p class="text-center text-primary">Drag your image</p>
      </div>
    </div>

    <div class="h-mt-md flex flex-justify-end">
      <h-btn
        bg-color="bg-primary" text-color="text-white"
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

import _ from 'lodash';
import uploadBase from './uploadBase.vue';

export default {
  name: 'HFileUpload',
  extends: uploadBase,
  emits: ['addFiles'],
  methods: {
    async handleFileChange(ev) {
      for (let i = 0; i < ev.target.files.length; i += 1) {
        const file = ev.target.files[i];
        if (_.includes(file.type, 'image/')) {
          // eslint-disable-next-line no-await-in-loop
          await this.addDropFile(file);
        }
      }
      this.$emit('addFiles', this.fileList);
    },
    async dropHandlerImages(ev) {
      ev.preventDefault();

      if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.items.length; i += 1) {
          // If dropped items aren't files, reject them
          if (ev.dataTransfer.items[i].kind === 'file') {
            const file = ev.dataTransfer.items[i].getAsFile();
            if (_.includes(file.type, 'image/')) {
              // eslint-disable-next-line no-await-in-loop
              await this.addDropFile(file);
            }
          }

          if (!this.multiple && i === 0) {
            break;
          }
        }
      } else {
        // console.log('passou por ev.dataTransfer.files.length')
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.files.length; i += 1) {
          // console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name)
          const file = ev.dataTransfer.files[i];
          if (_.includes(file.type, 'image/')) {
            // eslint-disable-next-line no-await-in-loop
            await this.addDropFile(file);
          }

          if (!this.multiple && i === 0) {
            break;
          }
        }
      }
      this.$emit('addFiles', this.fileList);
    },
  },
};
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
