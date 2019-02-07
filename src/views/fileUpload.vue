<template>
  <div class="scroll">
    <h1>FILE UPLOAD</h1>
    <html-separator></html-separator>
    <h-file-upload
      extensions="image/png"
      :multiple="true"
      @addFiles="onChange"
    />
    <!-- <h1>IMAGE UPLOAD</h1> -->
    <html-separator></html-separator>
    <h-image-upload
    :multiple="true"
     @addFiles="onChange"
    />
  </div>
</template>

<script>

export default {
  data () {
    return {
      fileList: [],
      maxsize: 1024 * 500
    }
  },
  methods: {
    onChange (fileList) {
      console.log('onChange fired')
      fileList.forEach(file => {
        console.log('FileName: ' + file.file.name + ' - FileSize:' + file.file.size)
        console.log('File Type: ' + file.file.type)
        console.log('FileSizeString: ' + file.fileSize)
        let imageInfo = (file.imageData) ? 'has image data' : 'no image data'
        console.log('ImageData: ' + imageInfo)
      })
    }
  }
}
</script>

<style scoped>
</style>
