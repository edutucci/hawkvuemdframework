<template>
  <div style="top: 50px; position: relative;">
    <h1>Table</h1>

    <pre v-highlightjs="tbdata">
      <code class="html">
      </code>
    </pre>

    <div class="col-6" style="height: 450px;">
      <h-table
        title="Users"
        :columns="tableColumns"
        :rows="tableDatabase"
        lineheight="40px"
      >
        <template slot="numero" slot-scope="row">
          {{row.rowData.numero}}
        </template>
        <template slot="avatar" slot-scope="row">
          <img :src="row.rowData.avatar" style="width:40px; height:40px;">
        </template>
      </h-table>
    </div>

    <pre v-highlightjs="table">
      <code class="html">
      </code>
    </pre>

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
          name: 'numero',
          alignment: 'right'
        },
        {
          name: 'avatar',
          alignment: 'center'
        },
        {
          name: 'country'
        },
        {
          name: 'city'
        }
      ],
      tableData: [],
      dataBase: [
        { numero: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { numero: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { numero: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { numero: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { numero: 5, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { numero: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { numero: 7, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { numero: 8, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { numero: 9, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { numero: 10, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { numero: 11, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { numero: 12, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { numero: 13, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { numero: 14, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
        { numero: 15, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { numero: 16, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' }
      ],
      tbdata: `
tableData: [
  { numero: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { numero: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { numero: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { numero: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { numero: 5, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { numero: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { numero: 7, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { numero: 8, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { numero: 9, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { numero: 10, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { numero: 11, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { numero: 12, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { numero: 13, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { numero: 14, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' },
  { numero: 15, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
  { numero: 16, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York city' }
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
    <template slot="numero" slot-scope="row">
      {{row.rowData.numero}}
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
          numero: this.dataBase[index].numero,
          avatar: this.dataBase[index].avatar,
          country: this.dataBase[index].country,
          city: this.dataBase[index].city
        })
      }
    }
  }
}
</script>
