<template lang="pug">
    table.bg-white(
      cellspacing="0"
      :class="[{'borders border border-gray border-radius': borders}]"
    )
      tr
        th.text-left.h-pa-xs(
          v-for="(col, index) in columns" :key="col"
        )
          | {{col}}

      tr(v-for="(row, index) in rows" :key="`row-$(index)`")
        td.h-pa-xs(
          v-for="(col, index) in columns" :key="`rowcol-$(index)`"
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
    borders: {
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
table.borders {
  width: 100%;
  overflow:hidden;
  border-collapse:separate;
}

table.borders > tr:not(:last-child) > td {
  border-bottom: solid #ccc 1px;
}

table td, th {
  padding: 6px;
}

table.borders th {
  border-bottom: solid #ccc 1px;
}

</style>
