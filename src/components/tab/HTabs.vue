<template>
  <div>
    <div v-if="!vertical">
      <div class="flex flex-column">
        <div class="flex flex-wrap" :class="bgcolor">
            <div v-for="(tab, index) in tabs" :key="index"
            class="h-pl-sm h-pr-sm h-pt-md h-pb-md tab"
              :class="[bordercolor[index], bgcolor, textcolor]"
                @click="selectTab(tab, index)"
                :style="bordercolor[index]"
              >
                <strong>  {{tab.tabName()}} </strong>
            </div>
        </div>
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="flex">
        <div class="flex flex-column flex-wrap" :class="bgcolor">
          <div v-for="(tab, index) in tabs" :key="index"
          class="h-pl-sm h-pr-sm h-pt-md h-pb-md tab"
            :class="[bordercolor[index], bgcolor, textcolor]"
              @click="selectTab(tab, index)"
              :style="bordercolor[index]"
            >
              <strong>  {{tab.tabName()}} </strong>
          </div>
        </div>
        <div class="flex-1">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    value: {
      type: String,
      default: ''
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      tabs: [],
      currentTab: undefined,
      selectedIndex: -1,
      bordercolor: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
  },
  methods: {
    isActive (tabIndex) {
      return this.selectedIndex === tabIndex
    },
    selectTab (tab, index) {
      this.$set(this.bordercolor, this.selectedIndex, '')
      if (this.currentTab) {
        this.currentTab.setVisible(false)
      }
      this.currentTab = tab
      this.currentTab.setVisible(true)
      this.selectedIndex = index

      if (this.isActive(index)) {
        this.$set(this.bordercolor, index, this.tabBorderColor())
      }

      this.$emit('input', tab.tabName())
      this.$emit('tabChange', tab.tabName())
    },
    tabBorderColor () {
      let border = ''
      if (!this.vertical) {
        border = (this.bgcolor === 'bg-white') ? 'active-border-bottom-black' : 'active-border-bottom-white'
      } else {
        border = (this.bgcolor === 'bg-white') ? 'active-border-right-black' : 'active-border-right-white'
      }
      return border
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../css/variables.styl'

.tab {
  font-size: 18px;
  cursor: pointer;
}

</style>
