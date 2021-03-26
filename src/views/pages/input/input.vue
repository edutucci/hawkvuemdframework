<template>
  <page-layout ref="pl" title="Input Textfield">
    <template v-slot:components>
      <div ref="txt-outlined"/>
      <comp-code class="h-mt-lg" title="Outlined" :code="txtoutlined">
        <div class="column col-inputs">
          <h-input v-model="typesModel" label="Outlined" placeholder="Outlined"/>
          <h-input v-model="typesModel" label="Outlined dense" placeholder="Outlined dense" dense/>
        </div>
        <div>
          Model: {{typesModel}}
        </div>
      </comp-code>

      <div ref="txt-filled"/>
      <comp-code class="h-mt-lg" title="Filled" :code="txtfilled">
        <div class="column col-inputs">
          <h-input v-model="typesModel" label="Filled" placeholder="Filled" filled/>
          <h-input v-model="typesModel" label="Filled dense" placeholder="Filled dense" filled dense clearable/>
        </div>
        <div>
          Model: {{typesModel}}
        </div>
      </comp-code>

      <div ref="txt-password"/>
      <comp-code class="h-mt-lg" title="Password" :code="txtpassword">
        <div class="column col-inputs">
          <h-input v-model="passwordModel" label="Password" dense type="password"/>
        </div>
        <div>
          Model: {{passwordModel}}
        </div>
      </comp-code>

      <div ref="txt-icons"/>
      <comp-code class="h-mt-lg" title="Icons" :code="txticons">
        <div class="column col-inputs">
          <h-input dense v-model="iconsModel" label="Phone" leading-icon="fas fa-phone" clearable/>
          <h-input dense v-model="iconsModel" label="E-Mail" filled leading-icon="fas fa-envelope" clearable/>
        </div>
        <div>
          Model: {{iconsModel}}
        </div>
      </comp-code>

      <div ref="txt-messages"/>
      <comp-code class="h-mt-lg" title="Messages" :code="txtmessages">
        <div class="column col-inputs">
          <h-input dense v-model="messageModel" label="Phone" clearable
            helper-text="Type a phone"
          />
          <h-input dense v-model="messageModel" label="Phone" clearable
            error-message="Invalid information"
          />
          <h-input dense v-model="messageModel" label="TextCounter" clearable
            helper-text="Counter:" input-counter :text-counter="60" :maxlength="60"
          />
        </div>
        <div>
          Model: {{messageModel}}
        </div>
      </comp-code>

      <div ref="txt-prefix-suffix"/>
      <comp-code class="h-mt-lg" title="Prefix and suffix" :code="txtprefixsuffix">
        <div class="column col-inputs">
          <h-input dense v-model="prefixModel" label="Price" clearable
            helper-text="Type a value" prefix="$"
          />
          <h-input dense v-model="suffixModel" label="E-Mail" leading-icon="fas fa-envelope" clearable
            helper-text="Type a valid mail" suffix="@gmail.com"
          />
        </div>
        <div>
          Prefix Model: {{prefixModel}}
        </div>
        <div>
          Sufix Model: {{suffixModel}}
        </div>
      </comp-code>

      <div ref="txt-focus-enter"/>
      <comp-code class="h-mt-lg" title="Input Focus (Using Enter)" :code="txtfocus">
        <div class="column col-inputs">
          <h-input dense v-model="focusModel" label="Name" ref="name"
            @onEnter="$refs.email.focus()"
          />
          <h-input dense v-model="focusModel" label="E-Mail" ref="email"
            @onEnter="$refs.name.focus()"
          />
        </div>
      </comp-code>

      <div ref="txt-loading"/>
      <comp-code class="h-mt-lg" title="Loading (readonly)" :code="txtloading" :script="txtloadingScript" javascript>
        <div class="row col-inputs">
          <div class="col">
            <h-input dense v-model="focusModel" label="Loading" :loading="loading"
              trailing-icon="fas fa-search" clearable readonly/>
          </div>
          <div class="col-auto h-pl-xs">
            <h-btn v-if="!loading" bg-color="bg-primary" text-color="text-white" text="Start" @click="loading = true"/>
            <h-btn v-else bg-color="bg-primary" text-color="text-white" text="Stop" @click="loading = false"/>
          </div>
        </div>
      </comp-code>

      <div class="text-h6 h-mt-md">Select</div>
      <h-separator></h-separator>

      <div ref="select-icons"/>
      <comp-code class="h-mt-lg" title="Icons" :code="selectIcon" :script="selectIconScript" javascript>
        <div class="row">
          <div class="col-6">
            <h-input dense :options="options"
              v-model="selectModel"
              type="select"
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
        javascript>
        <div class="col-6">
          <h-input dense type='select' :options="options" v-model="selectModel1" input-icon="fas fa-angle-down" display-mode="avatar"/>
        </div>
        <div>
          selectModel1: {{ selectModel1 }}
        </div>
      </comp-code>

      <div ref="customs-itens"/>
      <comp-code class="h-mt-lg" title="Custom Items" :code="selectCustomItem" :script="selectCustomItemScript"
        javascript>
        <div class="row">
          <div class="col-6">
            <h-input dense :options="options"
              v-model="selectModel"
              type="select"
              input-icon="fas fa-angle-down"
              label="Select with custom items"
              display-mode="icon"
            >
              <template v-slot:itemoption>
                <div>{{itemoption}}</div>
                <!-- <h-list-item-side class="align-items-center">
                  <h-icon :icon="itemoption.value.icon"/>
                </h-list-item-side>
                <h-list-item-content>
                  <h-list-item-text :title="itemoption.value.text" :caption="itemoption.value.desc" />
                </h-list-item-content>
                <h-list-item-side v-if="itemoption.value.text === 'music'">
                  <h-btn bg-color="bg-primary">
                    <h-link :icon="itemoption.value.icon" text="homepage" text-color="text-white"
                      url="https://www.jango.com/" new-window/>
                  </h-btn>
                </h-list-item-side>
                <h-list-item-side v-if="itemoption.value.text === 'discord'">
                  <h-btn bg-color="bg-primary">
                    <h-link :icon="itemoption.value.icon" text="homepage" text-color="text-white"
                      url="https://discord.com/" new-window/>
                  </h-btn>
                </h-list-item-side> -->
              </template>
            </h-input>
          </div>
        </div>

        <div class="h-mt-md">
          selectModel: {{ selectModel }}
        </div>
      </comp-code>
      <div ref="select-multi"/>
      <comp-code class="h-mt-lg" title="Multi Select" :code="selectMulti" :script="selectMultiScript"
        javascript>
        <div class="col-6">
          <h-input dense
          type="multi-select" :options="options"
          v-model="multiselect"
          @changeMultiselect="changeMultiselect"
          />
        </div>
        <div>
          multiselect: {{ multiselect }}
        </div>
      </comp-code>

      <!-- <div ref="select-multi-chips"/>
      <comp-code class="h-mt-lg" title="Multi Select Chips" :code="selectMultiChips" :script="selectMultiChipsScript"
        javascript
      >
        <div class="col-6">
          <h-input dense type="multi-select" select-chips :options="options"
          v-model="multiselectChip"
          label="select chips"
          />
        </div>
        <div>
          chips: {{ multiselectChip }}
        </div>
      </comp-code> -->

      <div class="text-h6 h-mt-md">Search</div>
      <h-separator></h-separator>

      <div ref="search-default"/>
      <comp-code class="h-mt-lg" title="Standard" :code="exsearch" :script="exsearchScript"
        javascript>
        <h-input
          v-model="search1"
          type="search"
          label="Search"
          trailing-icon="fas fa-search"
          @onFilter="onSearch"
          dense
          clearable
          :options="shoptions"
          @clear="shoptions = []"
        />

        <div>
          model: {{search1}}
        </div>
      </comp-code>

      <div ref="search-toolbar"/>
      <comp-code class="h-mt-lg" title="Inside Toolbar" :code="exsearch2" :script="exsearchScript2"
        javascript>
        <h-app-toolbar bg-color="bg-primary" text-color="text-white">
          <h-app-toolbar-container>
            <h-app-toolbar-title class="text-body1">
              Collection
            </h-app-toolbar-title>
            <h-app-toolbar-action>
              <h-input
                class="h-mr-xs"
                v-model="search2"
                type="search"
                label="Search"
                trailing-icon="fas fa-search"
                @onFilter="onSearch2"
                dense
                bg-color="bg-primary"
                clearable
                :options="shoptions2"
                @clear="shoptions2 = []"
              />
            </h-app-toolbar-action>
          </h-app-toolbar-container>
        </h-app-toolbar>
      </comp-code>

      <!-- <div class="text-h6 h-mt-md">Chips</div>
      <h-separator></h-separator>

      <div ref="chip-standard"/>
      <comp-code class="h-mt-lg" title="Standard"  :code="inputchip" :script="inputchipScript" javascript>
        <div class="h-mt-md">
          <h-input
            dense
            label="Type your chips"
            chips
            v-model="chipsInput"
            type="text"
          />
        </div>
        <div>
          chipsInput: {{chipsInput}}
        </div>
      </comp-code> -->

      <div class="text-h6 h-mt-md">Masks</div>
      <h-separator></h-separator>

      <html-table class="h-mt-lg" bordered cell-separator>
        <thead>
          <tr class="text-left">
            <th>Token</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#</td>
            <td>{pattern: /\d/}</td>
          </tr>
          <tr>
            <td>X</td>
            <td>{pattern: /[0-9a-zA-Z]/}</td>
          </tr>
          <tr>
            <td>S</td>
            <td>{pattern: /[a-zA-Z]/}</td>
          </tr>
          <tr>
            <td>A</td>
            <td>{pattern: /[a-zA-Z]/, transform: v => v.toLocaleUpperCase()}</td>
          </tr>
          <tr>
            <td>a</td>
            <td>{pattern: /[a-zA-Z]/, transform: v => v.toLocaleLowerCase()}</td>
          </tr>
          <tr>
            <td>!</td>
            <td>{escape: true}</td>
          </tr>
        </tbody>
      </html-table>

      <div>
        <h-toggle class="h-mt-lg" v-model="masked" text="Masked?"/>
      </div>

      <!-- <div ref="mask-text"/>
      <comp-code class="h-mt-lg" title="Text (US Phone)" :code="extextmask">
        <h-input label="US Phone" dense use-mask :mask="'+1 (###) ###-####'"
          v-model="maskModelTel" leading-icon="fas fa-phone"
          :masked="masked" clearable/>
        <span>maskModel: {{maskModelTel}}</span>

      </comp-code> -->

      <!-- <div ref="mask-search"/>
      <comp-code class="h-mt-lg" title="Search(Dynamic Mask)" :code="extextsearch">
        <h-input class="h-mt-sm"
          type="search" label="Phone"
          dense use-mask clearable
          masked
          :mask="['###-###-####', '###-####-####']"
          v-model="searchPhone" leading-icon="fas fa-phone"
          @onFilter="onSearchPhone"
          :options="phOptions"
        />
        <span>maskModel: {{searchPhone}}</span>

      </comp-code> -->

      <!-- <div ref="mask-currency"/>
      <comp-code class="h-mt-lg" title="Currency" :code="excurrencymask">
        <h-input type="currency" dense
          v-model="maskModelCurrency"
          leading-icon="fas fa-dollar-sign"
          :masked="masked" clearable
          decimal="," thousands="."
        />
        <span>maskModel: {{maskModelCurrency}}</span>
      </comp-code> -->

      <!-- <comp-code class="h-mt-lg" title="CSS" hide-code>
        <span class="bg-blue300">
          .col-inputs > .main-input-container {
            margin-top: 10px;
          }
        </span>
      </comp-code> -->

      <tabs-help
        class="h-mt-md"
        :properties="helpTopics.properties"
        :events="helpTopics.events"
      />
    </template>

    <template v-slot:help>
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
            <h-list-item @click="goToElement('txt-loading')">
              <h-list-item-content>
                <h-list-item-text title="Loading"/>
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
            <h-list-item @click="goToElement('customs-itens')">
              <h-list-item-content>
                <h-list-item-text title="Custom Items"/>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('select-multi')">
              <h-list-item-content>
                <h-list-item-text title="Multi Select"/>
              </h-list-item-content>
            </h-list-item>
            <!-- <h-list-item @click="goToElement('select-multi-chips')">
              <h-list-item-content>
                <h-list-item-text title="Multi Select Chips"/>
              </h-list-item-content>
            </h-list-item> -->
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
          <!-- <h-list-header text="Chips"/>
          <h-list-item @click="goToElement('chip-standard')">
            <h-list-item-content>
              <h-list-item-text title="Standard"/>
            </h-list-item-content>
          </h-list-item> -->
          <h-list-header text="Mask"/>
          <h-list-item @click="goToElement('mask-text')">
            <h-list-item-content>
              <h-list-item-text title="Text(US Phone)"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('mask-search')">
            <h-list-item-content>
              <h-list-item-text title="Search(Dynamic Mask)"/>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('mask-currency')">
            <h-list-item-content>
              <h-list-item-text title="Currency"/>
            </h-list-item-content>
          </h-list-item>
        </list-help>
    </template>
  </page-layout>

</template>

<script>

import _ from 'lodash';
import PageLayout from '../pageLayout.vue';
import helpTopics from './help';

export default {
  components: {
    PageLayout,
  },
  data() {
    return {
      // help
      helpTopics: {
        properties: [],
        events: [],
      },

      // textfield
      typesModel: '',
      passwordModel: '',
      iconsModel: '',
      messageModel: '',
      prefixModel: '',
      suffixModel: '',
      focusModel: '',
      loading: false,

      selectModel: 'Bluetooth1',
      selectModel1: 'chrome1',
      multiselect: ['heart1', 'discord1'],
      multiselectChip: ['heart1', 'discord1'],
      options: [
        {
          text: 'Address-book',
          value: 'address-book1',
          icon: 'fas fa-address-book',
          avatar: 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg',
          desc: 'My address list contaning my friends list',
        },
        {
          text: 'Bluetooth',
          value: 'Bluetooth1',
          icon: 'fab fa-bluetooth',
          avatar: 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918',
          desc: 'My Bluetooth',
        },
        {
          text: 'heart',
          value: 'heart1',
          icon: 'fas fa-heart',
          avatar: 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650',
          desc: 'My heart is here.',
        },
        {
          text: 'chrome',
          value: 'chrome1',
          icon: 'fab fa-chrome',
          avatar: 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757',
          desc: 'One of my favorite web browser',
        },
        {
          text: 'discord',
          value: 'discord1',
          icon: 'fab fa-discord',
          avatar: 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650',
          desc: 'My favorite communication software.',
        },
        {
          text: 'music',
          value: 'music1',
          icon: 'fas fa-music',
          avatar: 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg',
          desc: 'I love  listening to music.',
        },
      ],

      // search
      search1: '',
      search2: '',
      searchPhone: '',
      searchOptions: [],
      phoneOptions: [],
      shoptions: [],
      shoptions2: [],
      phOptions: [],

      // chips
      chipsInput: ['tucci', 'cleiton', 'carlos', 'pablo', 'luis'],

      // mask
      masked: false,
      maskModelTel: '+1 (202) 555-0134',
      maskModelCurrency: '20000',

      // code preview
      // textfield
      txtoutlined: `
<div class="column col-inputs">
  <h-input v-model="typesModel" label="Outlined" 
    placeholder="Outlined"/>
  <h-input v-model="typesModel" label="Outlined dense" 
    placeholder="Outlined dense" dense/>
</div>
<div>
  Model: {{typesModel}}
</div>
`,
      txtfilled: `
<div class="column col-inputs">
  <h-input v-model="typesModel" label="Filled"
    placeholder="Filled" filled/>
  <h-input v-model="typesModel" label="Filled dense" 
    placeholder="Filled dense" filled dense clearable/>
</div>
<div>
  Model: {{typesModel}}
</div>
`,
      txtpassword: `
<div class="column col-inputs">
  <h-input v-model="passwordModel" label="Password"
    dense type="password"/>
</div>
<div>
  Model: {{passwordModel}}
</div> 
`,
      txticons: `
<div class="column col-inputs">
  <h-input dense v-model="iconsModel" label="Phone"
    leading-icon="fas fa-phone" clearable/>
  <h-input dense v-model="iconsModel" label="E-Mail"
    filled leading-icon="fas fa-envelope" clearable/>
</div>
<div>
  Model: {{iconsModel}}
</div> 
`,
      txtmessages: `
<div class="column col-inputs">
  <h-input dense v-model="messageModel" label="Phone" clearable
    helper-text="Type a phone"
  />
  <h-input dense v-model="messageModel" label="Phone" clearable
    error-message="Invalid information"
  />
  <h-input dense v-model="messageModel" label="TextCounter"
    clearable helper-text="Counter:" input-counter
    :text-counter="60" :maxlength="60"
  />
</div>
<div>
  Model: {{messageModel}}
</div>
`,
      txtprefixsuffix: `
<div class="column col-inputs">
  <h-input dense v-model="prefixModel" label="Price" clearable
    helper-text="Type a value" prefix="$"
  />
  <h-input dense v-model="suffixModel" label="E-Mail"
    leading-icon="fas fa-envelope" clearable
    helper-text="Type a valid mail" suffix="@gmail.com"
  />
</div>
<div>
  Prefix Model: {{prefixModel}}
</div>
<div>
  Sufix Model: {{suffixModel}}
</div>
`,
      txtfocus: `
<div class="column col-inputs">
  <h-input dense v-model="focusModel" label="Name" ref="name"
    @onEnter="$refs.email.focus()"
  />
  <h-input dense v-model="focusModel" label="E-Mail" ref="email"
    @onEnter="$refs.name.focus()"
  />
</div>
`,
      txtloading: `
<div class="row col-inputs">
  <div class="col">
    <h-input dense v-model="focusModel" label="Loading"
    :loading="loading"/>
  </div>
  <div class="col-auto h-pl-xs">
    <h-btn v-if="!loading" bg-color="bg-primary"
      text-color="text-white" text="Start"
      @click="loading = true"/>
    <h-btn v-else bg-color="bg-primary" text-color="text-white"
      text="Stop" @click="loading = false"/>
  </div>
</div>      
`,
      txtloadingScript: `
export default {
  data () {
    return {
      loading: false
    }
  }
}
`,
      // select
      selectIcon: `
<div class="row">
  <div class="col-6">
    <h-input dense :options="options"
      v-model="selectModel"
      type="select"
      input-icon="fas fa-angle-down"
      label="Select with icons"
      display-mode="icon"/>
  </div>
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
  <h-input dense type='select'
  :options="options"
  v-model="selectModel1"
  input-icon="fas fa-angle-down"
  display-mode="avatar"
/>
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
      selectCustomItem: `
<div class="col-6">
  <h-input dense :options="options"
    v-model="selectModel"
    type="select"
    input-icon="fas fa-angle-down"
    label="Select with icons"
    display-mode="icon"
  >
    <template slot="itemoption" slot-scope="itemoption">
      <h-list-item-side class="align-items-center">
        <h-icon :icon="itemoption.value.icon"/>
      </h-list-item-side>
      <h-list-item-content>
        <h-list-item-text :title="itemoption.value.text" :caption="itemoption.value.desc" />
      </h-list-item-content>
      <h-list-item-side v-if="itemoption.value.text === 'music'">
        <h-btn bg-color="bg-primary">
          <h-link :icon="itemoption.value.icon" text="homepage" text-color="text-white"
            url="https://www.jango.com/" new-window/>
        </h-btn>
      </h-list-item-side>
      <h-list-item-side v-if="itemoption.value.text === 'discord'">
        <h-btn bg-color="bg-primary">
          <h-link :icon="itemoption.value.icon" text="homepage" text-color="text-white"
            url="https://discord.com/" new-window/>
        </h-btn>
      </h-list-item-side>
    </template>
  </h-input>
</div>
<div class="h-mt-md">
  selectModel: {{ selectModel }}
</div>
`,
      selectCustomItemScript: `
export default {
  data () {
    return {
      selectModel: 'Bluetooth1',
      options: [
        {
          'text': 'Address-book',
          'value': 'address-book1',
          'icon': 'fas fa-address-book',
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg',
          'desc': 'My address list contaning my friends list'
        },
        {
          'text': 'Bluetooth',
          'value': 'Bluetooth1',
          'icon': 'fab fa-bluetooth',
          'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918',
          'desc': 'My Bluetooth'
        },
        {
          'text': 'heart',
          'value': 'heart1',
          'icon': 'fas fa-heart',
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650',
          'desc': 'My heart is here.'
        },
        {
          'text': 'chrome',
          'value': 'chrome1',
          'icon': 'fab fa-chrome',
          'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757',
          'desc': 'One of my favorite web browser'
        },
        {
          'text': 'discord',
          'value': 'discord1',
          'icon': 'fab fa-discord',
          'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650',
          'desc': 'My favorite communication software.'
        },
        {
          'text': 'music',
          'value': 'music1',
          'icon': 'fas fa-music',
          'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg',
          'desc': 'I love  listening to music.'
        }
      ],
    }
  }
}
      `,
      selectMulti: `
<div class="col-6">
  <h-input dense
  type="multi-select" :options="options"
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
      selectMultiChips: `
<div class="col-6">
  <h-input dense type="multi-select" select-chips :options="options"
  v-model="multiselectChip"
  label="select chips"
  />
</div>
<div>
  chips: {{ multiselectChip }}
</div>      
`,
      selectOptions: `
options: [
  {
    'text': 'Address-book',
    'value': 'address-book1',
    'icon': 'fas fa-address-book',
    'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg',
    'desc': 'My address list contaning my friends list'
  },
  {
    'text': 'Bluetooth',
    'value': 'Bluetooth1',
    'icon': 'fab fa-bluetooth',
    'avatar': 'http://autokadabra.ru/system/uploads/users/18/18340/small.png?1318432918',
    'desc': 'My Bluetooth'
  },
  {
    'text': 'heart',
    'value': 'heart1',
    'icon': 'fas fa-heart',
    'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650',
    'desc': 'My heart is here.'
  },
  {
    'text': 'chrome',
    'value': 'chrome1',
    'icon': 'fab fa-chrome',
    'avatar': 'http://autokadabra.ru/system/uploads/users/19/19506/small.png?1318360757',
    'desc': 'One of my favorite web browser'
  },
  {
    'text': 'discord',
    'value': 'discord1',
    'icon': 'fab fa-discord',
    'avatar': 'http://autokadabra.ru/system/uploads/users/20/20303/small.png?1319912650',
    'desc': 'My favorite communication software.'
  },
  {
    'text': 'music',
    'value': 'music1',
    'icon': 'fas fa-music',
    'avatar': 'https://i.pinimg.com/736x/a0/fc/b3/a0fcb3e4cf01dd5832577a0f2c70f5f9--create-your-own-avatar-avatar-maker.jpg',
    'desc': 'I love  listening to music.'
  }
]
`,

      // search
      exsearch: `
<h-input
  v-model="search1"
  type="search"
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
  methods: {exsearch2
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
        type="search"
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
`,
      extextmask: `
<h-input label="US Phone" dense use-mask :mask="['(##)##-##', '(##)###-##']"
  v-model="maskModelTel" leading-icon="fas fa-phone"
  :masked="masked" clearable
/>
<span>maskModel: {{maskModelTel}}</span>
`,
      extextsearch: `
<h-input class="h-mt-sm"
  type="search" label="Dynamic Phone"
  dense use-mask clearable
  masked
  :mask="['###-###-####', '###-####-####']"
  v-model="searchPhone" leading-icon="fas fa-phone"
  @onFilter="onSearchPhone"
  :options="phOptions"
/>
<span>maskModel: {{searchPhone}}</span>    
`,
      excurrencymask: `
<h-input type="currency" dense v-model="maskModelCurrency" leading-icon="fas fa-dollar-sign"
 :masked="masked" clearable decimal="," thousands="."/>
`,
    };
  },
  mounted() {
    this.helpTopics.properties = helpTopics.properties;
    this.helpTopics.events = helpTopics.events;
    this.loadSearchOptions();
    this.loadPhoneOptions();
  },
  methods: {
    goToElement(refName) {
      this.$refs.pl.goToElement(this.$refs[refName]);
    },
    // input
    onKeyTab() {
      console.log('method onKeyTab fired');
      this.$nextTick(() => {
        this.$refs.name.focus();
      });
    },
    onBlur() {
      console.log('method onBlur fired');
      this.$nextTick(() => {
        this.$refs.name.focus();
      });
    },
    // select
    changeMultiselect(value) {
      console.log(`changeMultiselect: ${value}`);
    },

    // search
    loadSearchOptions() {
      this.searchOptions = [];
      this.searchOptions.push({
        avatar: 'avatar/turtle.png', text: 'Ninja Turtle', desc: 'I kill you', value: 'Ninja Turtle',
      });
      this.searchOptions.push({
        img: 'avatar/folder_open.png', text: 'Photos', desc: 'Dez 12, 2017', value: 'Photos',
      });
      this.searchOptions.push({
        icon: 'fas fa-volleyball-ball', text: 'Attractions', desc: 'Lets go to the movie?', value: 'Attractions',
      });
      this.searchOptions.push({
        avatar: 'avatar/turtle.png', text: 'Ninja Turtle 2', desc: 'I kill you', value: 'Ninja Turtle',
      });
      this.searchOptions.push({
        img: 'avatar/folder_open.png', text: 'Photos 2', desc: 'Dez 12, 2017', value: 'Photos',
      });
      this.searchOptions.push({
        icon: 'fas fa-volleyball-ball', text: 'Attractions 2', desc: 'Lets go to the movie?', value: 'Attractions',
      });
      this.searchOptions.push({
        avatar: 'avatar/turtle.png', text: 'Ninja Turtle 3', desc: 'I kill you', value: 'Ninja Turtle',
      });
      this.searchOptions.push({
        img: 'avatar/folder_open.png', text: 'Photos 3', desc: 'Dez 12, 2017', value: 'Photos',
      });
      this.searchOptions.push({
        icon: 'fas fa-volleyball-ball', text: 'Attractions 3', desc: 'Lets go to the movie?', value: 'Attractions',
      });
    },
    loadPhoneOptions() {
      this.phoneOptions = [];
      this.phoneOptions.push({
        icon: 'fas fa-phone', text: '800-713-8353', desc: 'sales 1', value: '800-713-8353',
      });
      this.phoneOptions.push({
        icon: 'fas fa-phone', text: '972-713-6622', desc: 'sales 2', value: '972-713-6622',
      });
      this.phoneOptions.push({
        icon: 'fas fa-phone', text: '972-713-8364', desc: 'sales 3', value: '972-713-8364',
      });
      this.phoneOptions.push({
        icon: 'fas fa-phone', text: '020 7183-8750', desc: 'mobile phone', value: '020 7183-8750',
      });
    },
    onSearch(query) {
      // console.log('query vale:', query)
      this.shoptions = [];
      if (query.length === 0) {
        this.shoptions = _.cloneDeep(this.searchOptions);
      } else {
        this.shoptions = this.searchOptions.filter((opt) => _.includes(opt.text.toLowerCase(), query.toLowerCase()));
      }
    },
    onSearch2(query) {
      this.shoptions2 = [];
      if (query.length === 0) {
        this.shoptions2 = _.cloneDeep(this.searchOptions);
      } else {
        this.shoptions2 = this.searchOptions.filter((opt) => _.includes(opt.text.toLowerCase(), query.toLowerCase()));
      }
    },
    onSearchPhone(query) {
      // console.log('query phone vale:', query)
      this.phOptions = [];
      if (query.length === 0) {
        this.phOptions = _.cloneDeep(this.phoneOptions);
      } else {
        this.phOptions = this.phoneOptions.filter((opt) => _.includes(opt.text, query));
      }
    },
  },
};
</script>

<style scoped>
 .col-inputs > .main-input-container {
   margin-top: 10px;
 }

</style>
