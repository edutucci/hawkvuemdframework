<template lang="pug">
div(style="display: inline-block;")
  //- label.container.h-pos-rel
  //-
  //- .row.align-items-center
  //-   .col-auto.container.h-pos-rel
  //-     input(type="radio"
  //-       :name="value"
  //-       :checked="radioState"
  //-       @change="onChange"
  //-       :disabled="readonly"
  //-     )
  //-     span(:class="[bordercolor, {disabled:readonly}]")
  //-       .radio-ball(:class="[bgcolor]")
  //-   .col-auto
  //-     | {{text}}
.checkbox-container(style="display:inline-flex;")
  .row.cursor-pointer.align-items-center(@click="onChange()")
    //- .col-auto
    //-   | checkboxState: {{radioState}}
    .col-auto
      //- input(type="radio" :checked="radioState" v-show="false" :disabled="readonly")
      h-icon(icon="far fa-circle" text-color="text-gray" v-if="!radioState" size="22px")
      h-icon(icon="far fa-dot-circle" text-color="text-primary" v-if="radioState" size="22px")

    .col-auto.text-body.h-pl-xs
      | {{text}}
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

</style>
