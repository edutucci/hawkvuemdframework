<template lang="pug">
.flex(style="display: inline-block;")
  label.container
    | {{text}}
    input(type="radio"
      :name="value"
      :checked="radioState"
      @change="onChange"
      :disabled="readonly"
    )
    span.checkmark.border.border-2(:class="[bordercolor, {disabled:readonly}]")
      .radio-ball(:class="[bgcolor]")

</template>

<script>
export default {
  props: {
    modelValue: {
      type: [Boolean, String, Number, Object],
    },
    value: {
      type: [String, Number, Boolean, Object],
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
    model: {
      type: [String, Array, Boolean, Number, Object],
      default: undefined,
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
    };
  },
  mounted() {
    if (this.checked && !this.radioState) {
      this.onChange();
    }
  },
  watch: {
    checked(value) {
      this.checkIfValueExists(value);
    },
  },
  computed: {
    radioState() {
      if (this.modelValue !== undefined) {
        return this.modelValue === this.value;
      }

      if (Array.isArray(this.modelValue)) {
        const idx = this.modelValue.indexOf(this.value) !== -1;
        return idx;
      }

      return this.modelValue;
    },
    bgcolor() {
      return (this.radioState) ? 'bg-primary' : 'bg-white';
    },
    bordercolor() {
      let color = '';
      if (this.readonly) {
        color = 'border-gray';
      } else {
        color = (this.radioState) ? 'border-primary' : 'radio-border-gray';
      }
      return color;
    },
  },
  methods: {
    checkIfValueExists(checked) {
      if (checked) {
        this.$emit('update:modelValue', this.value);
      } else {
        this.$emit('update:modelValue', '');
      }
    },
    onChange() {
      this.$emit('update:modelValue', this.value);
    },
  },
};
</script>

<style scoped>
/* The container */
.container {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default radio button */
.container input {
    position: relative;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    width: 14px;
    /* border: 2px solid gray; */
    border-radius: 50%;
}

.checkmark.disabled {
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    width: 14px;
    /* border: 2px solid lightgrey; */
    border-radius: 50%;
}

/* On mouse-over, add a grey background color */
/* .container:hover input ~ .checkmark {
    background-color: #ccc;
} */

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
    background-color: white;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.radio-ball {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.radio-border-gray {
  border-color: gray;
}

</style>
