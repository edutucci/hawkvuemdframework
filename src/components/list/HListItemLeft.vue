<template lang="pug">
  .flex.flex-1.flex-items-center.item-padding.menu-item(:class="{active: checkCurrentItem}" @click="itemLeftClick")
    div(v-if="selectable")
      h-checkbox.h-pl-md(v-model="arrayModel" :value="selectValue" @change="selectItem")
    div
      div.icon-left(v-if="lefttext && lefttext.length > 0")
        | {{lefttext}}
      h-fa-icon.icon-left(v-else-if="icon && icon.length" :icon="icon" style="color: gray")
      h-avatar.icon-left(v-else-if="avatar && avatar.length > 0" :src="avatar")
      img.icon-left(v-else-if="img && img.length > 0" :src="img" style="width:32px; height:32px;")
    .flex-1.flex-column.overflow-hidden
      .title
        | {{text}}
      .subtitle.flex.flex-wrap
        | {{desc}}
      div.full-with(v-if="separator")
        html-separator
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
      type: String,
      default: ''
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
      arrayModel: [],
      active: false
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
  computed: {
    checkCurrentItem () {
      let result = false
      if (this.lefttext && this.lefttext.length > 0) {
        result = (this.$parent.getCurrentTextLeft() === this.lefttext)
      }

      if (this.text && this.text.length > 0) {
        result = (this.$parent.getCurrentTextLeft() === this.text)
      }
      this.$parent.setActive(result)
      return result
    }
  },
  methods: {
    itemLeftClick () {
      // console.log('item left click')
      if (this.lefttext && this.lefttext.length > 0) {
        // console.log('text left > 0:' + this.lefttext)
        this.$parent.setCurrentTextLeft(this.lefttext)
      }

      if (this.text && this.text.length > 0) {
        // console.log('text > 0:' + this.text)
        this.$parent.setCurrentTextLeft(this.text)
      }
      this.$emit('itemLeftClick', this.selectValue)
    },
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
