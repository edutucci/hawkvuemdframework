<template lang="pug">
    table.bg-white(
      cellspacing="0"
      class="border-radius"
      :class="[{'borders border border-gray': bordered, 'shadow-1': shadow, 'cell-separator': cellSeparator}]"
    )
      thead
        tr
          th.text-left.h-pa-xs.text-body2(
            v-for="(col, index) in columns" :key="col"
          )
            | {{col}}
      tbody
        tr(v-for="(row, index) in rows" :key="`row-${index}`")
          td.h-pa-xs(
            v-for="(col, index) in columns" :key="`rowcol-${index}`"
          )
            | {{row[col]}}

      slot

</template>

<script>
export default {
  name: 'HtmlTable',
  props: {
    columns: {
      type: Array,
      default: () => ([])
    },
    rows: {
      type: Array,
      default: () => ([])
    },
    bordered: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    cellSeparator: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
table {
  overflow:hidden;
}

table.borders {
  border-collapse:separate;
}

table.borders > tbody > tr:not(:last-child) > td {
  border-bottom: solid #ccc 1px;
}

table td, th {
  padding: 8px;
}

table.borders th {
  border-bottom: solid #ccc 1px;
}

tr > td,
tr > th {
  font-size: 14px;
  letter-spacing: 0.25px;
  width: 1px;
  white-space: nowrap;
}

tr > th {
  color: gray;
}

table.borders.cell-separator > tbody > tr > td:not(:first-child),
table.borders.cell-separator > thead > tr > th:not(:first-child) {
  border-left: 1px solid gray;
}

</style>
