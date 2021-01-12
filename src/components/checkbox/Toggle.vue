<template>
<div class="flex flex-items-center switch-container h-mr-sm">
  <div class="h-mt-xs">
    <label class="switch">
      <input type="checkbox"  @click="onChange()" :checked="checkboxState" :disabled="readonly">
      <span class="slider round"></span>
    </label>
  </div>
  <div v-if="text && text.length > 0" class="h-pl-xs">{{text}}</div>
</div>
</template>

<script>

export default {
  // model: {
  //   prop: 'model',
  //   event: 'change',
  // },
  props: {
    modelValue: {
      type: [Boolean, String, Number, Object],
    },
    value: {
      type: [Boolean, String, Number, Object],
    },
    text: [String, Number],
    checked: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    // model: {
    //   type: [Array, Boolean],
    //   default: undefined,
    // },
  },
  emits: ['update:modelValue'],
  data() {
    return {};
  },
  mounted() {
    if (this.checked && !this.checkboxState) {
      this.onChange();
    }
  },
  computed: {
    checkboxState() {
      if (this.modelValue === undefined) {
        return this.checked;
      }

      if (Array.isArray(this.modelValue)) {
        return this.modelValue.indexOf(this.value) !== -1;
      }

      return this.modelValue;
    },
  },
  methods: {
    onChange() {
      let value = this.modelValue;

      if (Array.isArray(value)) {
        value = value.slice();
        const i = value.indexOf(this.value);
        if (i === -1) {
          value.push(this.value);
        } else {
          value.splice(i, 1);
        }
      } else {
        value = !this.checkboxState;
      }
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style scoped>
.switch-container {
  display: inline-flex;
  min-height: 25px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 32px;
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
  height: 10px;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  top: -4px;
  content: "";
  height: 18px;
  width: 18px;
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
/* .slider.round {
  border-radius: 34px;
} */

.slider.round:before {
  border-radius: 50%;
}
</style>
