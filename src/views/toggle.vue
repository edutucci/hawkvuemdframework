<template lang="pug">
  <div>
    <h1>Toggle</h1>

    div
      h1 Boolean
      <h-card>
        <h-card-text desc="Do you agree to our terms and conditions?"/>
        <div>
          <h-toggle v-model="termAccepted" text="I agree"/>
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
          h-toggle(v-model="colors" text="Red" value="Red")
          h-toggle(v-model="colors" text="Green" value="Green")
          h-toggle(v-model="colors" text="Blue" value="Blue")
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
          <h-toggle v-model="checkedNumbers" text="1" :value="1"/>
          <h-toggle v-model="checkedNumbers" text="2" :value="2"/>
          <h-toggle v-model="checkedNumbers" text="3" :value="3"/>
          <h-toggle v-model="checkedNumbers" text="4" :value="4"/>
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

    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>text</div>
        <div>value</div>
        <div>checked</div>
        <div>disabled</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String, Number</div>
        <div>String, Number, Object</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the text of the toggle</div>
        <div>Sets the value of the toggle</div>
        <div>If true the toggle is on</div>
        <div>if true the toggle is disabled</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@change(value)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered immediately on model change</div>
      </div>
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
    <h-toggle v-model="termAccepted" text="I agree"/>
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
    h-toggle(v-model="colors" text="Red" value="Red")
    h-toggle(v-model="colors" text="Green" value="Green")
    h-toggle(v-model="colors" text="Blue" value="Blue")        
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
    <h-toggle v-model="checkedNumbers" text="1" :value="1"/>
    <h-toggle v-model="checkedNumbers" text="2" :value="2"/>
    <h-toggle v-model="checkedNumbers" text="3" :value="3"/>
    <h-toggle v-model="checkedNumbers" text="4" :value="4"/>        
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
