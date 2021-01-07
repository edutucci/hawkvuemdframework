export default {
  properties: [
    {
      name: 'src',
      type: 'String',
      description: 'Image path or image data.',
    },
    {
      name: 'bg-color',
      type: 'String',
      description: 'Sets the background color for image.',
    },
    {
      name: 'size',
      type: 'String',
      description: 'Sets the image size. Default: "40px". Example: "128px"',
    },
    {
      name: 'avatar',
      type: 'Boolean',
      description: 'Shows a rounded image.',
    },
    {
      name: 'border-radius',
      type: 'Boolean',
      description: 'Shows an image with border radius.',
    },
  ],

  events: [
    {
      name: '@click',
      description: 'Triggered on icon click.',
    },
  ],
};
