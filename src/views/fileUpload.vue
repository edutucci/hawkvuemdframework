<template>
  <div class="scroll">
    <h1>FILE UPLOAD</h1>
    <html-separator></html-separator>
    <h-file-upload
      extensions="image/png"
      :multiple="true"
      @addFiles="onChange"
    />
    <pre v-highlightjs="ex1">
      <code class="html">
      </code>
    </pre>
    <h1>IMAGE UPLOAD</h1>
    <html-separator></html-separator>
    <h-image-upload
    :multiple="true"
    :max-size="maxsize"
     @addFiles="onChange"
    />
    <pre v-highlightjs="ex2">
      <code class="html">
      </code>
    </pre>
    <h1>NO ALLOW DROP</h1>
    <html-separator></html-separator>
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
    <pre v-highlightjs="ex3">
      <code class="html">
      </code>
    </pre>

    <pre v-highlightjs="vuefile">
      <code class="html">
      </code>
    </pre>

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

  </div>
</template>

<script>

export default {
  data () {
    return {
      fileList: [],
      maxsize: 1024 * 500, // 500 bytes
      ex1: `
<h-file-upload extensions="image/png" :multiple="true" @addFiles="onChange"/>
      `,
      ex2: `
<h-image-upload :multiple="true" @addFiles="onChange" :max-size="maxsize"/>
      `,
      ex3: `
<h-file-upload :multiple="true" @addFiles="onChange" :allow-drop="false" />

<h-image-upload class="h-mt-sm" :multiple="true" @addFiles="onChange" :allow-drop="false" />
      `,
      vuefile: `
export default {
  data () {
    return {
      fileList: [],
      maxsize: 1024 * 500 // 500 bytes
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
