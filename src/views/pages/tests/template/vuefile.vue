<template lang="pug">
.row
  .col
    vue-template(
      :options="options"
    )
      template(v-slot:default="slotProps")
        | {{slotProps.options.text}}
        //- p {{slotProps.options.icon}}
        //- p {{slotProps.options.value}}

</template>

<script>

import VueTemplate from './vuetemplate.vue';

export default {
  components: {
    VueTemplate,
  },
  data() {
    return {
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
      ],
    };
  },
};
</script>
