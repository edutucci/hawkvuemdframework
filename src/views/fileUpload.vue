<template>
  <div>
    <h1>FILE UPLOAD</h1>
    <html-separator></html-separator>
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
          <input type="file" name="myfile" class="full-width"/>
        </div>
      </div>

      <div
        class="flex flex-1 flex-wrap flex-align-center border-primary border-dashed border-2 h-mt-md"
        @drop="dropHandler"
        @dragover="dragOverHandler"
      >
        <div class="row">
          <p class="text-center text-primary">Drag one or more files</p>
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
              <h-card-media-img :img="file.imageData" style="max-height: 100px;"/>
            </h-card-media>
            <h-card-header>
              <h-card-header-text :text="file.file.name" :desc="file.fileSize"/>
            </h-card-header>
          </h-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import _ from 'lodash'

export default {
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    allowDrop (ev) {
      ev.preventDefault()
    },
    drag (ev) {
      // ev.dataTransfer.setData('text', ev.target.id)
    },
    drop (ev) {
      ev.preventDefault()
      var data = ev.dataTransfer.getData('text')
      ev.target.appendChild(document.getElementById(data))
    },
    async dropHandler (ev) {
      // console.log('File(s) dropped')

      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault()

      this.fileList = []

      if (ev.dataTransfer.items) {
        // Use DataTransferItemList interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.items.length; i++) {
          // If dropped items aren't files, reject them
          if (ev.dataTransfer.items[i].kind === 'file') {
            let file = ev.dataTransfer.items[i].getAsFile()
            if (_.includes(file.type, 'image/')) {
              let fileSize = this.calculateFileSize(file.size)
              await this.createFile(file, fileSize)
            }
          }
        }
      } else {
        // console.log('passou por ev.dataTransfer.files.length')
        // Use DataTransfer interface to access the file(s)
        for (let i = 0; i < ev.dataTransfer.files.length; i++) {
          // console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name)
          let file = ev.dataTransfer.files[i]
          if (_.includes(file.type, 'image/')) {
            let fileSize = this.calculateFileSize(file.size)
            await this.createFile(file, fileSize)
          }
        }
      }
      // this.$emit('@change', this.fileList)
    },
    dragOverHandler (ev) {
      console.log('File(s) in drop zone')
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault()
    },
    createFile (file, fileSize) {
      let vm = this
      let reader = new FileReader()
      return new Promise(function (resolve, reject) {
        try {
          reader.onload = function (e) {
            vm.fileList.push({
              file: file,
              imageData: e.target.result,
              fileSize: fileSize
            })
            resolve(0)
          }
          reader.readAsDataURL(file)
        } catch (error) {
          console.log(error)
          resolve([])
        }
      })
    },
    removeFile () {
    },
    calculateFileSize (size) {
      // console.log('size vale: ' + size)

      let k = 1024
      let m = 1024 * 1024
      let g = 1024 * 1024 * 1024
      let fileSize = ''
      if (size < k) {
        fileSize = '' + size + 'bytes'
      } else if (size < m) {
        fileSize = '' + parseInt(size / 1024) + ' KB'
      } else if (size < g) {
        fileSize = (size / 1024)
        fileSize = '' + parseInt(fileSize / 1024) + ' MB'
      }
      return fileSize
    }
  }
}
</script>

<style scoped>
#div1 {
  width: 350px;
  height: 70px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}

.file-upload-container input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
