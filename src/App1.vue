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
 <h-btn flat @click="$refs.nav.close()"> Close SideNav </h-btn>    
    <h-side-nav ref="nav">
 <h1 slot="header">Here might be a page title</h1>

When authoring components, it’s good to keep in mind whether you intend to reuse it somewhere else later. 

The API for a Vue component comes in three parts - props, events, and slots:
<p> </p>
Capcom anunciou no último fim de semana o lançamento do game Monster Hunter: World , franquia de ação e RPG que já vendeu 40 milhões de unidades em todo o mundo.

<p> </p>
Capcom anunciou no último fim de semana o lançamento do game Monster Hunter: World , franquia de ação e RPG que já vendeu 40 milhões de unidades em todo o mundo.

<p> </p>
Capcom anunciou no último fim de semana o lançamento do game Monster Hunter: World , franquia de ação e RPG que já vendeu 40 milhões de unidades em todo o mundo.

<p> </p>
Capcom anunciou no último fim de semana o lançamento do game Monster Hunter: World , franquia de ação e RPG que já vendeu 40 milhões de unidades em todo o mundo.

<p> </p>
Capcom anunciou no último fim de semana o lançamento do game Monster Hunter: World , franquia de ação e RPG que já vendeu 40 milhões de unidades em todo o mundo.

<p> </p>
Capcom anunciou no último fim de semana o lançamento do game Monster Hunter: World , franquia de ação e RPG que já vendeu 40 milhões de unidades em todo o mundo.

<p> </p>
Capcom anunciou no último fim de semana o lançamento do game Monster Hunter: World , franquia de ação e RPG que já vendeu 40 milhões de unidades em todo o mundo.


  <h1 slot="footer">Here might be a footer</h1>

    </h-side-nav>


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
import HSideNav from './components/menu/HSideNav.vue'
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
    HSideNav
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