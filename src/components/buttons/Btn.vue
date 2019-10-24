<template lang="pug">
  div(
    class="h-btn btn-container no-user-select"
    style="display:inline-flex; cursor: pointer;"
    :id="containerId"
  )
    div(
      @click="onClick"
      class="btn btn-content flex flex-items-center full-width color-hover position-relative"
      :class="\
        [compBgColor, textColor, size, compBgColorHover, compBorderColor, compActiveClass, \
        { 'btn2': !dropdown, 'active': (isActive || active), 'border': outlined, 'fab': fab, \
          'contained': (!textButton && !outlined), 'btn-dropdown': dropdown, 'textbutton': textButton, 'outlined': outlined, \
          disabled: disabled, rounded: rounded }]"
    )
      div(v-if="!dropdown" class="full-width flex flex-justify-center flex-items-center full-height" :class="[typography]")
        div(v-if="leftIcon && leftIcon.length > 0" class="flex-align-center")
          h-icon(class="btn-icon" :text-color="textColor" :icon="leftIcon" size="16px")
        div(v-if="text && text.length > 0" class="flex flex-align-center h-ml-xs h-mr-xs")
          | {{buttonText}}
        div(v-if="rightIcon && rightIcon.length > 0" class="flex-align-center")
          h-icon(class="btn-icon" :text-color="textColor" :icon="rightIcon" size="16px")
        slot
      div(
        v-else
        class="no-user-select"
      )
        .flex.align-items-center.cursor-pointer.full-height
          h-icon.h-mr-xs(
            v-if="leftIcon && leftIcon.length > 0"
            :icon="leftIcon"
            :text-color="textColor"
          )
          h-image.h-mr-xs(
            v-else-if="avatar && avatar.length > 0"
            :src="avatar"
            avatar
          )
          h-image.h-mr-xs(v-else-if="img && img.length > 0"
            :src="img"
          )
          .btn-dropdown-content.flex.flex-items-center.text-body1(
            :class="[textColor]"
          )
            .text-body1(
              v-if="text"
            )
              | {{text}}

            div
              slot(name="content")

            h-icon.h-ml-xs(
              :icon="dropDownIcon"
              :text-color="textColor"
              size="18px"
            )

        .dropdown-content.bg-white.border-radius(
          v-if="showdropdown"
          :style="[dropdownObject]"
          :id="menuid"
          @click="showdropdown = false"
          v-on-clickaway="close"
        )
          slot

</template>

<script>

import componentBase from '../componentBase.vue'
import uuidv1 from 'uuid/v1'
import { mixin as clickaway } from 'vue-clickaway'
import viewport from '../others/viewport'

export default {
  name: 'HBtn',
  mixins: [ clickaway ],
  extends: componentBase,
  props: {
    value: {
      type: Boolean,
      default: false
    },
    textButton: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    dropdown: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String
    },
    leftIcon: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    caps: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    active: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    dropDownIcon: {
      type: String,
      default: 'fas fa-caret-down'
    }
  },
  components: {
  },
  data () {
    return {
      typography: 'text-body1',
      isActive: false,

      // dropdown button
      menuid: uuidv1(),
      containerId: uuidv1(),
      showdropdown: false,
      dropdownObject: {
        left: '',
        right: '',
        bottom: '',
        top: '0',
        width: ''
      },
      containerRect: {
        top: 0,
        left: 0
      },
      window: {
        width: 0,
        height: 0
      }
    }
  },
  mounted () {
    this.onBackgroundHover()
    this.changeComponentBackground()
    this.changeFontSize()
    this.changeBorderColor()
    this.showdropdown = this.value
  },
  watch: {
    textButton: function (value) {
      this.compBgColorHover = ''
      this.compBorderColor = ''
      if (value) {
        this.onBackgroundHover()
      }
      this.changeComponentBackground()
    },
    outlined: function (value) {
      this.compBgColorHover = ''
      // console.log('outlined mudou:', value)
      this.onBackgroundHover()
      this.changeBorderColor()
      this.changeComponentBackground()
    },
    bgColor: function (value) {
      // console.log('this.bgColor changed', this.bgColor)
      this.compBgColorHover = ''
      this.onBackgroundHover()
      this.changeComponentBackground()
      this.changeBorderColor()
    },
    size: function (value) {
      this.changeFontSize()
    },
    value: function (value) {
      this.showdropdown = value
      if (value) {
        this.checkViewport()
      }
    }
  },
  computed: {
    buttonText () {
      let text = this.text
      if (text) {
        text = (!this.caps) ? this.text : this.text.toUpperCase()
      }
      return text
    },
    compActiveClass () {
      return (this.isActive || this.active) ? this.activeClass : ''
    }
  },
  methods: {
    changeComponentBackground () {
      this.compBgColor = this.bgColor
      if (this.textButton || this.outlined) {
        this.compBgColor = 'bg-transparent'
      }
    },
    changeBorderColor () {
      this.compBorderColor = ''
      if (this.outlined) {
        this.compBorderColor = this.bgColor
        this.compBorderColor = this.compBorderColor.replace(/bg/, 'border')
      }
    },
    changeFontSize () {
      switch (this.size) {
        case 'xs':
          this.typography = 'text-caption'
          break
        case 'sm':
          this.typography = 'text-body2'
          break
        case 'md':
          this.typography = 'text-body1'
          break
        case 'lg':
          this.typography = 'text-h5'
          break
        case 'xl':
          this.typography = 'text-h4'
          break
        default:
          this.typography = 'text-body1'
      }
    },
    onClick () {
      if (!this.disabled) {
        if (!this.dropdown) {
          this.$emit('click')
        } else {
          if (!this.value) {
            this.$emit('click')
          } else {
            this.close()
          }
        }
      }
    },
    onBackgroundHover () {
      if (!this.textButton && !this.outlined) {
        this.getBackgroundHover(false)
      } else {
        this.getBackgroundHover(true)
      }
    },
    setActive (value) {
      this.isActive = value
    },
    close () {
      this.$emit('input', false)
    },
    updateDropdownPosition () {
      if (!this.showdropdown) {
        return false
      }
      let containerElement = document.getElementById(this.containerId)
      if (containerElement) {
        let containerRect = containerElement.getClientRects()
        if (this.containerRect.top !== containerRect[0].top ||
          this.containerRect.left !== containerRect[0].left ||
          this.window.width !== window.innerWidth ||
          this.window.height !== window.innerHeight
        ) {
          this.checkViewport()
        } else {
          setTimeout(() => {
            this.updateDropdownPosition()
          }, 200)
        }
      }
    },
    updateContainerRect (containerRect) {
      this.containerRect.top = containerRect[0].top
      this.containerRect.left = containerRect[0].left
    },
    checkViewport () {
      this.dropdownObject.left = ''
      this.dropdownObject.right = ''
      this.dropdownObject.top = ''
      this.dropdownObject.bottom = ''
      this.showdropdown = true

      let containerElement = document.getElementById(this.containerId)
      if (containerElement) {
        let containerRect = containerElement.getClientRects()
        this.updateContainerRect(containerRect)

        this.dropdownObject.top = '' + containerRect[0].bottom + 'px'
        this.dropdownObject.right = '' + (window.innerWidth - containerRect[0].right) + 'px'
        this.windowWidth = window.innerWidth
        this.window.height = window.innerHeight

        this.$nextTick(() => {
          let menu = document.getElementById(this.menuid)
          if (menu) {
            if (viewport.elementBelowOfPage(menu)) {
              let menuHeight = menu.clientHeight
              this.dropdownObject.top = '' + (this.containerRect.top - menuHeight) + 'px'
            }
            let rectMenu = menu.getClientRects()
            if (rectMenu['0'].width > containerRect['0'].right) {
              this.dropdownObject.right = ''
              this.dropdownObject.left = '' + containerRect['0'].left + 'px'
            }
          }
          setTimeout(() => {
            this.updateDropdownPosition()
          }, 200)
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
