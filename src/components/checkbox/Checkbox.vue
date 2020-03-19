<template lang="pug">
  .flex(style="display: inline-block;")
    label.container.text-body2
      | {{text}}
      input(
        type="checkbox" @click="onChange()"
        :checked="checkboxState" :disabled="readonly"
      )
      span.checkmark.border.border-2(:class="[bgcolor, bordercolor, {disabled:readonly}]")

</template>

<script>

import _ from 'lodash'

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
    return {
      border: { borderColor: '#2196F3' },
      background: { backgroundColor: '#2196F3' }
    }
  },
  mounted () {
    if (this.checked) {
      this.checkIfValueExists(this.checked)
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
    },
    bgcolor () {
      return (this.checkboxState) ? 'bg-primary' : 'bg-white'
    },
    bordercolor () {
      let color = ''
      if (this.readonly) {
        color = 'border-gray'
      } else {
        color = (this.checkboxState) ? 'border-primary' : 'checkbox-border-gray'
      }
      return color
    }
  },
  watch: {
    checked: function (value) {
      this.checkIfValueExists(value)
    }
  },
  methods: {
    checkIfValueExists (checked) {
      let localModel = this.model
      // console.log('model: ', localModel)
      if (localModel !== undefined) {
        if (Array.isArray(localModel)) {
          let idx = localModel.indexOf(this.value)
          if (idx !== -1 && !checked) {
            // Removes an item when
            // the property checked has been changed to false
            this.$delete(localModel, idx)
          } else if (idx === -1) {
            // Add an item when the property checked has been changed to true
            // but item is not in array
            localModel.push(this.value)
          }
        } else if (_.isBoolean(localModel)) {
          // console.log('localModel is Boolean')
          localModel = checked
          // console.log('localModel changed in Boolean:', localModel)
          this.$emit('change', localModel)
        }
      }
    },
    onChange () {
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
/* The container */
.container {
    display: inline-block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    font-size: 16px;
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
    height: 14px;
    width: 14px;
    background-color: none;
    /* border: 2px solid gray;
    border-radius: 2px;*/
}

.checkmark.disabled {
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    width: 14px;
    background-color: white;
    /* border: 2px solid lightgrey;
    border-radius: 2px;*/
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
    background-color: none;
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
    width: 3px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

/* Style the checkmark/indicator */
.container .checkmark.disabled:after {
    left: 4px;
    top: -2px;
    width: 3px;
    height: 12px;
    border: solid gray;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.checkbox-border-gray {
  border-color: gray;
}
</style>
