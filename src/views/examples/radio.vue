<template>
  <div>

    <h3>Boolean</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        Do you agree to our terms and conditions?
      </div>
      <div>
        <h-radio v-model="typeBoolean" text="Yes" :value="true"/>
        <h-radio v-model="typeBoolean" text="No" :value="false"/>
      </div>
      <div>
        I like of: {{ typeBoolean }}
      </div>
    </div>

    <h3>String</h3>
    <div class="h-pa-sm border border-gray border-radius">
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

    <h3>Numbers</h3>
    <div class="h-pa-sm border border-gray border-radius">
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

    <h3>Option checked</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        Select your gender
      </div>
      <div>
       <h-radio v-model="gender" text="Male" value="male" checked/>
       <h-radio v-model="gender" text="Female" value="female" />
       <div>Your gender is: {{ gender }}</div>
      </div>
    </div>

    <h3>Ojects</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div>
        Select yours favorite objects
      </div>
      <div>
       <h-radio v-model="radioObjects" :text="radioObjectsOptions[0].name" :value="radioObjectsOptions[0]"/>
       <h-radio v-model="radioObjects" :text="radioObjectsOptions[1].name" :value="radioObjectsOptions[1]" />
       <h-radio v-model="radioObjects" :text="radioObjectsOptions[2].name" :value="radioObjectsOptions[2]" />
       <div>Your objects: {{ radioObjects }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      typeBoolean: false,
      typeMovie: '',
      typeNumber: 0,
      gender: '',
      radioObjects: '',
      radioObjectsOptions: [
        { id: 1, name: 'html' },
        { id: 2, name: 'css' },
        { id: 3, name: 'vuejs' }
      ]
    }
  }
}
</script>
