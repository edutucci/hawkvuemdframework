<template lang="pug">
  .column.shadow-2.border-radius.no-user-select(style="padding: 2px")
    .col-auto
      // header
      .row.table-padding
        .col.text-h6
          | {{title}}
      .row.table-padding(v-if="filter")
        .col
          h-input(
            dense
            type="search"
            clearable
            label="Filter"
            v-model="inputFilter"
            trailing-icon="fas fa-search"
            @onFilter="filterRows"
          )

      .row.table-padding
        .col
          slot(name="custom-header")

    .col.scroll.tablerows
      // body
      .row.border-bottom.border-gray.table-column-padding.position-sticky.bg-white
        .col-auto(v-if="selectable")
          table-column(
            class="border-right1 border-gray1 "
          )
            .row.align-items-center
              .col
                h-checkbox(v-model="selectedAllRows" @change="selectAllTableRows" style="padding-top:0px; padding-left:8px;")
        .col-auto(v-for="(col, colindex) in columns" :key="colindex"
          :class = "{ 'cursor-pointer' : col.sortable}"
        )
          table-column(
            :width="col.width || '120px'"
            class="border-right1 border-gray1 "
          )
            .row.align-items-center
              .col.text-gray500.text-bold.text-body2.text-overflow-ellipsis(:class="col.alignment")
                | {{col.text}}
                h-icon(class="h-ml-xs" v-if="col.sortable" :icon="colIconName(col)" text-color="text-red400")

      .row.table-row-padding.tablerow(v-for="(row, rowindex) in tableData.rows" :key="rowindex")
        .col-auto(v-if="selectable")
          table-column(
          )
            .row.align-items-center(:style="[rowlineheight]")
              .col
                h-checkbox(v-model="selectedRows" :value="rowindex" style="padding-top:0px; padding-left:8px;")

        .col-auto(v-for="(col, colindex) in columns" :key="colindex"
          :class = "{ 'cursor-pointer' : col.sortable}"
        )
          table-column(
            :width="col.width || '120px'"
            class="border-right1 border-gray1"
          )
            .row.align-items-center(:style="[rowlineheight]")
              .col.text-overflow-ellipsis(:class="col.alignment")
                slot(:name="col.field" :value="row[col.field]")
                  | {{row[col.field]}}

    .col-auto.border-top.border-gray
      // footer
      .row.h-mt-sm.align-items-center.justify-end
        .col-auto.h-pr-sm.text-caption.text-gray
          | Rows per page:
        .col-auto.h-pr-sm(style="width:60px;")
          h-input(
            dense
            :options="rowsperpage"
            v-model="rowsperpagevalue"
            type="select"
          )
        .col-auto.h-pl-sm.h-pr-sm.text-caption.text-gray
          | {{rowsPerPageDetails}}
        .col-auto(v-if="rowsperpagevalue !== -1" @click="onPreviousPage")
          h-btn(text-button fab text-color="text-white" size="xs")
            h-icon(icon="fas fa-chevron-left" size="16px")

        .col-auto(v-if="rowsperpagevalue !== -1" @click="onNextPage")
          h-btn(text-button fab text-color="text-white" size="xs")
            h-icon(icon="fas fa-chevron-right" size="16px")

</template>

<script>

import tableColumn from './TableColumn'
import _ from 'lodash'

export default {
  name: 'HTable',
  components: {
    tableColumn
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
    },
    selectable: {
      type: Boolean,
      default: false
    },
    filter: {
      type: Boolean,
      default: false
    },
    startWithAllRows: {
      type: Boolean,
      default: false
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
      tableRows: [],
      tableSelectedRows: [],
      selectedRows: [],
      selectedAllRows: false,
      rowsperpage: [
        {
          text: 'All',
          value: -1
        },
        {
          text: 5,
          value: 5
        },
        {
          text: 10,
          value: 10
        },
        {
          text: 20,
          value: 20
        },
        {
          text: 50,
          value: 50
        }
      ],
      rowsperpagevalue: 0,
      currentPage: 1,
      inputFilter: ''
    }
  },
  mounted () {
    this.tableData.columns = this.columns

    this.rowlineheight.height = this.lineheight
    this.rowlineheight.maxHeight = this.lineheight
    this.rowsperpagevalue = (this.startWithAllRows) ? -1 : 10
  },
  computed: {
    maxPage () {
      let maxPage = 1
      if (this.rowsperpagevalue > -1) {
        if (this.rows.length > 1) {
          let size = this.rows.length - 1
          maxPage = parseInt((size / this.rowsperpagevalue) + 1)
        }
      }
      return maxPage
    },
    rowsPerPageDetails () {
      let value = ''

      if (this.rowsperpagevalue === -1) {
        value = '' + 1 + ' - ' + this.maxRows
      } else {
        if (this.currentPage <= 1) {
          value = '' + this.currentPage + '-' + this.maxPageRows
        } else {
          value = '' + (this.rowsperpagevalue * (this.currentPage - 1)) + ' - '
          value += this.maxPageRows
        }
      }

      return value
    },
    maxPageRows () {
      let value = (this.rowsperpagevalue * this.currentPage > this.maxRows) ? this.maxRows : this.rowsperpagevalue * this.currentPage
      return value
    },
    maxRows () {
      return this.rows.length
    }
  },
  watch: {
    rows: function (val) {
      if (val.length > 0) {
        this.setTableRows(this.rowsperpagevalue)
      }
    },
    selectedRows: function (value) {
      this.selectedAllRows = this.tableData.rows.length === value.length
      this.updateTableSelectedRows(value)
    },
    rowsperpagevalue: function (value) {
      this.currentPage = 1
      this.setTableRows(value)
    }
  },
  methods: {
    colIconName (col) {
      let name = ''

      if (col.type === undefined) {
        this.$set(col, 'type', 'string')
      }

      if (col.type.toLowerCase() === 'string') {
        if (col.sortMode) {
          name = (col.sortMode === 'ascending') ? 'fas fa-sort-alpha-down' : 'fas fa-sort-alpha-up'
        } else {
          this.$set(col, 'sortMode', 'ascending')
          name = 'fas fa-sort-alpha-down'
        }
      } else if (col.type.toLowerCase() === 'number') {
        if (col.sortMode) {
          name = (col.sortMode === 'ascending') ? 'fas fa-sort-numeric-down' : 'fas fa-sort-numeric-up'
        } else {
          this.$set(col, 'sortMode', 'ascending')
          name = 'fas fa-sort-numeric-down'
        }
      }

      return name
    },
    setTableRows (rowsperpagevalue) {
      if (rowsperpagevalue > -1) {
        let max = (rowsperpagevalue * this.currentPage)
        let min = (max - rowsperpagevalue)
        if (max > this.rows.length) {
          max = this.rows.length
        }

        let rows = []
        for (let index = min; index < max; index++) {
          rows.push(this.rows[index])
        }

        this.tableRows = _.cloneDeep(rows)
        this.tableData.rows = _.cloneDeep(rows)
      } else {
        this.tableRows = _.cloneDeep(this.rows)
        this.tableData.rows = _.cloneDeep(this.rows)
      }

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
    selectAllTableRows (val) {
      this.selectedRows = []
      if (val) {
        for (let rowindex = 0; rowindex < this.tableData.rows.length; rowindex++) {
          this.selectedRows.push(rowindex)
        }
      }
      this.updateTableSelectedRows(this.selectedRows)
    },
    updateTableSelectedRows (selectedRows) {
      this.tableSelectedRows = []
      selectedRows.forEach(rowIndex => {
        this.tableSelectedRows.push(this.tableData.rows[rowIndex])
      })
      this.$emit('selectedRows', this.tableSelectedRows)
    },
    getSelectedRows () {
      let rows = []
      for (let index = 0; index < this.selectedRows.length; index++) {
        rows.push({
          row: this.rows[this.selectedRows[index]],
          row_index: this.selectedRows[index]
        })
      }
      this.selectedRows = []
      return rows
    },
    onAddRow () {
      let rows = this.getSelectedRows()
      this.$emit('addRows', rows)
    },
    onEditRow () {
      let rows = this.getSelectedRows()
      this.$emit('editRow', rows[0])
    },
    onDeleteRow () {
      let rows = this.getSelectedRows()
      this.$emit('deleteRows', rows)
    },
    onPreviousPage () {
      this.selectedRows = []
      if (this.currentPage > 1) {
        this.currentPage -= 1
        this.setTableRows(this.rowsperpagevalue)
      }
    },
    onNextPage () {
      this.selectedRows = []
      if (this.currentPage < this.maxPage) {
        this.currentPage += 1
        this.setTableRows(this.rowsperpagevalue)
      }
    },
    sort (col) {
      if (col.sortable) {
        if (col.sortMode === 'ascending') {
          // descending
          this.tableData.rows.sort(function strDes (a, b) {
            if (a[col.name] > b[col.name]) return -1
            else if (a[col.name] < b[col.name]) return 1
            else return 0
          })
          col.sortMode = 'descending'
        } else {
          // ascending
          this.tableData.rows.sort(function strDes (a, b) {
            if (a[col.name] > b[col.name]) return 1
            else if (a[col.name] < b[col.name]) return -1
            else return 0
          })
          col.sortMode = 'ascending'
        }
      }
    },
    filterRows (query) {
      if (!query || query.length === 0) {
        this.setTableRows(this.rowsperpagevalue)
      } else {
        this.tableData.rows = []
        for (var rowIndex = 0; rowIndex < this.tableRows.length; ++rowIndex) { // this.tableData.rows.forEach(row => {
          let row = this.tableRows[rowIndex]
          for (var colIndex = 0; colIndex < this.columns.length; ++colIndex) { // this.columns.forEach(col => {
            let col = this.columns[colIndex]
            if (row[col.field]) {
              let colvalue = row[col.field].toString().toLowerCase()
              if (_.includes(colvalue, query.toLowerCase())) {
                this.tableData.rows.push(row)
                break
              }
            }
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.table-padding {
  padding: 8px;
}

.table-column-padding {
  padding: 8px;
}

.table-row-padding {
  padding: 4px 8px;
}

</style>
