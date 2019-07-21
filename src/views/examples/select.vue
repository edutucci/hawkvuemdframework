<template>
  <div>

    <h3>Icons</h3>
    <div class="h-pa-sm border border-gray border-radius">
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
    </div>

    <h3>Avatar</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="col-6">
        <h-input select-single :options="options" v-model="selectModel1" input-icon="fas fa-angle-down" display-mode="avatar"/>
      </div>
      <div>
        selectModel1: {{ selectModel1 }}
      </div>
    </div>

    <h3>Multi Select</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="col-6">
        <h-input multiSelect :options="options" input-icon="fas fa-angle-down"
        v-model="multiselect"
        @changeMultiselect="changeMultiselect"
        />
      </div>
      <div>
        multiselect: {{ multiselect }}
      </div>
    </div>

  </div>
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
      selectAvatar: `
<div class="col-6">
  <h-input select-single :options="options" v-model="selectModel1" input-icon="fas fa-angle-down" display-mode="avatar"/>
</div>
<div>
  selectModel1: {{ selectModel1 }}
</div>
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
