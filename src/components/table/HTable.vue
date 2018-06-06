<template>
    <div class="boxshadow flex flex-column full-height no-user-select">
      <div class="flex flex-column boxshadow h-pb-md" style="min-height:64px;overflow:hidden; position:relative; z-index: 1">
        <div v-if="selectedRows.length > 0" class="flex flex-row flex-items-center full-height" style="padding-left:8px;padding-right:8px;">
          <div class="flex-1" style="color:royalblue;">
            <strong>{{selectedRows.length}} item selected</strong>
          </div>
          <div class="flex flex-justify-end" style="cursor:pointer;">
            <h-fa-icon :icon="['fas', 'plus']" class="h-pr-md" @click="onAddRow"/>
            <h-fa-icon v-if="selectedRows.length === 1" :icon="['fas', 'edit']" class="h-pr-md" @click="onEditRow"/>
            <h-fa-icon :icon="['fas', 'trash-alt']" @click="onDeleteRow"/>
          </div>
        </div>
        <div v-else class="flex flex-row">
          <div class="flex flex-1 flex-items-center" style="padding-bottom:10px;padding-left:8px;padding-right:8px;padding-top:8px;">
            <h2>{{title}}</h2>
          </div>
          <div class="flex flex-items-center" style="padding-bottom:10px;padding-left:8px;padding-right:8px;padding-top:8px;">
            
          </div>
        </div>
      </div>
      
      <div class="flex-1  table-container" @mouseleave="onMouseOverRow(-1)" style="padding-left:24px; padding-right:14px;">
        <div class="flex flex-row table-row-container">
          <div>
            <div class="flex flex-column ">

              <div class="flex flex-items-center flex-justify-center" :style="[rowlineheight]">
                <h-checkbox v-model="selectedAllRows"  value="selectedAllRows" style="padding-top:0px; padding-left:8px;"/>
              </div>
              <div class="flex flex-items-center flex-justify-center" :style="[rowlineheight]" style="padding: 8px;"
                v-for="(row, rowindex) in tableData.rows" 
                :key="rowindex"
                :class="[rowbackgroundColor[rowindex]]"
                @mouseover ="onMouseOverRow(rowindex)"
                >
                  <h-checkbox v-model="selectedRows" :value="rowindex" style="padding-top:0px; padding-left:8px;"/>
              </div>
            </div>
          </div>
          <div v-for="(col, colindex) in columns" :key="colindex">
            <div
              class= "flex flex-items-center flex-justify-center"
              style="min-width:100px; color: #67686a;"
              :style="[rowlineheight]">
              <strong>{{col.name}}</strong>
            </div>
            <div class="flex flex-column">
              <div
                class= "flex flex-items-center"
                v-for="(row, rowindex) in tableData.rows" :key="rowindex"
                :class="[rowbackgroundColor[rowindex]]">
                <div 
                  @mouseover="onMouseOverRow(rowindex)"
                  class="full-width flex flex-items-center" :class="getTextAlignment(col.alignment)" style="padding: 8px;" :style="[rowlineheight]">
                  <slot :name="col.name" :rowData="row">{{row[col.name]}}</slot>
                </div>
              </div>
            </div>          
          </div>        
        </div>
      </div>
      <div class="boxshadow">
        <div class="flex flex-justify-end flex-items-center">
          <div class="h-pr-sm subtitle">
            Rows per page:
          </div>
          <div class="h-pr-sm">
            <h-select :options="rowsperpage" v-model="rowsperpagevalue" style="width:40px;"/>
          </div>
          <div class="btn bg-white circle flex flex-justify-center flex-items-center" style="width:28px;height:28px;">
            <h-fa-icon :icon="['fas', 'chevron-left']" @click="onPreviousPage"/>
          </div>
          <div class="btn bg-white circle flex flex-justify-center flex-items-center" style="width:28px;height:28px;">
            <h-fa-icon :icon="['fas', 'chevron-right']" @click="onNextPage"/>
          </div>
        </div>        
      </div>
  </div> 

</template>


<script>

import HCheckbox from '../checkbox/HCheckbox.vue'
import HFaIcon from '../icons/HFaIcon.vue'
import HSelect from '../select/HSelect.vue'
import HBtn from '../buttons/HBtn.vue'
import HBtnFloat from '../buttons/HBtnFloat.vue'

export default {
  components: {
    HCheckbox,
    HFaIcon,
    HSelect,
    HBtn,
    HBtnFloat
  },
  props: {
    title: {
      type: String
    },
    columns: {
      type: Array,
      default: () => ([])
    },
    rows: {
      type: Array,
      default: () => ([])
    },
    tablestyle: {
      type: Object
    },
    lineheight: {
      type: String,
      default: '40px'
    }
  },
  data () {
    return {
      tableData: {
        columns: [],
        rows: []
      },
      rowlineheight: {
        height: '',
        maxHeight: ''
      },
      rowHoverColorIndex: -1,
      rowbackgroundColor: [],
      activeClass: 'rowcolor',
      selectedRows: [],
      selectedAllRows: false,
      rowsperpage: [],
      rowsperpagevalue: 5,
      rowsPage: 1
    }
  },
  created () {
    this.tableData.columns = this.columns

    this.rowlineheight.height = this.lineheight
    this.rowlineheight.maxHeight = this.lineheight

    this.setRowsPerPage()
    this.setTableRows()
  },
  computed: {
    maxPage () {
      let maxPage = 1
      if (this.rows.length > 1) {
        let size = this.rows.length - 1
        maxPage = parseInt((size / this.rowsperpagevalue) + 1)
      }
      return maxPage
    }
  },
  watch: {
    // selectedAllRows: function (val) {
    //   this.selectedRows = []
    //   if (val) {
    //     for (let rowindex = 0; rowindex < this.tableData.rows.length; rowindex++) {
    //       this.selectedRows.push(rowindex)
    //     }
    //   }
    // }
    rowsperpagevalue: function (val) {
      this.rowsPage = 1
      this.setTableRows()
    }
  },
  methods: {
    getTextAlignment (alignment) {
      let rowalignment = 'flex-justify-left'
      if (alignment) {
        if (alignment === 'right') {
          rowalignment = 'flex-justify-end'
        } else if (alignment === 'center') {
          rowalignment = 'flex-justify-center'
        }
      }
      return rowalignment
    },
    setDefaultRowColor () {
      for (let r = 0; r < this.tableData.rows.length; r++) {
        this.rowbackgroundColor[r] = 'list-item-color'
      }
    },
    setRowsPerPage () {
      // console.log('rowsperpage: ' + this.rowsperpagevalue)
      if (this.rowsperpage || this.rowsperpage.length === 0) {
        this.rowsperpage = [
          {
            label: 5,
            value: 5
          },
          {
            label: 10,
            value: 10
          },
          {
            label: 20,
            value: 20
          },
          {
            label: 50,
            value: 50
          }
        ]
      }
    },
    setTableRows () {
      // console.log('setTableRows: ')
      let max = (this.rowsperpagevalue * this.rowsPage)
      let min = (max - this.rowsperpagevalue)
      if (max > this.rows.length) {
        max = this.rows.length
      }
      console.log('min: ' + min)
      console.log('max: ' + max)

      let rows = []
      for (let index = min; index < max; index++) {
        rows.push(this.rows[index])
      }
      this.tableData.rows = rows
      this.setDefaultRowColor()
      this.selectedAllRows = false
    },
    onMouseOverRow (rowIndex) {
      if (this.rowHoverColorIndex === -1) {
        this.rowHoverColorIndex = rowIndex
      }

      this.$set(this.rowbackgroundColor, this.rowHoverColorIndex, 'list-item-color')

      this.rowHoverColorIndex = rowIndex
      this.$set(this.rowbackgroundColor, this.rowHoverColorIndex, 'list-item-hover')
    },
    columnwidth (col) {
      return 'width:' + col.width
    },
    onAddRow () {
      console.log('addRow')
      this.$emit('onAddRow', this.selectedRows)
    },
    onEditRow () {
      console.log('EditRow')
      this.$emit('onEditRow', this.selectedRows)
    },
    onDeleteRow () {
      console.log('deleteRow')
      this.$emit('onDeleteRow', this.selectedRows)
    },
    onPreviousPage () {
      if (this.rowsPage > 1) {
        this.rowsPage -= 1
        console.log('this.rowsPage:' + this.rowsPage)
        this.setTableRows()
      }
    },
    onNextPage () {
      if (this.rowsPage < this.maxPage) {
        this.rowsPage += 1
        console.log('this.rowsPage:' + this.rowsPage)
        this.setTableRows()
      }
    }
  }
}
</script>

<style scoped>
.table-container {
  overflow-x: auto;
  overflow-y: auto;
}

.table-row-container {
  overflow-x: auto;
  overflow-y: hidden;
}

h1,h2,h3,h4,h5 {
  padding: 0;
  margin: 0;
}

</style>
