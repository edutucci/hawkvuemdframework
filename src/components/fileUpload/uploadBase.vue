<template>
  <div></div>
</template>

<script>

import _ from 'lodash'

export default {
  name: 'uploadBase',
  props: {
    multiple: {
      type: Boolean,
      default: true
    },
    maxSize: {
      type: Number,
      default: 2 * (1024 * 1024)
    },
    allowDrop: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      fileList: [],
      inputList: []
    }
  },
  methods: {
    clearFilesList () {
      this.fileList = []
      this.$emit('addFiles', this.fileList)
    },
    dragOverHandler (ev) {
      // console.log('File(s) in drop zone')
      // Prevent default behavior (Prevent file from being opened)
      ev.preventDefault()
    },
    async addDropFile (file) {
      if (_.includes(file.type, 'image/')) {
        if (file.size <= this.maxSize) {
          let fileSize = this.calculateFileSize(file.size)
          await this.createFile(file, fileSize)
        }
      } else {
        if (file.size <= this.maxSize) {
          let fileSize = this.calculateFileSize(file.size)
          this.fileList.push({
            file: file,
            imageData: undefined,
            fileSize: fileSize
          })
          //  this.fileList.push(file)
        }
      }
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
    emitAddedFiles () {
      let localFileList = []
      this.fileList.forEach(element => {
        localFileList.push(element.file)
      })
      this.$emit('addFiles', localFileList)
    },
    emitRemovedFiles () {
      let localFileList = []
      this.fileList.forEach(element => {
        localFileList.push(element.file)
      })
      this.$emit('removeFiles', localFileList)
    },
    removeFile (fileIndex) {
      this.$delete(this.fileList, fileIndex)
      this.emitRemovedFiles()
    },
    calculateFileSize (size) {
      // console.log('size vale: ' + size)

      let k = 1024
      let m = 1024 * 1024
      // let g = 1024 * 1024 * 1024
      let fileSize = ''
      if (size < k) {
        fileSize = '' + size + 'bytes'
      } else if (size >= k && size < m) {
        fileSize = '' + parseFloat(size / 1024).toFixed(2) + ' KB'
      } else if (size >= m) {
        fileSize = (size / 1024)
        fileSize = '' + parseFloat(fileSize / 1024).toFixed(2) + ' MB'
      }
      return fileSize
    }
  }
}
</script>
