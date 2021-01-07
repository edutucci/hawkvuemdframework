export default {
  properties: [
    {
      name: 'bg-color',
      type: 'String',
      description: 'Background color',
    },
    {
      name: 'text-color',
      type: 'String',
      description: 'Text color of the button',
    },
    {
      name: 'text',
      type: 'String',
      description: 'Text of the button',
    },
    {
      name: 'left-icon',
      type: 'String',
      description: 'Sets the icon to left of the button',
    },
    {
      name: 'right-icon',
      type: 'String',
      description: 'Sets the icon to right of the button',
    },
    {
      name: 'textbutton',
      type: 'Boolean',
      description: 'Sets to button to textbutton mode',
    },
    {
      name: 'outlined',
      type: 'Boolean',
      description: 'Sets to button to outlined mode',
    },
    {
      name: 'rounded',
      type: 'Boolean',
      description: 'Sets to button to rounded mode',
    },
    {
      name: 'fab',
      type: 'Boolean',
      description: 'Sets to button to fab mode',
    },
    {
      name: 'size',
      type: 'String',
      description: 'Sets to button to dropdown mode. Availables: xs, sm, md, lg, xl. Default is md',
    },
    {
      name: 'dropdown',
      type: 'Boolean',
      description: 'Sets to button to dropdown mode',
    },
    {
      name: 'disabled',
      type: 'Boolean',
      description: 'Button is disabled',
    },
  ],

  events: [
    {
      name: '@click',
      description: 'Triggered on button click',
    },
  ],
};
