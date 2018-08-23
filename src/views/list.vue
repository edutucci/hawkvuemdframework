<template lang="pug">
  <div>
    <h1>List</h1>

      <div class="col-6">
        <h-list>
          <h-app-toolbar>
            <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
              <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
              <h-app-toolbar-title title="Topics"/>
            </h-app-toolbar-container>
          </h-app-toolbar>
          <h-list-body>
            <h-list-item @click="topicItem = 'Attractions'" :active="topicItem === 'Attractions'" >
              <h-list-item-left lefttext="Attractions" />
            </h-list-item>
            <h-list-item @click="topicItem = 'Dining'" :active="topicItem === 'Dining'">
              <h-list-item-left lefttext="Dining"/>
            </h-list-item>
            <h-list-item @click="topicItem = 'Health'" :active="topicItem === 'Health'">
              <h-list-item-left lefttext="Health"/>
            </h-list-item>
            <h-list-item @click="topicItem = 'Sports'" :active="topicItem === 'Sports'">
              <h-list-item-left lefttext="Sports"/>
            </h-list-item>
            <h-list-item @click="topicItem = 'Travel'" :active="topicItem === 'Travel'">
              <h-list-item-left lefttext="Travel"/>
            </h-list-item>
          </h-list-body>
        </h-list>
      </div>
    .boxshadow
      <pre v-highlightjs="list">
        <code class="html">
        </code>
      </pre>

      <div class="col-6">
        <h-list>
          <h-app-toolbar>
            <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
              <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
              <h-app-toolbar-title title="Topics"/>
            </h-app-toolbar-container>
          </h-app-toolbar>
          <h-list-item @click="topicItem = 'Attractions'" :active="topicItem === 'Attractions'">
            <h-list-item-left :icon="['fas', 'film']" text="Attractions"/>
          </h-list-item>
          <h-list-item @click="topicItem = 'Dining'" :active="topicItem === 'Dining'" >
            <h-list-item-left :icon="['fas', 'utensils']" text="Dining"/>
          </h-list-item>
          <h-list-item @click="topicItem = 'Health'" :active="topicItem === 'Health'">
            <h-list-item-left :icon="['fas', 'heart']" text="Health"/>
          </h-list-item>
          <h-list-item @click="topicItem = 'Sports'" :active="topicItem === 'Sports'">
            <h-list-item-left :icon="['fas', 'basketball-ball']" text="Sports"/>
          </h-list-item>
          <h-list-item @click="topicItem = 'Travel'" :active="topicItem === 'Travel'">
            <h-list-item-left :icon="['fas', 'plane']" text="Travel"/>
          </h-list-item>
        </h-list>
      </div>
    <pre v-highlightjs="list2">
      <code class="html">
      </code>
    </pre>

      <h-list class="col-6">
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
            <h-app-toolbar-title title="Inbox"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-header text="Today is my birthday"/>
        <h-list-item>
          <h-list-item-left separator avatar="/avatar/turtle.png" text="Hi rambo" desc="You there?" />
        </h-list-item>
        <h-list-item>
          <h-list-item-left separator avatar="/avatar/rambo.jpg" text="I am searching something to eat" desc="I think I am going to eat you."/>
        </h-list-item>
      </h-list>

    <pre v-highlightjs="list3">
      <code class="html">
      </code>
    </pre>

      <h-list class="col-6">
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
            <h-app-toolbar-title title="My files" style="padding-top: 40px;"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-header middletext="Folders"/>
        <h-list-item>
          <h-list-item-left img="/avatar/folder_open.jpeg" text="Photos" desc="Dez 12, 2017"/>
        </h-list-item>
        <h-list-item>
          <h-list-item-left img="/avatar/folder_open.jpeg" text="Images" desc="Events"/>
        </h-list-item>
      </h-list>
    <pre v-highlightjs="list4">
      <code class="html">
      </code>
    </pre>

      <h-list class="col-6">
        <h-list-header text="4 items in your cart" />
        <h-list-item separator>
          <h-list-item-left img="/img/pencil.png" text="Pencil" desc="in stock" />
          <h-list-item-right text="2.00"/>
        </h-list-item>
        <h-list-item separator>
          <h-list-item-left img="/img/rubberbands.png" text="Hubberbands" desc="in stock" />
          <h-list-item-right text="4.00"/>
        </h-list-item>
        <h-list-item separator>
          <h-list-item-left img="/img/rulers.png" text="Rulers" desc="only 1 left in stock. Next month we have to sell." />
          <h-list-item-right text="6.00"/>
        </h-list-item>
        <h-list-item separator>
          <h-list-item-left img="/img/clock.png" text="Clock" desc="in stock" />
          <h-list-item-right text="8.00"/>
        </h-list-item>
      </h-list>

    <pre v-highlightjs="list5">
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
      topicItem: '',
      list: `
<div class="col-6">
  <h-list>
    <h-app-toolbar>
      <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
        <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
        <h-app-toolbar-title title="Topics"/>
      </h-app-toolbar-container>
    </h-app-toolbar>
    <h-list-body>
      <h-list-item @click="topicItem = 'Attractions'" :active="topicItem === 'Attractions'" >
        <h-list-item-left lefttext="Attractions" />
      </h-list-item>
      <h-list-item @click="topicItem = 'Dining'" :active="topicItem === 'Dining'">
        <h-list-item-left lefttext="Dining"/>
      </h-list-item>
      <h-list-item @click="topicItem = 'Health'" :active="topicItem === 'Health'">
        <h-list-item-left lefttext="Health"/>
      </h-list-item>
      <h-list-item @click="topicItem = 'Sports'" :active="topicItem === 'Sports'">
        <h-list-item-left lefttext="Sports"/>
      </h-list-item>
      <h-list-item @click="topicItem = 'Travel'" :active="topicItem === 'Travel'">
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
        <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
        <h-app-toolbar-title title="Topics"/>
      </h-app-toolbar-container>
    </h-app-toolbar>
    <h-list-item @click="topicItem = 'Attractions'" :active="topicItem === 'Attractions'">
      <h-list-item-left :icon="['fas', 'film']" text="Attractions"/>
    </h-list-item>
    <h-list-item @click="topicItem = 'Dining'" :active="topicItem === 'Dining'" >
      <h-list-item-left :icon="['fas', 'utensils']" text="Dining"/>
    </h-list-item>
    <h-list-item @click="topicItem = 'Health'" :active="topicItem === 'Health'">
      <h-list-item-left :icon="['fas', 'heart']" text="Health"/>
    </h-list-item>
    <h-list-item @click="topicItem = 'Sports'" :active="topicItem === 'Sports'">
      <h-list-item-left :icon="['fas', 'basketball-ball']" text="Sports"/>
    </h-list-item>
    <h-list-item @click="topicItem = 'Travel'" :active="topicItem === 'Travel'">
      <h-list-item-left :icon="['fas', 'plane']" text="Travel"/>
    </h-list-item>
  </h-list>
</div> 
      `,
      list3: `
<h-list class="col-6">
  <h-app-toolbar>
    <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
      <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
      <h-app-toolbar-title title="Inbox"/>
    </h-app-toolbar-container>
  </h-app-toolbar>
  <h-list-header text="Today is my birthday"/>
  <h-list-item>
    <h-list-item-left separator avatar="/avatar/turtle.png" text="Hi rambo" desc="You there?" />
  </h-list-item>
  <h-list-item>
    <h-list-item-left separator avatar="/avatar/rambo.jpg" text="I am searching something to eat" desc="I think I am going to eat you."/>
  </h-list-item>          
</h-list>
      `,
      list4: `
      <h-list class="col-6">
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
            <h-app-toolbar-title title="My files" style="padding-top: 40px;"/>
          </h-app-toolbar-container>
        </h-app-toolbar>        
        <h-list-header middletext="Folders"/>
        <h-list-item>
          <h-list-item-left img="/avatar/folder_open.jpeg" text="Photos" desc="Dez 12, 2017"/>
        </h-list-item>
        <h-list-item>
          <h-list-item-left img="/avatar/folder_open.jpeg" text="Images" desc="Events"/>
        </h-list-item>
      </h-list>
      `,
      list5: `
<h-list class="col-6">
  <h-list-header text="4 items in your cart" />
  <h-list-item separator>
    <h-list-item-left img="/img/pencil.png" text="Pencil" desc="in stock" />
    <h-list-item-right text="2.00"/>
  </h-list-item>
  <h-list-item separator>
    <h-list-item-left img="/img/rubberbands.png" text="Hubberbands" desc="in stock" />
    <h-list-item-right text="4.00"/>
  </h-list-item>
  <h-list-item separator>
    <h-list-item-left img="/img/rulers.png" text="Rulers" desc="only 1 left in stock. Next month we have to sell." />
    <h-list-item-right text="6.00"/>
  </h-list-item>
  <h-list-item separator>
    <h-list-item-left img="/img/clock.png" text="Clock" desc="in stock" />
    <h-list-item-right text="8.00"/>
  </h-list-item>
</h-list>
      `
    }
  },
  created () {
    this.$on('send', (item) => {
      console.log('send ok')
      this.text = item
      // item.setActive(true)
    })
  },
  computed: {

  }
}
</script>
