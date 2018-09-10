<template>
  <div style="top: 50px; position: relative;">
    <h1>Table</h1>

    <pre v-highlightjs="tbdata">
      <code class="javascript">
      </code>
    </pre>

    <pre v-highlightjs="tbColumns">
      <code class="javacript">
      </code>
    </pre>

    <div class="col-6" style="height: 450px;">
      <h-table
        title="Users"
        :columns="tableColumns"
        :rows="tableDatabase"
        lineheight="40px"
        @addRows="addRows"
        @editRow="editRow"
        @deleteRows="deleteRows"
      >
        <template slot="number" slot-scope="row">
          {{row.rowData.number}}
        </template>
        <template slot="avatar" slot-scope="row">
          <img :src="row.rowData.avatar" style="width:40px; height:40px;">
        </template>
      </h-table>
    </div>

    <pre v-highlightjs="table">
      <code class="javacript">
      </code>
    </pre>

    <h2 class="text-primary"> Table Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>title</div>
        <div>columns</div>
        <div>rows</div>
        <div>lineheight</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>Array</div>
        <div>Array</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the table title</div>
        <div>Array of object for each column data</div>
        <div>Array of object with table rows data</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@addRows(value)</div>
        <div>@editRow(value)</div>
        <div>@deleteRows(value)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered when user clicks on plus icon in table header. The selected rows is sent.</div>
        <div>Triggered when user clicks on edit icon in table header. The selected row is sent.</div>
        <div>Triggered when user clicks on trash icon in table header. The selected rows is sent.</div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      tableColumns: [
        {
          name: 'number',
          alignment: 'flex-justify-end'
        },
        {
          name: 'avatar',
          alignment: 'flex-justify-center'
        },
        {
          name: 'country',
          alignment: 'flex-justify-center'
        },
        {
          name: 'city'
        }
      ],
      tableData: [],
      dataBase: [
        { number: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { number: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { number: 5, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { number: 7, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 8, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { number: 9, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 10, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { number: 11, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 12, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { number: 13, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 14, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { number: 15, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 16, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' }
      ],
      tbdata: `
tableData: [
  { number: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { number: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { number: 5, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { number: 7, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 8, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { number: 9, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 10, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { number: 11, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 12, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { number: 13, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 14, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { number: 15, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { number: 16, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' }
]      
      `,
      tbColumns: `
tableColumns: [
  {
    name: 'number',
    alignment: 'flex-justify-end'
  },
  {
    name: 'avatar',
    alignment: 'flex-justify-center'
  },
  {
    name: 'country',
    alignment: 'flex-justify-center'
  },
  {
    name: 'city'
  }
]
      `,
      table: `
<div class="col-6" style="height: 450px;">
  <h-table      
    title="Users"
    :columns="tableColumns"
    :rows="tableData"
    lineheight="40px"
  >
    <template slot="number" slot-scope="row">
      {{row.rowData.number}}
    </template>
    <template slot="avatar" slot-scope="row">
      <img :src="row.rowData.avatar" style="width:40px; height:40px;">
    </template>
  </h-table>
</div>      
      `
    }
  },
  created () {
    this.addTableRows()
  },
  methods: {
    addTableRows () {
      this.tableDatabase = []
      for (let index = 0; index < this.dataBase.length; index++) {
        this.tableDatabase.push({
          number: this.dataBase[index].number,
          avatar: this.dataBase[index].avatar,
          country: this.dataBase[index].country,
          city: this.dataBase[index].city
        })
      }
    },
    addRows (rows) {
      // console.log('addRows: ' + JSON.stringify(rows))
    },
    editRow (row) {
      // console.log('editRow: ' + JSON.stringify(row))
    },
    deleteRows (rows) {
      // console.log('deleteRows: ' + JSON.stringify(rows))
    }
  }
}
</script>
