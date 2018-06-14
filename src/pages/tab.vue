<template>
	<div>
        <h1>Tabs</h1>
        
        <h1>Horizontal Tab</h1>
        <h-tabs v-model="tabModel" @tabChange="tabChange" bgcolor="bg-secondary" textcolor="text-white" class="h-mt-md">
        <h-tab name="First tab">
            This is the content of the first tab
        </h-tab>
        <h-tab name="Second tab">
            This is the content of the second tab
        </h-tab>
        <h-tab name="Disabled tab" :is-disabled="true">
            This content will be unavailable while :is-disabled prop set to true
        </h-tab>
        <h-tab name="Custom fragment">
            The fragment that is appended to the url can be customized
        </h-tab>
        <h-tab prefix="<span class='glyphicon glyphicon-star'></span> " 
                name="Prefix and suffix" 
                suffix=" <span class='badge'>4</span>">
            A prefix and a suffix can be added
        </h-tab>
        <h-tab name="Gift">
            Anyone is waiting a gift from you
        </h-tab>      
        </h-tabs>

        <h3>TabModel: {{tabModel}}</h3>

      <pre v-highlightjs="tabhor">
        <code class="html">
        </code>
      </pre>         
        
        <h1>Vertical Tab</h1>

        <h-tabs bgcolor="bg-primary" textcolor="text-white"  vertical class="h-mt-md">
        <h-tab name="First tab">
            This is the content of the first tab
        </h-tab>
        <h-tab name="Second tab">
            This is the content of the second tab
        </h-tab>
        <h-tab name="Disabled tab" :is-disabled="true">
            This content will be unavailable while :is-disabled prop set to true
        </h-tab>
        <h-tab name="Custom fragment">
            The fragment that is appended to the url can be customized
        </h-tab>
        <h-tab prefix="<span class='glyphicon glyphicon-star'></span> " 
                name="Prefix and suffix" 
                suffix=" <span class='badge'>4</span>">
            A prefix and a suffix can be added
        </h-tab>
        <h-tab name="Gift">
            Anyone is waiting a gift from you
        </h-tab>      
        </h-tabs>

      <pre v-highlightjs="tabver">
        <code class="html">
        </code>
      </pre>         

      <!-- Vue Events
      @tabChange(name) 	Triggered when the tab changes. -->

	</div>
</template>

<script>
import HTab from '../components/tab/HTab.vue'
import HTabs from '../components/tab/HTabs.vue'

export default {
  components: {
    HTab,
    HTabs
  },
  data () {
    return {
      tabModel: '',
      tabhor: `
<h-tabs v-model="tabModel" @tabChange="tabChange" bgcolor="bg-secondary" textcolor="text-white" class="h-mt-md">
    <h-tab name="First tab">
        This is the content of the first tab
    </h-tab>
    <h-tab name="Second tab">
        This is the content of the second tab
    </h-tab>
    <h-tab name="Disabled tab" :is-disabled="true">
        This content will be unavailable while :is-disabled prop set to true
    </h-tab>
    <h-tab name="Custom fragment">
        The fragment that is appended to the url can be customized
    </h-tab>
    <h-tab prefix="<span class='glyphicon glyphicon-star'></span> " 
            name="Prefix and suffix" 
            suffix=" <span class='badge'>4</span>">
        A prefix and a suffix can be added
    </h-tab>
    <h-tab name="Gift">
        Anyone is waiting a gift from you
    </h-tab>      
</h-tabs>

<h3>TabModel: {{tabModel}}</h3>      
      `,
      tabver: `
<h-tabs bgcolor="bg-primary" textcolor="text-white"  vertical class="h-mt-md">
    <h-tab name="First tab">
        This is the content of the first tab
    </h-tab>
    <h-tab name="Second tab">
        This is the content of the second tab
    </h-tab>
    <h-tab name="Disabled tab" :is-disabled="true">
        This content will be unavailable while :is-disabled prop set to true
    </h-tab>
    <h-tab name="Custom fragment">
        The fragment that is appended to the url can be customized
    </h-tab>
    <h-tab prefix="<span class='glyphicon glyphicon-star'></span> " 
            name="Prefix and suffix" 
            suffix=" <span class='badge'>4</span>">
        A prefix and a suffix can be added
    </h-tab>
    <h-tab name="Gift">
        Anyone is waiting a gift from you
    </h-tab>      
</h-tabs>      
      `
    }
  },
  methods: {
    tabChange (value) {
      console.log('tab change name: ' + value)
    }
  }
}
</script>
