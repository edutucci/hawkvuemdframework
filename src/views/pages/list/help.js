export default {
  listProperties: [
    {
      name: 'bordered',
      type: 'Boolean',
      description: 'Add borders to the list.'
    },
    {
      name: 'content-separator',
      type: 'Boolean',
      description: 'Add bottom border to h-list-item-content.'
    },
    {
      name: 'item-separator',
      type: 'Boolean',
      description: 'Add bottom border to h-list-item.'
    }
  ],

  listHeaderProperties: [
    {
      name: 'text',
      type: 'String',
      description: 'Sets the header text.'
    }
  ],

  listItemImageProperties: [
    {
      name: 'src',
      type: 'String',
      description: 'Image path or image data.'
    },
    {
      name: 'large',
      type: 'Boolean',
      description: 'Add large image for the item.'
    }
  ],

  listItemTextProperties: [
    {
      name: 'title',
      type: 'String',
      description: 'Sets the item text.'
    },
    {
      name: 'caption',
      type: 'String',
      description: 'Sets the item caption.'
    }
  ]
}
