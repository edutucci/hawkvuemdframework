<template>
<page-layout ref="pl" title="File Upload">
  <template v-slot:components>
    <div ref="upload-file"/>
    <comp-code class="h-mt-lg" title="Files" :code="ex1">
      <h-file-upload
        :multiple="true"
        @addFiles="addFiles"
        @removeFiles="removeFiles"
        extensions=".pdf"
      />
    </comp-code>

    <div ref="upload-image"/>
    <comp-code class="h-mt-lg" title="Images" :code="ex2" :script="ex2Script"
      javascript
    >
      <h-file-upload
      :multiple="true"
      :max-size="maxsize"
      title="Select Images"
      subtitle="Click to add images"
      image-only
      />
    </comp-code>

    <div ref="upload-nodrop"/>
    <comp-code class="h-mt-lg" title="Area Drop Hidden" :code="ex3">
      <h-file-upload
        :multiple="true"
        :allow-drop="false"
      />
    </comp-code>

    <div ref="vuejs-sample"/>
    <comp-code class="h-mt-lg" title="Vuejs Sample" :code="vuejsSample" page="template" :script="vuejsSampleScript" javascript>
    </comp-code>

    <div ref="express-server"/>
    <comp-code class="h-mt-lg" title="Express Server" :script="expressServer" page="javascript" hide-code javascript>
    </comp-code>

    <tabs-help
      class="h-mt-md"
      :properties="helpTopics.properties"
      :events="helpTopics.events"
    />
  </template>

  <template v-slot:help>
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
        <h-list-header text="Example"/>
        <h-list-item @click="goToElement('vuejs-sample')">
          <h-list-item-content>
            <h-list-item-text title="Vuejs"></h-list-item-text>
          </h-list-item-content>
        </h-list-item>
        <h-list-item @click="goToElement('express-server')">
          <h-list-item-content>
            <h-list-item-text title="Express"></h-list-item-text>
          </h-list-item-content>
        </h-list-item>
      </h-list>
    </list-help>
  </template>
</page-layout>

</template>

<script>

import axios from 'axios';
import PageLayout from '../pageLayout.vue';
import helpTopics from './help';

export default {
  components: {
    PageLayout,
  },
  data() {
    return {
      helpTopics: {
        properties: [],
        events: [],
      },
      fileList: [],
      maxsize: 1024 * 5000,
      showDrawer: true,
      ex1: `
<h-file-upload
  :multiple="true"
/>
`,
      ex2: `
<h-image-upload
  :multiple="true"
  :max-size="maxsize"
/>
`,
      ex2Script: `
export default {
  data () {
    return {
      maxsize: 1024 * 500
    }
  }
}
`,
      ex3: `
<h-file-upload
  :multiple="true"
  :allow-drop="false"
/>
<h-image-upload
  class="h-mt-sm"
  :multiple="true"
  :allow-drop="false"
/>
`,
      vuejsSample: `
<template>
  <h-page padding>
    <div class="row">
      <div class="col">
        <h-file-upload
          :multiple="true"
          @addFiles="addFiles"
          @removeFiles="removeFiles"
        />
      </div>
    </div>
    <h-btn bg-color="bg-primary" text-color="text-white" text="Submit"
      @click="submitFile()"/>
  </h-page>

</template>
`,
      vuejsSampleScript: `
import axios from 'axios'
export default {
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    addFiles (fileList) {
      this.fileList = fileList
    },
    removeFiles (fileList) {
      this.fileList = fileList
    },
    submitFile () {
      console.log('submit file:', this.fileList.length)
      if (this.fileList.length > 0) {
        if (this.fileList.length === 1) {
          this.uploadSingleFile()
        } else {
          this.uploadMultiplesFiles()
        }
      }
    },
    uploadSingleFile () {
      let formData = new FormData()
      formData.append('file', this.fileList[0])

      console.log('upload a single file')
      axios.post('http://localhost:3000/single-file',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      ).then(async function (response) {
        console.log('SUCCESS!!')
      }).catch(function () {
        console.log('FAILURE!!')
      })
    },
    uploadMultiplesFiles () {
      let formData = new FormData()

      for (var i = 0; i < this.fileList.length; i++) {
        let file = this.fileList[i]
        formData.append('files[' + i + ']', file)
      }

      axios.post('http://localhost:3000/multiple-file',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      ).then(async function (response) {
        console.log('SUCCESS!!')
      }).catch(function () {
        console.log('FAILURE!!')
      })
    }
  }
}
`,
      expressServer: `
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');

const app = express();

// enable files upload
app.use(fileUpload());

//add other middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

// upoad single file
app.post('/single-file', function(req, res) {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
          return res.status(400).send('No files were uploaded.');
        }
    
        // The name of the input field (i.e. "sampleFile") is used
        // to retrieve the uploaded file
        let sampleFile = req.files.file;
    
        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv('./uploads/' + sampleFile.name, function(err) {
          if (err)
            return res.status(500).send(err);
          res.send('File uploaded!');
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

// upoad single file
app.post('/multiple-file', function(req, res) {
  try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
  
      // The name of the input field (i.e. "sampleFile") is used
      // to retrieve the uploaded file
      Object.keys(req.files).forEach(key => {
        let file = req.files[key];

        // Use the mv() method to place the file somewhere on your server
        file.mv('./uploads/' + file.name, function(err) {
          if (err)
            return res.status(500).send(err);
        });
      });
      res.send('Files uploaded!');
  } catch (err) {
    res.status(500).send(err);
  }
});

//make uploads directory static
app.use(express.static('uploads'));

//start app 
const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log('App is listening on port: ', port)
);
`,
    };
  },
  mounted() {
    this.helpTopics.properties = helpTopics.properties;
    this.helpTopics.events = helpTopics.events;
  },
  methods: {
    goToElement(refName) {
      this.$refs.pl.goToElement(this.$refs[refName]);
    },
    addFiles(fileList) {
      console.log('fileList added: ', fileList);
      this.fileList = fileList;
    },
    removeFiles(fileList) {
      console.log('fileList removed: ', fileList);
      this.fileList = fileList;
    },
    submitFile() {
      console.log('submit file:', this.fileList.length);
      if (this.fileList.length > 0) {
        if (this.fileList.length === 1) {
          this.uploadSingleFile();
        } else {
          this.uploadMultiplesFiles();
        }
      }
    },
    uploadSingleFile() {
      const formData = new FormData();
      formData.append('file', this.fileList[0]);

      console.log('upload a single file');
      // axios.post('http://localhost:1337/memorialAPI/uploadMemorial',
      axios.post('http://localhost:3000/single-file',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(async (response) => {
        console.log('SUCCESS!!', response.data);
      }).catch(() => {
        console.log('FAILURE!!');
      });
    },
    uploadMultiplesFiles() {
      const formData = new FormData();

      for (let i = 0; i < this.fileList.length; i += 1) {
        const file = this.fileList[i];
        formData.append(`files[${i}]`, file);
      }

      axios.post('http://localhost:3000/multiple-file',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(async (response) => {
        console.log('SUCCESS!!', response.data);
      }).catch(() => {
        console.log('FAILURE!!');
      });
    },
    uploadMemorial() {
      const formData = new FormData();
      formData.append('pdf', this.fileList[0]);

      axios.post('http://localhost:1337/memorialAPI/uploadMemorial',
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }).then(async (response) => {
        console.log('SUCCESS!!', response.data);
      }).catch(() => {
        console.log('FAILURE!!');
      });
    },
  },
};
</script>

<style scoped>
</style>
