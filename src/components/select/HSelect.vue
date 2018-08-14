
<template lang="pug">
  .flex.flex-column.dropdown(v-on-clickaway="away")
    .flex.flex-row
      input.select(
        placeholder="Select an option"
        @focus="magic_flag = true"
        :value="display"
        readonly
      )
      h-fa-icon.dropdown-arrow(
        :icon="['fas', 'angle-down']"
        @click="magic_flag = true"
      )

    div.full-width.dropdown-menu.boxshadow(v-if="!multiselect && magic_flag")
      div.flex.flex-items-center.flex-row.menu-item(
        :class="[bgcolor]"
        :style="{bottom: bottom}"
        v-for="option in options"
        :key="option.value"
        @click="onChangeItem(option)"
      )
        div.icon-left.h-pl-md(v-if="displayMode ==='icon'")
          h-fa-icon(:icon="option.icon")
        div.icon-left(v-if="displayMode ==='avatar'")
          h-avatar(:src="option.avatar")
        div.flex-1  {{option.label}}

    div.full-width.dropdown-menu.boxshadow(v-else-if="multiselect && magic_flag")
      div.flex.flex-row.menu-item(
        :class="[bgcolor]"
        v-for="option in options"
        :key="option.value"
      )
        h-checkbox.h-pl-md(v-model="multiselectItem" :label="option.label" :value="option.value" @change="changeMultiselect")

  //-  <div v-if="!multiselect" class="dropdown-menu boxshadow" v-show="magic_flag" style="bottom:0;">

</template>

<script>

import HAvatar from '../image/HAvatar.vue'
import { mixin as clickaway } from 'vue-clickaway'
import componentBase from '../componentBase.vue'
import HCheckbox from '../checkbox/HCheckbox.vue'

export default {
  extends: componentBase,
  components: {
    HAvatar,
    HCheckbox
  },
  props: {
    value: {
      type: [String, Number, Array]
    },
    options: {
      type: Array,
      default: () => ([])
    },
    displayMode: {
      type: String
    },
    multiselect: {
      type: Boolean
    },
    dtu: {
      type: Boolean
    }
  },
  mixins: [ clickaway ],
  data: function () {
    return {
      display: '',
      item: 'User',
      magic_flag: false,
      isActive: true,
      hasError: false,
      active: {
        color: 'white',
        backgroundColor: 'blue'
      },
      multiselectItem: [],
      bottom: ''
    }
  },
  methods: {
    onChangeItem (option) {
      // console.log(value)
      this.display = option.label
      this.$emit('input', option.value)
      this.magic_flag = false
    },
    changeMultiselect () {
      this.$emit('input', this.multiselectItem)
      this.magic_flag = true
    },
    away () {
      if (this.magic_flag) {
        // this.value = 'You clicked away...'
        this.magic_flag = false
      }
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  /* width: 250px; */
}

.dropdown-menu {
  position: absolute;
  background-color: white;
  /* min-width: 250px; */
  max-height: 250px;
  overflow-y: scroll;
  z-index: 2;
  cursor: pointer;
}

input.select {
   font-size: 18px;
   /* padding-right: 25px;
   padding-left: 10px; */
   z-index: 0;
   background-color: transparent !important;
   border: none;
   outline: none;
   border-bottom: 4px solid blue;
   width: 100%;
}

input:hover {
  cursor: pointer;
}

.dropdown-arrow {
  position: absolute;
  color:black;
  right: 0px;
  top: 3px;
  z-index: 1;
}

.dropdown-arrow:hover {
  cursor: pointer;
}

</style>
