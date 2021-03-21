<template>
 <h-page>
  <!-- <header class="pen-intro">
    <h1>Radio Buttons</h1>
    <p></p>
  </header>

  <hr />
  <div class="two-column">
    <div class="single-col">
      <div class="styled-input-container">
        <div class="styled-input-single">
          <input type="radio" name="fieldset-1" id="radio-example-one" />
          <label for="radio-example-one">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-1" id="radio-example-two" />
          <label for="radio-example-two">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-1" id="radio-example-three" />
          <label for="radio-example-three">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-1" id="radio-example-four" />
          <label for="radio-example-four">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-1" id="radio-example-five" />
          <label for="radio-example-five">Example Title</label>
        </div>
      </div>
    </div>

    <div class="single-col">
      <div class="styled-input-container styled-input--square">
        <div class="styled-input-single">
          <input type="radio" name="fieldset-2" id="radio2-example-one" />
          <label for="radio2-example-one">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-2" id="radio2-example-two" />
          <label for="radio2-example-two">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-2" id="radio2-example-three" />
          <label for="radio2-example-three">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-2" id="radio2-example-four" />
          <label for="radio2-example-four">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-2" id="radio2-example-five" />
          <label for="radio2-example-five">Example Title</label>
        </div>
      </div>
    </div>
  </div>

  <div class="two-column">
    <div class="single-col">
      <div class="styled-input-container styled-input--rounded">
        <div class="styled-input-single">
          <input type="radio" name="fieldset-3" id="radio3-example-one" />
          <label for="radio3-example-one">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-3" id="radio3-example-two" />
          <label for="radio3-example-two">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-3" id="radio3-example-three" />
          <label for="radio3-example-three">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-3" id="radio3-example-four" />
          <label for="radio3-example-four">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-3" id="radio3-example-five" />
          <label for="radio3-example-five">Example Title</label>
        </div>
      </div>
    </div>

    <div class="single-col">
      <div class="styled-input-container styled-input--diamond">
        <div class="styled-input-single">
          <input type="radio" name="fieldset-4" id="radio4-example-one" />
          <label for="radio4-example-one">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-4" id="radio4-example-two" />
          <label for="radio4-example-two">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-4" id="radio4-example-three" />
          <label for="radio4-example-three">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-4" id="radio4-example-four" />
          <label for="radio4-example-four">Example Title</label>
        </div>
        <div class="styled-input-single">
          <input type="radio" name="fieldset-4" id="radio4-example-five" />
          <label for="radio4-example-five">Example Title</label>
        </div>
      </div>
    </div>
  </div>

  <hr /> -->

  <header class="pen-intro">
    <h1>Checkboxes</h1>
    <p></p>
  </header>

  <hr />

  <div class="checkbox-container" style="display:inline-flex;">
    <div class="row cursor-pointer align-items-center" @click="onChange()">
      <div class="col-auto h-pos-rel">
        <input class="styled-input" type="checkbox" :checked="checked" v-show="false"/>
        <h-icon icon="far fa-square" text-color="text-gray" v-if="!checked" size="22px"/>
        <h-icon icon="fas fa-check-square" text-color="text-primary" v-if="checked" size="22px"/>
      </div>
      <div class="col-auto text-body1 h-pl-xs">
        Example 1
      </div>
    </div>
  </div>

 </h-page>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    onChange() {
      console.log('clicou onChange');
      this.checked = !this.checked;
    },
  },
};
</script>

<style scoped>
.styled-input {
  position: absolute;
  left: -9999px
}
</style>
