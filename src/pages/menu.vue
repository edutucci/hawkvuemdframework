<template lang="pug">
  div(style="top: 50px; position: relative; margin: 0; padding: 0")
    <h1> Menu </h1>    
    <h-menu-bar>
      <h-menu-bar-item label="Home" :icon="['fas', 'home']"/>
      <h-menu-bar-item label="Products" :icon="['fab', 'product-hunt']"/>
      <h-menu-bar-item label="Downloads" :icon="['fas', 'download']"/>
      <h-menu-bar-item label="About Us" :icon="['fas', 'envelope']"/>
      <h-menu-bar-item label="Help" :icon="['fas', 'question-circle']"/>
    </h-menu-bar>

    <h1> Menu Dropdown Top of screen</h1>
    <div class="flex h-ma-lg">
      .col-3.flex-1
        .row
          h1 Menu Left
        .row
          <h-menu-dropdown :icon="['fas', 'bars']">
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')"/>
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')"/>
          </h-menu-dropdown>
      .col-3.flex.flex-column
        .row.flex.flex-justify-end
          h1 Menu Right
        .row.flex.flex-justify-end
          <h-menu-dropdown :icon="['fas', 'bars']" rtl="true">
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')"/>
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')"/>
          </h-menu-dropdown>
    </div>

    <pre v-highlightjs="menutop">
      <code class="html">
      </code>
    </pre>

    <h1> Menu Dropdown Bottom of screen</h1>
    <div class="flex h-ma-lg">
      .col-3.flex-1
        .row
          h1 Menu Left
        .row
          <h-menu-dropdown :icon="['fas', 'bars']" dtu>
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')"/>
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')"/>
          </h-menu-dropdown>
      .col-3.flex.flex-column
        .row.flex.flex-justify-end
          h1 Menu Right
        .row.flex.flex-justify-end
          <h-menu-dropdown :icon="['fas', 'bars']" rtl dtu>
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')"/>
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')"/>
          </h-menu-dropdown>
    </div>

      <pre v-highlightjs="menudown">
        <code class="html">
        </code>
      </pre>    


    //- <p>Slide Menu</p>
    //- <div class="flex flex-row">
    //-   <div class="flex flex-justify-start">
        
    //-     <h-slide-menu :icons="slideMenuIcons" :menu="slideMenuList">
    //-         <h-slide-menu-item name="home" :icon="['fas', 'user']" />
    //-         <h-slide-menu-item name="download" :icon="['fas', 'envelope']"/>
    //-       </h-slide-menu-list>
    //-       <h-slide-menu-list>
    //-         <h-slide-menu-item name="home" :icon="['fas', 'user']" />
    //-         <h-slide-menu-item name="download" :icon="['fas', 'user']"/>
    //-       </h-slide-menu-list>
    //-     </h-slide-menu>

    //-     <p>Fa Icon</p>
    //-     <h-fa-icon :icon="['fas', 'user']"/>
    //-     <h-fa-icon :icon="['fas', 'user']"/>
    //-   </div>
    //-   <div class="flex flex-1">
    //-   </div>
    //- </div>

  </div>
</template>

<script>
import HMenuBar from '../components/menu/HMenuBar.vue'
import HMenuBarItem from '../components/menu/HMenuBarItem.vue'
import HMenuDropdown from '../components/menu/HMenuDropdown.vue'
import HMenuDropdownItem from '../components/menu/HMenuDropdownItem.vue'
import HSlideMenu from '../components/menu/HSlideMenu.vue'
import HBtnFloat from '../components/buttons/HBtnFloat.vue'

export default {
  components: {
    HMenuBar,
    HMenuBarItem,
    HMenuDropdown,
    HMenuDropdownItem,
    HSlideMenu,
    HBtnFloat
  },
  data () {
    return {
      slideMenuIcons: [
        { 'label': 'Usuario', 'icon': ['fas', 'user'] },
        { 'label': 'Messages', 'icon': ['fas', 'envelope'] },
        { 'label': 'Usuario', 'icon': ['fas', 'user'] },
        { 'label': 'Messages', 'icon': ['fas', 'envelope'] }
      ],
      slideMenuList: [
        [
          { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 1', 'url': 'https://www.terra.com.br/' }
        ],
        [
          { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 2', 'url': 'https://www.terra.com.br/' }
        ]
      ],
      menutop: `
<div class="flex h-ma-lg">
  .col-3.flex-1
    .row
      h1 Menu Left
    .row
      <h-menu-dropdown :icon="['fas', 'bars']">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')"/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')"/>
      </h-menu-dropdown>
  .col-3.flex.flex-column
    .row.flex.flex-justify-end
      h1 Menu Right
    .row.flex.flex-justify-end
      <h-menu-dropdown :icon="['fas', 'bars']" rtl="true">
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')"/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')"/>
      </h-menu-dropdown>
</div>
      `,
      menudown: `
<div class="flex h-ma-lg">
  .col-3.flex-1
    .row
      h1 Menu Left
    .row
      <h-menu-dropdown :icon="['fas', 'bars']" dtu>
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')"/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')"/>
      </h-menu-dropdown>
  .col-3.flex.flex-column
    .row.flex.flex-justify-end
      h1 Menu Right
    .row.flex.flex-justify-end
      <h-menu-dropdown :icon="['fas', 'bars']" rtl dtu>
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showModal('U clicked in circle')"/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showModal('U clicked in hands')"/>
      </h-menu-dropdown>
</div>
      `
    }
  },
  methods: {
    showModal (msg) {
      alert(msg)
    }
  }
}
</script>
