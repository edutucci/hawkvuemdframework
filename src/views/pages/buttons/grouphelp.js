export default {
  properties: [
    {
      name: 'v-model',
      type: 'Boolean',
      description: 'Open dropdown if true'
    },
    {
      name: 'bg-color',
      type: 'String',
      description: 'Background color'
    },
    {
      name: 'rounded',
      type: 'Boolean',
      description: 'Sets to button to rounded mode'
    },
    {
      name: 'outlined',
      type: 'Boolean',
      description: 'Sets to button to outlined mode'
    }
  ],

  events: [
    {
      name: '@click',
      description: 'Triggered on button click. Used to change the model'
    }
  ]
}
