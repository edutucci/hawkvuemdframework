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
      <h-select :options="options" v-model="multiselect" multiselect/>    
      <span>multiselect: {{ multiselect }}</span>       
    </div>
    <div class="boxshadow">
      <pre v-highlightjs="selectMulti">
        <code class="html">
        </code>
      </pre>
    </div>

    <!-- Vue Events
    Vue Event 	Description
    @input(value) 	Triggered when the user selects um item. -->

  </div>
</template>

<script>

import HSelect from '../components/select/HSelect.vue'
import HAvatar from '../components/image/HAvatar.vue'

export default {
  components: {
    HSelect,
    HAvatar
  },
  data () {
    return {
      selectModel: '',
      selectModel1: '',
      multiselect: [],
      options: [
        {
          'label': 'Address-book',
          'value': 'address-book',
          'icon': ['fas', 'address-book'],
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        },
        {
          'label': 'Bluetooth',
          'value': 'Bluetooth',
          'icon': ['fab', 'bluetooth'],
          'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918'
        },
        {
          'label': 'heart',
          'value': 'heart',
          'icon': ['fas', 'heart'],
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'label': 'chrome',
          'value': 'chrome',
          'icon': ['fab', 'chrome'],
          'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757'
        },
        {
          'label': 'discord',
          'value': 'discord',
          'icon': ['fab', 'discord'],
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'label': 'music',
          'value': 'music',
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
    'label': 'Address-book',
    'value': 'address-book',
    'icon': ['fas', 'address-book'],
    'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
  },
  {
    'label': 'Bluetooth',
    'value': 'Bluetooth',
    'icon': ['fab', 'bluetooth'],
    'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918'
  },
  {
    'label': 'heart',
    'value': 'heart',
    'icon': ['fas', 'heart'],
    'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
  },
  {
    'label': 'chrome',
    'value': 'chrome',
    'icon': ['fab', 'chrome'],
    'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757'
  },
  {
    'label': 'discord',
    'value': 'discord',
    'icon': ['fab', 'discord'],
    'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
  },
  {
    'label': 'music',
    'value': 'music',
    'icon': ['fas', 'music'],
    'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
  }
]      
      `
    }
  },
  methods: {
    onInput (value) {
      console.log('input selecionado: ' + value)
    }
  }
}
</script>
