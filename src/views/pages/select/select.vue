<template>
  <h-page-content padding>
    <div class="text-h4">Select</div>

    <!--
      Bugs
      - Corrigir o valor selecionado pelo item
    -->

    <comp-code class="h-mt-lg" title="Icons" :code="selectIcon" :script="selectIconScript"
      javascript
    >
      <div class="col-6">
        <h-input dense :options="options"
          v-model="selectModel"
          input-select
          input-icon="fas fa-angle-down"
          label="Select with icons"
          display-mode="icon"/>
      </div>
      <div class="h-mt-md">
        selectModel: {{ selectModel }}
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Avatar" :code="selectAvatar" :script="selectAvatarScript"
      javascript
    >
      <div class="col-6">
        <h-input dense input-select :options="options" v-model="selectModel1" input-icon="fas fa-angle-down" display-mode="avatar"/>
      </div>
      <div>
        selectModel1: {{ selectModel1 }}
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Multi Select" :code="selectMulti" :script="selectMultiScript"
      javascript
    >
      <div class="col-6">
        <h-input dense multi-select :options="options" input-icon="fas fa-angle-down"
        v-model="multiselect"
        @changeMultiselect="changeMultiselect"
        />
      </div>
      <div>
        multiselect: {{ multiselect }}
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Multi Select Chips" :code="selectMulti" :script="selectMultiScript"
      javascript
    >
      <div class="col-6">
        <h-input dense multi-select select-chips :options="options" input-icon="fas fa-angle-down"
        v-model="multiselect"
        @changeMultiselect="changeMultiselect"
        label="select chips"
        />
      </div>
      <div>
        multiselect: {{ multiselect }}
      </div>
    </comp-code>

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>options</div>
        <div>displayMode</div>
        <div>multiselect</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Array</div>
        <div>String</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Array with data for the dropdown menu</div>
        <div>icon or avatar. One of the options will be appear before the menu item</div>
        <div>Multiselect mode is enabled</div>
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

  </h-page-content>
</template>

<script>

export default {
  data () {
    return {
      selectModel: 'Bluetooth1',
      selectModel1: 'chrome1',
      multiselect: ['heart1', 'discord1'],
      options: [
        {
          'text': 'Address-book',
          'value': 'address-book1',
          'icon': 'fas fa-address-book',
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        },
        {
          'text': 'Bluetooth',
          'value': 'Bluetooth1',
          'icon': 'fab fa-bluetooth',
          'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918'
        },
        {
          'text': 'heart',
          'value': 'heart1',
          'icon': 'fas fa-heart',
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'text': 'chrome',
          'value': 'chrome1',
          'icon': 'fab fa-chrome',
          'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757'
        },
        {
          'text': 'discord',
          'value': 'discord1',
          'icon': 'fab fa-discord',
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'text': 'music',
          'value': 'music1',
          'icon': 'fas fa-music',
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        }
      ],
      selectIcon: `
<div class="col-6">
  <h-input :options="options"
    v-model="selectModel"
    select-single
    input-icon="fas fa-angle-down"
    label="Select with icons"
    display-mode="icon"/>
</div>
<div class="h-mt-md">
  selectModel: {{ selectModel }}
</div>
`,
      selectIconScript: `
export default {
  data () {
    return {
      selectModel: 'Bluetooth1',
      options: [
        {
          'text': 'Address-book',
          'value': 'address-book1',
          'icon': 'fas fa-address-book',
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        },
        {
          'text': 'Bluetooth',
          'value': 'Bluetooth1',
          'icon': 'fab fa-bluetooth',
          'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918'
        },
        {
          'text': 'heart',
          'value': 'heart1',
          'icon': 'fas fa-heart',
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'text': 'chrome',
          'value': 'chrome1',
          'icon': 'fab fa-chrome',
          'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757'
        },
        {
          'text': 'discord',
          'value': 'discord1',
          'icon': 'fab fa-discord',
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'text': 'music',
          'value': 'music1',
          'icon': 'fas fa-music',
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        }
      ],
    }
  }
}
`,
      selectAvatar: `
<div class="col-6">
  <h-input select-single :options="options" v-model="selectModel1" input-icon="fas fa-angle-down" display-mode="avatar"/>
</div>
<div>
  selectModel1: {{ selectModel1 }}
</div>
`,
      selectAvatarScript: `
export default {
  data () {
    return {
      selectModel1: 'chrome1',
      options: [
        {
          'text': 'Address-book',
          'value': 'address-book1',
          'icon': 'fas fa-address-book',
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        },
        {
          'text': 'Bluetooth',
          'value': 'Bluetooth1',
          'icon': 'fab fa-bluetooth',
          'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918'
        },
        {
          'text': 'heart',
          'value': 'heart1',
          'icon': 'fas fa-heart',
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'text': 'chrome',
          'value': 'chrome1',
          'icon': 'fab fa-chrome',
          'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757'
        },
        {
          'text': 'discord',
          'value': 'discord1',
          'icon': 'fab fa-discord',
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'text': 'music',
          'value': 'music1',
          'icon': 'fas fa-music',
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        }
      ],
    }
  }
}
`,
      selectMulti: `
<div class="col-6">
  <h-input multiSelect :options="options" input-icon="fas fa-angle-down"
  v-model="multiselect"
  @changeMultiselect="changeMultiselect"
  />
</div>
<div>
  multiselect: {{ multiselect }}
</div>
`,
      selectMultiScript: `
export default {
  data () {
    return {
      multiselect: ['heart1', 'discord1'],
      options: [
        {
          'text': 'Address-book',
          'value': 'address-book1',
          'icon': 'fas fa-address-book',
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        },
        {
          'text': 'Bluetooth',
          'value': 'Bluetooth1',
          'icon': 'fab fa-bluetooth',
          'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918'
        },
        {
          'text': 'heart',
          'value': 'heart1',
          'icon': 'fas fa-heart',
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'text': 'chrome',
          'value': 'chrome1',
          'icon': 'fab fa-chrome',
          'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757'
        },
        {
          'text': 'discord',
          'value': 'discord1',
          'icon': 'fab fa-discord',
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
        },
        {
          'text': 'music',
          'value': 'music1',
          'icon': 'fas fa-music',
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
        }
      ],
    }
  },
  methods: {
    changeMultiselect (value) {
      // console.log('changeMultiselect: ' + value)
    }
  }
}    
`,
      selectOptions: `
options: [
  {
    'text': 'Address-book',
    'value': 'address-book1',
    'icon': 'fas fa-address-book',
    'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
  },
  {
    'text': 'Bluetooth',
    'value': 'Bluetooth1',
    'icon': 'fab fa-bluetooth',
    'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918'
  },
  {
    'text': 'heart',
    'value': 'heart1',
    'icon': 'fas fa-heart',
    'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
  },
  {
    'text': 'chrome',
    'value': 'chrome1',
    'icon': 'fab fa-chrome',
    'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757'
  },
  {
    'text': 'discord',
    'value': 'discord1',
    'icon': 'fab fa-discord',
    'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650'
  },
  {
    'text': 'music',
    'value': 'music1',
    'icon': 'fas fa-music',
    'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg'
  }
]
`
    }
  },
  methods: {
    changeMultiselect (value) {
      // console.log('changeMultiselect: ' + value)
    }
  }
}
</script>
