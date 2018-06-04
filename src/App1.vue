<template>
  <div>

    <h1> SideNav </h1>
    <div class="flex flex-justify-end">
    <h-btn-float minifloat @click="$refs.nav.open()" > <h-fa-icon :icon="['fas', 'plus']"/></h-btn-float>
     <h-btn-float float @click="$refs.nav.open()" > <h-fa-icon :icon="['fas', 'plus']"/></h-btn-float>
      <h-btn-float float @click="$refs.nav.open()" > click me</h-btn-float>
     <h-btn @click="$refs.nav.open()" > X </h-btn>
    <h-btn flat @click="$refs.nav.close()"> Close SideNav </h-btn>  
    </div>

    <br>

    <h1> Tests </h1>

    <input type="checkbox" id="checkbox" v-model="checked" checked>
    <label for="checkbox">Testando: {{ checked }}</label>

    <h1> Components </h1>     
   
        <!--
        <br><br><br><br>
        <span>Multiline message is:</span>
        <p>{{ txtmessage }}</p>-->

        <!-- <h-text-area v-model="txtmessage" placeholder="add multiple lines"/> --> 

  </div>
</template>


<script>
import HBtn from './components/buttons/HBtn.vue'
import HBtnFloat from './components/buttons/HBtnFloat.vue'
import HTextArea from './components/Inputs/HTextArea.vue'
import HAvatar from './components/image/HAvatar.vue'
import HFaIcon from './components/icons/HFaIcon'

export default {
  components: {
    HFaIcon,
    HBtn,
    HBtnFloat,
    HTextArea,
    HAvatar,
    HSelect,
    HCollapsible,
    HCollapsibleItem,
  },
  data () {
    return {
      txtmessage: '',
      message: 'This is a message for <a href="#">John Doe</a>, please update your email address.',
      tableConfig: {
        columns: [
          {name: 'numero', width: '100px'},
          {name: 'avatar', width: '200px'}
        ]
      }
    }
  },
  created () {
    this.createTableData()
  },
  methods: {
    showModal () {
      alert(this.input2)
    },
    createTableData () {
      let data = {}

      data['numero'] = { nome: 'numero', data: [] }
      data['avatar'] = { nome: 'avatar' }
      console.log('table config vale: ' + JSON.stringify(data))
    }
  }
}
</script>

<style scoped>

</style>
 <!-- 
  <div> </div>
   
   <h-fa-icon name="edit"/>
    <h-fa-icon name="face"/>
    <h-fa-icon name="code"/>
    
    <div>
      <h-btn color="default">Default</h-btn>
      <h-btn color="dark">Dark</h-btn>
      <h-btn color="primary">Primary</h-btn>
      <h-btn color="success">Success</h-btn>
      <h-btn color="info">Info</h-btn>
      <h-btn color="warning">Warning</h-btn>
      <h-btn color="danger">Danger</h-btn>
    </div>
       
    <div>
      <h-input v-model="input1" float-label="Nome"></h-input>
      <h-input v-model="input2" float-label="Endereco"></h-input>
    </div> -->