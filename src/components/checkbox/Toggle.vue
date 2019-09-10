<template lang="pug">
  <div class="flex flex-items-center switch-container">
    <div>
      <label class="switch">
        <input type="checkbox"  @click="onChange(this)" :checked="checkboxState" :disabled="readonly">
        <span class="slider round"></span>
      </label>
    </div>
    <div class="h-pl-sm">{{text}}</div>
  </div>
</template>

<script>

export default {
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number, Object]
    },
    text: [String, Number],
    checked: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    model: {
      type: [String, Array, Boolean],
      default: undefined
    }
  },
  data () {
    return {}
  },
  mounted () {
    if (this.checked && !this.checkboxState) {
      this.onChange()
    }
  },
  computed: {
    checkboxState () {
      if (this.model === undefined) {
        return this.checked
      }

      if (Array.isArray(this.model)) {
        return this.model.indexOf(this.value) !== -1
      }

      return this.model
    }
  },
  methods: {
    onChange (checkbox) {
      let value = this.model

      if (Array.isArray(value)) {
        value = value.slice()
        const i = value.indexOf(this.value)
        if (i === -1) {
          value.push(this.value)
        } else {
          value.splice(i, 1)
        }
      } else {
        value = !this.checkboxState
      }
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>
.switch-container {
  display: inline-flex;
  min-height: 25px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 13px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  top: -4px;
  content: "";
  height: 21px;
  width: 21px;
  left: 0px;
  bottom: 4px;
  box-shadow:  0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);
  background-color: #f2f2f2;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider::before > .switch-text {
  left: 40px;
}

/* input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
} */

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
