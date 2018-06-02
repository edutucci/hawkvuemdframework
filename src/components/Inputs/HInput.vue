<template lang="pug">
  .input-container(v-bind:class="[inputClass]")
    input(:value="value" :type="inputtype" class="h-input" :class="[rticon]"
      @focus="onInputFocus()"
      @blur="onInputBlur()"
      @input="onChange($event.target.value)"
    )
    label(class="control-label" v-if="floatLabel")
      | {{floatLabel}}

    h-fa-icon(
      v-if="inputtype === 'text' && showcleartext === true"
      :icon="['fas', 'times-circle']" class="input-icon" @click="onClear"
    )
    h-fa-icon(
      v-if="inputtype === 'password' && showpassword === false"
      :icon="['fas', 'eye-slash']"
      class="input-icon"
      @click="showPassword"
    )
    h-fa-icon(
      v-if="inputtype === 'text' && showpassword === true"
      :icon="['fas', 'eye']" class="input-icon" @click="showPassword"
    )

</template>

<script>

import HFaIcon from '../icons/HFaIcon.vue'

export default {
  components: {
    HFaIcon
  },
  props: {
    value: {
      type: String
    },
    floatLabel: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    cleartext: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputClass: '',
      rticon: '',
      inputtype: 'text',
      showcleartext: true,
      showpassword: false
    }
  },
  created () {
    this.onChange()
    this.onInputBlur()

    if (this.cleartext) {
      this.rticon = 'h-input-icon'
    }

    this.inputtype = this.type
    if (this.inputtype === 'password') {
      this.showcleartext = false
    }
  },
  methods: {
    onInputFocus () {
      this.inputClass = 'has-focus'
    },
    onInputBlur () {
      // change float label position
      if (this.floatLabel && this.value) {
        this.inputClass = 'has-focus'
      } else {
        this.inputClass = ''
      }
    },
    onChange (value) {
      let txtValue = ''
      if (value === undefined && this.value) {
        txtValue = this.value
      } else {
        txtValue = value
      }

      this.$emit('input', txtValue)
    },
    onClear () {
      this.$emit('input', '')
    },
    showPassword () {
      this.showpassword = !this.showpassword
      this.inputtype = (this.inputtype === 'text') ? 'password' : 'text'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../css/variables.styl'

.input-container {
	position:relative;
  height:65px;
  background-color: white;
}

.h-input {
  font-size:18px;
  top: 30px;
  width:100%;  
  border-style:none;
  outline: none;
  z-index:0;
  background:white;
}

// .h-input-icon {
//   padding-right: 30px;
// }

.control-label{
  color: black;
  font-size:16px;
  font-weight: bold;
}

.input-container input {
    position:absolute;
    top:36px;
}

.input-container .control-label {
    position: absolute;
    top:40px;
}

input:focus.h-input {
	border-bottom: 4px solid $primary
}

.input-container.has-focus label {
  top:0px;
  padding-top: 8px;
  padding-bottom: 8px;
  color $primary
}

input:not(:focus).h-input + .control-label {
  color: black;
}

input:not(:focus).h-input {
  border-bottom: 4px solid lightgray
}

.input-icon {
  position: absolute;
  background-color: white;
  padding-right: 4px;
  padding-left: 16px;
  padding-bottom: 4px;
  color:black;
  right: 0px;
  z-index: 0px;
  top: 36px;
}

</style>
