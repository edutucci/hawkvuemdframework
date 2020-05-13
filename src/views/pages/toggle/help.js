export default {
  properties: [
    {
      name: 'v-model',
      type: 'Array or Boolean.',
      description: 'Model of the component.'
    },
    {
      name: 'value',
      type: 'String, Number or Object',
      description: 'Sets the value of the toggle.'
    },
    // {
    //   name: 'readonly',
    //   type: 'Boolean',
    //   description: 'If true the toggle is disabled.'
    // },
    {
      name: 'text',
      type: 'String or Number',
      description: 'Sets the text of the checkbox.'
    }
  ],

  events: [
    {
      name: '@change(value)',
      description: 'Triggered immediately on model change'
    }
  ]
}
