<template>
  <div>
    <h3>Modal Content</h3>
    <div class="h-pa-sm border border-gray border-radius">
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
    </div>

    <h3>Confirm</h3>
    <div class="h-pa-sm border border-gray border-radius">
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
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      openModal: false,
      openModal2: false
    }
  }
}
</script>
