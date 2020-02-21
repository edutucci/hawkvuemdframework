export default {
  properties: [
    {
      name: 'text-color',
      type: 'String',
      description: 'Sets the color for the icon.'
    },
    {
      name: 'icon',
      type: 'String',
      description: 'Name of the icon.'
    },
    {
      name: 'size',
      type: 'String',
      description: 'Sets the icon size. Default: "16px". Example: "24px"'
    },
    {
      name: 'spin or pulse',
      type: 'Boolean',
      description: 'Animating the icon. Works with Fonte Awesome icons.'
    },
    {
      name: 'image',
      type: 'Boolean',
      description: 'Use this options if you want show an icon as image format.'
    }
  ],

  events: [
    {
      name: '@click',
      description: 'Triggered on icon click.'
    }
  ]
}
