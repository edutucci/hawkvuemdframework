<template lang="pug">
  div
    .flex(
      v-on-clickaway="away"
      style="border-radius: 2px;"
    )
      h-input.full-width(
        ref="hawkSearch"
        :leftIcon="icon"
        v-model="query"
        placeholder="Search for something"
        @onKeyDown="onKeyDown"
        @onTab="onTab"
        @onEnter="onEnter"
      )

    .flex.flex-column.boxshadow(v-show="showdropdown")
      .flex.flex-items-center.menu-item.bg-white.item-padding(
        v-for="option in options"
        :key="option.title"
      )
        .icon-left
          h-fa-icon(v-if="option.icon && option.icon.length" :icon="option.icon" size="2x" style="color: gray")
          h-avatar(v-else-if="option.avatar && option.avatar.length > 0" :src="option.avatar")
          img(v-else-if="option.img && option.img.length > 0" :src="option.img" style="width:32px; height:32px;")
        .flex-1.flex-column.overflow-hidden
          .title
            strong {{option.text}}
          .subtitle.flex.flex-wrap
            strong {{option.desc}}

</template>

<script>
import { debounce } from 'lodash'
import { mixin as clickaway } from 'vue-clickaway'

export default {
  mixins: [ clickaway ],
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    options: {
      type: Array,
      default: () => ([])
    },
    icon: {
      type: String,
      default: 'fas fa-search'
    }
  },
  data () {
    return {
      showdropdown: false,
      query: '',
      delay: 200
    }
  },
  created () {
    // this.onChange()
    // this.onInputBlur()
  },
  watch: {
    query (query) {
      this.searchQuery(query)
    }
  },
  methods: {
    searchQuery: debounce(function (query) {
      if (query && query.length > 0) {
        this.showdropdown = true
        this.$emit('search', this.query)
      }
    }, 1000),
    away () {
      if (this.showdropdown) {
        this.showdropdown = false
      }
    },
    onKeyDown () {
      this.showdropdown = true
      this.$emit('onKeyDown')
    },
    onTab () {
      this.$emit('onTab')
    },
    onEnter () {
      this.$emit('onEnter')
    },
    focus () {
      this.$refs.hawkSearch.focus()
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../css/variables.styl'

.input-container {
  position:relative;
  background-color: white;
}

.h-input {
  font-size:18px;
  font-weight: bold;
  width:100%;
  border-style:none;
  outline: none;
  z-index:0;
  background:white;
  text-align: center;
}

</style>
