export default {
  properties: [
    {
      name: 'v-model',
      type: 'String, Array, Number',
      description: 'Model of the component.'
    },
    {
      name: 'type',
      type: 'Type of the input',
      description: 'Available: text, password, select, multi-select, search and currency.'
    },
    {
      name: 'filled',
      type: 'Boolean',
      description: 'Sets the input to filled mode. Outlined is default.'
    },
    {
      name: 'label',
      type: 'String',
      description: 'Label of the input.'
    },
    {
      name: 'placeholder',
      type: 'String',
      description: 'Sets the placeholder for the input. If empty or null label will be set.'
    },
    {
      name: 'dense',
      type: 'Boolean',
      description: 'Sets the input to dense mode.'
    },
    {
      name: 'leading-icon',
      type: 'String',
      description: 'Sets an icon to left of the input.'
    },
    {
      name: ' trailing-icon',
      type: 'String',
      description: 'Sets an icon to right of the input.'
    },
    {
      name: 'clearable',
      type: 'Boolean',
      description: 'Adds an icon to clear the input.'
    },
    {
      name: 'prefix',
      type: 'String',
      description: 'Adds an text before the input.'
    },
    {
      name: 'suffix',
      type: 'String',
      description: 'Adds an text after the input.'
    },
    {
      name: 'options',
      type: 'String',
      description: 'Adds an text after the input.'
    },
    {
      name: 'use-mask',
      type: 'String',
      description: 'Allows the user to type text using mask. Works with type text and search.'
    }
  ],

  events: [
    {
      name: '@click',
      description: 'Triggered on icon click.'
    },
    {
      name: '@clearSearch',
      description: 'Triggered on icon clear click when is search mode.'
    }
  ]
}

// eslint-disable-next-line no-lone-blocks
{ /* <h2 class="text-primary"> Vue Properties</h2>
<hr>

<div class="flex">
  <div>
    <h3>Name</h3>
    <div>type</div>
    <div>placeholder</div>
    <div>left-icon</div>
    <div>label</div>
    <div>error-message</div>
    <div>helper-text</div>
    <div>maxlength</div>
    <div>text-counter</div>
    <div>text-center</div>
    <div>outlined</div>
    <div>clearable</div>
    <div>readonly</div>
  </div>
  <div class="h-pl-md">
    <h3>Type</h3>
    <div>String</div>
    <div>String</div>
    <div>String</div>
    <div>String</div>
    <div>String</div>
    <div>String</div>
    <div>Number</div>
    <div>Number</div>
    <div>Boolean</div>
    <div>Boolean</div>
    <div>Boolean</div>
    <div>Boolean</div>
  </div>
  <div class="h-pl-md">
    <h3 >Description</h3>
    <div>Type of input. Available: text and password</div>
    <div>Sets the placeholder for the input</div>
    <div>Sets the icon to left of the input</div>
    <div>Sets the label for the input</div>
    <div>Sets the error message for the input</div>
    <div>Sets the helper text for the input</div>
    <div>Specifies the maximum number of character for an input</div>
    <div>Specifies the quantity of character of the input</div>
    <div>Sets the text align to the center</div>
    <div>Sets the input to outlined mode</div>
    <div>Shows the icon to clear input on right side</div>
    <div>Input can not be modified</div>
  </div>
</div>

<h2 class="text-primary"> Vue Events</h2>
<hr>

<div class="flex">
  <div>
    <h3>Name</h3>
    <div>@onKeyDown</div>
    <div>@onTab</div>
    <div>@onEnter</div>
    <div>@change(text)</div>
  </div>
  <div class="h-pl-md">
    <h3>Description</h3>
    <div>Triggered on arrow down</div>
    <div>Triggered on Tab</div>
    <div>Triggered on Enter</div>
    <div>Triggered when input changes</div>
  </div>
</div>

<h2 class="text-primary"> Vue Methods</h2>
<hr>

<div class="flex">
  <div>
    <h3>Name</h3>
    <div>focus</div>
  </div>
  <div class="h-pl-md">
    <h3>Description</h3>
    <div>The input get focus</div>
  </div>
</div> */ }
