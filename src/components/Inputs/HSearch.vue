<template lang="pug">
  div
    .flex.boxshadow.input-box(style="border-radius: 2px;")
      .icon-left
        h-fa-icon(:icon="['fas', 'search']")
      .flex-1.input-container
        input(
          v-model="query"
          placeholder="Search for something"
          class="h-input"
        )
    .flex.flex-column.boxshadow
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

export default {
  components: {
  },
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
    }
  },
  data () {
    return {
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
      this.$emit('search', this.query)
    }, 1000)
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
