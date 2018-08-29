<template>
  <div>
    <div v-if="!vertical" class="flex flex-column">
      <div class="flex flex-wrap" :class="bgcolor">
          <div v-for="(tab, index) in tabs" :key="index"
          class="h-pa-sm tab"
            :class="[bordercolor[index], bgcolor, textcolor]"
              @click="selectTab(tab, index)"
              :style="bordercolor[index]"
              style="min-width:90px;max-width:360px;"
            >
              <div class="flex flex-items-center full-height">
                <div class="h-pl-sm h-pr-sm">
                  <h-fa-icon :textcolor="textcolor" :icon="tab.lefticon"/>
                </div>
                <div class="flex flex-column full-width">
                  <div v-if="tab.topicon && tab.topicon.length" class="flex flex-justify-center">
                    <h-fa-icon :textcolor="textcolor" :icon="tab.topicon"/>
                  </div>
                  <div class="flex flex-justify-center">
                    <span>{{tab.name}}</span>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
    <div v-if="vertical" class="flex" :style="tabStyle">
      <div class="flex flex-column scroll" :class="bgcolor">
        <div v-for="(tab, index) in tabs" :key="index"
        class="h-pl-sm h-pr-sm h-pt-md h-pb-md tab"
          :class="[bordercolor[index], bgcolor, textcolor]"
            @click="selectTab(tab, index)"
            :style="bordercolor[index]"
          >
            <div class="flex flex-items-center">
              <div>
                <h-fa-icon :textcolor="textcolor" :icon="tab.lefticon"/>
              </div>
              <div class="flex flex-column full-width">
                <div v-if="tab.topicon && tab.topicon.length" class="flex flex-justify-center h-pa-xs">
                  <h-fa-icon :textcolor="textcolor" :icon="tab.topicon"/>
                </div>
                <div class="h-pl-sm flex flex-justify-center flex-items-center">
                  <span>{{tab.name}}</span>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="flex-1 scroll">
        <slot></slot>
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
      bordercolor: [],
      tabStyle: {
        maxHeight: '46px'
      }
    }
  },
  mounted () {
    this.tabStyle.maxHeight = '' + this.tabsHeight + 'px'
    this.checkForDefaultTab()
  },
  computed: {
    tabsHeight () {
      // console.log('tabs.length: ' + this.tabs.length)
      let height = 0
      if (this.tabs && this.tabs.length > 0) {
        for (let index = 0; index < this.tabs.length; index++) {
          height += 46
          if (this.tabs[index].topicon && this.tabs[index].topicon.length > 0) {
            height += 29
          }
        }
      }
      return height
    }
  },
  methods: {
    addTab: function (tab) {
      this.tabs.push(tab)
    },
    isActive (tabIndex) {
      return this.selectedIndex === tabIndex
    },
    checkForDefaultTab () {
      if (this.tabs && this.tabs.length > 0) {
        for (let index = 0; index < this.tabs.length; index++) {
          if (this.tabs[index].default) {
            this.selectTab(this.tabs[index], index)
          }
        }
      }
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

      this.$emit('input', tab.name)
      this.$emit('tabChange', tab.name)
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
