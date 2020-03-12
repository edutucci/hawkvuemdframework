export default {
  properties: [
    {
      name: 'v-model',
      type: 'Boolean',
      description: 'Default is true. Allow select multiple files. If false in drop mode the first file is selected.'
    },
    {
      name: 'max-size',
      type: 'Number',
      description: 'Sets the max size for each file.'
    },
    {
      name: 'allow-drop',
      type: 'Boolean',
      description: 'Default is true. If false hidden the drag and drop zone.'
    },
    {
      name: 'extensions',
      type: 'String',
      description: 'File Upload only. Default is "*.*". Sets the extensions for the files.'
    }
  ],

  events: [
    {
      name: '@addFiles',
      description: 'Triggered when the user drag and drop files or select files. A file list is sent.'
    },
    {
      name: '@removeFiles',
      description: 'Triggered when the user removes a file. A file list is sent.'
    }
  ]
}
