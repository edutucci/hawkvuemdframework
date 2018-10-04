<template>
  <div>
    <h1>List</h1>

      <div class="col-6">
        <h-list>
          <h-app-toolbar>
            <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
              <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
              <h-app-toolbar-title title="Topics"/>
            </h-app-toolbar-container>
          </h-app-toolbar>
          <h-list-body>
            <h-list-item>
              <h-list-item-left lefttext="Attractions" />
            </h-list-item>
            <h-list-item>
              <h-list-item-left lefttext="Dining"/>
            </h-list-item>
            <h-list-item>
              <h-list-item-left lefttext="Health"/>
            </h-list-item>
            <h-list-item>
              <h-list-item-left lefttext="Sports"/>
            </h-list-item>
            <h-list-item>
              <h-list-item-left lefttext="Travel"/>
            </h-list-item>
          </h-list-body>
        </h-list>
      </div>

      <pre v-highlightjs="list">
        <code class="html">
        </code>
      </pre>

      <div class="col-6">
        <h-list>
          <h-app-toolbar>
            <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
              <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
              <h-app-toolbar-title title="Topics"/>
            </h-app-toolbar-container>
          </h-app-toolbar>
          <h-list-body>
            <h-list-item>
              <h-list-item-left icon="fas fa-film" text="Attractions"/>
            </h-list-item>
            <h-list-item>
              <h-list-item-left icon="fas fa-utensils" text="Dining"/>
            </h-list-item>
            <h-list-item>
              <h-list-item-left icon="fas fa-heart" text="Health"/>
            </h-list-item>
            <h-list-item>
              <h-list-item-left icon="fas fa-basketball-ball" text="Sports"/>
            </h-list-item>
            <h-list-item>
              <h-list-item-left icon="fas fa-plane" text="Travel"/>
            </h-list-item>
          </h-list-body>
        </h-list>
      </div>
    <pre v-highlightjs="list2">
      <code class="html">
      </code>
    </pre>

      <div class="col-6">
        <h-list>
          <h-app-toolbar>
            <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
              <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
              <h-app-toolbar-title title="Topics"/>
            </h-app-toolbar-container>
          </h-app-toolbar>
          <h-collapsible separator>
            <h-collapsible-menu icon="fas fa-film" text="Attractions">
              <h-list-body>
                <h-list-item>
                  <h-list-item-left text="Shopping"/>
                </h-list-item>
                <h-list-item>
                  <h-list-item-left text="Museums"/>
                </h-list-item>
              </h-list-body>
            </h-collapsible-menu>
            <h-collapsible-menu icon="fas fa-utensils" text="Dining">
              <h-list-body>
                <h-list-item>
                  <h-list-item-left text="Restaurants"/>
                </h-list-item>
              </h-list-body>
            </h-collapsible-menu>
          </h-collapsible>
        </h-list>
      </div>
    <pre v-highlightjs="list21">
      <code class="html">
      </code>
    </pre>

      <h-list class="col-6">
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
            <h-app-toolbar-title title="Inbox"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-header text="Today is my birthday"/>
        <h-list-body>
          <h-list-item>
            <h-list-item-left separator avatar="/avatar/turtle.png" text="Hi rambo" desc="You there?" />
          </h-list-item>
          <h-list-item>
            <h-list-item-left separator avatar="/avatar/rambo.jpg" text="I am searching something to eat" desc="I think I am going to eat you."/>
          </h-list-item>
        </h-list-body>
      </h-list>

    <pre v-highlightjs="list3">
      <code class="html">
      </code>
    </pre>

      <h-list class="col-6">
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
            <h-app-toolbar-title title="My files" style="padding-top: 40px;"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-header middletext="Folders"/>
        <h-list-body>
          <h-list-item>
            <h-list-item-left img="avatar/folder_open.jpeg" text="Photos" desc="Dez 12, 2017"/>
          </h-list-item>
          <h-list-item>
            <h-list-item-left img="avatar/folder_open.jpeg" text="Images" desc="Events"/>
          </h-list-item>
        </h-list-body>
      </h-list>
    <pre v-highlightjs="list4">
      <code class="html">
      </code>
    </pre>

      <h-list class="col-6">
        <h-list-header text="4 items in your cart" />
        <h-list-body>
          <h-list-item separator>
            <h-list-item-left img="img/pencil.png" text="Pencil" desc="in stock" />
            <h-list-item-right text="2.00"/>
          </h-list-item>
          <h-list-item separator>
            <h-list-item-left img="img/rubberbands.png" text="Hubberbands" desc="in stock"/>
            <h-list-item-right text="4.00"/>
          </h-list-item>
          <h-list-item separator>
            <h-list-item-left img="img/rulers.png" text="Rulers" desc="only 1 left in stock. Next month we will sell for you." />
            <h-list-item-right text="6.00"/>
          </h-list-item>
          <h-list-item separator>
            <h-list-item-left img="img/clock.png" text="Clock" desc="in stock" />
            <h-list-item-right text="8.00"/>
          </h-list-item>
        </h-list-body>
      </h-list>

    <pre v-highlightjs="list5">
      <code class="html">
      </code>
    </pre>

    <h-list class="col-6">
      <h-list-header text="Selectable products" />
      <h-list-body>
        <h-list-item
          separator
          v-for="(prod, index) in products"
          :key="index"
          :select-value="prod.text"
          @itemClick="itemClick"
        >
          <h-list-item-left
            selectable
            :img="prod.img"
            :text="prod.text"
            :desc="prod.desc"
            :select-model="cart"
            :select-value="prod.text"
            @selectedItem="selectValue"
            @removedItem="removedItem"/>
          <h-list-item-right
            :text="prod.value"
            icon="fas fa-edit"
            :select-value="prod.text"
            @rightIconClick="rightIconClick"
          />
        </h-list-item>
      </h-list-body>
    </h-list>

    <div>
      selected products: {{cart}}
    </div>
    <div>
      product to edit: {{selectedProduct}}
    </div>
    <div>
      item click: {{itemclicked}}
    </div>

    <pre v-highlightjs="list6">
      <code class="html">
      </code>
    </pre>
    <pre v-highlightjs="selectableProducts">
      <code class="javascript">
      </code>
    </pre>

    <h2 class="text-primary">List Header Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>text</div>
        <div>middletext</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Text without padding for the list</div>
        <div>Text with padding-left for the list</div>
      </div>
    </div>

    <h2 class="text-primary"> List Item Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>select-value</div>
        <div>separator</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String, Number, Object</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>The value for the selected item</div>
        <div>Add a separator below the item</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@itemClick(value)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on item click. The value of property select-value is sent.</div>
      </div>
    </div>

    <h2 class="text-primary"> List Item Left Help</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div style="width: 120px;">
        <h3>Name</h3>
        <div>select-value</div>
        <div>select-model</div>
        <div>selectable</div>
        <div>separator</div>
        <div>icon</div>
        <div>img</div>
        <div>avatar</div>
        <div>lefttext</div>
        <div>text</div>
        <div>desc</div>
      </div>
      <div class="h-pl-md" style="width: 200px;">
        <h3>Type</h3>
        <div>String, Number, Object</div>
        <div>Array</div>
        <div>Boolean</div>
        <div>Boolean</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
      </div>
      <div>
        <h3 >Description</h3>
        <div>The value for the selected item</div>
        <div>
            Checks if contains the select-value property. If true checkbox is selected.
        </div>
        <div>Add a checkbox for all items</div>
        <div>Add a separator below the item</div>
        <div>Sets the icon of the item</div>
        <div>Sets the image of the item</div>
        <div>Sets the avatar of the item</div>
        <div>Sets the text of the item without icon and avatar</div>
        <div>Sets the text of the item to right side of the icon or avatar</div>
        <div>Sets the desc of the item to right side of the icon or avatar</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@selectedItem(value)</div>
        <div>@removedItem(value)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on checkbox item is checked. The value of property select-value is sent as Array.</div>
        <div>Triggered on checkbox item is not checked. The value of property select-value is sent.</div>
      </div>
    </div>

    <h2 class="text-primary"> List Item Right</h2>
    <h2 class="text-primary"> Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>select-value</div>
        <div>icon</div>
        <div>text</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String, Number, Object</div>
        <div>String</div>
        <div>String</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>The value for the selected item</div>
        <div>Sets the icon of the item</div>
        <div>Sets the text of the icon</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@rightIconClick(value)</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on icon click. The value of property select-value is sent.</div>
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
      products: [
        {img: '/img/pencil.png', text: 'Pencil', desc: 'in stock', value: '2.00'},
        {img: '/img/rubberbands.png', text: 'Hubberbands', desc: 'in stock', value: '4.00'},
        {img: '/img/rulers.png', text: 'Rulers', desc: 'only 1 left in stock. Next month we will sell for you.', value: '6.00'},
        {img: '/img/clock.png', text: 'Clock', desc: 'in stock', value: '8.00'}
      ],
      cart: ['Clock', 'Pencil'],
      selectedProduct: undefined,
      itemclicked: undefined,
      topicItem: '',
      list: `
<div class="col-6">
  <h-list>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
        <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
        <h-app-toolbar-title title="Topics"/>
      </h-app-toolbar-container>
    </h-app-toolbar>
    <h-list-body>
      <h-list-item>
        <h-list-item-left lefttext="Attractions" />
      </h-list-item>
      <h-list-item>
        <h-list-item-left lefttext="Dining"/>
      </h-list-item>
      <h-list-item>
        <h-list-item-left lefttext="Health"/>
      </h-list-item>
      <h-list-item>
        <h-list-item-left lefttext="Sports"/>
      </h-list-item>
      <h-list-item>
        <h-list-item-left lefttext="Travel"/>
      </h-list-item>
    </h-list-body>
  </h-list>
</div>
      `,
      list2: `
<div class="col-6">
  <h-list>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
        <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
        <h-app-toolbar-title title="Topics"/>
      </h-app-toolbar-container>
    </h-app-toolbar>
    <h-list-body>
      <h-list-item>
        <h-list-item-left icon="fas fa-film" text="Attractions"/>
      </h-list-item>
      <h-list-item>
        <h-list-item-left icon="fas fa-utensils" text="Dining"/>
      </h-list-item>
      <h-list-item>
        <h-list-item-left icon="fas fa-heart" text="Health"/>
      </h-list-item>
      <h-list-item>
        <h-list-item-left icon="fas fa-basketball-ball" text="Sports"/>
      </h-list-item>
      <h-list-item>
        <h-list-item-left icon="fas fa-plane" text="Travel"/>
      </h-list-item>
    </h-list-body>
  </h-list>
</div>
      `,
      list21: `
<div class="col-6">
  <h-list>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
        <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
        <h-app-toolbar-title title="Topics"/>
      </h-app-toolbar-container>
    </h-app-toolbar>
    <h-collapsible separator>
      <h-collapsible-menu icon="fas fa-film" text="Attractions">
        <h-list-body>
          <h-list-item>
            <h-list-item-left text="Shopping"/>
          </h-list-item>
          <h-list-item>
            <h-list-item-left text="Museums"/>
          </h-list-item>
        </h-list-body>
      </h-collapsible-menu>
      <h-collapsible-menu icon="fas fa-utensils" text="Dining">
        <h-list-body>
          <h-list-item>
            <h-list-item-left text="Restaurants"/>
          </h-list-item>
        </h-list-body>
      </h-collapsible-menu>
    </h-collapsible>
  </h-list>
</div>
      `,
      list3: `
<h-list class="col-6">
  <h-app-toolbar>
    <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
      <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
      <h-app-toolbar-title title="Inbox"/>
    </h-app-toolbar-container>
  </h-app-toolbar>
  <h-list-header text="Today is my birthday"/>
  <h-list-body>
    <h-list-item>
      <h-list-item-left separator avatar="/avatar/turtle.png" text="Hi rambo" desc="You there?" />
    </h-list-item>
    <h-list-item>
      <h-list-item-left separator avatar="/avatar/rambo.jpg" text="I am searching something to eat" desc="I think I am going to eat you."/>
    </h-list-item>
  </h-list-body>
</h-list>
      `,
      list4: `
<h-list class="col-6">
  <h-app-toolbar>
    <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
      <h-app-toolbar-navigation icon="fas fa-bars" textcolor="text-white"/>
      <h-app-toolbar-title title="My files" style="padding-top: 40px;"/>
    </h-app-toolbar-container>
  </h-app-toolbar>
  <h-list-header middletext="Folders"/>
  <h-list-body>
    <h-list-item>
      <h-list-item-left img="avatar/folder_open.jpeg" text="Photos" desc="Dez 12, 2017"/>
    </h-list-item>
    <h-list-item>
      <h-list-item-left img="avatar/folder_open.jpeg" text="Images" desc="Events"/>
    </h-list-item>
  </h-list-body>
</h-list>
      `,
      list5: `
<h-list class="col-6">
  <h-list-header text="4 items in your cart" />
  <h-list-body>
    <h-list-item separator>
      <h-list-item-left img="img/pencil.png" text="Pencil" desc="in stock" />
      <h-list-item-right text="2.00"/>
    </h-list-item>
    <h-list-item separator>
      <h-list-item-left img="img/rubberbands.png" text="Hubberbands" desc="in stock"/>
      <h-list-item-right text="4.00"/>
    </h-list-item>
    <h-list-item separator>
      <h-list-item-left img="img/rulers.png" text="Rulers" desc="only 1 left in stock. Next month we will sell for you." />
      <h-list-item-right text="6.00"/>
    </h-list-item>
    <h-list-item separator>
      <h-list-item-left img="img/clock.png" text="Clock" desc="in stock" />
      <h-list-item-right text="8.00"/>
    </h-list-item>
  </h-list-body>
</h-list>
      `,
      list6: `
<h-list class="col-6">
  <h-list-header text="Selectable products" />
  <h-list-body>
    <h-list-item
      separator
      v-for="(prod, index) in products"
      :key="index"
      :select-value="prod.text"
      @itemClick="itemClick"
    >
      <h-list-item-left
        selectable
        :img="prod.img"
        :text="prod.text"
        :desc="prod.desc"
        :select-model="cart"
        :select-value="prod.text"
        @selectedItem="selectValue"
        @removedItem="removedItem"/>
      <h-list-item-right
        :text="prod.value"
        icon="fas fa-edit"
        :select-value="prod.text"
        @rightIconClick="rightIconClick"
      />
    </h-list-item>
  </h-list-body>
</h-list>
      `,
      selectableProducts: `
export default {
  data () {
    return {
      products: [
        {img: '/img/pencil.png', text: 'Pencil', desc: 'in stock', value: '2.00'},
        {img: '/img/rubberbands.png', text: 'Hubberbands', desc: 'in stock', value: '4.00'},
        {img: '/img/rulers.png', text: 'Rulers', desc: 'only 1 left in stock. Next month we will sell for you.', value: '6.00'},
        {img: '/img/clock.png', text: 'Clock', desc: 'in stock', value: '8.00'}
      ],
      cart: ['Clock', 'Pencil'],
      selectedProduct: undefined,
      itemclicked: undefined
    }
  },
  methods: {
    selectValue (product) {
      if (product.length) {
        this.cart.push(product[0])
      }
    },
    removedItem (product) {
      let prod = this.cart.findIndex(item => item === product)
      if (prod !== -1) {
        this.$delete(this.cart, prod)
      }
    },
    rightIconClick (product) {
      this.selectedProduct = product
    },
    itemClick (product) {
      this.itemclicked = product
    }
  }
}
      `
    }
  },
  methods: {
    selectValue (product) {
      if (product.length) {
        this.cart.push(product[0])
      }
    },
    removedItem (product) {
      let prod = this.cart.findIndex(item => item === product)
      if (prod !== -1) {
        this.$delete(this.cart, prod)
      }
    },
    rightIconClick (product) {
      this.selectedProduct = product
    },
    itemClick (product) {
      this.itemclicked = product
    }
  }
}
</script>
