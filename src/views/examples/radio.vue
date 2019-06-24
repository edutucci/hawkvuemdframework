<template>
  <div>

    <h3>List with String</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div>
        What type of movies do you like?"
      </div>
      <div>
        <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
        <h-radio v-model="typeMovie" text="Action" value="Action"/>
        <h-radio v-model="typeMovie" text="Science" value="Science"/>
        <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
      </div>
      <div>
        I like of: {{ typeMovie }}
      </div>
    </div>

    <h3>List with Numbers</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div>
        Wich number do you hate?
      </div>
      <div>
        <h-radio v-model="typeNumber" text="10" :value="10"/>
        <h-radio v-model="typeNumber" text="13" :value="13"/>
        <h-radio v-model="typeNumber" text="15" :value="15"/>
        <h-radio v-model="typeNumber" text="20" :value="20"/>
      </div>
      <div>
        I hate number: {{ typeNumber }}
      </div>
    </div>

    <h3>List with option checked</h3>
    <div class="h-pa-sm border border-gray border-corner-rounded">
      <div>
        Select your gender
      </div>
      <div>
       <h-radio v-model="gender" text="Male" value="male" checked/>
       <h-radio v-model="gender" text="Female" value="female" />
       <div>Your gender is: {{ gender }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      typeMovie: '',
      typeNumber: 0,
      gender: ''
    }
  }
}
</script>
