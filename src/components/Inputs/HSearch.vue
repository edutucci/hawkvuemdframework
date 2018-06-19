<template lang="pug">
  .flex.boxshadow.input-box(style="border-radius: 2px;")
    .icon-left
       h-fa-icon(:icon="['fas', 'search']")
    .flex-1.input-container
      input(
        v-model="query"
        placeholder="Search for something"
        class="h-input"
      )

</template>

<script>

import HFaIcon from '../icons/HFaIcon.vue'
import { debounce } from 'lodash'

export default {
  components: {
    HFaIcon
  },
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
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
      console.log('query: ' + query)
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
