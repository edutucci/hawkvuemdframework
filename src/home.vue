<template>

  <div class="flex flex-column page-container">
    <div>
       <strong>toolbar</strong>
    </div>
    <div class="flex-1 ">
      <div class="flex flex-row full-height full-width">
        <div>
          <h-collapsible>
          
            <!-- <h-collapsible-menu :icon="['fas', 'check-circle']" text="Guide">
              <h-collapsible-item text="Introduction"/>
              <h-collapsible-item text="Installation"/>
            </h-collapsible-menu> -->

            <h-collapsible-menu :icon="['fab', 'css3']" text="CSS">
              <h-collapsible-item text="Spacing" @click="$router.push('/spacing')"/>
              <h-collapsible-item text="Flexbox" @click="$router.push('/flexbox')"/>
              <h-collapsible-item text="Others" @click="$router.push('/cssothers')"/>
            </h-collapsible-menu>
            
            <h-collapsible-menu :icon="['fas', 'hdd']" text="Components">
              <h-collapsible-item text="Buttons" @click="$router.push('/buttons')"/>
              <h-collapsible-item text="Icons" @click="$router.push('/icon')"/>
              <h-collapsible-item text="Textfield" @click="$router.push('/textfield')"/>
              <h-collapsible-item text="Cards" @click="$router.push('/card')"/>
              <h-collapsible-item text="Menu" @click="$router.push('/menu')"/>
              <h-collapsible-item text="List" @click="$router.push('/list')"/>
              <h-collapsible-item text="Checkbox" @click="$router.push('/checkbox')"/>
              <h-collapsible-item text="Radio" @click="$router.push('/radio')"/>
              <h-collapsible-item text="Select" @click="$router.push('/select')"/>
              <h-collapsible-item text="Tab" @click="$router.push('/tab')"/>
              <h-collapsible-item text="Table" @click="$router.push('/table')"/>
              <h-collapsible-item text="Toolbar" @click="$router.push('/toolbar')"/>
            </h-collapsible-menu>

          </h-collapsible>      
        </div>
        <div class="flex-1">
          <router-view/>
        </div>  
      </div>

    </div>
  </div>
</template>

<script>

import HCollapsible from './components/collapsible/HCollapsible.vue'
import HCollapsibleMenu from './components/collapsible/HCollapsibleMenu.vue'
import HCollapsibleItem from './components/collapsible/HCollapsibleItem.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    HCollapsible,
    HCollapsibleMenu,
    HCollapsibleItem
  },
  created () {
  }
}
</script>

<style scoped>
/* .page-container {
  width: calc(100vw - 270px);
  height: calc(100vh - 80px);
} */
</style>
