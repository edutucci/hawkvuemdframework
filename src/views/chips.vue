<template>
  <div class="full-size">
    <h1>CHIPS</h1>
    <div>
      <h-chips text="disabled" :icon="['fas', 'camera-retro']" closable disabled hide-on-close></h-chips>
      <h-chips text="Eduardo" closable hide-on-close></h-chips>
      <h-chips text="Jhon" closable hide-on-close :icon="['fas', 'camera-retro']" bgcolor="bg-primary" textcolor="text-white"></h-chips>

      <h-chips text="outlined disabled" :icon="['fas', 'camera-retro']" closable disabled hide-on-close outlined></h-chips>
      <h-chips text="outlined disabled" closable disabled hide-on-close outlined></h-chips>
      <h-chips text="Outlined" closable hide-on-close outlined></h-chips>
    </div>

    <div>
      <h1>Input Chips</h1>
      <h-input-chips v-model="chipsInput" static-label="Name" :left-icon="['fas', 'camera-retro']" helper-text="Type your chips" cleartext></h-input-chips>
    </div>
    <div>
      <span class="text-gray">InputchipsModel: {{ chipsInput }}</span>
    </div>

    <!-- <div>
      <h-input static-label="Name" v-model="txtName" placeholder="" cleartext :left-icon="['fas', 'camera-retro']" :readonly="false"/>
      <span>Name: {{ txtName }}</span>
    </div> -->

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>closable</div>
        <div>icon</div>
        <div>img</div>
        <div>avatar</div>
        <div>text</div>
        <div>disabled</div>
        <div>hide-on-close</div>
        <div>outlined</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Boolean</div>
        <div>Array</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>Booelan</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Show icon close to right of the text</div>
        <div>Sets the icon to left of the text</div>
        <div>Sets the img to left of the text</div>
        <div>Sets the avatar to left of the text</div>
        <div>Sets the text of the chip</div>
        <div>The chips is disabled</div>
        <div>Hides the chip if you click on icon close but it does not emits onClose event</div>
        <div>Sets the input to outlined mode</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@onClose</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on icon close click. This is available if hide-on-close is disabled.</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      txtName: '',
      chipsInput: ['tucci', 'cleiton', 'carlos', 'pablo', 'luis']
    }
  },
  methods: {
    closeChip (index) {
      this.$delete(this.chipsInput, index)
    }
  }
}
</script>
