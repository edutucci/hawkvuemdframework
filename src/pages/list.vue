<template>
  <div>
    <h1>List</h1>
  
    <div class="flex">
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
              <h-list-item-left
                lefttext="Attractions"                
                />
            </h-list-item>
            <h-list-item @click="topicItem = 'Dining'" :active="topicItem === 'Dining'">
              <h-list-item-left
                lefttext="Dining"
                />
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
          <h-list-item>
            <h-list-item-left :icon="['fas', 'heart']" text="Health"/>
          </h-list-item>
          <h-list-item>
            <h-list-item-left :icon="['fas', 'basketball-ball']" text="Sports"/>
          </h-list-item>
          <h-list-item>
            <h-list-item-left :icon="['fas', 'plane']" text="Travel"/>
          </h-list-item>
        </h-list>
      </div>
    </div>
    
   

      <h-list class="col-6">
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
            <h-app-toolbar-title title="Inbox"/>
          </h-app-toolbar-container>
        </h-app-toolbar>
        <h-list-header text="Today is my birthday"/>
        <h-list-item>
          <h-list-item-left separator avatar="/static/avatar/turtle.png" text="Hi rambo" desc="You there?" />
        </h-list-item>
        <h-list-item>
          <h-list-item-left separator avatar="/static/avatar/rambo.jpg" text="I am searching something to eat" desc="I think I am going to eat you."/>
        </h-list-item>          
      </h-list>

      <h-list class="col-6">
        <h-app-toolbar>
          <h-app-toolbar-container bgcolor="bg-primary" textcolor="text-white">
            <h-app-toolbar-navigation :icon="['fas', 'bars']"/>
            <h-app-toolbar-title title="My files" style="padding-top: 40px;"/>
          </h-app-toolbar-container>
        </h-app-toolbar>        
        <h-list-header middletext="Folders for my friend"/>
        <h-list-item>
          <h-list-item-left img="/static/avatar/folder_open.jpeg" text="Photos" desc="Dez 12, 2017"/>
        </h-list-item>
        <h-list-item>
          <h-list-item-left img="/static/avatar/folder_open.jpeg" text="Images" desc="Events"/>
        </h-list-item>
      </h-list>
  
      <h-list class="col-6">
        <h-list-header text="4 items in your cart" />
        <h-list-item separator>
          <h-list-item-left img="/static/img/pencil.png" text="Pencil" desc="in stock" />
          <h-list-item-right text="2.00"/>
        </h-list-item>
        <h-list-item separator>
          <h-list-item-left img="/static/img/rubberbands.png" text="Hubberbands" desc="in stock" />
          <h-list-item-right text="4.00"/>
        </h-list-item>
        <h-list-item separator>
          <h-list-item-left img="/static/img/rulers.png" text="Rulers" desc="only 1 left in stock. Next month we have to sell." />
          <h-list-item-right text="6.00"/>
        </h-list-item>
        <h-list-item separator>
          <h-list-item-left img="/static/img/clock.png" text="Clock" desc="in stock" />
          <h-list-item-right text="8.00"/>
        </h-list-item>
      </h-list>
  
  </div>
</template>

<script>
import HList from '../components/list/HList.vue'
import HListItem from '../components/list/HListItem.vue'
import HListHeader from '../components/list/HListHeader.vue'
import HListBody from '../components/list/HListBody.vue'
import HListItemLeft from '../components/list/HListItemLeft.vue'
import HListItemRight from '../components/list/HListItemRight.vue'
import HAppToolbar from '../components/toolbar/HAppToolbar.vue'
import HAppToolbarContainer from '../components/toolbar/HAppToolbarContainer.vue'
import HAppToolbarNavigation from '../components/toolbar/HAppToolbarNavigation.vue'
import HAppToolbarTitle from '../components/toolbar/HAppToolbarTitle.vue'
import HAppToolbarAction from '../components/toolbar/HAppToolbarAction.vue'
import HAppToolbarMenu from '../components/toolbar/HAppToolbarMenu.vue'

export default {
  components: {
    HList,
    HListItem,
    HListHeader,
    HListItemLeft,
    HListItemRight,
    HListBody,
    HAppToolbar,
    HAppToolbarNavigation,
    HAppToolbarContainer,
    HAppToolbarTitle,
    HAppToolbarAction,
    HAppToolbarMenu
  },
  data () {
    return {
      topicItem: ''
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
