<template>
  <div>
    <h1>Select</h1>

    <h1> Select Options sample </h1>
    <div class="boxshadow">
      <pre v-highlightjs="selectOptions">
        <code class="html">
        </code>
      </pre>
    </div>

    <h1>Select with Icons</h1>
    <div class="col-6">
      <h-select :options="options"
        v-model="selectModel"
        @input="onInput"
        display-mode="icon"/>
      <span>selectModel: {{ selectModel }}</span>
    </div>
    <div class="boxshadow">
      <pre v-highlightjs="selectIcon">
        <code class="html">
        </code>
      </pre>
    </div>

    <h1>Select with Avatar</h1>
    <div class="col-6">
      <h-select :options="options" v-model="selectModel1" display-mode="avatar"/>
      <span>selectModel1: {{ selectModel1 }}</span>
    </div>
    <div class="boxshadow">
      <pre v-highlightjs="selectAvatar">
        <code class="html">
        </code>
      </pre>
    </div>

    <h1>Multi Select</h1>
    <div class="col-6">
      <h-select :options="options"
       v-model="multiselect"
       multiselect
       @changeMultiselect="changeMultiselect"
       />
      <span>multiselect: {{ multiselect }}</span>
    </div>
    <div class="boxshadow">
      <pre v-highlightjs="selectMulti">
        <code class="html">
        </code>
      </pre>
    </div>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>options</div>
        <div>displayMode</div>
        <div>multiselect</div>
        <div>placeholder</div>
        <div>dtu</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Array</div>
        <div>String</div>
        <div>Boolean</div>
        <div>String</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Array with data for the dropdown menu</div>
        <div>icon or avatar. One of the options will be appear before the menu item</div>
        <div>Multiselect mode is enabled</div>
        <div>Placeholder for the input</div>
        <div>Shows the dropdown menu from bottom to top</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@changeMultiselect(value)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered when user clicks on checkbox in multiselect mode. The model value is sent.</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      selectModel: 'Bluetooth1',
      selectModel1: 'chrome1',
      multiselect: ['heart1', 'discord1'],
      options: [
        {
          'text': 'Address-book',
          'value': 'address-book1',
          'icon': ['fas', 'address-book'],
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        },
        {
          'text': 'Bluetooth',
          'value': 'Bluetooth1',
          'icon': ['fab', 'bluetooth'],
          'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918'
        },
        {
          'text': 'heart',
          'value': 'heart1',
          'icon': ['fas', 'heart'],
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'text': 'chrome',
          'value': 'chrome1',
          'icon': ['fab', 'chrome'],
          'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757'
        },
        {
          'text': 'discord',
          'value': 'discord1',
          'icon': ['fab', 'discord'],
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'text': 'music',
          'value': 'music1',
          'icon': ['fas', 'music'],
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        }
      ],
      selectIcon: `
    <h1>Select with Icons</h1>
    <div class="col-6">
      <h-select :options="options"
        v-model="selectModel"
        @input="onInput"
        display-mode="icon"/>    
      <span>selectModel: {{ selectModel }}</span>        
    </div>
      `,
      selectAvatar: `
    <h1>Select with Avatar</h1>
    <div class="col-6">    
      <h-select :options="options" v-model="selectModel1" display-mode="avatar"/>    
      <span>selectModel1: {{ selectModel1 }}</span>       
    </div>
      `,
      selectMulti: `
    <h1>Multi Select</h1>
    <div class="col-6">
      <h-select :options="options" v-model="multiselect" multiselect/>    
      <span>multiselect: {{ multiselect }}</span>       
    </div>
      `,
      selectOptions: `
options: [
  {
    'text': 'Address-book',
    'value': 'address-book1',
    'icon': ['fas', 'address-book'],
    'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
  },
  {
    'text': 'Bluetooth',
    'value': 'Bluetooth1',
    'icon': ['fab', 'bluetooth'],
    'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918'
  },
  {
    'text': 'heart',
    'value': 'heart1',
    'icon': ['fas', 'heart'],
    'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
  },
  {
    'text': 'chrome',
    'value': 'chrome1',
    'icon': ['fab', 'chrome'],
    'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757'
  },
  {
    'text': 'discord',
    'value': 'discord1',
    'icon': ['fab', 'discord'],
    'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
  },
  {
    'text': 'music',
    'value': 'music1',
    'icon': ['fas', 'music'],
    'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
  }
]      
      `
    }
  },
  methods: {
    onInput (value) {
      // console.log('input selecionado: ' + value)
    },
    changeMultiselect (value) {
      // console.log('changeMultiselect: ' + value)
    }
  }
}
</script>
