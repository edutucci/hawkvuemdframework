<template lang="pug">
  .chip-container.flex.flex-items-center(
    v-if="show"
  )
    .chip-content.row.align-items-center.bg-primary(
      v-if="!outlined"
      :class="[{bgdefault: bgdefault, disabled: disabled}]"
    )
      .row.align-items-center.nowrap.h-pl-sm.h-pr-xs
        .col-auto.h-pr-xs(v-if="icon && icon.length > 0")
          h-fa-icon(:icon="icon" :text-color="chiptextcolor")
        .col-auto.text-caption
          span(:class="[chiptextcolor]") {{text}}
      .col-auto
        h-fa-icon(
          v-if="closable"
          icon="fas fa-times-circle"
          :text-color="chiptextcolor"
          @click="onClose"
        )

    .chip-content(
      v-else
      :class="{outline: outlined, disabled: disabled}"
    )
      .row.nowrap.h-pl-xs.h-pr-xs(v-if="icon && icon.length > 0")
        h-fa-icon(:icon="icon" :text-color="chiptextcolor")
        span.h-pl-sm(:class="[chiptextcolor]") {{text}}
        h-fa-icon.h-pl-sm(
          v-if="closable"
          icon="fas fa-times-circle"
          :text-color="chiptextcolor"
          @click="onClose"
        )
      .row.nowrap.h-pl-sm.h-pr-sm(v-else)
        span(:class="[chiptextcolor]") {{text}}
        h-fa-icon.h-pl-sm(
          v-if="closable"
          icon="fas fa-times-circle"
          :text-color="chiptextcolor"
          @click="onClose"
        )

</template>

<script>

import componentBase from '../componentBase.vue'

export default {
  extends: componentBase,
  props: {
    closable: {
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
    text: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hideOnClose: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: true,
      bgdefault: false,
      chiptextcolor: this.textColor
    }
  },
  mounted () {
    this.chiptextcolor = this.textColor
    if (!this.outlined) {
      if (this.disabled) {
        this.chiptextcolor = 'text-gray'
      }
      if (this.bgColor === 'bg-white' || this.disabled) {
        this.bgdefault = true
      }
    } else {
      if (!this.disabled) {
        this.chiptextcolor = 'text-black'
      } else {
        this.chiptextcolor = 'text-gray'
      }
    }
  },
  methods: {
    onClose () {
      if (!this.disabled) {
        if (this.hideOnClose) {
          this.show = false
        } else {
          this.$emit('onClose')
        }
      }
    }
  }
}
</script>

<style scoped>
.chip-container {
  display: inline-flex;
}

.chip-content.disabled > .chip-text,
.chip-content.bgdefault.disabled > .chip-text
{
  background-color: rgb(211, 211, 211, 0.6);
}
.chip-content {
  border-radius: 50px;
  padding: 3px;
}

.chip-content.bgdefault {
  background-color: lightgray;
}

.chip-content.outline {
  background-color: white;
  border-color: gray;
  border-style: solid;
  border-width: 1px;
  border-radius: 50px;
}
</style>
