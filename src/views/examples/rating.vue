<template>
  <div>
    <h1>Rating</h1>

    <h3>Normal Point</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-rating v-model="rating1" showmessages/>
    </div>

    <h3>Half Point</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-rating v-model="rating2" showmessages halfpoints/>
    </div>

    <h3>Custom Messages</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <h-rating
        :messages="['1 star', '2 stars', '3 stars', '4 stars', '5 stars']"
        v-model="rating2"
        halfpoints
        showmessages
      />
   </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      rating1: 3,
      rating2: 3.5
    }
  }
}
</script>
