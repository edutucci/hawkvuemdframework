<template>
  <h-page-content padding>
    <div class="text-h4">FILE UPLOAD</div>

    <comp-code class="h-mt-lg" title="Files" :code="ex1" :script="ex1Script"
      javascript
    >
      <h-file-upload
        extensions="image/png"
        :multiple="true"
        @addFiles="onChange"
      />
    </comp-code>

    <comp-code class="h-mt-lg" title="Images" :code="ex2" :script="ex2Script"
      javascript
    >
      <h-image-upload
      :multiple="true"
      :max-size="maxsize"
      @addFiles="onChange"
      />
    </comp-code>

    <comp-code class="h-mt-lg" title="Area Drop Hidden" :code="ex3" :script="ex3Script"
      javascript
    >
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
    </comp-code>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <div><h3>Name</h3></div>
        <div>multiple</div>
        <div>max-size</div>
        <div>allow-drop</div>
        <div>extensions</div>
      </div>
      <div class="h-pl-md">
        <div><h3>Type</h3></div>
        <div>Boolean</div>
        <div>Number</div>
        <div>Boolean</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <div><h3 >Description</h3></div>
        <div>Default is true. Allow select multiple files. If false in drop mode the first file is selected</div>
        <div>Sets the max size for each file</div>
        <div>Default is true. If false hidden the drag and drop zone</div>
        <div>File Upload only. Default is <b>' .* '</b>. Sets the extensions for the files</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@addFiles</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered when the user finishes with drop files or select files.</div>
      </div>
    </div>

  </h-page-content>
</template>

<script>

export default {
  data () {
    return {
      fileList: [],
      maxsize: 1024 * 500,
      ex1: `
<h-file-upload extensions="image/png" :multiple="true" @addFiles="onChange"/>
`,
      ex1Script: `
export default {
  data () {
    return {
      fileList: []
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
`,
      ex2: `
<h-image-upload :multiple="true" @addFiles="onChange" :max-size="maxsize"/>
`,
      ex2Script: `
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
`,
      ex3: `
<h-file-upload :multiple="true" @addFiles="onChange" :allow-drop="false" />

<h-image-upload class="h-mt-sm" :multiple="true" @addFiles="onChange" :allow-drop="false" />
`,
      ex3Script: `
export default {
  data () {
    return {
      fileList: []
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
`
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
