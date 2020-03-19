<template>
   <div v-if="!vertical" class="full-height">
     <div class="column full-height">
       <div class="col-auto" :class="[compBgColor]">
         <div>
            <h-scroll-navigator :icon-color="textColor">
              <div class="flex cursor-pointer">
                <div class="color-hover h-pa-sm tab tab-horizontal flex flex-justify-center flex-items-center "
                  :class="[compBgColor, compBgColorHover, textColor, { 'active': isActive(index) }]"
                  @click="selectTab(tab, index)"
                  style="min-width:90px;max-width:360px;min-height: 20px;"
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
                        <div class="text-body1">{{tab.text}}</div>
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
       <div class="col-auto" :class="[compBgColor]">
        <div class="flex flex-column full-height scroll">
          <div v-for="(tab, index) in tabs" :key="index"
            class="color-hover h-pl-sm h-pr-sm h-pt-md h-pb-md tab tab-vertical"
            :class="[compBgColor, compBgColorHover, textColor, { 'active': isActive(index) }]"
              @click="selectTab(tab, index)"
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
                    <div><h5 class="no-margin">{{tab.text}}</h5></div>
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
  name: 'HTabs',
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
      selectedIndex: -1
    }
  },
  mounted () {
    this.onBackgroundHover(this.bgColor)
    this.checkForDefaultTab()
  },
  watch: {
    bgColor: function (value) {
      this.onBackgroundHover(value)
    }
  },
  methods: {
    addTab: function (tab) {
      this.tabs.push(tab)
    },
    onBackgroundHover (bgColor) {
      this.compBgColor = bgColor
      this.getBackgroundHover(false)
    },
    isActive (tabIndex) {
      return this.selectedIndex === tabIndex
    },
    checkForDefaultTab () {
      let index = this.tabs.findIndex(tab => tab.name === this.value)
      if (index !== -1) {
        let tab = this.tabs[index]
        this.selectTab(tab, index)
      }
    },
    selectTab (tab, index) {
      if (this.currentTab) {
        this.currentTab.setVisible(false)
      }
      this.currentTab = tab
      this.currentTab.setVisible(true)
      this.selectedIndex = index

      this.$emit('input', tab.name)
      this.$emit('tabChange', tab.name)
    }
  }
}
</script>
