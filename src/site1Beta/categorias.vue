<template lang="pug">
  div
    div
      h-table(
        title="Categorias"
        :columns="tableColumns"
        :rows="registros"
        lineheight="40px"
        @onEditRow="editar"
      )

    h-modal(v-model="abrirModal" title="Criar Categoria")
      .flex.flex-justify-center

      .row(style="width: 350px;")
        .row
          h4 Nome da Categoria:
        .row
          h-input(value="txtName" float-label="Nome" v-model="form.nome")
        .row.h-pt-md.flex.flex-justify-center
          h-btn(contained label="Criar" @click="criarCategoria")
          h-btn.h-pl-md(contained label="Close" @click="abrirModal=false")

    h-btn-float.bottom-right-fixed(minifloat :icon="['fas', 'plus']" @click="abrirModal=true"
      bgcolor="bg-primary" text-color="text-white" style="right: 18px; bottom: 18px")

</template>

<script>

// import Parse from 'parse'
import { Categoria } from './models.js'
import HTable from '../components/table/HTable'
import HModal from '../components/window/HModal'
import HBtn from '../components/buttons/HBtn'
import HInput from '../components/Inputs/HInput'
import HBtnFloat from '@/components/buttons/HBtnFloat.vue'

export default {
  components: {
    HTable,
    HModal,
    HBtn,
    HBtnFloat,
    HInput
  },
  data () {
    return {
      form: {
        id: 0,
        nome: '',
        objectId: null
      },
      registros: [], // [{'objectId': 'NUxKmil4l5', 'nome': 'Administrador'}],
      modoLista: true,
      colColor: '#3c294d',
      colunas: [],
      abrirModal: false,
      tableColumns: [
        {
          name: 'objectId',
          alignment: 'right'
        },
        {
          name: 'nome',
          alignment: 'center'
        }
      ]
    }
  },
  created () {
    this.listarCategorias()
  },
  mounted () {
  },
  methods: {
    novo () {
      this.limparForm()
      this.modoLista = false
      this.abrirModal = true
    },
    criarCategoria () {
      let cat = new Categoria()
      cat.set('nome', this.form.nome)

      cat.save().then(categoria => {
        let registro = categoria.toJSON()
        registro.object = categoria
        this.registros.push(registro)
        this.abrirModal = false
        this.modoLista = true
        this.limparForm()
      }).catch(error => {
        this.$q.notify({
          message: 'Nao foi possivel salvar: ' + error.message,
          color: 'negative',
          position: 'bottom-left'
        })
      })
    },
    cancelar () {
      this.limparForm()
      this.modoLista = true
    },
    limparForm () {
      this.form.objectId = null
      this.form.nome = ''
      this.form.index = -1
    },
    editar (row) {
      this.limparForm()
      this.modoLista = false
      console.log('row vale:' + JSON.stringify(row))

      this.form.objectId = row.row.objectId
      this.form.nome = row.row.nome
      this.form.index = row.row_index
      this.abrirModal = true
    },
    salvarCategoria () {
      let cat = Categoria.createWithoutData(this.form.objectId)
      cat.set('nome', this.form.nome)
      cat.save().then(categoria => {
        this.registros[this.form.index].nome = this.form.nome
        this.abrirModal = false
        this.modoLista = true
        this.limparForm()
      }).catch(error => {
        this.$q.notify({
          message: 'Nao foi possivel salvar: ' + error.message,
          color: 'negative',
          position: 'bottom-left'
        })
      })
    },
    excluir (item) {
      let self = this
      item.object.destroy({
        success: function (object) {
          self.listarCategorias()
        },
        error: function (object, error) {
          this.$q.notify({
            message: 'Error: ' + error.message,
            color: 'negative',
            position: 'bottom-left'
          })
        }
      })
    },
    listarCategorias () {
      // let self = this
      let Parse = this.$parse
      let query = new Parse.Query(Categoria)
      console.log('listando ....' + query)
      query.ascending('nome')
      query.find().then((results) => {
        let data = results.map(object => object.toJSON())
        for (let index = 0; index < data.length; index++) {
          this.registros.push({
            objectId: data[index].objectId,
            nome: data[index].nome
          })
        }
      }).catch(error => {
        console.log('erro: ' + error)
      })
    }
  }
}
</script>

<style lang="stylus">

</style>
