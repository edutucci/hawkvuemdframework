<template>
  <h-page-content padding>

    <!--
      Add
      - add event @rightIconClick for aditional input icon click
      - add rightIcon property

      Bugs
    -->

    <div class="row">
      <div class="col">
        <div class="text-h4">Input</div>

        <div class="text-h6 h-mt-md">Textfield</div>
        <h-separator></h-separator>
        <div ref="txt-outlined"/>
        <comp-code class="h-mt-lg" title="Outlined" :code="txtoutlined">
          <div class="column col-inputs">
            <h-input v-model="types" label="Outlined"/>
            <h-input v-model="types" label="Outlined dense" dense/>
          </div>
        </comp-code>

        <div ref="txt-filled"/>
        <comp-code class="h-mt-lg" title="Filled" :code="txtfilled">
          <div class="column col-inputs">
            <h-input v-model="types" label="Filled" filled/>
            <h-input v-model="types" label="Filled dense" filled dense/>
          </div>
        </comp-code>

        <div ref="txt-password"/>
        <comp-code class="h-mt-lg" title="Password" :code="txtpassword">
          <div class="column col-inputs">
            <h-input v-model="types" label="Password" dense type="password"/>
          </div>
        </comp-code>

        <div ref="txt-icons"/>
        <comp-code class="h-mt-lg" title="Icons" :code="txticons">
          <div class="column col-inputs">
            <h-input v-model="icons" label="Phone" leading-icon="fas fa-phone" clearable/>
            <h-input v-model="icons" label="E-Mail" filled leading-icon="fas fa-envelope" clearable/>
          </div>
        </comp-code>

        <div ref="txt-messages"/>
        <comp-code class="h-mt-lg" title="Messages" :code="txtmessages">
          <div class="column col-inputs">
            <h-input v-model="message" label="Phone" clearable
              helper-text="Type a phone"
            />
            <h-input v-model="message" label="Phone" clearable
              error-message="Invalid information"
            />
            <h-input v-model="message" label="TextCounter" clearable
              helper-text="Counter:" input-counter :text-counter="60" :maxlength="60"
            />
          </div>
        </comp-code>

        <div ref="txt-prefix-suffix"/>
        <comp-code class="h-mt-lg" title="Prefix and suffix" :code="txtprefixsuffix">
          <div class="column col-inputs">
            <h-input v-model="prefix" label="Price" clearable
              helper-text="Type a value" prefix="$"
            />
            <h-input v-model="suffix" label="E-Mail" leading-icon="fas fa-envelope" clearable
              helper-text="Type a valid mail" suffix="@gmail.com"
            />
          </div>
        </comp-code>

        <div ref="txt-focus-enter"/>
        <comp-code class="h-mt-lg" title="Input Focus (Using Enter)" :code="txtfocus">
          <div class="column col-inputs">
            <h-input v-model="message" label="Name" ref="name"
              @onEnter="$refs.email.focus()"
            />
            <h-input v-model="message" label="E-Mail" ref="email"
              @onEnter="$refs.name.focus()"
            />
          </div>
        </comp-code>

        <div class="text-h6 h-mt-md">Select</div>
        <h-separator></h-separator>

        <div ref="select-icons"/>
        <comp-code class="h-mt-lg" title="Icons" :code="selectIcon" :script="selectIconScript"
          javascript
        >
          <div class="row">
            <div class="col-6">
              <h-input dense :options="options"
                v-model="selectModel"
                input-select
                input-icon="fas fa-angle-down"
                label="Select with icons"
                display-mode="icon"/>
            </div>
          </div>

          <div class="h-mt-md">
            selectModel: {{ selectModel }}
          </div>
        </comp-code>

        <div ref="select-avatar"/>
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

        <div ref="select-multi"/>
        <comp-code class="h-mt-lg" title="Multi Select" :code="selectMulti" :script="selectMultiScript"
          javascript
        >
          <div class="col-6">
            <h-input dense multi-select :options="options"
            v-model="multiselect"
            @changeMultiselect="changeMultiselect"
            />
          </div>
          <div>
            multiselect: {{ multiselect }}
          </div>
        </comp-code>

        <div ref="select-multi-chips"/>
        <comp-code class="h-mt-lg" title="Multi Select Chips" :code="selectMulti" :script="selectMultiScript"
          javascript
        >
          <div class="col-6">
            <h-input dense multi-select select-chips :options="options"
            v-model="multiselectChip"
            label="select chips"
            />
          </div>
          <div>
            chips: {{ multiselectChip }}
          </div>
        </comp-code>

        <div class="text-h6 h-mt-md">Search</div>
        <h-separator></h-separator>

        <div ref="search-default"/>
        <comp-code class="h-mt-lg" title="Standard" :code="exsearch" :script="exsearchScript"
          javascript
        >
          <h-input
            v-model="search1"
            input-search
            label="Search"
            trailing-icon="fas fa-search"
            @onFilter="onSearch"
            dense
            clearable
            :options="shoptions"
          />

          <div>
            model: {{search1}}
          </div>
        </comp-code>

        <div ref="search-toolbar"/>
        <comp-code class="h-mt-lg" title="Inside Toolbar" :code="exsearch2" :script="exsearchScript2"
          javascript
        >
          <h-app-toolbar bg-color="bg-primary" text-color="text-white">
            <h-app-toolbar-container>
              <h-app-toolbar-title class="text-body1">
                Collection
              </h-app-toolbar-title>
              <h-app-toolbar-action>
                <h-input
                  class="h-mr-xs"
                  v-model="search2"
                  input-search
                  label="Search"
                  trailing-icon="fas fa-search"
                  @onFilter="onSearch2"
                  dense
                  bg-color="bg-primary"
                  clearable
                  :options="shoptions2"
                />
              </h-app-toolbar-action>
            </h-app-toolbar-container>
          </h-app-toolbar>
        </comp-code>

        <div class="text-h6 h-mt-md">Chips</div>
        <h-separator></h-separator>

        <div ref="chip-standard"/>
        <comp-code class="h-mt-lg" title="Standard"  :code="inputchip" :script="inputchipScript" javascript>
          <div class="h-mt-md">
            <h-input
              dense
              label="Type your chips"
              chips
              v-model="chipsInput"
            />
          </div>
          <div>
            chipsInput: {{chipsInput}}
          </div>
        </comp-code>

        <div class="text-h6 h-mt-md">Masks</div>
        <h-separator></h-separator>

        <div ref="mask-text"/>
        <comp-code class="h-mt-lg" title="Text">
          <div>
            <h-toggle v-model="masked" text="Masked?"/>
          </div>

          <h-input dense input-mask mask="(##)#####-####" v-model="maskModelTel" leading-icon="fas fa-phone" :masked="masked" clearable/>
          <span>maskModel: {{maskModelTel}}</span>

        </comp-code>

        <div ref="mask-currency"/>
        <comp-code class="h-mt-lg" title="Currency">
          <h-input input-currency v-model="maskModelCurrency" leading-icon="fas fa-money" :masked="masked" clearable/>
          <span>maskModel: {{maskModelCurrency}}</span>
        </comp-code>

        <h2 class="text-primary"> Vue Properties</h2>
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
        </div>

      </div>
      <div class="col-auto">
        <list-help>
          <h-list>
            <h-list-header text="Types"/>
            <h-list-item @click="goToElement('txt-outlined')">
              <h-list-item-content>
                <h-list-item-text title="Outlined"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('txt-filled')">
              <h-list-item-content>
                <h-list-item-text title="Filled"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-header text="Examples"/>
            <h-list-item @click="goToElement('txt-password')">
              <h-list-item-content>
                <h-list-item-text title="Password"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('txt-icons')">
              <h-list-item-content>
                <h-list-item-text title="Icons"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('txt-messages')">
              <h-list-item-content>
                <h-list-item-text title="Messages"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('txt-prefix-suffix')">
              <h-list-item-content>
                <h-list-item-text title="Prefix and suffix"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('txt-focus-enter')">
              <h-list-item-content>
                <h-list-item-text title="Focus(Enter)"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-header text="Select"/>
            <h-list-item @click="goToElement('select-icons')">
              <h-list-item-content>
                <h-list-item-text title="Icons"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('select-avatar')">
              <h-list-item-content>
                <h-list-item-text title="Avatar"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('select-multi')">
              <h-list-item-content>
                <h-list-item-text title="Multi Select"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('select-multi-chips')">
              <h-list-item-content>
                <h-list-item-text title="Multi Select Chips"/>
              </h-list-item-content>
            </h-list-item>
          </h-list>
          <h-list-header text="Search"/>
          <h-list-item @click="goToElement('search-default')">
            <h-list-item-content>
              <h-list-item-text title="Standard"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('search-toolbar')">
            <h-list-item-content>
              <h-list-item-text title="Inside Toolbar"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-header text="Chips"/>
          <h-list-item @click="goToElement('chip-standard')">
            <h-list-item-content>
              <h-list-item-text title="Standard"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-header text="Mask"/>
          <h-list-item @click="goToElement('mask-text')">
            <h-list-item-content>
              <h-list-item-text title="Text"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('mask-currency')">
            <h-list-item-content>
              <h-list-item-text title="Currency"/>
            </h-list-item-content>
          </h-list-item>
        </list-help>
      </div>
    </div>

  </h-page-content>
</template>

<script>

import viewport from '../../../components/others/viewport'
import _ from 'lodash'

export default {
  components: {
  },
  data () {
    return {
      // textfield
      types: '',
      icons: '',
      message: '',
      prefix: '',
      suffix: '',

      // select
      selectModel: 'Bluetooth1',
      selectModel1: 'chrome1',
      multiselect: ['heart1', 'discord1'],
      multiselectChip: ['heart1', 'discord1'],
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

      // search
      search1: '',
      search2: '',
      searchOptions: [],
      shoptions: [],
      shoptions2: [],

      // chips
      chipsInput: ['tucci', 'cleiton', 'carlos', 'pablo', 'luis'],

      // mask
      masked: false,
      maskModelTel: '19691967924',
      maskModelCurrency: '20000',

      // code preview
      // textfield
      txtoutlined: `
<div class="column col-inputs">
  <h-input v-model="types" label="Outlined"/>
  <h-input v-model="types" label="Outlined dense" dense/>
</div>
`,
      txtfilled: `
<div class="column col-inputs">
  <h-input v-model="types" label="Filled" filled/>
  <h-input v-model="types" label="Filled dense" filled dense/>
</div>
`,
      txtpassword: `
<div class="column col-inputs">
  <h-input v-model="types" label="Password" dense type="password"/>
</div>  
`,
      txticons: `
<div class="column col-inputs">
  <h-input v-model="icons" label="Phone" leading-icon="fas fa-phone" clearable/>
  <h-input v-model="icons" label="E-Mail" filled leading-icon="fas fa-envelope" clearable/>
</div> 
`,
      txtmessages: `
<div class="column col-inputs">
  <h-input v-model="message" label="Phone" clearable
    helper-text="Type a phone"
  />
  <h-input v-model="message" label="Phone" clearable
    error-message="Invalid information"
  />
  <h-input v-model="message" label="TextCounter" clearable
    helper-text="Counter:" input-counter :text-counter="60" :maxlength="60"
  />
</div>
`,
      txtprefixsuffix: `
<div class="column col-inputs">
  <h-input v-model="prefix" label="Price" clearable
    helper-text="Type a value" prefix="$"
  />
  <h-input v-model="suffix" label="E-Mail" leading-icon="fas fa-envelope" clearable
    helper-text="Type a valid mail" suffix="@gmail.com"
  />
</div>
`,
      txtfocus: `
<div class="column col-inputs">
  <h-input v-model="message" label="Name" ref="name"
    @onEnter="$refs.email.focus()"
  />
  <h-input v-model="message" label="E-Mail" ref="email"
    @onEnter="$refs.name.focus()"
  />
</div>
`,
      // select
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
`,

      // search
      exsearch: `
<h-input
  v-model="search1"
  input-search
  label="Search"
  trailing-icon="fas fa-search"
  @onFilter="onSearch"
  dense
  clearable
  :options="shoptions"
/>

<div>
  model: {{search1}}
</div>
`,
      exsearchScript: `
import _ from 'lodash'
export default {
  data () {
    return {
      model1: '',
      selectOptions: [],
      options: []
    }
  },
  mounted () {
    this.loadOptions()
  },
  methods: {
    loadOptions () {
      this.selectOptions = []
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.png', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions' })
    },
    onSearch (query) {
      this.options = []
      if (query.length === 0) {
        this.options = _.cloneDeep(this.selectOptions)
      } else {
        this.options = this.selectOptions.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
      }
    }
  }
}
`,
      exsearch2: `
<h-app-toolbar bg-color="bg-primary" text-color="text-white">
  <h-app-toolbar-container>
    <h-app-toolbar-title class="text-body1">
      Collection
    </h-app-toolbar-title>
    <h-app-toolbar-action>
      <h-input
        class="h-mr-xs"
        v-model="search2"
        input-search
        label="Search"
        trailing-icon="fas fa-search"
        @onFilter="onSearch2"
        dense
        bg-color="bg-primary"
        clearable
        :options="shoptions2"
      />
    </h-app-toolbar-action>
  </h-app-toolbar-container>
</h-app-toolbar>
`,
      exsearchScript2: `
import _ from 'lodash'
export default {
  data () {
    return {
      model2: '',
      selectOptions: [],
      options2: []
    }
  },
  mounted () {
    this.loadOptions()
  },
  methods: {
    loadOptions () {
      this.selectOptions = []
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.jpeg', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.selectOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle' })
      this.selectOptions.push({ img: 'avatar/folder_open.jpeg', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })
      this.selectOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions' })
    },
    onSearch2 (query) {
      this.options2 = []
      if (query.length === 0) {
        this.options2 = _.cloneDeep(this.selectOptions)
      } else {
        this.options2 = this.selectOptions.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
      }
    }
  }
}
`,
      inputchip: `
<div class="h-mt-md">
  <h-input
    dense
    label="Type your chips"
    chips
    v-model="chipsInput"
  />
</div>
<div>
  chipsInput: {{chipsInput}}
</div>
`,
      inputchipScript: `
export default {
  data () {
    return {
      chipsInput: ['tucci', 'cleiton', 'carlos', 'pablo', 'luis']
    }
  }
}
`
    }
  },
  mounted () {
    this.loadSearchOptions()
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    },

    // input
    onKeyTab () {
      console.log('method onKeyTab fired')
      this.$nextTick(() => {
        this.$refs.name.focus()
      })
    },
    onBlur () {
      console.log('method onBlur fired')
      this.$nextTick(() => {
        this.$refs.name.focus()
      })
    },
    // select
    changeMultiselect (value) {
      // console.log('changeMultiselect: ' + value)
    },

    // search
    loadSearchOptions () {
      this.searchOptions = []
      this.searchOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle' })
      this.searchOptions.push({ img: 'avatar/folder_open.png', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos' })
      this.searchOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.searchOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle' })
      this.searchOptions.push({ img: 'avatar/folder_open.png', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos' })
      this.searchOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions' })
      this.searchOptions.push({ avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle' })
      this.searchOptions.push({ img: 'avatar/folder_open.png', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos' })
      this.searchOptions.push({ icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions' })
    },
    onSearch (query) {
      this.shoptions = []
      if (query.length === 0) {
        this.shoptions = _.cloneDeep(this.searchOptions)
      } else {
        this.shoptions = this.searchOptions.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
      }
    },
    onSearch2 (query) {
      this.shoptions2 = []
      if (query.length === 0) {
        this.shoptions2 = _.cloneDeep(this.searchOptions)
      } else {
        this.shoptions2 = this.searchOptions.filter(opt => _.includes(opt.text.toLowerCase(), query.toLowerCase()))
      }
    }
  }
}
</script>

<style scoped>
 .col-inputs > .main-input-container {
   margin-top: 10px;
 }

</style>
