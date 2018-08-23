<template lang="pug">
  <div>
    <h1>Toggle</h1>

    div
      h1 Boolean
      <h-card>
        <h-card-text desc="Do you agree to our terms and conditions?"/>
        <div>
          <h-toggle v-model="termAccepted" label="I agree"/>
        </div>
        <div>
          | Your option is: {{ termAccepted }}
        </div>
      </h-card>

    .boxshadow
      <pre v-highlightjs="ckboolean">
        <code class="html">
        </code>
      </pre>

    div
      h1 List
      <h-card>
        <h-card-text desc="Select your favorite colors"/>
        <div>
          h-toggle(v-model="colors" label="Red" value="Red")
          h-toggle(v-model="colors" label="Green" value="Green")
          h-toggle(v-model="colors" label="Blue" value="Blue")
        </div>

        <div>
          | Your favorites colors: {{ colors }}
        </div>
      </h-card>

    .boxshadow
      <pre v-highlightjs="cklist">
        <code class="html">
        </code>
      </pre>

    <div>
      h1 List with numbers
      <h-card>
        <h-card-text desc="Select yours favorite numbers" />
        <div>
          <h-toggle v-model="checkedNumbers" label="1" :value="1"/>
          <h-toggle v-model="checkedNumbers" label="2" :value="2"/>
          <h-toggle v-model="checkedNumbers" label="3" :value="3"/>
          <h-toggle v-model="checkedNumbers" label="4" :value="4"/>
        </div>
        <div>
          <span>Favorite numbers {{ checkedNumbers }}</span>
        </div>
      </h-card>
    .boxshadow
      <pre v-highlightjs="cklistnumbers">
        <code class="html">
        </code>
      </pre>

    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      termAccepted: false,
      colors: [],
      checkedNames2: ['Maça', 'Uva', 'Abacaxi'],
      checkedNumbers: [1, 3],
      checked2: false,
      ckboolean: `
<h-card>
  <h-card-text desc="Do you agree to our terms and conditions?"/>
  <div>
    <h-toggle v-model="termAccepted" label="I agree"/>
  </div>
  <div>
    | Your option is: {{ termAccepted }} 
  </div>                  
</h-card> 
      `,
      cklist: `
<h-card>
  <h-card-text desc="Select your favorite colors"/>
  <div>
    h-toggle(v-model="colors" label="Red" value="Red")
    h-toggle(v-model="colors" label="Green" value="Green")
    h-toggle(v-model="colors" label="Blue" value="Blue")        
  </div>

  <div>
    | Your favorites colors: {{ colors }}
  </div>          
</h-card>
      `,
      cklistnumbers: `
<h-card>
  <h-card-text desc="Select yours favorite numbers" />
  <div>
    <h-toggle v-model="checkedNumbers" label="1" :value="1"/>
    <h-toggle v-model="checkedNumbers" label="2" :value="2"/>
    <h-toggle v-model="checkedNumbers" label="3" :value="3"/>
    <h-toggle v-model="checkedNumbers" label="4" :value="4"/>        
  </div>
  <div>
    <span>Favorite numbers {{ checkedNumbers }}</span>
  </div>
</h-card>
      `
    }
  }
}
</script>
