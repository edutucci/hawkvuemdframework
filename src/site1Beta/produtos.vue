<template lang="pug">
  div
    .row
      | Registros: {{registros}}
    //- .row
    //-   | categorias: {{categorias}}
    .row.flex.flex-justify-center(v-if="modoLista")
      h-table(
        title="Produtos"
        :columns="tableColumns"
        :rows="registros"
        lineheight="40px"
        @onEditRow="editar"
      )
        template(slot="ativo" slot-scope="row")
          h-fa-icon(v-if="row.rowData.ativo" textcolor="text-secondary" :icon="['fas', 'check-circle']" @click="trocarAtivo(row.rowData, false)")
          h-fa-icon(v-else :icon="['fas', 'ban']" textcolor="text-negative" @click="trocarAtivo(row.rowData, true)")
        template(slot="Ação" slot-scope="row")
          h-fa-icon(:icon="['fas', 'edit']" @click="editar(row.rowData)")
          h-fa-icon.h-pl-sm(:icon="['fas', 'trash-alt']" @click="excluir(row.rowData)")

    .form.flex.flex-justify-center(v-else)
      .row.flex.flex-column
        h-input(v-model.trim="form.codigo" float-label="Codigo")
        h-input(v-model.trim="form.nome" float-label="Nome")
        h-input(v-model="form.valor" float-label="Valor")
        h-select(v-model="form.categoriaId" :options="categorias" float-label="Cardapio")
        h-checkbox(v-model="form.ativo" label="Ativo")
      .row.h-pt-md.flex.flex-justify-center
        h-btn(contained label="Criar" @click="salvar")
        h-btn.h-pl-md(contained label="Cancelar" @click="cancelar")

    h-btn-float.bottom-right-fixed(v-if="modoLista" minifloat :icon="['fas', 'plus']" @click="novo"
      bgcolor="bg-primary" text-color="text-white" style="right: 18px; bottom: 18px")
</template>

<script>
// import numeral from 'numeral'
import {Produto, Categoria} from './models.js'

import HInput from '../components/Inputs/HInput'
import HSelect from '../components/select/HSelect'
import HCheckbox from '../components/checkbox/HCheckbox'
import HTable from '../components/table/HTable'
import HBtnFloat from '../components/buttons/HBtnFloat'
import HBtn from '../components/buttons/HBtn'

export default {
  components: {
    HInput,
    HSelect,
    HCheckbox,
    HTable,
    HBtnFloat,
    HBtn
  },
  data () {
    return {
      form: {
        objectId: undefined,
        codigo: '',
        nome: '',
        categoriaId: undefined,
        valor: 0,
        ativo: false
      },
      tableColumns: [
        {
          name: 'codigo'
        },
        {
          name: 'nome'
        },
        {
          name: 'valor'
        },
        {
          name: 'ativo'
        },
        {
          name: 'Ação',
          alignment: 'center'
        }
      ],
      registros: [],
      categorias: [],
      modoLista: true
    }
  },
  created () {
    // numeral.locale('br')
    this.listarCategorias()
    this.listarProdutos()
  },
  methods: {
    novo () {
      this.limparForm()
      this.modoLista = false
    },
    cancelar () {
      this.modoLista = true
      this.limparForm()
    },
    limparForm () {
      this.form.objectId = undefined
      this.form.codigo = ''
      this.form.nome = ''
      this.form.categoriaId = undefined
      this.form.valor = 0
      this.form.ativo = false
    },
    listarProdutos () {
      let Parse = this.$parse
      let query = new Parse.Query(Produto)
      query.ascending('nome')
      query.find().then((results) => {
        this.registros = results.map(object => {
          let json = object.toJSON()
          json.categoriaNome = json.categoria.nome
          json.categoriaId = json.categoria.objectId
          return json
        })
      })
    },
    listarCategorias () {
      let self = this
      let Parse = this.$parse
      let query = new Parse.Query(Categoria)
      query.ascending('nome')
      query.find().then((results) => {
        for (let i = 0; i < results.length; i++) {
          let object = results[i]
          let reg = {
            label: '',
            value: ''
          }
          reg.label = object.get('nome')
          reg.value = object.id

          self.categorias.push(reg)
        }
      }).catch(error => {
        console.log('Error: ' + error.code + ' ' + error.message)
      })
    },
    editar (item) {
      this.form.objectId = item.objectId
      this.form.codigo = item.codigo
      this.form.nome = item.nome
      // console.log('item.valor: ' + item.valor)
      this.form.valor = parseFloat(item.valor).toFixed(2)
      this.form.categoriaId = item.categoria.objectId
      this.form.ativo = item.ativo || false
      this.modoLista = false
    },
    excluir (item) {
      let self = this
      let object = Produto.createWithoutData(item.objectId)
      object.fetch().then(object => {
        return object.destroy()
      }).then(() => {
        self.listarProdutos()
      }).catch(error => {
        console.log(error.message)
      })
    },
    trocarAtivo (item, valor) {
      // console.log('item vale: ' + JSON.stringify(item))
      let produto = Produto.createWithoutData(item.objectId)
      produto.set('ativo', Boolean(valor))
      produto.save().then(() => {
        let index = this.registros.findIndex(prod => prod.objectId === item.objectId)
        this.registros[index].ativo = Boolean(valor)
      }).catch((error) => {
        alert(error.message)
        // this.$q.notify({
        //   message: error.message,
        //   color: 'negative',
        //   position: 'bottom-left'
        // })
      })
    },
    salvar () {
      let self = this
      let produto = (self.form.objectId)
        ? Produto.createWithoutData(self.form.objectId)
        : new Produto()

      let categoria = Categoria.createWithoutData(self.form.categoriaId)

      produto.set('codigo', self.form.codigo)
      produto.set('nome', self.form.nome)
      produto.set('valor', Number(self.form.valor))
      produto.set('categoria', categoria)
      produto.set('ativo', self.form.ativo)
      produto.save().then((results) => {
        self.listarProdutos()
        self.limparForm()
        self.modoLista = true
      }).catch(error => {
        console.log('Error: ' + error.code + ' ' + error.message)
      })
    }
  }
}
</script>

<style scoped>
.form {
  width: 450px;
  max-width: 90%;
}
</style>
