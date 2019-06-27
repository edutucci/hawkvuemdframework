<template>
  <div>
    <h1>Rating</h1>

    <comp-code class="h-mt-lg" title="Normal Point" :code="ex1" :script="ex1Script"
      javascript
    >
      <h-rating v-model="rating1" showmessages/>
    </comp-code>

    <comp-code class="h-mt-lg" title="Half Point" :code="ex2" :script="ex2Script"
      javascript
    >
      <h-rating v-model="rating2" showmessages halfpoints/>
    </comp-code>

   <comp-code class="h-mt-lg" title="Custom Messages" :code="ex3" :script="ex3Script"
    javascript
   >
    <h-rating
      :messages="['1 star', '2 stars', '3 stars', '4 stars', '5 stars']"
      v-model="rating2"
      halfpoints
      showmessages
    />
   </comp-code>

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
  <h-rating v-model="rating1" showmessages/>
</div>
`,
      ex1Script: `
export default {
  data () {
    return {
      rating1: 3
    }
  }
}
`,
      ex2: `
<div>
  <h-rating v-model="rating2" showmessages halfpoints/>
</div>
`,
      ex2Script: `
export default {
  data () {
    return {
      rating2: 3.5
    }
  }
}
`,
      ex3: `
<h-rating
  :messages="['1 star', '2 stars', '3 stars', '4 stars', '5 stars']"
  v-model="rating2"
  halfpoints
  showmessages
/>
`,
      ex3Script: `
export default {
  data () {
    return {
      rating2: 3.5
    }
  }
}
`
    }
  }
}
</script>
