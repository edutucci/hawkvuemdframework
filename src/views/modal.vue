<template>
  <div>
    <h1>Modal</h1>

    <div>
      <h-btn contained label="Modal Content" @click="openModal=true"/>
    </div>

    <h-modal v-model="openModal" title="Modal Content">
      <div class="flex flex-column flex-justify-center" style="width: 400px;">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div class="flex flex-justify-center h-pa-md">
          <h-btn contained label="Close" @click="openModal=false"/>
        </div>
      </div>
    </h-modal>

    <pre v-highlightjs="modalContent">
      <code class="html">
      </code>
    </pre>

    <div>
      <h-btn contained label="Prompt" @click="openModal2=true"/>
    </div>

    <h-modal v-model="openModal2" title="Do you want do delete file">
      <div class="flex flex-column flex-justify-center h-pa-md">
        <div class="flex flex-justify-center">
          If you delete this file. It will not be possible to undo this action.
        </div>
        <div class="flex flex-justify-center h-pa-md">
          Are you sure you want to delele it?
         </div>
        <div class="flex flex-justify-center h-pa-md">
          <h-btn contained label="OK" @click="openModal2=false"/>
          <h-btn class="h-pl-sm" contained label="Cancel" @click="openModal2=false"/>
        </div>
      </div>
    </h-modal>

    <pre v-highlightjs="modalPrompt">
      <code class="html">
      </code>
    </pre>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      openModal: false,
      openModal2: false,
      modalContent: `
<h-modal v-model="openModal" title="Modal Content">
  <div class="flex flex-column flex-justify-center" style="width: 400px;">
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    <div class="flex flex-justify-center h-pa-md">
      <h-btn contained label="Close" @click="openModal=false"/>
    </div>
  </div>
</h-modal>
      `,
      modalPrompt: `
<h-modal v-model="openModal2" title="Do you want do delete file">
  <div class="flex flex-column flex-justify-center h-pa-md">
    <div class="flex flex-justify-center">
      If you delete this file. It will not be possible to undo this action.
    </div>
    <div class="flex flex-justify-center h-pa-md">
      Are you sure you want to delele it?
      </div>
    <div class="flex flex-justify-center h-pa-md">
      <h-btn contained label="OK" @click="openModal2=false"/>
      <h-btn class="h-pl-sm" contained label="Cancel" @click="openModal2=false"/>
    </div>
  </div>
</h-modal>
      `
    }
  }
}
</script>
