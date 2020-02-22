<template>
  <h-page-content padding>
    <div class="row">
      <div class="col">
        <div class="text-h4">FILE UPLOAD</div>

        <div ref="upload-file"/>
        <comp-code class="h-mt-lg" title="Files" :code="ex1" :script="ex1Script"
          javascript
        >
          <h-file-upload
            extensions="image/png"
            :multiple="true"
            @addFiles="onChange"
          />
        </comp-code>

        <div ref="upload-image"/>
        <comp-code class="h-mt-lg" title="Images" :code="ex2" :script="ex2Script"
          javascript
        >
          <h-image-upload
          :multiple="true"
          :max-size="maxsize"
          @addFiles="onChange"
          />
        </comp-code>

        <div ref="upload-nodrop"/>
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

        <tabs-help
          class="h-mt-md"
          :properties="helpTopics.properties"
          :events="helpTopics.events"
        />
      </div>
      <div class="col-auto">
        <list-help>
          <h-list>
            <h-list-header text="Upload"/>
            <h-list-item @click="goToElement('upload-file')">
              <h-list-item-content>
                <h-list-item-text title="Files"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('upload-image')">
              <h-list-item-content>
                <h-list-item-text title="Image"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('upload-nodrop')">
              <h-list-item-content>
                <h-list-item-text title="Area Drop Hidden"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </div>
    </div>

  </h-page-content>
</template>

<script>

import viewport from '../../../components/others/viewport'
import helpTopics from './help'

export default {
  data () {
    return {
      helpTopics: {
        properties: [],
        events: []
      },
      fileList: [],
      maxsize: 1024 * 500,
      ex1: `
<h-file-upload
  extensions="image/png"
  :multiple="true"
  @addFiles="onChange"
/>
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
<h-image-upload
  :multiple="true"
  :max-size="maxsize"
  @addFiles="onChange"
/>
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
  mounted () {
    this.helpTopics.properties = helpTopics.properties
    this.helpTopics.events = helpTopics.events
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    },
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
