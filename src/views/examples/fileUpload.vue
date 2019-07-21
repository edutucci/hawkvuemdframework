<template>
  <div>

    <h3>Files</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-file-upload
        extensions="image/png"
        :multiple="true"
        @addFiles="onChange"
      />
    </div>

    <h3>Images</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-image-upload
      :multiple="true"
      :max-size="maxsize"
      @addFiles="onChange"
      />
    </div>

    <h3>Area Drop Hidden</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-file-upload
        :multiple="true"
        @addFiles="onChange"
        :allow-drop="false"
      />
      <h-image-upload
        class="h-mt-sm"
        :multiple="true"
        @addFiles="onChange"
        :allow-drop="false"
      />
    </div>

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
