<template lang="pug">
  div
    h1  Checkbox

    div
      h1 Boolean
      <h-card>
        <h-card-text desc="Do you agree to our terms and conditions?"/>
        <div>
          <h-checkbox v-model="termAccepted" text="I agree"/>
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
          // h-checkbox(v-model="colors" text="Red" value="Red" :checked="true" :disabled="true")
          // h-checkbox(v-model="colors" text="Green" value="Green" disabled)
          h-checkbox(v-model="colors" text="Red" value="Red")
          h-checkbox(v-model="colors" text="Green" value="Green")
          h-checkbox(v-model="colors" text="Blue" value="Blue")
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
          <h-checkbox v-model="checkedNumbers" text="1" :value="1"/>
          <h-checkbox v-model="checkedNumbers" text="2" :value="2"/>
          <h-checkbox v-model="checkedNumbers" text="3" :value="3"/>
          <h-checkbox v-model="checkedNumbers" text="4" :value="4"/>
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

    <div>
      h1 List with objects
      <h-card>
        <h-card-text desc="Select yours favorite objects" />
        <div v-for="(opt, index) in checkedObjectsOptions" :key="index">
          <h-checkbox v-model="checkedObjects" :text="opt.name" :value="opt"/>
        </div>
        <div>
          <span>Your objects {{ checkedObjects }}</span>
        </div>
      </h-card>
    .boxshadow
      <pre v-highlightjs="cklistobjects">
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
        <div>Sets the text of the checkbox</div>
        <div>Sets the value of the checkbox</div>
        <div>If true the checkbox is checked</div>
        <div>if true the checkbox is disabled</div>
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
      checkedObjects: [],
      checkedObjectsOptions: [
        {id: 1, name: 'html'},
        {id: 2, name: 'css'},
        {id: 3, name: 'vuejs'}
      ],
      checked2: false,
      ckboolean: `
<h-card>
  <h-card-text desc="Do you agree to our terms and conditions?"/>
  <div>
    <h-checkbox v-model="termAccepted" text="I agree"/>
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
    h-checkbox(v-model="colors" text="Red" value="Red")
    h-checkbox(v-model="colors" text="Green" value="Green")
    h-checkbox(v-model="colors" text="Blue" value="Blue")        
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
    <h-checkbox v-model="checkedNumbers" text="1" :value="1"/>
    <h-checkbox v-model="checkedNumbers" text="2" :value="2"/>
    <h-checkbox v-model="checkedNumbers" text="3" :value="3"/>
    <h-checkbox v-model="checkedNumbers" text="4" :value="4"/>        
  </div>
  <div>
    <span>Favorite numbers {{ checkedNumbers }}</span>
  </div>
</h-card>
      `,
      cklistobjects: `
<h-card>
  <h-card-text desc="Select yours favorite objects" />
  <div v-for="(opt, index) in checkedObjectsOptions" :key="index">
    <h-checkbox v-model="checkedObjects" :text="opt.name" :value="opt"/>
  </div>
  <div>
    <span>Your objects {{ checkedObjects }}</span>
  </div>
</h-card>
    `
    }
  },
  methods: {
    onChange (value) {
      // console.log('change selected: ' + value)
    }
  }
}
</script>
