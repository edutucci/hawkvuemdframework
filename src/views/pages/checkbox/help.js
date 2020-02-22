export default {
  properties: [
    {
      name: 'v-model',
      type: 'String, Array or Boolean.',
      description: 'Model of the component.'
    },
    {
      name: 'value',
      type: 'String, Number or Object',
      description: 'Sets the value of the checkbox.'
    },
    {
      name: 'readonly',
      type: 'Boolean',
      description: 'If true the checkbox is disabled.'
    },
    {
      name: 'checked',
      type: 'Boolean',
      description: 'If true the checkbox is checked.'
    },
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
