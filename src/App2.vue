<template>
  <div id="app1">
    <img src="./assets/logo.png">
    <router-view2/>

    <!-- <p>Checkbox</p> 
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>
    <h-checkbox v-model="checked2" label="Aceito termos"/>    
    <span> checked2 {{ checked2 }} </span>

    <p>Checkbox</p>
    <h-radio v-model="picked" label="One" value="One"/>
    <h-radio v-model="picked" label="Two" value="Two" checked />
    <span>Picked: {{ picked }}</span> -->
  
  </div>
</template>


<script>
import HBtn from './components/buttons/HBtn.vue'
import HBtnFloat from './components/buttons/HBtnFloat.vue'
import HTab from './components/tab/HTab.vue'
import HTabs from './components/tab/HTabs.vue'
import HCheckbox from './components/checkbox/HCheckbox.vue'
import HRadio from './components/radio/HRadio.vue'
import HInput from './components/Inputs/HInput.vue'
import HTextArea from './components/Inputs/HTextArea.vue'
import HAvatar from './components/image/HAvatar.vue'
import HSelect from './components/select/HSelect.vue'
import HCollapsible from './components/collapsible/HCollapsible.vue'
import HCollapsibleItem from './components/collapsible/HCollapsibleItem.vue'
import HMenuBar from './components/menu/HMenuBar.vue'
import HMenuBarItem from './components/menu/HMenuBarItem.vue'
import HSideNav from './components/menu/HSideNav.vue'
import HFaIcon from './components/icons/HFaIcon'
import HCard from './components/card/HCard.vue'
import HSlideMenu from './components/menu/HSlideMenu.vue'
import HList from './components/list/HList.vue'
import HListItem from './components/list/HListItem.vue'
import HListTitle from './components/list/HListTitle.vue'
import HListItemLeft from './components/list/HListItemLeft.vue'
import HListItemRight from './components/list/HListItemRight.vue'
import HMenuDropdown from './components/menu/HMenuDropdown.vue'
import HMenuDropdownItem from './components/menu/HMenuDropdownItem.vue'
import HTable from './components/table/HTable.vue'

export default {
  name: 'app',
  components: {
    HFaIcon,
    HBtn,
    HBtnFloat,
    HTabs,
    HTab,
    HCheckbox,
    HRadio,
    HInput,
    HTextArea,
    HAvatar,
    HSelect,
    HCollapsible,
    HCollapsibleItem,
    HMenuBar,
    HMenuBarItem,
    HSideNav,
    HCard,
    HSlideMenu,
    HList,
    HListItem,
    HListTitle,
    HListItemLeft,
    HListItemRight,
    HMenuDropdown,
    HMenuDropdownItem,
    HTable
  },
  data () {
    return {
      input1: '',
      input2: '',
      tabs: [],
      checked: false,
      ch: true,
      checked2: false,
      checkedNames: [],
      checkedNames2: ['Maça', 'Uva', 'Abacaxi'],
      checkedNumbers: [1, 3],
      picked: '',
      picked2: 0,
      pick1: 1,
      pick2: 2,
      txtmessage: '',
      txtModel: 'texto do input',
      selectModel: '',
      selectModel1: '',
      options: [
        {
          'label': 'Address-book',
          'value': 'address-book',
          'icon': ['fas', 'address-book']
        },
        {
          'label': 'Bluetooth',
          'value': 'Bluetooth',
          'icon': ['fab', 'bluetooth']
        },
        {
          'label': 'heart',
          'value': 'heart',
          'icon': ['fas', 'heart']
        },
        {
          'label': 'chrome',
          'value': 'chrome',
          'icon': ['fab', 'chrome']
        },
        {
          'label': 'discord',
          'value': 'discord',
          'icon': ['fab', 'discord']
        },
        {
          'label': 'music',
          'value': 'music',
          'icon': ['fas', 'music']
        }
      ],
      message: 'This is a message for <a href="#">John Doe</a>, please update your email address.',
      slideMenuIcons: [
        { 'label': 'Usuario', 'icon': ['fas', 'user'] },
        { 'label': 'Messages', 'icon': ['fas', 'envelope'] }
      ],
      slideMenuList: [
        [
          { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 1', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 1', 'url': 'https://www.terra.com.br/' }
        ],
        [
          { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 2', 'url': 'https://www.terra.com.br/' },
          { 'label': 'item 2', 'url': 'https://www.terra.com.br/' }
        ]
      ],
      tableColums: ['numero', 'avatar'],
      tableData: [
        { numero: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png' },
        { numero: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png' }
      ]
    }
  },
  created () {
    // this.tabs = this.$children
  },
  methods: {
    showModal () {
      alert(this.input2)
    }
    // tabClick (value) {
    //   console.log('tabclick in app: ' + value)
    //   this.$emit('tabClick', 'Tokyo')
    // }
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