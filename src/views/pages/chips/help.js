export default {
  properties: [
    {
      name: 'v-model',
      type: 'Boolean.',
      description: 'Model of the component.'
    },
    {
      name: 'dense',
      type: 'Boolean',
      description: 'Sets the chips to dense mode.'
    },
    {
      name: 'outlined',
      type: 'Boolean',
      description: 'Sets the chips to outlined mode.'
    },
    {
      name: 'icon',
      type: 'String',
      description: 'Sets the icon to the chip.'
    },
    {
      name: 'avatar',
      type: 'String',
      description: 'Sets a avatar to the chip.'
    },
    {
      name: 'filter',
      type: 'Boolean',
      description: ' If both filter and model is true the chips is selected.'
    },
    {
      name: 'text',
      type: 'String or Number',
      description: 'Sets the text of the chips.'
    }
  ],

  events: [
    // {
    //   name: '@change(value)',
    //   description: 'Triggered immediately on model change'
    // }
  ]
}
