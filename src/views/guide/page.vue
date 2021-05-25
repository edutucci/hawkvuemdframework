<template>
  <page-layout ref="pl" title="Page">
    <template v-slot:components>
      <div ref="usage"/>
      <comp-code title="Usage" class="h-mt-md" :code="layout1" page="template">
      </comp-code>

      <div ref="basicPage"/>
      <comp-code title="Basic Page" class="h-mt-md" :code="layout2">
        <div class="row justify-center">
          <div class="col-auto h-pa-sm">
            <h-image src="imgsamples/basicPage.png" style="width:600px; height: 400px;"/>
          </div>
        </div>
      </comp-code>

      <div ref="pageSlots"/>
      <comp-code title="Page Slots" class="h-mt-md" :code="layout3">
        <div class="row justify-center">
          <div class="col-auto h-pa-sm">
            <h-image src="imgsamples/pageSlots.png" style="width:600px; height: 400px;"/>
          </div>
        </div>
      </comp-code>
    </template>

    <template v-slot:help>
      <list-help>
        <h-list>
          <h-list-header text="Layout"/>
          <h-list-item @click="goToElement('usage')">
            <h-list-item-content>
              <h-list-item-text title="Usage"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('basicLayout')">
            <h-list-item-content>
              <h-list-item-text title="Basic Layout"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
          <h-list-item @click="goToElement('layoutDrawerLeft')">
            <h-list-item-content>
              <h-list-item-text title="Drawer Left"></h-list-item-text>
            </h-list-item-content>
          </h-list-item>
        </h-list>
      </list-help>
    </template>
  </page-layout>

</template>

<script>

import PageLayout from '../pages/pageLayout.vue';

export default {
  name: 'Layout',
  components: {
    PageLayout,
  },
  data() {
    return {
      layout1: `
<h-page-content padding>
  <template v-slot:left>
  </template>

  <div class="row full-height scroll bg-white ">
    <div class="col">
      <p>Page Body</p>
    </div>
  </div>

  <template v-slot:right>
  </template>
</h-page-content>
`,
      layout2: `
<h-page-content>
  <div class="row full-height justify-center align-items-center">
    <div class="col-auto text-center h-pa-md">
      <div class="column align-items-center">
        <h-image avatar src="img/hawk.jpg" size="256px"/>
        <div class="text-h3">HawkVueMD </div>
        <div class="text-h3"> Framework</div>
      </div>
    </div>
  </div>
</h-page-content>
`,
      layout3: `
  <h-page-content padding class="bg-gray300">
    <template v-slot:left>
      <div style="min-width: 150px">
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
        <p>page left</p>
      </div>
    </template>

    <div class="column full-height scroll bg-white ">
      <div class="col-auto text-center h-pa-md">
        <div class="column align-items-center">
          <h-image avatar src="img/hawk.jpg" size="256px"/>
          <div class="text-h3">HawkVueMD </div>
          <div class="text-h3"> Framework</div>
        </div>
      </div>
      <div class="col scroll h-pa-sm text-justify">
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
          Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. 
          Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. 
          Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. 
        </p>

      </div>
    </div>

    <template v-slot:right>
      <div style="min-width: 150px">
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
        <p>page right</p>
      </div>
    </template>
  </h-page-content>   
`,
    };
  },
  mounted() {
  },
  methods: {
    goToElement(refName) {
      this.$refs.pl.goToElement(this.$refs[refName]);
    },
  },
};
</script>
