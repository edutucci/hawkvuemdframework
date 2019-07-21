<template>
  <h-page-content padding>

    <h1>Button Dropdown</h1>

    <comp-code class="h-mt-lg" title="Options" :code="containedButtons">
      <div class="flex">
        <h-btn-dropdown text="Options" bgcolor="bg-primary" textcolor="text-white">
          <div class="flex">
            <div class="flex flex-column h-pa-sm">
              <div class="text-body1">MyProfile</div>
              <div class="text-body1">MyProfile</div>
              <div class="text-body1">MyProfile</div>
            </div>
          </div>
        </h-btn-dropdown>
      </div>
    </comp-code>

    <comp-code class="h-mt-lg" title="Profile" :code="outlinedButtons">
      <div class="flex flex-justify-center">
        <h-btn-dropdown text="Profile" bgcolor="bg-primary" textcolor="text-white">
          <div class="flex h-pa-sm">
            <div class="flex flex-items-center"><h-avatar src="avatar/Eduard.jpg" size="72px"/></div>
            <div class="flex flex-column h-ml-sm">
              <div class="text-body1">My Profile</div>
              <h-btn contained bgcolor="bg-primary" textcolor="text-white" text="Logout"/>
            </div>
          </div>
        </h-btn-dropdown>
      </div>
    </comp-code>

    <!-- col-x -->
    <div class="row">
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <!-- <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div>
      <div class="flex-1" style="background-color: gray;">col</div> -->
    </div>

    <!-- col-auto -->
    <div class="h-mt-md flex scroll">
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
    </div>

    <!-- column -->

    <div class="h-mt-md row">
      <div class="col2" style="background-color: gray;">col-4</div>
      <div class="col2" style="background-color: gray;">col-4</div>
      <div class="col2" style="background-color: gray;">col-4</div>
      <div class="co2" style="background-color: gray;">col-4</div>
    </div>

    <!-- col-space -->
    <div class="h-mt-md flex scroll">
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
      <div class="col-space" style="background-color: gray; text-align: center">col-space</div>
      <div class="col-auto" style="width: 350px;background-color: gray; text-align: center">col-auto</div>
    </div>

    <!-- <h2 class="text-primary">Button Group</h2>
    <h2 class="text-primary">Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>contained</div>
        <div>outlined</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets to buttongroup to contained mode</div>
        <div>Sets to buttongroup to outlined mode</div>
      </div>
    </div>

    <h2 class="text-primary">Button Group Item</h2>
    <h2 class="text-primary">Vue Properties</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>name</div>
        <div>bgcolor</div>
        <div>textcolor</div>
        <div>text</div>
        <div>left-icon</div>
        <div>right-icon</div>
        <div>disabled</div>
        <div>transparent</div>
      </div>
      <div class="h-pl-md">
        <h3>Type</h3>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>String</div>
        <div>Boolean</div>
        <div>Boolean</div>
      </div>
      <div class="h-pl-md">
        <h3 >Description</h3>
        <div>Sets the name for the current button and used to set current button</div>
        <div>Background color of the button</div>
        <div>Text color of the button</div>
        <div>Text of the button</div>
        <div>Sets the icon to left of the button</div>
        <div>Sets the icon to right of the button</div>
        <div>Button is disabled</div>
        <div>Useful for toolbar icons. Removes background and shadow</div>
      </div>
    </div>

    <h2 class="text-primary"> Vue Events</h2>
    <hr>

    <div class="flex">
      <div>
        <h3>Name</h3>
        <div>@click</div>
      </div>
      <div class="h-pl-md">
        <h3>Description</h3>
        <div>Triggered on button click</div>
      </div>
    </div> -->

  </h-page-content>
</template>

<script>

import mxButtonGroup from './mxButtonGroup'

export default {
  mixins: [mxButtonGroup],
  components: {
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
