<template>
  <div style="min-height: calc(100vh - 97px)">
    <h1>Slide Menu Icons</h1>

    <!-- <div style="height: 200px;">
      <h-slide-menu class="full-height" :menu="slideMenuIcons" textcolor="text-white" bgcolor="bg-primary">
      </h-slide-menu>
    </div>

    <pre v-highlightjs="menuicons">
      <code class="html">
      </code>
    </pre>

    <h1>Slide Menu Avatar</h1>
    <div style="height: 200px;">
        <h-slide-menu class="full-height" :menu="slideMenuAvatar" textcolor="text-white" bgcolor="bg-primary">
        </h-slide-menu>
    </div>

    <pre v-highlightjs="menuavatar">
      <code class="html">
      </code>
    </pre> -->

    <!-- <h-slide-menu-list bgcolor="bg-primary">
      <h-slide-menu text="Usuarios" icon='fas fa-user' bgcolor="bg-primary" textcolor="text-white">
        <h-slide-menu-item text="New User Settings and User List" visible/>
      </h-slide-menu>
      <h-slide-menu text="Mail" icon='fas fa-envelope'>
        <h-slide-menu-item text="New email"/>
      </h-slide-menu>
      <h-slide-menu text="item 3" icon='fas fa-heart'/>
      <h-slide-menu text="item 3" icon='fas fa-cog'/>
    </h-slide-menu-list> -->
    <h-slide-menu-list bgcolor="bg-primary" textcolor="text-white">
      <h-slide-menu text="Usuarios" icon='fas fa-user' textcolor="text-white">
        <h-slide-menu-item text="New User"/>
        <h-slide-menu-item text="Users List"/>
      </h-slide-menu>
      <h-slide-menu text="Mail" icon='fas fa-envelope' textcolor="text-white">
        <h-slide-menu-item text="New Account" @itemClick="itemClick" url="https://github.com/edutucci/hawkframework"/>
        <h-slide-menu-item text="Account List" @itemClick="itemClick"/>
      </h-slide-menu>
    </h-slide-menu-list>

  </div>
</template>

<script>
export default {
  name: 'PageSliderMenu',
  data () {
    return {
      slideMenuIcons: [
        {
          'label': 'Usuario',
          'icon': 'fas fa-user',
          'menuList': [
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' }
          ]
        },
        {
          'label': 'Configuracoes',
          'icon': 'fas fa-envelope',
          'menuList': [
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' }
          ]
        }
      ],
      slideMenuAvatar: [
        {
          'label': 'Usuario',
          'avatar': '/avatar/Kostenlose.jpg',
          'menuList': [
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 1', 'url': 'https://www.terra.com.br/' }
          ]
        },
        {
          'label': 'Messages',
          'avatar': '/avatar/rambo.jpg',
          'menuList': [
            { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
            { 'label': 'item 2', 'url': 'https://www.terra.com.br/' }
          ]
        }
      ],
      menuicons: `
slideMenuIcons: [
  {
    'label': 'Usuario',
    'icon': 'fas fa-user',
    'menuList': [
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' }
    ]
  },
  {
    'label': 'Configuracoes',
    'icon': 'fas fa-envelope',
    'menuList': [
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' }
    ]
  }
]
      `,
      menuavatar: `
slideMenuAvatar: [
  {
    'label': 'Usuario',
    'avatar': '/avatar/Kostenlose.jpg',
    'menuList': [
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 1', 'url': 'https://www.terra.com.br/' }
    ]
  },
  {
    'label': 'Messages',
    'avatar': '/avatar/rambo.jpg',
    'menuList': [
      { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
      { 'label': 'item 2', 'url': 'https://www.terra.com.br/' }
    ]
  }
]
      `
    }
  },
  methods: {
    itemClick (value) {
      console.log('')
      this.$SnackBar.create({
        message: 'Download Completed',
        bgcolor: 'bg-white',
        textcolor: 'text-black'
      })
    }
  }
}
</script>
