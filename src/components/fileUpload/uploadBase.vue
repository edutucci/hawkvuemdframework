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
    },
    extensions: {
      type: String,
      default: '*.*'
    },
    audioOnly: {
      type: Boolean,
      default: false
    },
    videoOnly: {
      type: Boolean,
      default: false
    },
    imageOnly: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Select Files'
    },
    subtitle: {
      type: String,
      default: 'Click to add files'
    }
  },
  data () {
    return {
      fileList: [],
      inputList: []
    }
  },
  computed: {
    extensionDisplay () {
      let value = this.extensions
      if (this.audioOnly) {
        value = 'audio/*'
      } else if (this.videoOnly) {
        value = 'video/*'
      } else if (this.imageOnly) {
        value = 'image/*'
      }
      return value
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
      if (file.size <= this.maxSize) {
        if (this.isExtensionAllowed(file)) {
          let fileSize = this.calculateFileSize(file.size)
          if (_.includes(file.type, 'image/')) {
            await this.createFile(file, fileSize)
          } else {
            this.fileList.push({
              file: file,
              imageData: undefined,
              fileSize: fileSize
            })
          }
        }
      }
    },
    createFile (file, fileSize) {
      let vm = this
      let reader = new FileReader()
      return new Promise(function (resolve) {
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
    isExtensionAllowed (file) {
      let value = false
      if (this.audioOnly) {
        if (file.type.includes('audio/')) {
          value = true
        }
      } else if (this.videoOnly) {
        if (file.type.includes('video/')) {
          value = true
        }
      } else if (this.imageOnly) {
        if (file.type.includes('image/')) {
          value = true
        }
      } else {
        if ( this.extensions.includes('*')
        ) {
          value = true
        } else {
          let exts = this.extensions.split(",")
          for (let index = 0; index < exts.length; index++) {
            let localExt = exts[index].trim()
            localExt = localExt.replace('*', '')
            if (file.name.endsWith(localExt)) {
              value = true
              break
            }
          }        
        }
      }

      return value
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
