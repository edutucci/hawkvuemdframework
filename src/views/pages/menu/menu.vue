<template>
  <h-page-content>
      <h1> Menu </h1>
        <!-- <h-menu-bar>
          <h-menu-bar-item label="Home" :icon="['fas', 'home']"/>
          <h-menu-bar-item label="Products" :icon="['fab', 'product-hunt']"/>
          <h-menu-bar-item label="Downloads" :icon="['fas', 'download']"/>
          <h-menu-bar-item label="About Us" :icon="['fas', 'envelope']"/>
          <h-menu-bar-item label="Help" :icon="['fas', 'question-circle']"/>
        </h-menu-bar> -->

      <div class="flex">
        <div class="flex-1">
          <!-- <h-menu-dropdown icon="fas fa-bars">
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands You are in good hands" @click="showSnackBar('U clicked in hands')"/>
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
          </h-menu-dropdown> -->
        </div>
        <div class="flex flex-1 flex-justify-start">
          <h-menu-dropdown icon="fas fa-bars">
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands You are in good hands" @click="showSnackBar('U clicked in hands')"/>
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands You are in good hands You are in good hands You are in good hands" @click="showSnackBar('U clicked in hands')"/>
            <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
            <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
          </h-menu-dropdown>
        </div>
      </div>
      <h1> Menu Dropdown Top of screen</h1>

      <!-- <h1> Menu Dropdown Top of screen</h1>
      <div class="flex h-ma-lg">
        .col-3
          .row
            h1 Menu Left
          .row
            <h-menu-dropdown icon="fas fa-bars">
              <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
              <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands You are in good hands" @click="showSnackBar('U clicked in hands')"/>
              <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
              <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
              <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
              <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
              <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
              <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
            </h-menu-dropdown>
          .col-3.flex.flex-column
            .row.flex.flex-justify-end
              h1 Menu Right
            .row.flex.flex-justify-end
              <h-menu-dropdown icon="fas fa-bars" rtl>
                <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
                <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands You are in good hands" @click="showSnackBar('U clicked in hands')"/>
              </h-menu-dropdown>
      </div>

        <prism language="html" :code="menutop"></prism>

        <h1> Menu Dropdown Bottom of screen</h1>
        <div class="flex h-ma-lg">
          .col-3.flex-1
            .row
              h1 Menu Left
            .row
              <h-menu-dropdown icon="fas fa-bars" dtu>
                <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
                <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
              </h-menu-dropdown>
          .col-3.flex.flex-column
            .row.flex.flex-justify-end
              h1 Menu Right
            .row.flex.flex-justify-end
              <h-menu-dropdown icon="fas fa-bars" rtl dtu>
                <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
                <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
              </h-menu-dropdown>
        </div>

        <prism language="html" :code="menudown"></prism>

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
          <div>String</div>
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
          <div>String</div>
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
      </div> -->

  </h-page-content>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      menutop: `
<div class="flex h-ma-lg">
  .col-3.flex-1
    .row
      h1 Menu Left
    .row
      <h-menu-dropdown icon="fas fa-bars">
        <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
        <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
      </h-menu-dropdown>
  .col-3.flex.flex-column
    .row.flex.flex-justify-end
      h1 Menu Right
    .row.flex.flex-justify-end
      <h-menu-dropdown icon="fas fa-bars" rtl>
        <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
        <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
      </h-menu-dropdown>
</div>
      `,
      menudown: `
<div class="flex h-ma-lg">
  .col-3.flex-1
    .row
      h1 Menu Left
    .row
      <h-menu-dropdown icon="fas fa-bars" dtu>
        <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
        <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
      </h-menu-dropdown>
  .col-3.flex.flex-column
    .row.flex.flex-justify-end
      h1 Menu Right
    .row.flex.flex-justify-end
      <h-menu-dropdown icon="fas fa-bars" rtl dtu>
        <h-menu-dropdown-item icon="fas fa-check-circle" text="You are correct." @click="showSnackBar('U clicked in circle')"/>
        <h-menu-dropdown-item icon="fas fa-handshake" text="You are in good hands" @click="showSnackBar('U clicked in hands')"/>
      </h-menu-dropdown>
</div>
      `
    }
  },
  methods: {
    showSnackBar (msg) {
      this.$SnackBar.create({
        message: msg,
        bgcolor: 'bg-positive',
        textcolor: 'text-white'
      })
    }
  }
}
</script>
