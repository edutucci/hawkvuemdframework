<template>
  <div>
    <h1>Table</h1>
    <h1>dataBase length : {{dataBase.length}}</h1>
    <h1>tableData length : {{tableData.length}}</h1>
    <div class="col-md-6 col-xl-6">
      <h-table      
        title="Users"
        :columns="tableColumns"
        :rows="tableData"
        style="height:400px"
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

  </div>
</template>

<script>
import HTable from '../components/table/HTable.vue'
import HCheckbox from '../components/checkbox/HCheckbox.vue'

export default {
  components: {
    HTable,
    HCheckbox
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
      ]
    }
  },
  created () {
    this.addTableRows()
  },
  methods: {
    addTableRows () {
      this.tableData = []
      for (let index = 0; index < this.dataBase.length; index++) {
        this.tableData.push({
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
