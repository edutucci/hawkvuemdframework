
<template lang="pug">
  .flex.flex-column.dropdown(v-on-clickaway="away")
    .flex.flex-row
      h-input.full-width(
        :float-label="floatLabel"
        :static-label="staticLabel"
        :placeholder="placeholder"
        @focus="magic_flag = true"
        :readonly="true"
        :value="display"
        type='dropdown'
      )

    div.full-width.dropdown-menu.boxshadow.border-corner-rounded(
      v-if="!multiselect && magic_flag"
      :style="{left: left, right: right, bottom: bottom}"
    )
      div.flex.flex-items-center.flex-row.menu-item(
        :class="[bgcolor]"
        v-for="(option, index) in options"
        :key="index"
        @click="onChangeItem(option)"
      )
        div.icon-left.h-pl-md(v-if="displayMode ==='icon'")
          h-fa-icon(:icon="option.icon")
        div.h-pl-sm.h-pr-sm(v-if="displayMode ==='avatar'")
          h-avatar(:src="option.avatar")
        div.flex-1  {{option.text}}

    div.full-width.dropdown-menu.boxshadow.border-corner-rounded(v-else-if="multiselect && magic_flag")
      div.flex.flex-row.menu-item(
        :class="[bgcolor]"
        v-for="option in options"
        :key="option.value"
        :style="{left: left, right: right, bottom: bottom}"
      )
        h-checkbox.h-pl-md(v-model="multiselectItem" :text="option.text" :value="option.value" @change="changeMultiselect")

</template>

<script>

import { mixin as clickaway } from 'vue-clickaway'
import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  mixins: [ clickaway ],
  props: {
    value: {
      type: [String, Number, Array]
    },
    options: {
      type: Array,
      default: () => ([])
    },
    floatLabel: {
      type: String
    },
    staticLabel: {
      type: String
    },
    displayMode: {
      type: String
    },
    multiselect: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: ''
    },
    showStaticLabel: {
      type: Boolean,
      default: true
    },
    dtu: {
      type: Boolean
    }
  },
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
      left: '0px',
      right: '',
      bottom: ''
    }
  },
  watch: {
    multiselectItem: function (value) {
      let arrDisp = []
      this.display = ''
      value.forEach(item => {
        let val = this.options.find(opt => opt.value === item)
        if (val) {
          arrDisp.push(val.text)
        }
      })
      if (arrDisp.length) {
        this.display = arrDisp.join()
      }
    }
  },
  mounted () {
    if (this.dtu) {
      this.bottom = '0px'
    }
    this.setDisplayValue()
  },
  methods: {
    setDisplayValue () {
      if (!this.multiselect) {
        this.display = this.value
      } else {
        this.multiselectItem = this.value
      }
    },
    onChangeItem (option) {
      this.display = option.text
      this.$emit('input', option.value)
      this.magic_flag = false
    },
    changeMultiselect () {
      this.$emit('input', this.multiselectItem)
      this.magic_flag = true
      this.$emit('changeMultiselect', this.multiselectItem)
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
