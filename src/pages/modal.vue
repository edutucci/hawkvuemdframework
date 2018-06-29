<template>
  <div>
    <h1>Modal</h1>
    <h-btn contained label="click me" @click="openModal=true"/>
    <h-modal v-model="openModal">
      <h1>QModal Working</h1>
      <h-btn contained label="Close" @click="openModal=false"/>
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
