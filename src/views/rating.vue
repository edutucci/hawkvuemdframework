<template>
  <div>
    <h1>Rating</h1>
    <html-separator></html-separator>
    <div>
      <h1>Normal Point</h1>
      <h-rating v-model="rating1" showmessages></h-rating>
    </div>
    <prism language="html" :code="ex1"></prism>

    <html-separator></html-separator>
    <div>
      <h1>Half Point</h1>
      <h-rating v-model="rating2" showmessages halfpoints></h-rating>
    </div>
    <prism language="html" :code="ex2"></prism>

    <html-separator></html-separator>
    <div>
      <h1>Custom Messages</h1>
      <h-rating
        :messages="['1 star', '2 stars', '3 stars', '4 stars', '5 stars']"
        v-model="rating2"
        halfpoints
        showmessages
      >
      </h-rating>
    </div>
    <prism language="html" :code="ex3"></prism>

    <h2 class="text-primary"> Vue Properties</h2>
    <html-separator></html-separator>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>halfpoints</div>
        <div>showmessages</div>
        <div>messages</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Boolean</div>
        <div>Boolean</div>
        <div>Array</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>if true show stars and half stars for float points</div>
        <div>if true show messages for each star</div>
        <div>Array of messages for each star</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rating1: 3,
      rating2: 3.5,
      ex1: `
<div>
  <p>Normal Point</p>
  <h-rating v-model="rating1" showmessages></h-rating>
</div>
      `,
      ex2: `
<div>
  <p>Half Point</p>
  <h-rating v-model="rating2" showmessages halfpoints></h-rating>
</div>
      `,
      ex3: `
<p>Custom Messages</p>
<h-rating
  :messages="['1 star', '2 stars', '3 stars', '4 stars', '5 stars']"
  v-model="rating2"
  halfpoints
  showmessages
>
</h-rating>
      `
    }
  }
}
</script>
