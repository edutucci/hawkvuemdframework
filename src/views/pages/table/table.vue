<template>
  <h-page-content padding>
    <!--
      ADD
        - Table titles
        - Change name for field in column config
        - Custom text for column name
        - custom header
        - sticky header ok
        - cell separator
    -->
    <div class="row">
      <div class="col">
        <h1>Table</h1>

        <div ref="table-sample"/>
        <comp-code title="Table Sample" :code="table" :script="tableScript" javascript>
          <h-table
            title="Users"
            :columns="tableColumns"
            :rows="tableData"
            style="height: 350px"
          >
          </h-table>
        </comp-code>

        <div ref="table-customcolumn"/>
        <comp-code class="h-mt-md" title="Custom columns" :code="table2" :script="table2Script" javascript>
          <h-table
            title="Users"
            :columns="tableColumns2"
            :rows="tableData"
            lineheight="40px"
            style="height: 350px"
          >
            <template slot="number" slot-scope="row">
              {{row.rowData.number}}
            </template>
            <template slot="avatar" slot-scope="row">
              <img :src="row.rowData.avatar" style="width:40px; height:40px;"/>
            </template>
            <template slot="status" slot-scope="row">
              <h-icon v-if="row.rowData.status === 'online'" image icon="imgIcons/png/checked.png" size="40px;"> Online </h-icon>
              <h-icon v-else-if="row.rowData.status === 'offline'" image icon="imgIcons/png/warning-shield.png" size="40px;"> Offline </h-icon>
            </template>
            <template slot="actions" slot-scope="row">
              <h-icon icon="fas fa-edit" @click="editRow(row)"/>
              <h-icon class="h-pl-md" icon="fas fa-times-circle" @click="deleteRows(row)"/>
            </template>
          </h-table>
        </comp-code>

        <div ref="table-selectable"/>
        <comp-code class="h-mt-md" title="Selectable" :code="table3" :script="table3Script" javascript>
          <h-table
            selectable
            title="Users"
            :columns="tableColumns"
            :rows="tableData"
            lineheight="40px"
            @addRows="addRows"
            @editRow="editRow"
            @deleteRows="deleteRows"
            style="height: 350px"
          >
            <template v-slot:selection-rows>
              <h-btn text="Export to PDF" bg-color="bg-primary" text-color="text-white"/>
              <h-btn
                class="h-ml-sm"
                dropdown
                text="View by status"
                bg-color="bg-primary" text-color="text-white"
                v-model="btnUserStatus"
                @click="btnUserStatus = true"
              >
                <h-list style="width: 150px;">
                  <h-list-item>
                    <h-list-item-content>
                      <h-list-item-text title="Online"/>
                    </h-list-item-content>
                  </h-list-item>
                  <h-list-item>
                    <h-list-item-content>
                      <h-list-item-text title="Offline"/>
                    </h-list-item-content>
                  </h-list-item>
                </h-list>
              </h-btn>
            </template>
          </h-table>
        </comp-code>

        <div ref="table-filter"/>
        <comp-code class="h-mt-md" title="Filter" :code="table4" :script="tableScript" javascript>
          <h-table
            filter
            title="Users"
            :columns="tableColumns"
            :rows="tableData"
            style="height: 350px"
          >
          </h-table>
        </comp-code>

        <div ref="table-customheader"/>
        <comp-code class="h-mt-md" title="Custom header" :code="table2" :script="table2Script" javascript>
          <h-table
            custom-header
            title="Users"
            :columns="tableColumns2"
            :rows="tableData"
            lineheight="40px"
            style="height: 350px"
          >
            <template slot="custom-header">
              <div class="row">
                <div class="col-auto">
                  <h-btn
                    dropdown
                    text="View by status"
                    bg-color="bg-primary" text-color="text-white"
                    v-model="btnUserStatus"
                    @click="btnUserStatus = true"
                  >
                    <h-list style="width: 150px;">
                      <h-list-item>
                        <h-list-item-content>
                          <h-list-item-text title="Online"/>
                        </h-list-item-content>
                      </h-list-item>
                      <h-list-item>
                        <h-list-item-content>
                          <h-list-item-text title="Offline"/>
                        </h-list-item-content>
                      </h-list-item>
                    </h-list>
                  </h-btn>
                </div>
                <div class="col">
                  <div class="row justify-end">
                    <h-btn text="New User" bg-color="bg-primary" text-color="text-white"/>
                    <h-btn class="h-ml-xs" text="Export to PDF" bg-color="bg-primary" text-color="text-white"/>
                  </div>
                </div>

              </div>
            </template>

            <template slot="number" slot-scope="row">
              {{row.rowData.number}}
            </template>
            <template slot="avatar" slot-scope="row">
              <img :src="row.rowData.avatar" style="width:40px; height:40px;"/>
            </template>
            <template slot="status" slot-scope="row">
              <h-icon v-if="row.rowData.status === 'online'" image icon="imgIcons/png/checked.png" size="40px;"> Online </h-icon>
              <h-icon v-else-if="row.rowData.status === 'offline'" image icon="imgIcons/png/warning-shield.png" size="40px;"> Offline </h-icon>
            </template>
            <template slot="actions" slot-scope="row">
              <h-icon icon="fas fa-edit" @click="editRow(row)"/>
              <h-icon class="h-pl-md" icon="fas fa-times-circle" @click="deleteRows(row)"/>
            </template>
          </h-table>
        </comp-code>

        <div ref="table-startallrows"/>
        <comp-code class="h-mt-md" title="Start With All Rows" :code="table2" :script="table2Script" javascript>
          <h-table
            start-with-all-rows
            title="Users"
            :columns="tableColumns2"
            :rows="tableData"
            lineheight="40px"
            style="max-height: 750px"
          >
            <template slot="number" slot-scope="row">
              {{row.rowData.number}}
            </template>
            <template slot="avatar" slot-scope="row">
              <img :src="row.rowData.avatar" style="width:40px; height:40px;"/>
            </template>
            <template slot="status" slot-scope="row">
              <h-icon v-if="row.rowData.status === 'online'" image icon="imgIcons/png/checked.png" size="40px;"> Online </h-icon>
              <h-icon v-else-if="row.rowData.status === 'offline'" image icon="imgIcons/png/warning-shield.png" size="40px;"> Offline </h-icon>
            </template>
            <template slot="actions" slot-scope="row">
              <h-icon icon="fas fa-edit" @click="editRow(row)"/>
              <h-icon class="h-pl-md" icon="fas fa-times-circle" @click="deleteRows(row)"/>
            </template>
          </h-table>
        </comp-code>

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
            <div>selectable</div>
          </div>
          <div class="h-pl-md">
            <h3>Type</h3>
            <div>String</div>
            <div>Array</div>
            <div>Array</div>
            <div>String</div>
            <div>Booelan</div>
          </div>
          <div class="h-pl-md">
            <h3 >Description</h3>
            <div>Sets the table title</div>
            <div>Array of object for each column data</div>
            <div>Array of object with table rows data</div>
            <div>Sets the line for each table row. Ex: lineheight="40px"</div>
            <div>Add checkbox to each row</div>
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
      <div class="col-auto">
        <list-help>
          <h-list>
            <h-list-header text="Usage"/>
            <h-list-item @click="goToElement('table-sample')">
              <h-list-item-content>
                <h-list-item-text title="Example"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('table-customcolumn')">
              <h-list-item-content>
                <h-list-item-text title="Custom Column"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('table-selectable')">
              <h-list-item-content>
                <h-list-item-text title="Selectable"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('table-filter')">
              <h-list-item-content>
                <h-list-item-text title="Filter"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('table-customheader')">
              <h-list-item-content>
                <h-list-item-text title="Custom Header"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
            <h-list-item @click="goToElement('table-startallrows')">
              <h-list-item-content>
                <h-list-item-text title="Start All Rows"></h-list-item-text>
              </h-list-item-content>
            </h-list-item>
          </h-list>
        </list-help>
      </div>
    </div>

  </h-page-content>
</template>

<script>

import viewport from '../../../components/others/viewport'

export default {
  data () {
    return {
      btnUserStatus: false,
      tableColumns: [
        {
          field: 'number',
          text: 'number1',
          alignment: 'text-right',
          type: 'number',
          sortable: true
        },
        {
          field: 'country',
          text: 'country1',
          alignment: 'text-center'
        },
        {
          field: 'city',
          text: 'city1',
          sortable: true
        }
      ],
      tableColumns2: [
        {
          field: 'number',
          text: 'number',
          alignment: 'text-right'
        },
        {
          field: 'avatar',
          text: 'avatar',
          alignment: 'text-center'
        },
        {
          field: 'username',
          text: 'Username',
          alignment: 'text-center'
        },
        {
          field: 'status',
          text: 'status',
          alignment: 'text-center'
        },
        {
          field: 'actions',
          text: 'actions',
          alignment: 'text-center'
        }
      ],
      tableData: [],
      dataBase: [
        { number: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Denver', username: 'John', status: 'online' },
        { number: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York', username: 'Anna', status: 'offline' },
        { number: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Las Vegas', username: 'Edward', status: 'online' },
        { number: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Washington', username: 'Cosmo', status: 'offline' },
        { number: 5, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city', username: 'Astrid', status: 'online' },
        { number: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'San Antonio', username: 'Sirius', status: 'offline' },
        { number: 7, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city', username: 'Phoenix', status: 'online' },
        { number: 8, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Chicago', username: 'Karina', status: 'offline' },
        { number: 9, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city', username: 'Pablo', status: 'offline' },
        { number: 10, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Los Angeles', username: 'William', status: 'online' },
        { number: 11, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Denver', username: 'John', status: 'online' },
        { number: 12, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York', username: 'Anna', status: 'offline' },
        { number: 13, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Las Vegas', username: 'Edward', status: 'online' },
        { number: 14, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Washington', username: 'Cosmo', status: 'offline' },
        { number: 15, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city', username: 'Astrid', status: 'online' },
        { number: 16, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'San Antonio', username: 'Sirius', status: 'offline' },
        { number: 17, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city', username: 'Phoenix', status: 'online' },
        { number: 18, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Chicago', username: 'Karina', status: 'offline' },
        { number: 19, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city', username: 'Pablo', status: 'offline' },
        { number: 20, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Los Angeles', username: 'William', status: 'online' },
        { number: 21, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Denver', username: 'John', status: 'online' },
        { number: 22, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York', username: 'Anna', status: 'offline' },
        { number: 23, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Las Vegas', username: 'Edward', status: 'online' },
        { number: 24, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Washington', username: 'Cosmo', status: 'offline' },
        { number: 25, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city', username: 'Astrid', status: 'online' },
        { number: 26, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'San Antonio', username: 'Sirius', status: 'offline' },
        { number: 27, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city', username: 'Phoenix', status: 'online' },
        { number: 28, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Chicago', username: 'Karina', status: 'offline' },
        { number: 29, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city', username: 'Pablo', status: 'offline' },
        { number: 30, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Los Angeles', username: 'William', status: 'online' }
      ],
      table: `
<h-table
  title="Users"
  :columns="tableColumns"
  :rows="tableDatabase"
  lineheight="40px"
>
</h-table>     
`,
      tableScript: `
export default {
  data () {
    return {
      tableColumns: [
        {
          name: 'number',
          alignment: 'text-right',
          type: 'number',
          sortable: true
        },
        {
          name: 'country',
          alignment: 'text-center'
        },
        {
          name: 'city',
          sortable: true
        }
      ],
      tableData: [],
      dataBase: [
        { number: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Denver' },
        { number: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York' },
        { number: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Las Vegas' },
        { number: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Washington' },
        { number: 5, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'San Antonio' },
        { number: 7, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 8, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Chicago' },
        { number: 9, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 10, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Los Angeles' }
      ]
    }
  },
  mounted () {
    this.addTableRows()
  },
  methods: {
    addTableRows () {
      this.tableData = []
      for (let index = 0; index < this.dataBase.length; index++) {
        this.tableData.push({
          number: this.dataBase[index].number,
          avatar: this.dataBase[index].avatar,
          country: this.dataBase[index].country,
          city: this.dataBase[index].city
        })
      }
    }
  }
}
`,
      table2: `
<h-table
  title="Users"
  :columns="tableColumns2"
  :rows="tableData"
  lineheight="40px"
>
  <template slot="number" slot-scope="row">
    {{row.rowData.number}}
  </template>
  <template slot="avatar" slot-scope="row">
    <img :src="row.rowData.avatar" style="width:40px; height:40px;">
  </template>
  <template slot="actions" slot-scope="row">
    <h-fa-icon icon="fas fa-edit" @click="editRow(row)"/>
    <h-fa-icon class="h-pl-md" icon="fas fa-times-circle" @click="deleteRows(row)"/>
  </template>
</h-table>
`,
      table2Script: `
export default {
  data () {
    return {
      tableColumns2: [
        {
          name: 'number',
          alignment: 'text-right'
        },
        {
          name: 'avatar',
          alignment: 'text-center'
        },
        {
          name: 'country',
          alignment: 'text-center'
        },
        {
          name: 'city'
        },
        {
          name: 'actions',
          alignment: 'text-center'
        }
      ],
      tableData: [],
      dataBase: [
        { number: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Denver' },
        { number: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York' },
        { number: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Las Vegas' },
        { number: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Washington' },
        { number: 5, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'San Antonio' },
        { number: 7, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 8, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Chicago' },
        { number: 9, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 10, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Los Angeles' }
      ]
    }
  },
  mounted () {
    this.addTableRows()
  },
  methods: {
    addTableRows () {
      this.tableData = []
      for (let index = 0; index < this.dataBase.length; index++) {
        this.tableData.push({
          number: this.dataBase[index].number,
          avatar: this.dataBase[index].avatar,
          country: this.dataBase[index].country,
          city: this.dataBase[index].city
        })
      }
    }
  }
}      
`,
      table3: `
<h-table
  selectable
  title="Users"
  :columns="tableColumns"
  :rows="tableData"
  lineheight="40px"
  @addRows="addRows"
  @editRow="editRow"
  @deleteRows="deleteRows"
>
</h-table>
`,
      table3Script: `
export default {
  data () {
    return {
      tableColumns: [
        {
          name: 'number',
          alignment: 'text-right',
          type: 'number',
          sortable: true
        },
        {
          name: 'country',
          alignment: 'text-center'
        },
        {
          name: 'city',
          sortable: true
        }
      ],
      tableData: [],
      dataBase: [
        { number: 1, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Denver' },
        { number: 2, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'New York' },
        { number: 3, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'Las Vegas' },
        { number: 4, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Washington' },
        { number: 5, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 6, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'San Antonio' },
        { number: 7, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 8, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Chicago' },
        { number: 9, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Smiley_icon.svg/768px-Smiley_i.png', country: 'USA', city: 'New York city' },
        { number: 10, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Classic_smiley.svg/1200px-Classic_smiley.svg.png', country: 'USA', city: 'Los Angeles' }
      ]
    }
  },
  mounted () {
    this.addTableRows()
  },
  methods: {
    addTableRows () {
      this.tableData = []
      for (let index = 0; index < this.dataBase.length; index++) {
        this.tableData.push({
          number: this.dataBase[index].number,
          avatar: this.dataBase[index].avatar,
          country: this.dataBase[index].country,
          city: this.dataBase[index].city
        })
      }
    },
    addRows (rows) {
      console.log('addRows: ' + JSON.stringify(rows))
    },
    editRow (row) {
      console.log('editRow: ' + JSON.stringify(row))
    },
    deleteRows (rows) {
      console.log('deleteRows: ' + JSON.stringify(rows))
    }
  }
}
`,
      table4: `
<h-table
  filter
  title="Users"
  :columns="tableColumns"
  :rows="tableData"
  style="height: 350px"
>
</h-table>
`
    }
  },
  mounted () {
    this.addTableRows()
  },
  methods: {
    goToElement (refName) {
      viewport.goToElement(this.$refs[refName])
    },
    addTableRows () {
      this.tableData = []
      for (let index = 0; index < this.dataBase.length; index++) {
        this.tableData.push({
          number: this.dataBase[index].number,
          avatar: this.dataBase[index].avatar,
          country: this.dataBase[index].country,
          city: this.dataBase[index].city,
          username: this.dataBase[index].username,
          status: this.dataBase[index].status
        })
      }
    },
    addRows (rows) {
      console.log('addRows: ' + JSON.stringify(rows))
    },
    editRow (row) {
      console.log('editRow: ' + JSON.stringify(row))
    },
    deleteRows (rows) {
      console.log('deleteRows: ' + JSON.stringify(rows))
    }
  }
}
</script>
