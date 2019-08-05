<template>
  <h-page-content padding>

    <div class="h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Boolean</div>
      <div class="column">
        <div class="col">
          Do you agree to our terms and conditions?
        </div>
        <div class="col">
          <h-radio v-model="typeBoolean" text="Yes" :value="true"/>
          <h-radio v-model="typeBoolean" text="No" :value="false"/>
        </div>
        <div class="col">
          I like of: {{ typeBoolean }}
        </div>
      </div>
    </div>

    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">String</div>
      <div class="column">
        <div class="col">
          What type of movies do you like?
        </div>
        <div class="col">
          <h-radio v-model="typeMovie" text="Comedy" value="Comedy"/>
          <h-radio v-model="typeMovie" text="Action" value="Action"/>
          <h-radio v-model="typeMovie" text="Science" value="Science"/>
          <h-radio v-model="typeMovie" text="Romance" value="Romance"/>
        </div>
        <div class="col">
          I like of: {{ typeMovie }}
        </div>
      </div>
    </div>

    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Numbers</div>
      <div class="column">
        <div class="col">
          Wich number do you hate?
        </div>
        <div class="col">
          <h-radio v-model="typeNumber" text="10" :value="10"/>
          <h-radio v-model="typeNumber" text="13" :value="13"/>
          <h-radio v-model="typeNumber" text="15" :value="15"/>
          <h-radio v-model="typeNumber" text="20" :value="20"/>
        </div>
        <div class="col">
          I hate number: {{ typeNumber }}
        </div>
      </div>
    </div>

    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Option checked</div>
      <div class="column">
        <div class="col">
          Select your gender
        </div>
        <div class="col">
          <h-radio v-model="gender" text="Male" value="male" checked/>
          <h-radio v-model="gender" text="Female" value="female" />
          <div>Your gender is: {{ gender }}</div>
        </div>
      </div>
    </div>

    <div class="h-mt-md h-pa-sm border border-gray border-radius">
      <div class="text-body1 text-bold">Objects</div>
      <div class="column">
        <div class="col">
          Select yours favorite objects
        </div>
        <div class="col">
          <h-radio v-model="radioObjects" :text="radioObjectsOptions[0].name" :value="radioObjectsOptions[0]"/>
          <h-radio v-model="radioObjects" :text="radioObjectsOptions[1].name" :value="radioObjectsOptions[1]" />
          <h-radio v-model="radioObjects" :text="radioObjectsOptions[2].name" :value="radioObjectsOptions[2]" />
          <div>Your objects: {{ radioObjects }}</div>
        </div>
      </div>
    </div>

  </h-page-content>
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
