<template>
  <h-page-content padding>
    <div class="text-h4">Dialog</div>

    <!--
      Bugs
      - change name to dialog
      - add modal property(dont close dialog if clicks outside)
    -->

    <comp-code class="h-mt-lg" title="Modal Content" :code="modalContent" :script="modalContentScript"
      javascript
    >
      <div>
        <h-btn contained text="Modal Content" @click="openModal=true"/>
      </div>

      <h-dialog v-model="openModal" title="Modal Content" show-title-bar>
        <div class="flex flex-column flex-justify-center" style="width: 400px;">
          <div class="h-pa-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div class="flex flex-justify-center h-pa-md">
            <h-btn contained text="Close" @click="openModal=false"/>
          </div>
        </div>
      </h-dialog>
    </comp-code>

    <comp-code class="h-mt-lg" title="Confirm"  :code="modalConfirm" :script="modalConfirmScript"
      javascript
    >
      <div>
        <h-btn contained text="Confirm" @click="openModal2=true"/>
      </div>

      <h-dialog v-model="openModal2" title="Do you want do delete file" show-title-bar>
        <div class="flex flex-column flex-justify-center h-pa-md">
          <div class="flex flex-justify-center">
            If you delete this file. It will not be possible to undo this action.
          </div>
          <div class="flex flex-justify-center h-pa-md">
            Are you sure you want to delele it?
          </div>
          <div class="flex flex-justify-center h-pa-md">
            <h-btn contained text="OK" @click="openModal2=false"/>
            <h-btn class="h-pl-sm" contained text="Cancel" @click="openModal2=false"/>
          </div>
        </div>
      </h-dialog>
    </comp-code>

    <comp-code class="h-mt-lg" title="Components"  :code="modalConfirm" :script="modalConfirmScript"
      javascript
    >
      <div>
        <h-btn contained text="Radio Button" @click="openModalRadio=true"/>
        <h-btn contained text="Checkbox" @click="openModalCheckbox=true"/>
      </div>

      <h-dialog v-model="openModalRadio">
        <div class="column justify-center h-pa-md">
          <div class="col text-h6">
            What type of movies do you like?
          </div>
          <div class="column h-mt-sm">
            <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
            <h-radio v-model="typeMovie" text="Action" value="Action"/>
            <h-radio v-model="typeMovie" text="Science" value="Science"/>
            <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
          </div>
          <div class="col">
            I like of: {{ typeMovie }}
          </div>
        </div>
      </h-dialog>

      <h-dialog v-model="openModalCheckbox">
        <div class="column justify-center h-pa-md">
          <div class="col text-h6">
            Select your favorite colors
          </div>
          <div class="column h-mt-sm">
            <h-checkbox v-model="colors" text="Red" value="Red"/>
            <h-checkbox v-model="colors" text="Green" value="Green"/>
            <h-checkbox v-model="colors" text="Blue" value="Blue"/>
          </div>
          <div class="col">
            Your favorites colors: {{ colors }}
          </div>
        </div>
      </h-dialog>

    </comp-code>

    <!-- <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>title</div>
        <div>show-title-bar</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets modal title</div>
        <div>Shows title bar with close button</div>
      </div>
    </div> -->

  </h-page-content>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      openModal: false,
      openModal2: false,
      openModalRadio: false,
      typeMovie: '',
      openModalCheckbox: false,
      colors: [],
      modalContent: `
<div>
  <h-btn contained text="Modal Content" @click="openModal=true"/>
</div>

<h-modal v-model="openModal" title="Modal Content" show-title-bar>
  <div class="flex flex-column flex-justify-center" style="width: 400px;">
    <div class="h-pa-sm">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="flex flex-justify-center h-pa-md">
      <h-btn contained text="Close" @click="openModal=false"/>
    </div>
  </div>
</h-modal>
`,
      modalContentScript: `
export default {
  data () {
    return {
      openModal: false
    }
  }
}
`,
      modalConfirm: `
<div>
  <h-btn contained text="Confirm" @click="openModal2=true"/>
</div>

<h-modal v-model="openModal2" title="Do you want do delete file" show-title-bar>
  <div class="flex flex-column flex-justify-center h-pa-md">
    <div class="flex flex-justify-center">
      If you delete this file. It will not be possible to undo this action.
    </div>
    <div class="flex flex-justify-center h-pa-md">
      Are you sure you want to delele it?
    </div>
    <div class="flex flex-justify-center h-pa-md">
      <h-btn contained text="OK" @click="openModal2=false"/>
      <h-btn class="h-pl-sm" contained text="Cancel" @click="openModal2=false"/>
    </div>
  </div>
</h-modal>
`,
      modalConfirmScript: `
export default {
  data () {
    return {
      openModal2: false
    }
  }
}
`
    }
  }
}
</script>
