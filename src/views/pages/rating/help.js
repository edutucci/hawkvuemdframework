export default {
  properties: [
    {
      name: 'v-model',
      type: 'Number',
      description: 'Model of the component. Sets the number of stars to fill with a color.'
    },
    {
      name: 'showmessages',
      type: 'Boolean',
      description: 'Show messages below of stars.'
    },
    {
      name: 'halfpoints',
      type: 'Boolean',
      description: 'If true stars will be filled in half star.'
    },
    {
      name: 'messages',
      type: 'Array',
      description: 'Array messages for each star. Example: ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]'
    }
  ],

  events: [
  ]
}
