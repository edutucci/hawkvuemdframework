<template lang="pug">
  div
    h1  Checkbox
    
    div
      h1 Boolean
      <h-card>
        <h-card-text desc="Do you agree to our terms and conditions?"/>
        <div>
          <h-checkbox v-model="termAccepted" label="I agree"/>
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
          h-checkbox(v-model="colors" label="Red" value="Red")
          h-checkbox(v-model="colors" label="Green" value="Green")
          h-checkbox(v-model="colors" label="Blue" value="Blue")        
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

    //- div
    //-   <!-- Boolean -->
    //-   <div>
    //-     <h-checkbox @change="onChange" v-model="checked2" label="Aceito termos"/>
    //-     <div>
    //-       <span> checked2 {{ checked2 }} </span>
    //-     </div>          
    //-   </div>

    //-   <!-- <p></p>
    //-   <h-checkbox v-model="checkedNames" label="John" value="John"/>
    //-   <h-checkbox v-model="checkedNames" label="Mike" value="Mike"/>
    //-   <span>checkedNames {{ checkedNames }}</span> -->

    //-   <div>
    //-     <h-checkbox @change="onChange" v-model="checkedNames2" label="Abacaxi" value="Abacaxi"/>
    //-     <h-checkbox v-model="checkedNames2" label="Pera" value="Pera"/>
    //-     <h-checkbox v-model="checkedNames2" label="Uva" value="Uva"/>
    //-     <h-checkbox v-model="checkedNames2" label="Maça" value="Maça"/>
    //-     <div>
    //-       <span>checkedNames2 {{ checkedNames2 }}</span>
    //-     </div>
    //-   </div>

    //-   <div>
    //-     <h-checkbox v-model="checkedNumbers" label="1" :value="1"/>
    //-     <h-checkbox v-model="checkedNumbers" label="2" :value="2"/>
    //-     <h-checkbox v-model="checkedNumbers" label="3" :value="3"/>
    //-     <h-checkbox v-model="checkedNumbers" label="4" :value="4"/>
    //-     <div>
    //-       <span>checkedNumbers {{ checkedNumbers }}</span>
    //-     </div>         
    //-   </div>

    //-   <!-- Vue Events
    //-   Vue Event 	Description
    //-   @change(value) 	Triggered immediately when the user clicks on checkbox.     -->  

</template>

<script>
import HCheckbox from '../components/checkbox/HCheckbox.vue'
import HCard from '../components/card/HCard'
import HCardText from '../components/card/HCardText'

export default {
  components: {
    HCheckbox,
    HCard,
    HCardText
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
    <h-checkbox v-model="termAccepted" label="I agree"/>
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
    h-checkbox(v-model="colors" label="Red" value="Red")
    h-checkbox(v-model="colors" label="Green" value="Green")
    h-checkbox(v-model="colors" label="Blue" value="Blue")        
  </div>

  <div>
    | Your favorites colors: {{ colors }}
  </div>          
</h-card>
      `
    }
  },
  methods: {
    onChange (value) {
      console.log('change selected: ' + value)
    }
  }
}
</script>
