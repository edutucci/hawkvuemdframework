<template lang="pug">
  .flex.flex-items-center(style="height: 26px;")
    label.container
      | {{label}}
      input(type="checkbox" @click="onChange(this)" :checked="checkboxState")
      span.checkmark.blue

</template>

<script>
export default {
  model: {
    prop: 'model',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number]
    },
    label: [String, Number],
    checked: Boolean,
    model: {
      type: [String, Array, Boolean],
      default: undefined
    },
    id: {
      type: [String, Number]
    }
  },
  data () {
    return {
      border: { borderColor: '#2196F3' },
      background: {backgroundColor: '#2196F3'}
    }
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

      console.log('change value: ' + value)
      this.$emit('change', value)
    }
  }
}
</script>

<style scoped>
/* The container */
.container {
    display: inline-block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
    position: relative;
    opacity: 0;
    cursor: pointer;
}

/* Create a custom checkbox */
.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: white;
    border: 3px solid gray;
    border-radius: 2px;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
    background-color: none;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .blue {
    background-color: blue;
    border-color: blue;
}

/* When the checkbox is checked, add a red background */
.container input:checked ~ .red {
    background-color: red;
    border-color: red;
}

.container input:checked ~ .white {
    background-color: black;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
    display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
    left: 4px;
    top: -2px;
    width: 5px;
    height: 14px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}
</style>


