<template lang="pug">
  .flex.flex-1.flex-items-center.item-padding
    div(v-if="selectable")
      h-checkbox.h-pl-md(v-model="arrayModel" :value="selectValue" @change="selectItem")
    div
      div.icon-left(v-if="lefttext && lefttext.length > 0")
        | {{lefttext}}
      h-fa-icon.icon-left(v-else-if="icon && icon.length" :icon="icon" size="lg" style="color: gray")
      h-avatar.icon-left(v-else-if="avatar && avatar.length > 0" :src="avatar")
      img.icon-left(v-else-if="img && img.length > 0" :src="img" style="width:32px; height:32px;")
    .flex-1.flex-column.overflow-hidden
      .title
        | {{text}}
      .subtitle.flex.flex-wrap
        | {{desc}}
      div.full-with(v-if="separator")
        hr
</template>

<script>

import _ from 'lodash'

export default {
  props: {
    selectModel: {
      type: Array,
      default: () => ([])
    },
    selectValue: {
      type: [String, Number, Object]
    },
    selectable: {
      type: Boolean,
      default: false
    },
    separator: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Array,
      default: () => ([])
    },
    img: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    lefttext: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      arrayModel: []
    }
  },
  mounted () {
    if (this.selectModel.length && this.selectValue) {
      let index = this.selectModel.findIndex(item => _.isEqual(item, this.selectValue))
      if (index !== -1) {
        this.arrayModel.push(this.selectModel[index])
      }
    }
  },
  methods: {
    selectItem () {
      if (this.arrayModel.length) {
        this.$emit('selectedItem', this.arrayModel)
      } else {
        this.$emit('removedItem', this.selectValue)
      }
    }
  }
}
</script>

<style scoped>

H1,H2,H3,H4,H5,H6,P {
  padding: 0px;
  margin: 0px;
}

</style>
