<template>
   <div v-if="!vertical" class="full-height">
     <div class="column full-height">
       <div class="col-auto" :class="[bgColor]">
         <div>
            <h-scroll-navigator>
              <div class="flex">
                <div class="h-pa-sm tab flex flex-justify-center flex-items-center "
                  :class="[bordercolor[index], bgColor, textColor]"
                  @click="selectTab(tab, index)"
                  style="min-width:90px;max-width:360px;min-height: 20px;"
                  :style="bordercolor[index]"
                  v-for="(tab, index) in tabs" :key="index"
                >
                  <div class="flex flex-justify-center flex-items-center full-height">
                    <div v-if="tab.leftIcon" class="h-pl-sm h-pr-sm">
                      <h-icon :text-color="textColor" :icon="tab.leftIcon"/>
                    </div>
                    <div class="flex flex-column full-width">
                      <div v-if="tab.topIcon" class="flex flex-justify-center h-pa-xs">
                        <h-icon :text-color="textColor" :icon="tab.topIcon"/>
                      </div>
                      <div class="h-pl-sm flex flex-justify-center flex-items-center">
                        <div class="text-body1">{{tab.name}}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </h-scroll-navigator>
         </div>
       </div>
       <div class="col-space scroll">
         <slot/>
       </div>
     </div>
   </div>
   <div v-else class="full-height">
     <div class="row full-height">
       <div class="col-auto" :class="[bgColor]">
        <div class="flex flex-column full-height scroll">
          <div v-for="(tab, index) in tabs" :key="index"
            class="h-pl-sm h-pr-sm h-pt-md h-pb-md tab"
            :class="[bordercolor[index], bgColor, textColor]"
              @click="selectTab(tab, index)"
              :style="bordercolor[index]"
            >
              <div class="flex flex-items-center">
                <div>
                  <h-icon :text-color="textColor" :icon="tab.leftIcon"/>
                </div>
                <div class="flex flex-column full-width">
                  <div v-if="tab.topIcon && tab.topIcon.length" class="flex flex-justify-center h-pa-xs">
                    <h-icon :text-color="textColor" :icon="tab.topIcon"/>
                  </div>
                  <div class="h-pl-sm flex flex-justify-center flex-items-center">
                    <div><h5 class="no-margin">{{tab.name}}</h5></div>
                  </div>
                </div>
              </div>
          </div>
        </div>
       </div>
       <div class="col-space scroll">
         <slot/>
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
    // this.tabStyle.maxHeight = '' + this.tabsHeight + 'px'
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
        border = (this.bgColor === 'bg-white') ? 'active-border-bottom-black' : 'active-border-bottom-white'
      } else {
        border = (this.bgColor === 'bg-white') ? 'active-border-right-black' : 'active-border-right-white'
      }
      return border
    }
  }
}
</script>
