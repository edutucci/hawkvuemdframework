<template>
  <div>
    <h1>Modal</h1>
    <h-btn contained label="click me" @click="openModal=true"/>
    <h-modal v-model="openModal" title="Modal Sample">
      <div class="flex flex-justify-center">
        <h-btn contained label="Close" @click="openModal=false"/>
      </div>
    </h-modal>
  </div>
</template>

<script>

import HModal from '../components/window/HModal'
import HBtn from '../components/buttons/HBtn'

export default {
  components: {
    HModal,
    HBtn
  },
  data () {
    return {
      openModal: false
    }
  }
}
</script>
