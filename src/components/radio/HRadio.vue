<template lang="pug">
  label.container
    | {{label}}
    input(type="radio"
      :name="value"
      :checked="checkboxState"
      @change="onChange"
    )
    span.checkmark

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
    label: [String],
    checked: {
      type: Boolean,
      default: false
    },
    model: {
      type: [String, Number],
      default: undefined
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    if (this.checked && !this.checkboxState) {
      this.onChange()
    }
  },
  computed: {
    checkboxState () {
      let bool = this.model === this.value
      return bool
    }
  },
  methods: {
    onChange (event) {
      this.$emit('change', this.value)
    }
  }
}
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
    font-weight: bold;
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
    height: 16px;
    width: 16px;
    border: 2px solid gray;
    border-radius: 50%;
}

/* On mouse-over, add a grey background color */
/* .container:hover input ~ .checkmark {
    background-color: #ccc;
} */

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
    background-color: white;
    border-color:  #2196F3;
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
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #2196F3;
}

</style>
