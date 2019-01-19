<template>
  <div>
    <h1>FILE UPLOAD</h1>
    <!-- <html-separator></html-separator>
    <p>Drag the W3Schools image into the rectangle:</p>

    <div id="div1" @drop="drop" @dragover="allowDrop"></div>
    <br>
    <img id="drag1" src="img/clock.png" draggable="true" @dragstart="drag" width="336" height="69"> -->

    <html-separator></html-separator>
    <div
      class="border-primary text-center h-pa-sm"
      @drop="dropHandler"
      @dragover="dragOverHandler"
    >
      <p class="text-center text-primary">Drag one or more files</p>

      <div v-if="fileList && fileList.length" class="flex flex-wrap flex-justify-center">
        <h-card
          v-for="(file, index) in fileList"
          :key="index"
          style="width:170px;"
          class="h-ma-sm"
        >
          <h-card-media>
            <h-card-media-img :img="file.image"/>
          </h-card-media>
          <h-card-header>
            <h-card-header-text :text="file.fileName" :desc="file.fileSize"/>
          </h-card-header>
        </h-card>
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
</style>
