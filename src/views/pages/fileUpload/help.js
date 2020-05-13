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
      description: 'Sets the extensions for the files for File Upload. Default is all files types. Accepts single extension: ".doc" or multiple extension: ".gif,.jpg,.png,.doc".'
    },
    {
      name: 'audio-only',
      type: 'Boolean',
      description: 'Default is false. If true accepts audio file only.'
    },
    {
      name: 'video-only',
      type: 'Boolean',
      description: 'Default is false. If true accepts video file only.'
    },
    {
      name: 'image-only',
      type: 'Boolean',
      description: 'Default is false. If true accepts image file only.'
    },
    {
      name: 'title',
      type: 'String',
      description: 'Sets title for file Upload.'
    },
    {
      name: 'subtitle',
      type: 'String',
      description: 'Sets subtitle for file Upload.'
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
