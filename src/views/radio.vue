<template lang="pug">
  div
    <h1> Radio Buttons </h1>
    div
      h1 List with String
      <h-card>
        <h-card-text desc="What type of movies do you like?"/>
        <div>
          h-radio(v-model="typeMovie" text="Comedy" value="Comedy")
          h-radio(v-model="typeMovie" text="Action" value="Action")
          h-radio(v-model="typeMovie" text="Science" value="Science")
          h-radio(v-model="typeMovie" text="Romance" value="Romance")
        </div>
        <div>
          | I like of: {{ typeMovie }}
        </div>

      </h-card>
    .boxshadow
      <pre v-highlightjs="rblist">
        <code class="html">
        </code>
      </pre>

    div
      h1 List with Numbers
      <h-card>
        <h-card-text desc="Wich number do you hate?"/>
        <div>
          h-radio(v-model="typeNumber" text="10" :value="10" @change="change")
          h-radio(v-model="typeNumber" text="13" :value="13" @change="change")
          h-radio(v-model="typeNumber" text="15" :value="15")
          h-radio(v-model="typeNumber" text="20" :value="20")
        </div>
        <div>
          | I hate number: {{ typeNumber }}
        </div>

      </h-card>
    .boxshadow
      <pre v-highlightjs="rbnumber">
        <code class="html">
        </code>
      </pre>

    div
      h1 List with option checked
      <h-card>
        <h-card-text desc="Select your gender"/>
        <div>
          <h-radio v-model="gender" text="Male" value="male" checked/>
          <h-radio v-model="gender" text="Female" value="female" />
          <div>Your gender is: {{ gender }}</div>
        </div>
      </h-card>
    .boxshadow
      <pre v-highlightjs="rbchecked">
        <code class="html">
        </code>
      </pre>

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
        <div>String, Number</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the text of the radio</div>
        <div>Sets the value of the radio</div>
        <div>If true the radio is checked</div>
        <div>if true the radio is disabled</div>
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
      typeMovie: '',
      typeNumber: 0,
      gender: '',
      rblist: `
<h-card>
  <h-card-text desc="What type of movies do you like?"/>
  <div>
    h-radio(v-model="typeMovie" text="Comedy" value="Comedy")
    h-radio(v-model="typeMovie" text="Action" value="Action")
    h-radio(v-model="typeMovie" text="Science" value="Science")
    h-radio(v-model="typeMovie" text="Romance" value="Romance")        
  </div>
  <div>
    | I like of: {{ typeMovie }}
  </div>
</h-card>
      `,
      rbnumber: `
<h-card>
  <h-card-text desc="Wich number do you hate?"/>
  <div>
    h-radio(v-model="typeNumber" text="10" :value="10")
    h-radio(v-model="typeNumber" text="13" :value="13")
    h-radio(v-model="typeNumber" text="15" :value="15")
    h-radio(v-model="typeNumber" text="20" :value="20")
  </div>
  <div>
    | I hate number: {{ typeNumber }}
  </div>

</h-card>
      `,
      rbchecked: `
<h-card>
  <h-card-text desc="Select your gender"/>      
  <div>
    <h-radio v-model="gender" text="Male" value="male" checked/>
    <h-radio v-model="gender" text="Female" value="female" />
    <div>Your gender is: {{ gender }}</div>      
  </div>
</h-card>
      `
    }
  },
  methods: {
    change (value) {
      console.log('value change: ' + value)
    }
  }
}
</script>
