<template>
  <h-page-content padding>
    <div  class="text-h4">Avatar </div>

    <h3>Styles</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="avatar_row flex align-items-center">
        <h-avatar src="avatar/Konsta.jpg"/>
        <h-avatar src="avatar/Eduard.jpg" square/>
        <h-avatar src="avatar/AnaArmas.jpg" border-radius/>
      </div>
      <div class="avatar_row flex align-items-center">
        <h-avatar bg-color="bg-red400">1</h-avatar>
        <h-avatar square bg-color="bg-yellow400">A</h-avatar>
        <h-avatar border-radius bg-color="bg-green400">F</h-avatar>
      </div>
    </div>

    <h3>Custom sizes</h3>
    <div class="h-pa-sm border border-gray border-radius">
      <div class="avatar_row flex align-items-center">
        <h-avatar src="avatar/Konsta.jpg" size="48px"/>
        <h-avatar src="avatar/Eduard.jpg" square size="64px"/>
        <h-avatar src="avatar/AnaArmas.jpg" border-radius size="82px"/>
      </div>
      <div class="avatar_row flex align-items-center">
        <h-avatar bg-color="bg-red400" size="48px">1</h-avatar>
        <h-avatar square bg-color="bg-yellow400" size="64px">A</h-avatar>
        <h-avatar border-radius bg-color="bg-green400" size="82px">F</h-avatar>
      </div>
    </div>

  </h-page-content>
</template>

<style scoped>
.avatar_row > .h-avatar-container:not(:first-child) {
  margin-left: 5px;
}

.avatar_row:not(:first-child) {
  margin-top: 5px;
}

</style>
