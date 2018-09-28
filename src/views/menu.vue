<template lang="pug">
  div(style="top: 50px; position: relative; margin: 0; padding: 0")
    //- <h1> Menu </h1>
    //- <h-menu-bar>
    //-   <h-menu-bar-item label="Home" :icon="['fas', 'home']"/>
    //-   <h-menu-bar-item label="Products" :icon="['fab', 'product-hunt']"/>
    //-   <h-menu-bar-item label="Downloads" :icon="['fas', 'download']"/>
    //-   <h-menu-bar-item label="About Us" :icon="['fas', 'envelope']"/>
    //-   <h-menu-bar-item label="Help" :icon="['fas', 'question-circle']"/>
    //- </h-menu-bar>

    <h1> Menu Dropdown Top of screen</h1>
    <div class="flex h-ma-lg">
      .col-3.flex-1
        .row
          h1 Menu Left
        .row
          <h-menu-dropdown :icon="['fas', 'bars']">
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
          </h-menu-dropdown>
      .col-3.flex.flex-column
        .row.flex.flex-justify-end
          h1 Menu Right
        .row.flex.flex-justify-end
          <h-menu-dropdown :icon="['fas', 'bars']" rtl>
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
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
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
          </h-menu-dropdown>
      .col-3.flex.flex-column
        .row.flex.flex-justify-end
          h1 Menu Right
        .row.flex.flex-justify-end
          <h-menu-dropdown :icon="['fas', 'bars']" rtl dtu>
            <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
          </h-menu-dropdown>
    </div>

    <pre v-highlightjs="menudown">
      <code class="html">
      </code>
    </pre>

    <h2 class="text-primary">Menu Dropdown Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>icon</div>
        <div>rtl</div>
        <div>dtu</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Array</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the icon for the menu</div>
        <div>Draws the menu from right to left</div>
        <div>Draws the menu from bottom to top</div>
      </div>
    </div>

    <h2 class="text-primary">Menu Dropdown Item Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>icon</div>
        <div>text</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Array</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the text of the menu</div>
        <div>Sets the icon of the menu</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div> @click</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Triggered on item click</div>
      </div>
    </div>

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

export default {
  components: {
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
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
      </h-menu-dropdown>
  .col-3.flex.flex-column
    .row.flex.flex-justify-end
      h1 Menu Right
    .row.flex.flex-justify-end
      <h-menu-dropdown :icon="['fas', 'bars']" rtl>
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
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
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
      </h-menu-dropdown>
  .col-3.flex.flex-column
    .row.flex.flex-justify-end
      h1 Menu Right
    .row.flex.flex-justify-end
      <h-menu-dropdown :icon="['fas', 'bars']" rtl dtu>
        <h-menu-dropdown-item :icon="['fas', 'check-circle']" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
        <h-menu-dropdown-item :icon="['fas', 'handshake']" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
      </h-menu-dropdown>
</div>
      `
    }
  },
  methods: {
    showSnackBar (msg) {
      this.$SnackBar.create({
        message: msg,
        bgcolor: 'bg-primary',
        textcolor: 'text-white'
      })
    }
  }
}
</script>
